import path from "path";
import fs from "fs";

export default function handler(req, res) {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "exercises.json");
    const jsonData = fs.readFileSync(filePath, "utf-8");
    const exercises = JSON.parse(jsonData);

    res.status(200).json(exercises);
  } catch (error) {
    console.error("Error loading exercises:", error);
    res.status(500).json({ error: "Failed to load exercises" });
  }
}
