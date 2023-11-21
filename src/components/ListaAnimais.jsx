
import React, { useState } from 'react';
import '../app.css';

function ListaAnimais({ animals, onDelete, onToggleStatus }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleDelete = (index) => {
    onDelete(index);
  };

  const handleToggleStatus = (index) => {
    onToggleStatus(index);
  };

  const filteredAnimals = animals.filter((animal) =>
    animal.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h2>Lista de Animais</h2>
      <input
        type="text"
        placeholder="Pesquisar animais"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredAnimals.map((animal, index) => (
          <li key={index} className={animal.status}>
            <div className="animal-block">
              <div className="animal-info">
                <img src={animal.imagemUrl} alt={`Imagem de ${animal.nome}`} />
                <div>
                  <strong>Nome:</strong> {animal.nome}
                </div>
                <div>
                  <strong>Raça:</strong> {animal.raca}
                </div>
                <div>
                  <strong>Local:</strong> {animal.local}
                </div>
                <div>
                  <strong>Status:</strong> {animal.status}
                </div>
                <div>
                  <strong>Nome para contato:</strong> {animal.pessoaEncontrou.nome}
                </div>
                <div>
                  <strong>Telefone:</strong> {animal.pessoaEncontrou.telefone}
                </div>
              </div>
              <div className="animal-actions">
                <button onClick={() => handleToggleStatus(index)}>
                  Alterar Status
                </button>
                <span className="button-spacing"></span>
                <button onClick={() => handleDelete(index)}>Excluir</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaAnimais;
