import React,{ useEffect,useState } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';


function App() {
  const [bots, setBots] = useState([]);
  const [botArmy, setArmy] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((response) => response.json())
      .then((bots)=>setBots(bots));
  }, []);

  function deleteBot(deletedBot){
    const updatedBots = bots.filter((bot) => bot.id !== deletedBot.id);
    setBots(updatedBots);
  }

  function addBot(bot) {
    if(!botArmy.includes(bot)){
      setArmy([...botArmy,bot])
    }
  }

  function removeFromArmy(bot){
    setArmy(botArmy.filter(b => b !== bot));
  }

  return (
    <div>
      <YourBotArmy
        botArmy={botArmy}
        handleRemoveBot={removeFromArmy}
      />

      <BotCollection
        bots={bots}
        onDelete={deleteBot}
        handleAddBot={addBot}
        />
    </div>
  );
}

export default App;
