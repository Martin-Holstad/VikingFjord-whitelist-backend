import rcon from "rcon-client";

export default async function onlineUsersController() {
  const client = new rcon.Rcon({
    host: process.env.RCON_IP,
    port: process.env.RCON_PORT,
    password: process.env.RCON_PASSWORD,
  });

  try {
    await client.connect();
    const response = await client.send("list");

    const playersString = response
      .replace(/The time is \d+/, "")
      .trim()
      .split(": ")[1];

    let playerList = null;
    if (playersString) playerList = playersString.split(", ");

    const onlinePlayersAmount = response
      .replace(/The time is \d+/, "")
      .trim()
      .match(/\d+/g);
    const currentOnline = onlinePlayersAmount[0];
    const maxPlayers = 20;

    await client.end();
    return { status: 200, success: true, onlinePlayers: { currentOnline: currentOnline, maxPlayers: maxPlayers, playerList: playerList } };
  } catch (error) {
    console.log("Online Users Controller", error);
    return { status: 500, success: false, message: "Internal server error" };
  }
}
