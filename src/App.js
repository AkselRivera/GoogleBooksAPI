
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import BookInfo from './components/BookInfo';
import BookSearch from './components/BookSearch';
import Navbar from './components/navbar/Navbar';

function App() { 

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src='' className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //   </header>
    // </div>

    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={< BookSearch />}></Route>
        <Route path="/book/:id" element={< BookInfo />}></Route>
      </Routes>
    </BrowserRouter>

    // <div>
    //   <BookSearch/>
    //   {/* <BookGrid /> */}

    // </div>

  );
}

export default App;
