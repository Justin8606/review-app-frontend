import logo from './logo.svg';
import './App.css';
import AddReviews from './components/AddReviews';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddReviews/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
