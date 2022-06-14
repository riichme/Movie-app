import "./App.css";

import { useState, useEffect } from "react";
import "./Style/Film.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Navbar, Container } from "react-bootstrap";

export default function App() {
  const [item, setItem] = useState({});
  const [inputId, setInputId] = useState("");

  function getData() {
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=3fa6cf92&t=${inputId}`)
      .then((response) => response.json())
      .then((json) => setItem(json));
  }

  function resetData() {
    setItem({});
    setInputId("");
  }

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=3fa6cf92`)
      .then((response) => response.json())
      .then((json) => setItem(json));
  }, []);
  console.log("BERHASIL")
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" width="10%" height="10%">
        <Container>
          <Navbar.Brand href="#home">RISTMI</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <h1 style={{ color: "white" }}>CARI FILM</h1>
      <input value={inputId} onChange={(e) => setInputId(e.target.value)} />
      <button onClick={() => getData()}>cari</button>
      <button onClick={() => resetData()}>reset</button>

      {Object.keys(item).length !== 0 && (
        <div>
          <div>
            <img
              style={{
                width: "20%",
                height: "20%",
                marginLeft: "13px",
                marginBottom: "20px",
                marginTop: "20px",
                position: "center",
              }}
              src={item.Poster}
            ></img>
            <Container>
              <h4 style={{ color: "white" }}>{item.Title}</h4>
              <p style={{ color: "white" }}>{item.Plot}</p>
            </Container>
          </div>
        </div>
      )}
    </div>
  );
}