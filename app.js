import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import cron from "node-cron";
import rateLimit from "express-rate-limit";
import router from "./src/routes/index.js";
import resetMinecraftServer from "./src/utils/resetMinecraftServer.js";
dotenv.config();

const port = process.env.PORT || 3000;

const app = express();

cron.schedule("59 23 * * 0", resetMinecraftServer);

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 500,
  message: "Too many requests from this IP, please try again after 15 minutes",
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(helmet());
app.use(limiter);
app.use(cors());
app.use(express.json());
app.set("trust proxy", 1);
app.use(router);

app.listen(port, () => {
  console.log(`Minecraft login listening on port ${port}`);
});
