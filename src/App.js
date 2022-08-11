import styled from "styled-components";
import React, { useState } from "react";
import { Card, CardImg, Col, Container, Row } from "react-bootstrap";
import JSONDATA from './Livros.json';

export default function Home() {
  const Header = styled.header`    
    color: #fff;
  `;

  const Title = styled.h1`
    padding: 10px 5px;
  `;

  const [livroBuscado, setLivroBuscado] = useState("");

  return (
    <>
      <Container className="p-0 mb-3" fluid>
        <Row className="p-0">
          <Col>
            <Header className="bg-dark">
              <Title className="text-center pt-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-book me-2 mb-2" viewBox="0 0 16 16">
                  <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
                </svg>
                Haltt Boks
              </Title>
            </Header>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="row row-cols-3 g-2 mb-2">
          <Col>
            <div className="input-group">
              <div className="form-floating">
                <input type="text" className="form-control" id="BuscaLivro" placeholder="Nome do Livro" onChange={(event) => { setLivroBuscado(event.target.value) }} />
                <label htmlFor="BuscaLivro">Buscar livro pelo Nome</label>
              </div>
              <span className="input-group-text">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </span>
            </div>
          </Col>
        </Row>

        <Row className="row row-cols-5 g-2">
          {JSONDATA.filter((val) => {
            if (livroBuscado == "") {
              return val
            }
            else if (val.nome.toLowerCase().includes(livroBuscado.toLowerCase())) {
              return val
            }
          }).map((val, key) => {
            return (
              <Col key={key}>
                <Card className="card">
                  <div className="card-header px-0 text-center fw-semibold">
                    {val.nome}
                  </div>
                  <div className="card-body">
                    <CardImg src={val.imagem} alt={val.nome}></CardImg>
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container></>
  );
}
