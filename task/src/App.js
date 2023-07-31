import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Header from './components/layout/Header';
import FormElements from './components/pages/FormElements';
import UIElements from './components/pages/UIElements';
import TypographyElements from './components/pages/TypographyElements';
import NavigatinBar from './components/layout/NavBar';
function App() {
  return (
  <BrowserRouter>
      <Header></Header>
      <NavigatinBar></NavigatinBar>
      <Routes>
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
