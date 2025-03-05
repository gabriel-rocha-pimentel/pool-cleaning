import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Rota para criar um usuário administrador
const createAdmin = Router();

createAdmin.post("/create-admin", async (req, res) => {
  const { email, name, password } = req.body;

  const userAdmin = await prisma.userAdmin.create({
    data: {
      email,
      name,
      password,
    },
  });

  res.json(userAdmin);
});

// Rota para buscar um usuário administrador
// Rota para atualizar um usuário administrador
// Rota para deletar um usuário administrador

export default createAdmin;