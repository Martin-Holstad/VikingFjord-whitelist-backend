import onlineUsersController from "../controllers/onlineUsersController.js";

export default async function onlineUsersRoute(req, res) {
  const response = await onlineUsersController();

  res.status(response.status).json(response);
}
