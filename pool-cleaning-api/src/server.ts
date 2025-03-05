// Initial Date: 10/10/21
// Router config 
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// Routes admin 
import createAdmin from "./routes/admin/routes";

// Routes client
import createClient from "./routes/client/routes";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Routes Admin
app.use(createAdmin);

// Routes Client
app.use(createClient);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
