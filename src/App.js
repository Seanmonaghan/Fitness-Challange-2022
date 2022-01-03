import { BrowserRouter, BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import './App.css';

// import Home from './pages/home/Homepage';

export default function App() {
  return (
      <div>
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem"
          }}
        >
          <Link to="/invoices">Invoices</Link> |{" "}
          <Link to="/expenses">Expenses</Link>
        </nav>
        <h1>Bookkeeper!</h1>
      </div>
  );
}
