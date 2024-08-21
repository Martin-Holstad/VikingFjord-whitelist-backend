import express from "express";
import whitelistRoute from "./whitelistRoute.js";
import onlineUsersRoute from "./onlineUsersRoute.js";
import serverStatusRouter from "./serverStatusRoute.js";
import checkInputs from "../middlewares/checkInputs.js";

const router = express.Router();

router.post("/whitelist", checkInputs, whitelistRoute);
router.get("/online-users", onlineUsersRoute);
router.get("/server-status", serverStatusRouter);

export default router;
