import { useParams } from 'react-router-dom';

const EditTraining = () => {
  const { workoutName } = useParams(); // Haetaan treenin nimi URL:stä

  return (
    <div>
      <h1>Treenin tiedot: {workoutName}</h1>
      {/* Voit lisätä muita tietoja, kuten treenin kuvauksen ja harjoitukset */}
    </div>
  );
};

export default EditTraining;
