import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Pedidos() {

    return (
        <>
        <OutroContainer>
            <Link to="/home" >
            <Icon><ion-icon name="arrow-back-outline"></ion-icon></Icon>
            </Link>
            <Pedido>
                <NomeDoPedido>Pedido Nº 1</NomeDoPedido>
                <Saldo>239,98</Saldo>
            </Pedido>
            <Pedido>
                <NomeDoPedido>Pedido Nº 2</NomeDoPedido>
                <Saldo>139,98</Saldo>
            </Pedido>
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
