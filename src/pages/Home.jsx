import { useState } from 'react'; 
import { Link } from 'react-router-dom'; 


const Home = () => {
  const [userName, setUserName] = useState(''); // Käyttäjän nimen tila
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')) || []); // Käyttäjät LocalStoragesta

  const handleAddUser = () => {
    if (userName.trim() !== '') {
      const newUser = { name: userName };
      const updatedUsers = [...users, newUser];
      setUsers(updatedUsers);
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      setUserName(''); // Tyhjennetään kenttä lisäyksen jälkeen
    } else {
      alert('Syötä käyttäjän nimi!');
    }
  };

  const handleRemoveUser = (name) => {
    const updatedUsers = users.filter((user) => user.name !== name);
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers)); // Päivitetään LocalStorage
  };

  return (
    <div>
      <h1>Treenit</h1>

      <h3>Lisää uusi käyttäjä</h3>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Syötä käyttäjän nimi"
      />
      <button onClick={handleAddUser}>Lisää käyttäjä</button>

      <h3>Käyttäjät GITTI</h3>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {/* Linkki käyttäjän omalle treenisivulle */}
            <Link to={`/user/${user.name}`}>{user.name}</Link>
            
            {/* Poista-nappi */}
            <button onClick={() => handleRemoveUser(user.name)}>Poista</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
