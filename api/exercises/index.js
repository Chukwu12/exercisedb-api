import data from '../../src/data/exercises.json';

export default function handler(req, res) {
  try {
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch exercises" });
  }
}
