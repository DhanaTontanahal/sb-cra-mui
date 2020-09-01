import React from 'react';
import Button from './components/Atoms/Button/Button'
import Icon from './components/Atoms/Icon/Icon'
import Header from './components/Molecules/Header/AppHeader'
import Card from './components/Organisms/Card/Card'
import CardHeader from './components/Molecules/CardHeader/CardHeader'

const handleClick = () => {
  alert("hi");
}

function App() {
  return (
    <div className="App">
      <CardHeader />
      {/* <Card />
      <Header />
      <Button onClick={handleClick} variant="contained" color="primary">My Button</Button>
      <Icon iconType="search"/>  */}

    </div>
  );
}

export default App;
