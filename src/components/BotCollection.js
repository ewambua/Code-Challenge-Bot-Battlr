import React from "react";
import BotItem from "./BotItem";

function BotCollection({bots,onDelete, handleAddBot}){

    const renderbots = bots.map( (bot) =>
        <BotItem
            key={bot.id}
            bot={bot}
            onDelete={onDelete}
            handleAddBot={handleAddBot}
        />)

        return (
            <div className="ui four column grid">
            <div className="row">
              {renderbots}
            </div>
          </div>
        );
}

export default BotCollection;

