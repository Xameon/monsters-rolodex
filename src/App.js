import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';
import { useEffect, useState } from 'react';

const App = () => {
  console.log('render');
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState('');

  const onSearchChangeHandler = (event) => {
    setSearchField(event.target.value.toLowerCase());
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setMonsters(data));
  }, []);

  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLowerCase().includes(searchField);
  });

  return (
    <div className='App'>
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox
        onSearchHandle={onSearchChangeHandler}
        placeholder='Search monsters'
        className='search-box'
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
