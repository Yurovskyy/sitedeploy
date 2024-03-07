import "bootstrap/dist/css/bootstrap.min.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import About from "../../views/About";
import Contact from "../../views/Contact";
import WIP from "../../views/WIP";
import Home from "../../views/Home";
import GeneralTable from "../../views/GeneralTable";
import Table from "../../assets/data/table.json";

import Governance from "../../views/data/governance";
import HubPages from "../../views/HubPage";
import IndividualPage from "../../views/IndividualPage";
import { TableInterface } from "../table/DataItens";

export default function MNavbar() {
  // para fazer as paginas individuais funcionarem corretamente
  const groupedByCNPJ: { [cnpj: string]: TableInterface[] } = {};
  Table.forEach((item) => {
    if (!groupedByCNPJ[item.CNPJ_Companhia]) {
      groupedByCNPJ[item.CNPJ_Companhia] = [];
    }
    groupedByCNPJ[item.CNPJ_Companhia].push(item);
  });

  // posso fazer funções para resetar a navbar e trocar o estado da navbar automaticamente.
  // isso é melhor doq fazer várias arrow function ( () => {}) em cada Nav.link

  return (
    <BrowserRouter>
      <>
        <Navbar
          expand="lg"
          className="bg-body-tertiary"
          bg="dark"
          data-bs-theme="dark"
        >
          <Container>
            <Navbar.Brand as={Link} to="/">
              Marcos's site
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-end"
            >
              <Nav variant="underline">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/about">
                  Sobre
                </Nav.Link>
                <NavDropdown title="Pesquisas" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/WIP">
                    Em andamento
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/WIP">
                    Papeis - Artigos
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/WIP">
                    Livros
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Data" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/hub">
                    Hub de empresas
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/governance">
                    Governança
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/WIP">
                    Buffer
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Outros" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/WIP">
                    Alunos
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/WIP">
                    Time
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/WIP">
                    Projetos
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/WIP">
                    UFSJ
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to="/contact">
                  Contato
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <div>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/indice" element={<WIP />} />
            <Route
              path="/sitedeploy/tabeladosdados"
              element={<GeneralTable />}
            />
            <Route path="/" element={<Home />} />
            <Route path="/WIP" element={<WIP />} />
            <Route path="/governance" element={<Governance />} />
            <Route path="/sitedeploy/" element={<Home />} />
            <Route path="/hub" element={<HubPages data={Table} />} />
            {Object.entries(groupedByCNPJ).map(([cnpj, items]) => (
              <Route
                key={cnpj}
                path={`/cnpj/${cnpj}`}
                element={<IndividualPage item={items} />}
              />
            ))}
          </Routes>
        </div>
      </>
    </BrowserRouter>
  );
}
