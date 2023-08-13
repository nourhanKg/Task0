import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Header from './components/layout/Header';
import FormElements from './components/pages/FormElements';
import UIElements from './components/pages/UIElements';
import TypographyElements from './components/pages/TypographyElements';
import Dependancies from './components/pages/Dependancies';
import NavigatinBar from './components/layout/NavBar';
import { Container } from 'react-bootstrap';
function App() {
  return (
  <BrowserRouter>
      <Container fluid className='bg-main'>
        <Header></Header>
        <NavigatinBar></NavigatinBar>
      </Container>
      <Routes>
        <Route path='/' element={<Dependancies/>}>
        </Route>
        <Route path='/formElements' element={<FormElements/>}>
        </Route>
        <Route path='/UIElements' element={<UIElements/>}>
        </Route>
        <Route path='/typographyElements' element={<TypographyElements/>}>
        </Route>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
