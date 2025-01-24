import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const TrainingList = () => {
  const { name } = useParams(); // Haetaan käyttäjän nimi URL:stä
  const [workouts, setWorkouts] = useState([]); // Lista käyttäjän treeneistä
  const [newWorkout, setNewWorkout] = useState(''); // Uuden treenin nimi

  useEffect(() => {
    // Haetaan käyttäjän treenit localStorage:sta
    const savedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = savedUsers.find((user) => user.name === name);
    if (user) {
      setWorkouts(user.workouts || []);
    }
  }, [name]);

  const handleAddWorkout = () => {
    if (newWorkout.trim() !== '') {
      // Haetaan käyttäjä localStorage:sta
      const savedUsers = JSON.parse(localStorage.getItem('users')) || [];
      const user = savedUsers.find((user) => user.name === name);

      if (user) {
        // Lisätään uusi treeni käyttäjälle
        const updatedWorkouts = [...workouts, { name: newWorkout }];
        user.workouts = updatedWorkouts;

        // Päivitetään localStorage
        const updatedUsers = savedUsers.map((userItem) =>
          userItem.name === name ? user : userItem
        );
        localStorage.setItem('users', JSON.stringify(updatedUsers));

        // Päivitetään tila
        setWorkouts(updatedWorkouts);
        setNewWorkout(''); // Tyhjennetään kenttä
      }
    } else {
      alert('Syötä treenin nimi!');
    }
  };

  const handleRemoveWorkout = (workoutName) => {
    if (window.confirm(`Vahvita treenin  ${workoutName} poistaminen`)) {
    // Poistetaan treeni käyttäjän listalta
    const updatedWorkouts = workouts.filter(workout => workout.name !== workoutName);

    // Haetaan käyttäjä localStorage:sta ja päivitetään treenit
    const savedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = savedUsers.find((user) => user.name === name);

    if (user) {
      user.workouts = updatedWorkouts;

      // Päivitetään localStorage
      const updatedUsers = savedUsers.map((userItem) =>
        userItem.name === name ? user : userItem
      );
      localStorage.setItem('users', JSON.stringify(updatedUsers));

      // Päivitetään tila
      setWorkouts(updatedWorkouts);
      }
    }
  };

  return (
    <div>
      <h1>Käyttäjän {name} Treenit</h1>

      <h3>Lisää uusi treeni</h3>
      <input
        type="text"
        value={newWorkout}
        onChange={(e) => setNewWorkout(e.target.value)}
        placeholder="Syötä treenin nimi"
      />
      <button onClick={handleAddWorkout}>Lisää treeni</button>

      <h3>Treenit</h3>
      <ul>
        {workouts.map((workout, index) => (
          <li key={index}>
            {workout.name}
            <button onClick={() => handleRemoveWorkout(workout.name)}>
              Poista
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrainingList;
