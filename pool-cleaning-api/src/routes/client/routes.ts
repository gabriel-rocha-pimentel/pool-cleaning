import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Rota para criar um usuário administrador
const createClient = Router();

createClient.post("/create-client", async (req, res) => {
  const { email, name, password } = req.body;

  const userClient = await prisma.userClient.create({
    data: {
      email,
      name,
      password,
    },
  });

  res.json(userClient);
});

// Rota para buscar um usuário administrador
// Rota para atualizar um usuário administrador
// Rota para deletar um usuário administrador

export default createClient;