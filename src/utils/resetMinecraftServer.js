import rcon from "rcon-client";
import fs from "fs";

export default async function resetMinecraftServer() {
  const client = new rcon.Rcon({
    host: process.env.RCON_IP,
    port: process.env.RCON_PORT,
    password: process.env.RCON_PASSWORD,
  });

  const whitelistPath = "../Minecraft Server/whitelist.json";
  try {
    const whitelistData = fs.readFileSync(whitelistPath, "utf8");
    const whitelist = JSON.parse(whitelistData);

    await client.connect();

    whitelist.length = 0;
    fs.writeFileSync(whitelistPath, JSON.stringify(whitelist));
    await client.send("whitelist reload");
    await client.end();
  } catch (error) {
    console.error("Minecraft server reset", error);
  }
}
