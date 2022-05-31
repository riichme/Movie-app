import "./App.css";

import { useState, } from "react";
import "./Style/Film.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button, Navbar, Container} from"react-bootstrap"

export default function App() {
  const [items, setItems] = useState([]);
  const [inputId, setInputId] = useState("");

  function getData() {
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=3fa6cf92&t=${inputId}`)
      .then(response => response.json())
      .then(json => setItems(json))
  }

  function resetData() {
    setItems([]);
    setInputId("");
  }

  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/posts`)
  //     .then(response => response.json())
  //     .then(json => setItems(json))
  // }, [])

  let arr = []
  arr.push(items)
  console.log(items.Title, "<<< ARR")
  return (

    <div className="App">   
     <Navbar bg="dark" variant="dark" width="10%" height="10%">
    <Container>
    <Navbar.Brand href="#home">RISTMI</Navbar.Brand>
    </Container>
  </Navbar>
  <br/>
    <h1 style={{color: 'white'}}>CARI FILM</h1>
      <input value={inputId} onChange={(e) => setInputId(e.target.value)} />
      <button onClick={() => getData()}>cari</button>
      <button onClick={() => resetData()}>reset</button>

      <div>
          <div>

          <img style={{width: '20%', height: '20%', marginLeft: '13px', marginBottom: '20px', marginTop: '20px', position: 'center'}} src={items.Poster} ></img>
         <Container >
          <h4 style={{color: 'white'}}>{items.Title}</h4>
          <p style={{color: 'white'}}>{items.Plot}</p>
          </Container>
          </div>
      </div>
    </div>
  );
}