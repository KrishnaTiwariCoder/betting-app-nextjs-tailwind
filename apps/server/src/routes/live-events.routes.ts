import express from "express";
import { Request, Response } from "express";

const router = express.Router();

router.post("/api/events", (req: Request, res: Response) => {
  // Endpoint to create a new live event (sports betting event, etc.)
  res.send("Create event");
});

router.get("/api/events", (req: Request, res: Response) => {
  // Endpoint to retrieve all events
  res.send("Get all events");
});

router.get("/api/events/:id", (req: Request, res: Response) => {
  // Endpoint to retrieve a specific event by id
  const eventId = req.params.id;
  res.send(`Get event with id ${eventId}`);
});

router.put("/api/events/:id", (req: Request, res: Response) => {
  // Endpoint to update an event by id
  const eventId = req.params.id;
  res.send(`Update event with id ${eventId}`);
});

router.delete("/api/events/:id", (req: Request, res: Response) => {
  // Endpoint to delete an event by id
  const eventId = req.params.id;
  res.send(`Delete event with id ${eventId}`);
});

export default router;
