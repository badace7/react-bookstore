import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import BookPage from "./pages/BookPage";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/book" element={<BookPage />} /> 
      <Route path="/" element={<App />} />
      {/* <Route path="invoices" element={<Invoices />} /> */} 
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// import { render } from "react-dom";

// import App from "./App";
// import Expenses from "./routes/expenses";
// import Invoices from "./routes/invoices";

// const rootElement = document.getElementById("root");
// render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<App />} />
//       <Route path="expenses" element={<Expenses />} />
//       <Route path="invoices" element={<Invoices />} />
//     </Routes>
//   </BrowserRouter>,
//   rootElement
// );