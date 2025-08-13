import * as http from "http";
import { app } from "./app";
import 'dotenv/config';



const server = http.createServer(app);

const port = Number(process.env.PORT) || 3636;
console.log("PORT do .env:", process.env.PORT);

server.listen(port, () => {
  console.log(`servidor iniciado na porta ${port}`);
});
  

