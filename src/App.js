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
import TechnologyCard from './components/Task7/TechnologyCard';
import UseStateTask from './components/useStateTask/useStateTask';
import { FruitsCounter } from './components/FruitsCounter/FruitsCounter';
import { Feedback } from './components/FeedbackApp/FeedbackApp';
import { Thankyou } from './components/FeedbackApp/Thankyou';
import Products from './components/Fakestore API/Products';
import ProductDetails from './components/Fakestore API/ProductDetails';
import DateFunction from './components/Datefunction/Datefunction';

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
           <Route
            path='/task7'
            element={[<MenuBar />, <TechnologyCard/>]}
          />
           <Route
            path='/task8'
            element={[<MenuBar />, <UseStateTask/>]}
          />
          <Route
            path='/task9'
            element={[<MenuBar />, <FruitsCounter/>]}
          />
          <Route
            path='/task10'
            element={[<MenuBar />, <Feedback/>]}
          />
          <Route
            path='/thankyou'
            element={[<MenuBar />, <Thankyou/>]}
          />
          <Route
            path='/products'
            element={[<MenuBar />, <Products/>]}
          />
           <Route
            path='/details/:id'
            element={[<MenuBar />, <ProductDetails/>]}
          />
           <Route
            path='/datefunction'
            element={[<MenuBar />, <DateFunction/>]}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
