import path from "path";
import fs from "fs";

export default function handler(req, res) {
  try {
    const { part } = req.query;

    const filePath = path.join(process.cwd(), "src", "data", "exercises.json");
    const jsonData = fs.readFileSync(filePath, "utf-8");
    const exercises = JSON.parse(jsonData);

    const filtered = exercises.filter(
      (ex) => ex.bodyPart.toLowerCase() === part.toLowerCase()
    );

    res.status(200).json(filtered);
  } catch (error) {
    console.error("Error filtering by body part:", error);
    res.status(500).json({ error: "Failed to filter exercises" });
  }
}
