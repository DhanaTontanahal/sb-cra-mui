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
      <Header />
      {/* <CardHeader /> */}
      {/* <Card />
      <Header />
      <Button onClick={handleClick} variant="contained" color="primary">My Button</Button>
      <Icon iconType="search"/>  */}

    </div>
  );
}

export default App;


/*
                                {
                                    'title':'This is the title',
                                    'subHeader':'September 2 2020',
                                    'avatarText':'D',
                                    'responseCount':'12',
                                    'clapCount':'14',
                                    'cardContentVariant':'body2',
                                    'content':'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
                                    'color':'textSecondary',
                                    'cardImage':card1


                                }


*/