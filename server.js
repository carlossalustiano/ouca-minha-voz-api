import express from "express"; // Importando Express.
import cors from "cors"; // Importando Cors.
import publicRoutes from "./routes/public.js";
import privateRoutes from "./routes/private.js"
import auth from './middlewares/auth.js'

const app = express(); // Inicializando servidor em 'app'.

app.use(express.json()); // Convertendo o body para json.

// Liberado para qualquer página acessar.
app.use(cors({ origin: "*", methods: "GET,HEAD,PUT,PATCH,POST,DELETE", allowedHeaders: "Content-Type,Authorization" }));

app.use("/", publicRoutes);
app.use("/", auth, privateRoutes);

// Servidor vai rodar na porta: 8000.
app.listen(8000, () => console.warn("Server is running  in http://localhost:8000"));