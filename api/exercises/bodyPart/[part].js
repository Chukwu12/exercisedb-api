import data from '../../../src/data/exercises.json';

export default function handler(req, res) {
  const { part } = req.query;

  const exercises = data.filter((ex) =>
    ex.bodyParts.some((bp) => bp.toLowerCase() === part.toLowerCase())
  );

  if (exercises.length > 0) {
    res.status(200).json(exercises);
  } else {
    res.status(404).json({ error: "No exercises found for this body part" });
  }
}
