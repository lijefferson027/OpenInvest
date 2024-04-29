// Follow this react guide to get started (ctrl+click): https://react.dev/learn
import './App.css'
import MiniDrawer from './assets/components/sidebar'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Homepage from './pages/homepage';
import Accounts from './pages/accounts';
import Budget from './pages/budget';
import Investment from './pages/investment';
import Transactions from './pages/transactions';
import Login from './pages/login';
import Signup from "./pages/signup";


function App() {
  return (
    // To view your component import it in between <div> </div>
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="/investment" element={<Investment />} />
          <Route path="/transactions" element={<Transactions />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
