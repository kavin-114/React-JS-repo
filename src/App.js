import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello/Hello-World';
import CongratsCard from './components/Task2/CongratsCard';
import SuperOver from "./components/Task3/SuperOver";
import SocialButtons from './components/Task4/SocialButtons'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import { MenuBar } from './components/menu/menu';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Notification from './components/Task5/Notification';
import Login from './components/Task6/Login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={[<MenuBar />, <Hello />]}
          />
          <Route
            path='/task2'
            element={[<MenuBar />, <CongratsCard />]}
          />
          <Route
            path='/task3'
            element={[<MenuBar />, <SuperOver />]}
          />
          <Route
            path='/task4'
            element={[<MenuBar />, <SocialButtons />]}
          />
          <Route
            path='/task5'
            element={[<MenuBar />, <Notification />]}
          />
          <Route
            path='/task6'
            element={[<MenuBar />, <Login/>]}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
