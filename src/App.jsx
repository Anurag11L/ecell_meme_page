// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MemeList from './Memelist';

const App = () => {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    axios.get('https://api.imgflip.com/get_memes')
      .then(response => {
        setMemes(response.data.data.memes);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="app">
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4 ">Memes</h1>
          {/* <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p> */}
        </div>
      </div>
      {/* <h1>Memes</h1> */}
      <MemeList memes={memes} />
    </div>
  );
};

export default App;
