import { Button } from './styled-components/Button.js';
import { useState } from 'react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { QueryPersonaje } from './helpers/QueryPersonaje.jsx';
import { History } from './componentes/History.jsx';


const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
});



function App() {

  const [id, setId] = useState(0);
  const [personajes , setPersonajes] = useState([]);

  const generarIdAleatorio = () => {

    let min = Math.ceil(1);
    let max = Math.floor(500);
    const id = Math.floor(Math.random() * (max - min + 1) + min);

    setId(id);

  }
  
  const onAddCharacter = (newCharacter) => {
    if(personajes.filter(personaje => personaje.id === newCharacter.id).length === 0) {
      personajes.push(newCharacter);
    }
  }

  const onLoadHistory = (loadCharacter) => {
    setId(loadCharacter.id);
  }

  return (
    <>
      <QueryPersonaje id={id} onNewCharacter={onAddCharacter} />
      <Button onClick={generarIdAleatorio}>Generate</Button>
      {personajes.length > 0 ? <History personajes={personajes} onLoadCharacter={onLoadHistory}></History> : ''}
      
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
