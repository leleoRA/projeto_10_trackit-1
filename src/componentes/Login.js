import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from "react-router-dom"
import styled from 'styled-components';
import axios from 'axios';

import logo from "../assets/trackit-logo.png"

export default function Login() {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  let navigate = useNavigate()


  function logar(event) {
    event.preventDefault()

    const cadastro = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
      {
        email: email,
        password: senha,
      })

    cadastro.then((r) => navigate("/habitos"))

    cadastro.catch(error => console.log(error.response))
  }

  return (
    <Main>

      <img src={logo} alt="Track It" />

      <form onSubmit={logar}>
        <input type="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="senha" value={senha} onChange={e => setSenha(e.target.value)} />
        <Button type='submit'>Entrar</Button>
      </form>

      <StyledLink to={"/cadastro"}>Não tem uma conta? Cadastre-se!</StyledLink>

    </Main>
  )
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  padding-top: 68px;

  img {
    width: 180px;
    height: 180px;
    margin-bottom: 30px;
  }

  form {
    display: flex;
    flex-direction: column;

    gap: 6px;
    margin-bottom: 25px;
  }

  form input {
    width: 303px;
    height: 45px;

    border: 1px solid #D5D5D5;
    border-radius: 5px;
  }

  form input::placeholder {
    color: #DBDBDB;
    padding-left: 11px;
  }
`

const Button = styled.button`
  width: 303px;
  height: 45px;

  background: #52B6FF;
  border-radius: 4.63636px;
  border: none;

  color: #FFFFFF;
  font-size: 20.976px;
  line-height: 26px;
`

const StyledLink = styled(Link)`
    color: #52B6FF;
`