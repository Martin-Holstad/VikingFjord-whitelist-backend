import rcon from "rcon-client";
import convertMinecraftTime from "../helpers/convertMinecraftTime.js";
export default async function serverStatusController() {
  const client = new rcon.Rcon({
    host: process.env.RCON_IP,
    port: process.env.RCON_PORT,
    password: process.env.RCON_PASSWORD,
  });

  try {
    await client.connect();
    const minecraftTimeString = await client.send("time query daytime");

    if (!minecraftTimeString) return { status: 200, success: true, message: "Server is online", time: "00:00" };
    const minecraftTime = minecraftTimeString.replace("There are 0 of a max of 20 players online:").match(/\d+/)[0];

    const formattedTime = convertMinecraftTime(minecraftTime);

    await client.end();
    return { status: 200, success: true, message: "Server is online", time: formattedTime };
  } catch (error) {
    console.log("Server Status Controller", error);
    return { status: 500, success: false, message: "Server offline", time: "00:00" };
  }
}
