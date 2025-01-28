import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import http from "http";
import router from "./routes";
const app = express();

const server = http.createServer(app);

app.use(cors());
app.use(express.json());

app.use("/api/v1/", router);

server.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
