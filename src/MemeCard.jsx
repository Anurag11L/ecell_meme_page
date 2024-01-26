// MemeCard.js
import React from 'react';

const MemeCard = ({ meme }) => (
  <div className='pcard' style={{ border: "4px solid black", margin: "5px", padding:"10px"}}>
    <div className="card">
      <img src={meme.url} alt={meme.name} style={{ height: "155px" }} />
      <h2 style={{ fontSize: "15px",flexWrap: 'wrap' }}>{meme.name}</h2>
    </div>
  </div>
);

export default MemeCard;