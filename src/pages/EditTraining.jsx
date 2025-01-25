import { useState } from 'react';
import { useParams } from 'react-router-dom';

const EditTraining = () => {
  const { workoutName } = useParams(); // Haetaan treenin nimi URL:stä
  const [exercises, setExercises] = useState([]); // Lista liikkeistä, painoista ja toistoista
  const [newExerciseName, setNewExerciseName] = useState(''); // Uuden liikkeen nimi
  const [newExerciseWeight, setNewExerciseWeight] = useState(''); // Uuden liikkeen paino
  const [newExerciseReps, setNewExerciseReps] = useState(''); // Uuden liikkeen toistot

  // Funktio, joka lisää uuden liikkeen listaan
  const handleAddExercise = () => {
    if (newExerciseName.trim() !== '' && newExerciseWeight.trim() !== '' && newExerciseReps.trim() !== '') {
      const newExercise = {
        name: newExerciseName,
        weight: newExerciseWeight,
        reps: newExerciseReps
      };
      setExercises([...exercises, newExercise]);
      setNewExerciseName(''); // Tyhjennetään kenttä
      setNewExerciseWeight(''); // Tyhjennetään painokenttä
      setNewExerciseReps(''); // Tyhjennetään toistokenttä
    } else {
      alert('Syötä liikkeen nimi, paino ja toistot!');
    }
  };

  return (
    <div>
      <h1>Treenin tiedot: {workoutName}</h1>

      {/* Liikkeen lisääminen */}
      <h3>Lisää uusi liike</h3>
      <input
        type="text"
        value={newExerciseName}
        onChange={(e) => setNewExerciseName(e.target.value)}
        placeholder="Syötä liikkeen nimi"
      />
      <input
        type="text"
        value={newExerciseWeight}
        onChange={(e) => setNewExerciseWeight(e.target.value)}
        placeholder="Syötä paino"
      />
      <textarea
        value={newExerciseReps}
        onChange={(e) => setNewExerciseReps(e.target.value)}
        placeholder="Syötä toistot (esim. 3 x 10)"
        rows="4"
        style={{ width: "100%", padding: "8px", fontSize: "16px", border: "1px solid #ccc", borderRadius: "5px", marginTop: "5px" }}
      />
      <button onClick={handleAddExercise}>Lisää liike</button>

      <h3>Liikkeet</h3>
      <ul>
        {exercises.map((exercise, index) => (
          <li key={index}>
            {exercise.name} - {exercise.weight} kg - {exercise.reps}
          </li> // Näytetään liike, paino ja toistot listassa
        ))}
      </ul>
    </div>
  );
};

export default EditTraining;
