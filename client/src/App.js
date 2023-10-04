import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Card from './components/Card';

import data from './data.js';

function App() {
  let displayCard = data.map((card) => {
    return <Card key={card.id} cardInfo={card} />;
  });

  console.log(data);

  return (
    <div>
      <Nav />
      <Hero />
      <div className="card-container">{displayCard}</div>
    </div>
  );
}

export default App;
