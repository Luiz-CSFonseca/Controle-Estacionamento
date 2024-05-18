import React from 'react';

const ListagemVagas = ({ reservas, removerReserva }) => {
    const vagasTotais = 10;

    const calcularStatusVagas = () => {
        const vagasOcupadas = reservas.length;
        const vagasVazias = vagasTotais - vagasOcupadas;
        return { vagasOcupadas, vagasVazias };
    };

    const { vagasOcupadas, vagasVazias } = calcularStatusVagas();

    const handleRemoverReserva = (index) => {
        removerReserva(index);
    };

    return (
        <div className="container">
            <h1>Listagem de Vagas</h1>
            <div id="statusVagas">Vagas ocupadas: {vagasOcupadas} / Vagas vazias: {vagasVazias}</div>
            <table id="tabelaVagas">
                <thead>
                    <tr>
                        <th>Placa</th>
                        <th>Proprietário</th>
                        <th>Apartamento</th>
                        <th>Modelo</th>
                        <th>Cor</th>
                        <th>Vaga</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {reservas.map((reserva, index) => (
                        <tr key={index}>
                            <td>{reserva.placa}</td>
                            <td>{reserva.nomeProprietario}</td>
                            <td>{reserva.numeroApartamento}</td>
                            <td>{reserva.modeloVeiculo}</td>
                            <td>{reserva.corVeiculo}</td>
                            <td>{reserva.vaga}</td>
                            <td>
                                <button onClick={() => handleRemoverReserva(index)}>Remover</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className="button-voltar" onClick={() => window.location.href = '/'}>Voltar</button>
        </div>
    );
};

export default ListagemVagas;
