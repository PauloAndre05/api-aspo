import { Agendamento } from "@prisma/client";
import { IAgendamentoRepository } from "../../repositories/IAgendamentoRepository";
import { RequestError } from "../../../../appErrors/ErrorApi";
import crypto from "crypto";

interface IRequest {
    dataAgenda: string;
    servicoId: string;
    postoId: string;
    telefone: string;
    email: string;
    bi: string;
    cedula: string;
    horaId: string;
    nome: string;
}

export class CriarAgendamentoUseCase {
    constructor(private agendamentoRepository: IAgendamentoRepository) {}

    async execute({ dataAgenda, servicoId, postoId, horaId, telefone, email, bi, cedula, nome }: IRequest): Promise<Agendamento> {
        const station = await this.agendamentoRepository.findStationById(postoId);

        if(!station) {
            throw new RequestError("Posto não encontrado", 404)
        }

        const service = await this.agendamentoRepository.findServiceById(servicoId)

        if(!service) {
            throw new RequestError("Serviço não encontrado", 404)
        }

        const time = await this.agendamentoRepository.findTimeById(horaId)

        if(!time) {
            throw new RequestError("Horário não encontrado", 404)
        }

        const totalBookingsForTheDate = await this.agendamentoRepository.getTotalBookingsForTheDate(dataAgenda, postoId)

        if(totalBookingsForTheDate === station.limiteDiario) {
            throw new RequestError("Limite de agendamentos atingido nesta data", 400)
        }

        const totalBookingsForTheTime = await this.agendamentoRepository.getTotalBookingsForTheTime(dataAgenda, horaId, postoId);

        if(totalBookingsForTheTime === 10) {
            throw new RequestError("Limite de agendamentos atingido neste horário", 400)
        }

        const comprovativo = await this.generateEvidenceCode(dataAgenda, servicoId, totalBookingsForTheDate);

        return await this.agendamentoRepository.create({ dataAgenda, servicoId, postoId, telefone, email, bi, cedula, horaId, nome, comprovativo })        
    }

    async generateEvidenceCode(date: string, serviceId: string, counter: number): Promise<string> {
        const dataToHash = `${date}${serviceId}${counter}`;

        const hash = crypto.createHash('md5').update(dataToHash).digest('hex');
        return hash.substring(0, 6).toUpperCase();
    }
}