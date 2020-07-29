import React,{useState, useEffect} from 'react';
import styled from '@emotion/styled'
import Frase from './components/Frase';

// Styled Component
const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding: 5rem;
  flex-direction: column;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);

  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  border: 2px solid black;
  transition: background-size .8s ease;
  
  :hover{
    cursor: pointer;
    background-size:400px;
    
  }

`;
// Styled Component


function App() {
  
  // State de frases
  const[ frase, setGuardarFrase] = useState({});


  // API - https://breaking-bad-quotes.herokuapp.com/v1/quotes
  
  const consultarAPI = async () => {
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
    const frase = await api.json()
    setGuardarFrase(frase[0]);
  }

  useEffect( ()=>{
    consultarAPI()
  },[])

  return (
    <Contenedor>
      <Frase
        frase={frase}
      />
      <Boton 
        onClick={consultarAPI}
      >
        Obtener Frase
      </Boton>
    </Contenedor>
  );
}

export default App;
