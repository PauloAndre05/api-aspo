import { Users } from "@prisma/client";
import { prisma } from "../../prisma/client";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { IAuthDTO } from "./dtos";


export class AuthUseCase {
    async execute({email, senha}: IAuthDTO){
        const user = await prisma.users.findUnique({where: {email}})
        if(!user) throw new Error("Email ou senha incorrecto!")
        
        const passwordMatch = await compare(senha, user.senha);

        if(!passwordMatch) throw new Error("Email ou senha incorrecto!")

        const token = sign({}, "e9107550cf94ae3e524df747c4f0a5f5", {
            expiresIn: "1d",
            subject: user.id
        })

        return {
            user,
            token
        }
    }
}