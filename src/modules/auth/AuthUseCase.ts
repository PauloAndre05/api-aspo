import { UserState, Users } from "@prisma/client";
import { prisma } from "../../prisma/client";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { IAuthDTO } from "./dtos";
import { RequestError } from "../../appErrors/ErrorApi";


export class AuthUseCase {
    async execute({email, senha}: IAuthDTO){
        const user = await prisma.users.findUnique({where: {email}})
        if(!user) throw new RequestError("Email ou senha incorrecto!")
        
        const passwordMatch = await compare(senha, user.senha);

        if(!passwordMatch) throw new RequestError("Email ou senha incorrecto!")

        if (user.estado === UserState.DESATIVADO) {
            throw new RequestError("Sua conta está desativada. Entre em contato com o suporte.");
        }
        const token = sign({}, "251369ce3989d217042f2cf8dd8cad50", {
            expiresIn: "1d",
            subject: user.id
        })

        return {
            user,
            token
        }
    }
}