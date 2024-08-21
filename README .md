# VikingFjord whitelist backend

![image](https://github.com/user-attachments/assets/08b172b8-029a-4273-ad58-88a738bdb92a)

## Description

Welcome to VikingFjord whitelist backend! This is a simple Express application that leverages the Minecraft server RCON system to whitelist players who provide correct credentials. Additionally, it serves an API to the frontend, providing server status, an in-game clock and the Minecraft version.

[Link to VikingFjord website](https://vikingfjord.netlify.app/)

## Endpoints

- `POST /whitelist`: Handles whitelisting players using the Minecraft server RCON system. It requires valid credentials.
- `GET /online-users`: Retrieves currently online users.
- `GET /server-status`: Provides details about the server's status, including in-game clock and Minecraft version.

## Dependencies

- [Express.js](https://expressjs.com/)
- [Express rate limit](https://www.npmjs.com/package/express-rate-limit)
- [Express validator](https://express-validator.github.io/docs/guides/getting-started)
- [Helmet](https://blog.logrocket.com/using-helmet-node-js-secure-application/)
- [Cors](https://expressjs.com/en/resources/middleware/cors.html)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Rcon client](https://www.npmjs.com/package/rcon-client)
- [Node cron](https://www.npmjs.com/package/node-cron)

## Getting Started

### Installing

1. Clone the repo:

```bash
git clone https://github.com/Martin-Holstad/VikingFjord-whitelist-backend.git
```

2. Install the dependencies:

```
npm install
```

### Running

To run the app, run the following commands:

```bash
npm run start
```

## Contact

Email: Martinholstad3@hotmail.com

Phone: 45436203
