import { Router } from "express";

const router = Router();

router.get("", (req, res) => {
  res.render("login", {
    title: "Inicia sesion",
  });
});

export default router;