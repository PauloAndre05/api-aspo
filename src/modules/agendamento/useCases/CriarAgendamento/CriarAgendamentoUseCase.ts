import { Agendamento } from "@prisma/client";
import { IAgendamentoRepository } from "../../repositories/IAgendamentoRepository";
import { RequestError } from "../../../../appErrors/ErrorApi";
import crypto from "crypto";
import { MailService } from "../../../../config/Mail/MailService";

interface IRequest {
    dataAgenda: string;
    servicoId: string;
    postoId: string;
    telefone: string;
    email: string;
    bi: string;
    horaId: string;
    nome: string;
}

export class CriarAgendamentoUseCase {
    constructor(private agendamentoRepository: IAgendamentoRepository) {}

    async execute({ dataAgenda, servicoId, postoId, horaId, telefone, email, bi, nome }: IRequest): Promise<Agendamento> {
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

        const agendamento = await this.agendamentoRepository.create({ dataAgenda, servicoId, postoId, telefone, email, bi, horaId, nome, comprovativo })   
        
        const subject = 'Confirmação de Agendamento';
        const body = `Olá ${nome}, o seu agendamento foi realizado com sucesso!\n
        Este é o código do seu agendamento ${comprovativo}\n
        Faça uma consulta no aspo.netlify.app para baixar o seu comprovativo de agendamento`;

        const message = {
          to: email,
          from: 'onlineaspo@gmail.com',
          subject: subject,
          body: body,
        };

        await MailService.send(message);

        return agendamento;
    }

    async generateEvidenceCode(date: string, serviceId: string, counter: number): Promise<string> {
        const dataToHash = `${date}${serviceId}${counter}`;

        const hash = crypto.createHash('md5').update(dataToHash).digest('hex');
        const uniqueSuffix = crypto.randomBytes(2).toString('hex');
    
        return `${hash.substring(0, 2).toUpperCase()}${uniqueSuffix.toUpperCase()}`;
    }
}