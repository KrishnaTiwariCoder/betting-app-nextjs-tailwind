import express from "express";
import { Request, Response } from "express";

const router = express.Router();

router.get("/api/events", (req: Request, res: Response) => {
  // Endpoint to retrieve all events
  res.send("Get all events");
});

router.get("/api/events/:id", (req: Request, res: Response) => {
  // Endpoint to retrieve a specific event by id
  const eventId = req.params.id;
  res.send(`Get event with id ${eventId}`);
});

export default router;
