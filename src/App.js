import React, { useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CadastroReserva from './components/CadastroReserva';
import ListagemVagas from './components/ListagemVagas';
import Reserva from './components/Reserva';
import Home from './pages/Home';


const App = () => {
    // Definindo reservas fictícias
    const reservasFicticias = [
        { placa: 'ABC1234', nomeProprietario: 'João Silva', numeroApartamento: '101', blocoApartamento: 'A', modeloVeiculo: 'Sedan', corVeiculo: 'Azul', vaga: '1' },
        { placa: 'DEF5678', nomeProprietario: 'Maria Souza', numeroApartamento: '202', blocoApartamento: 'B', modeloVeiculo: 'Hatch', corVeiculo: 'Vermelho', vaga: '2' },
        { placa: 'GHI9012', nomeProprietario: 'José Santos', numeroApartamento: '303', blocoApartamento: 'C', modeloVeiculo: 'SUV', corVeiculo: 'Preto', vaga: '3' },
    ];

    const [reservas, setReservas] = useState(reservasFicticias);

    const adicionarReserva = (novaReserva) => {
        setReservas([...reservas, novaReserva]);
    };

    const removerReserva = (index) => {
        setReservas(reservas.filter((_, i) => i !== index));
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cadastro" element={<CadastroReserva adicionarReserva={adicionarReserva} />} />
                <Route path="/listagem" element={<ListagemVagas reservas={reservas} removerReserva={removerReserva} />} />
            </Routes>
        </Router>
    );
};

export default App;