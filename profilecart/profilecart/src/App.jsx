import React from 'react';
import './App.css';
import Card from './components/card';

const App = () => {
  const [name, setName] = React.useState("John Doe");
  const [bio, setBio] = React.useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
  const [img, setImg] = React.useState("https://via.placeholder.com/150");
  const arr=[{name:"John Doe",bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",img:"https://images.pexels.com/photos/23549077/pexels-photo-23549077.jpeg"},{name:"Amit",bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",img:"https://images.pexels.com/photos/27020727/pexels-photo-27020727.jpeg"}, {name:"Alice",bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",img:"https://images.pexels.com/photos/33260716/pexels-photo-33260716.jpeg"}]

  const changeName = () => {
    setName("Amit");
    setBio("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
    setImg("https://images.pexels.com/photos/36523137/pexels-photo-36523137.png");
  };

  return (
    <div id='container'>
      {arr.map((item) => (
        <Card key={item.name} img={item.img} name={item.name} bio={item.bio} changeName={changeName} />
      ))}
    </div>
  );
};

export default App;