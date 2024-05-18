import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="acoes">
            <h1>Sistema de Controle de Estacionamento</h1>
            <Link to="/cadastro">Cadastro de Reserva</Link>
            <Link to="/listagem">Listagem de Vagas</Link>
        </div>
    );
};

export default Home;