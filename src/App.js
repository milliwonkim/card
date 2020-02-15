import React from 'react';
import Card from './card/Card';
import './App.css';

function App() {
  return (
    <div className="App">
      <Card 
          imgUrl="https://source.unsplash.com/collection/190727/1600x900"
          title="Apartment"
          description="It looks like apartment where people is living in"
      />
      <Card 
          imgUrl="https://source.unsplash.com/daily"
          title="Tokyo"
          description="This is where i have been loving for many years"
      />
      <Card 
          imgUrl="https://source.unsplash.com/user/erondu/1600x900"
          title="Shanghai"
          description="This is shanghai"
      />
    </div>
  );
}

export default App;
