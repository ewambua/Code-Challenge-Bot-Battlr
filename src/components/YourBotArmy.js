import React from "react";
import BotItem from "./BotItem";

function YourBotArmy({botArmy,onDelete, handleRemoveBot}){

    const displayarmy = botArmy.map( (bot,army) =>
        <BotItem
            key={army}
            bot={bot}
            onDelete={onDelete}
            handleAddBot={handleRemoveBot}
        />)

        return (
            <div className="ui segment inverted olive bot-army">
            <div className="ui five column grid">
            <h3>Your Bot Army</h3>
              <div className="row bot-army-row">
                {displayarmy}
              </div>
            </div>
          </div>
        );
}

export default YourBotArmy