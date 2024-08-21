import whitelistController from "../controllers/whitelistController.js";
export default async function whitelistRoute(req, res) {
  const response = await whitelistController(req.body);

  res.status(response.status).json(response);
}
