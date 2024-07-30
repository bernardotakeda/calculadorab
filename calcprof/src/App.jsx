import React from 'react';
import Mensagem from './components/Mensagem';
import Frase from './components/Frase';
import Calculadora from './components/Calculadora';
import './App.css'

function App() {
 
function Saudacao(){
  return <h1>Hello Word</h1>
}

  return (
    <>
    <Saudacao/>
    <Mensagem texto="meu texto"/>
    <Frase/>
    <Calculadora/>
    </>
  )
}

export default App
