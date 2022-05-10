import express from "express";
import cors from "cors";
import { routes } from "./routes";

const app = express();
const port = 5000 | 5001;

app.use(cors());

app.use(express.json());

app.use(routes);

app.listen(process.env.PORT || port, () => {
    console.log("Server running at port " + port + " 🔥🔥🔥")
})