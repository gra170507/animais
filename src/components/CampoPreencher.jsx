// src/components/CampoPreencher.jsx
import React, { useState } from 'react';

function CampoPreencher({ addAnimal }) {
  const [animal, setAnimal] = useState({
    nome: '',
    raca: '',
    local: '',
    imagemUrl: '',
    status: 'perdido',
    pessoaEncontrou: {
      nome: '',
      telefone: '',
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnimal((prevAnimal) => ({
      ...prevAnimal,
      [name]: value,
    }));
  };

  const handlePessoaEncontrouChange = (e) => {
    const { name, value } = e.target;
    setAnimal((prevAnimal) => ({
      ...prevAnimal,
      pessoaEncontrou: {
        ...prevAnimal.pessoaEncontrou,
        [name]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addAnimal(animal);
    setAnimal({
      nome: '',
      raca: '',
      local: '',
      imagemUrl: '',
      status: 'perdido',
      pessoaEncontrou: {
        nome: '',
        telefone: '',
      },
    });
  };

  return (
    <div className="container">
      <h2>Cadastrar Animal</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nome do Animal:
          <input
            type="text"
            name="nome"
            value={animal.nome}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Raça do Animal:
          <input
            type="text"
            name="raca"
            value={animal.raca}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Status:
          <select
            name="status"
            value={animal.status}
            onChange={handleChange}
            required
            
          >
            <option value="perdido">Perdido</option>
            <option value="encontrado">Encontrado</option>
          </select>
        </label>
        <label>
          Local Encontrado/Perdido:
          <input
            type="text"
            name="local"
            value={animal.local}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          URL da Imagem (opcional):
          <input
            type="url"
            name="imagemUrl"
            value={animal.imagemUrl}
            onChange={handleChange}
          />
        </label>
        <label>
          Nome para Contato:
          <input
            type="text"
            name="nome"
            value={animal.pessoaEncontrou.nome}
            onChange={handlePessoaEncontrouChange}
            required
          />
        </label>
        <label>
          Telefone:
          <input
            type="tel"
            name="telefone"
            value={animal.pessoaEncontrou.telefone}
            onChange={handlePessoaEncontrouChange}
            required
          />
        </label>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default CampoPreencher;
