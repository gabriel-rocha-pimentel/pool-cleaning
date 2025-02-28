import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";

dotenv.config(); 

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// Rota de teste
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Rota para criar um usuário administrador
app.post("/create-admin", async (req, res) => {
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

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
