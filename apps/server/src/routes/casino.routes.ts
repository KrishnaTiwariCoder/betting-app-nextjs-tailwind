import express from "express";
import { Request, Response } from "express";

const router = express.Router();

router.post("/api/casino", (req: Request, res: Response) => {
  // Endpoint to create a new casino game/table entry
  res.send("Create casino entry");
});

router.get("/api/casino", (req: Request, res: Response) => {
  // Endpoint to get all casino entries (e.g. tables, live dealer games)
  res.send("Get all casino entries");
});

router.get("/api/casino/:id", (req: Request, res: Response) => {
  // Endpoint to get a specific casino entry by id
  const casinoId = req.params.id;
  res.send(`Get casino entry with id ${casinoId}`);
});

router.put("/api/casino/:id", (req: Request, res: Response) => {
  // Endpoint to update a casino entry by id
  const casinoId = req.params.id;
  res.send(`Update casino entry with id ${casinoId}`);
});

router.delete("/api/casino/:id", (req: Request, res: Response) => {
  // Endpoint to delete a casino entry by id
  const casinoId = req.params.id;
  res.send(`Delete casino entry with id ${casinoId}`);
});

export default router;
