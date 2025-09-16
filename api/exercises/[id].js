import data from '../../src/data/exercises.json';

export default function handler(req, res) {
  const { id } = req.query;

  const exercise = data.find((ex) => ex.exerciseId === id);

  if (exercise) {
    res.status(200).json(exercise);
  } else {
    res.status(404).json({ error: "Exercise not found" });
  }
}
