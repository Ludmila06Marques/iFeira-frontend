import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import appContext from "../Contexts/AppContext";
import axios from "axios";

export default function Pedidos() {

    const [pedidos, setPedidos] = useState([]);
    const { token } = useContext(appContext);

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const promise = axios.get("http://localhost:5000/pedidos", config);

        promise.then((res) => setPedidos(res.data));
        promise.catch(() => alert("Ocorreu um erro! Atualize a página!"))
    }, []);

    return (
        <>
        <OutroContainer>
            <Link to="/home" >
            <Icon><ion-icon name="arrow-back-outline"></ion-icon></Icon>
            </Link>
            {pedidos.map((pedido, index) => { return (
                <Pedido>
                    <NomeDoPedido>Pedido Nº {pedido.numeroPedido}</NomeDoPedido>
                    <Saldo>{pedido.valorTotal}</Saldo>
                </Pedido>
            )})}
        </OutroContainer>
        </>
    )
}

const Icon=styled.div`
color: white;
font-size: 30px;
padding: 20px;
`

const OutroContainer = styled.div`

`

const Pedido = styled.div`
width: 100%;
height: 100px;
background-color: white;
margin-top: 15px;

display: flex;
align-items: center;
justify-content: space-between;

padding: 0 10px;

`

const Saldo = styled.h1`
font-size: 20px;
color: black;
padding: 0 10px;
`


const NomeDoPedido = styled.h1`
font-size: 20px;
color: black;
`
