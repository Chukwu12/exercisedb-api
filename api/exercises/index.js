import exercises from "../../assets/exercises.json";

export default function handler(req, res) {
  try {
    res.status(200).json(exercises);
  } catch (error) {
    res.status(500).json({ error: "Failed to load exercises" });
  }
}
