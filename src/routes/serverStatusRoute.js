import serverStatusController from "../controllers/serverStatusController.js";

export default async function serverStatusRouter(req, res) {
  const response = await serverStatusController();

  res.status(response.status).json(response);
}
