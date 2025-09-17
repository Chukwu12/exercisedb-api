import path from "path";
import fs from "fs";

export default function handler(req, res) {
  try {
    const { id } = req.query;

    const filePath = path.join(process.cwd(), "src", "data", "exercises.json");
    const jsonData = fs.readFileSync(filePath, "utf-8");
    const exercises = JSON.parse(jsonData);

    const exercise = exercises.find((ex) => ex.id.toString() === id);

    if (!exercise) {
      return res.status(404).json({ error: "Exercise not found" });
    }

    res.status(200).json(exercise);
  } catch (error) {
    console.error("Error loading exercise by id:", error);
    res.status(500).json({ error: "Failed to load exercise" });
  }
}
