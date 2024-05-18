import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CadastroReserva = ({ adicionarReserva }) => {
    const [placa, setPlaca] = useState('');
    const [nomeProprietario, setNomeProprietario] = useState('');
    const [numeroApartamento, setNumeroApartamento] = useState('');
    const [blocoApartamento, setBlocoApartamento] = useState('');
    const [modeloVeiculo, setModeloVeiculo] = useState('');
    const [corVeiculo, setCorVeiculo] = useState('');
    const [vaga, setVaga] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const novaReserva = { placa, nomeProprietario, numeroApartamento, blocoApartamento, modeloVeiculo, corVeiculo, vaga };
        adicionarReserva(novaReserva);
        alert('Reserva cadastrada com sucesso!');
        navigate('/listagem');
    };

    return (
        <div className="container">
            <h1>Cadastro de Reserva</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="placa">Placa do veículo:</label>
                <input type="text" id="placa" value={placa} onChange={(e) => setPlaca(e.target.value)} required />

                <label htmlFor="nomeProprietario">Nome do proprietário:</label>
                <input type="text" id="nomeProprietario" value={nomeProprietario} onChange={(e) => setNomeProprietario(e.target.value)} required />

                <label htmlFor="numeroApartamento">Número do apartamento:</label>
                <input type="text" id="numeroApartamento" value={numeroApartamento} onChange={(e) => setNumeroApartamento(e.target.value)} required />

                <label htmlFor="blocoApartamento">Bloco do apartamento:</label>
                <input type="text" id="blocoApartamento" value={blocoApartamento} onChange={(e) => setBlocoApartamento(e.target.value)} required />

                <label htmlFor="modeloVeiculo">Modelo do veículo:</label>
                <input type="text" id="modeloVeiculo" value={modeloVeiculo} onChange={(e) => setModeloVeiculo(e.target.value)} required />

                <label htmlFor="corVeiculo">Cor do veículo:</label>
                <input type="text" id="corVeiculo" value={corVeiculo} onChange={(e) => setCorVeiculo(e.target.value)} required />

                <label htmlFor="vaga">Número da vaga de estacionamento:</label>
                <input type="text" id="vaga" value={vaga} onChange={(e) => setVaga(e.target.value)} required />

                <button type="submit">Salvar</button>
            </form>
            <button className="button-voltar" onClick={() => window.location.href = '/'}>Voltar</button>
        </div>
    );
};

export default CadastroReserva;
