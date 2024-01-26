// MemeList.js
import React from 'react';
import MemeCard from './memeCard';

const MemeList = ({ memes }) => (
    <div className='pmeme' style={{ display: 'flex' }}>
        <div className="meme-list" style={{ border: "2px black", display: 'flex', flexWrap: 'wrap'}}>
            {memes.map(meme => (
                <MemeCard key={meme.id} meme={meme} />
            ))}
        </div>
    </div>
);

export default MemeList;