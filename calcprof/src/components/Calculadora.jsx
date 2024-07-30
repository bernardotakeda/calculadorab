import React, { useState } from 'react';


function Calculadora() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState('');


  return (
    <>
      <h1>Calculadora</h1>
      <div className="calculadora">
        <h3>Digite o valor que deseja calcular</h3>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(parseFloat(e.target.value))}
          placeholder="Número 1"
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(parseFloat(e.target.value))}
          placeholder="Número 2"
        />
        <br />
        <br />
        <button onClick={() => setResultado(num1+num2)}>+</button>
        <button onClick={() => setResultado(num1-num2)}>-</button>
        <button onClick={() => setResultado(num1*num2)}>x</button>
        <button onClick={() => setResultado(num1/num2)}>÷</button>
        <h3 id="resultado">Resultado: {resultado}</h3>
      </div>
    </>
  );
}

export default Calculadora;