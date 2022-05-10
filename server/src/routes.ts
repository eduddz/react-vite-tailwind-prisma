import express, { Request, Response } from "express";
import { SubmitFeedbackUseCase } from "./use-cases/submit-feedback-use-case";
import { PrismaFeedbackRepository } from "./repositories/prisma-feedbacks-repositories";
import { NodemailerMailAdapter } from "./adaptors/nodemailer/nodemailer-mail-adapter";

export const routes = express();

// methods http
routes.post("/feedbacks", async (req: Request, res: Response) => {
    const { type, comment, screenshot } = req.body;

    const prismaFeedbackRepository = new PrismaFeedbackRepository();
    const nodemailerMailAdapter = new NodemailerMailAdapter();

    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
        prismaFeedbackRepository, 
        nodemailerMailAdapter
    );

    await submitFeedbackUseCase.execute({
        type,
        comment,
        screenshot
    })

    
    return res.status(201).send();
});