import { useState } from "react";

import "./app.css";

export default function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [mensagem, setMensagem] = useState("");

  function calcularIMC() {
    const alt = altura / 100;
    const imc = peso / (alt * alt);

    if (imc < 17) {
      setMensagem(`Cuidado muito abaixo do peso! Seu IMC: ${imc.toFixed(2)}`);
    } else if (imc >= 17 && imc < 18.49) {
      setMensagem(`Você esta abaixo do pesso! Seu IMC: ${imc.toFixed(2)}`);
    } else if (imc >= 18.5 && imc < 24.99) {
      setMensagem(`Peso normal! Seu IMC: ${imc.toFixed(2)}`);
    } else if (imc >= 25 && imc < 29.99) {
      setMensagem(`Você esta Acima do peso! Seu IMC: ${imc.toFixed(2)}`);
    } else if (imc >= 30 && imc < 34.99) {
      setMensagem(`Cuidado Obesidade 1! Seu IMC: ${imc.toFixed(2)}`);
    } else if (imc >= 35 && imc < 39.99) {
      setMensagem(`Cuidado Obesidade 2 (severa)! Seu IMC: ${imc.toFixed(2)}`);
    } else if (imc > 40) {
      setMensagem(`Cuidado Obesidade 3 (mórbida)! Seu IMC: ${imc.toFixed(2)}`);
    }
  }

  return (
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu imc</span>

      <div className="area-input">
        <input
          type="number"
          placeholder="Pesso em (Kg) Ex:90"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />

        <input
          type="number"
          placeholder="Altura em (cm) Ex:175"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />

        <button onClick={calcularIMC}>Calcular</button>

        <h2>{mensagem}</h2>
      </div>
      <footer class="footer">Hugolino B. G. 2022. Todos os direitos reservados.</footer>
    </div>
  );
}
