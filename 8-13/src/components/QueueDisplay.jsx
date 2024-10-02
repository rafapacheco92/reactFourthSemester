import React from 'react';
import './Display.css';

function QueueDisplay({ normal, preferencial, atual }) {
  return (
    <div className="queue-display">
      <h3>Fila de Senhas</h3>
      <div>
        <h4>Preferenciais</h4>
        {preferencial.length > 0 ? (
          <ul>
            {preferencial.map((password, index) => (
              <li key={index}>{password}</li>
            ))}
          </ul>
        ) : (
          <p>Nenhuma senha preferencial na fila.</p>
        )}
      </div>
      <div>
        <h4>Normais</h4>
        {normal.length > 0 ? (
          <ul>
            {normal.map((password, index) => (
              <li key={index}>{password}</li>
            ))}
          </ul>
        ) : (
          <p>Nenhuma senha normal na fila.</p>
        )}
      </div>
      <div className="current-password">
        <h4>Senha Chamada:</h4>
        <p>{atual || 'Nenhuma senha chamada'}</p>
      </div>
    </div>
  );
} 

export default QueueDisplay;