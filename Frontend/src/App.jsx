// Follow this react guide to get started (ctrl+click): https://react.dev/learn
import './App.css'
import MiniDrawer from './assets/components/sidebar'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Homepage from './pages/homepage';
import Accounts from './pages/settings';
import Budget from './pages/budget';
import Goals from './pages/goals';
import Investment from './pages/investment';
import Transactions from './pages/transactions';
import Trends from './pages/trends';
import Settings from './pages/settings';
import Orders from './pages/orders';
import Payments from './pages/payments';

function App() {
  return (
    // To view your component import it in between <div> </div>
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/investment" element={<Investment />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/trends" element={<Trends />} />
          <Route path="/settings"  element={<Settings />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/payments"  element={<Payments />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
