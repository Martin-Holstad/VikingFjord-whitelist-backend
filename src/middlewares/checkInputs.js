import { check, validationResult } from "express-validator";

export default async function checkInputs(req, res, next) {
  check("playerName").isString(), check("password").isLength({ min: 1 }).isString();

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ status: 422, success: false, message: "Invalid credentials" });
  }
  next();
}
