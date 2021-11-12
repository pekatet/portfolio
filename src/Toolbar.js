import React from 'react'
import {uid} from 'react-uid';
import './App.css';

function Toolbar({filters, selected, onSelectFilter}) {
  return(
    <div>
      {filters.map((item) => {
        return (
          <button className={item === selected ? "button-selected" : "button-non-selected"}
                  onClick={() => onSelectFilter(item)}
                  key={uid(item)}>{item}</button>
        )
      })}
    </div>
  )
}

export default Toolbar;