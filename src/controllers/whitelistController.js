import rcon from "rcon-client";

export default async function whitelistController(body) {
  const { playerName, password } = body;

  if (password !== process.env.MINECRAFT_PASSWORD) return { status: 401, success: false, message: "Incorrect password" };

  const client = new rcon.Rcon({
    host: process.env.RCON_IP,
    port: process.env.RCON_PORT,
    password: process.env.RCON_PASSWORD,
  });

  try {
    await client.connect();

    const response = await client.send(`whitelist add ${playerName}`);

    let res;

    switch (response) {
      case `Added ${playerName} to the whitelist`:
        res = { status: 200, success: true, message: `Whitelist success` };
        break;
      case "Player is already whitelisted":
        res = { status: 200, success: true, message: `Player is already Whitelisted` };
        break;
      default:
        res = { status: 404, success: false, message: `${playerName} does not exist` };
        break;
    }
    await client.end();
    return res;
  } catch (error) {
    console.log("Whitelist Controller", error);
    return { status: 500, success: false, message: "Server Offline" };
  }
}
