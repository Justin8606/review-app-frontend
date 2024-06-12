import logo from './logo.svg';
import './App.css';
import AddReviews from './components/AddReviews';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewReview from './components/ViewReview';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddReviews/>}/>
      <Route path='/view' element={<ViewReview/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
