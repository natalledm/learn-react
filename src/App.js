import './App.css';
import Header from "./Components/Header";
import Api from "./Components/Api";
import Main from './Components/Main';
import Secret from './Components/Secret';
import Checkbox from './Components/Checkbox';
import { Routes, Route } from 'react-router';
import { Home, About, Events, Contact, Whoops404, CompanyHistory, Services } from './Components/Pages';

const dishesData = [
  "salmon with tomatoes",
  "chicken al limone",
  "tofu and vegetables",
  "lemon"
]

const dishObjects = dishesData.map((dish, index) => ({ id: index, title: dish }))






function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="history" element={<CompanyHistory />} />
          <Route path="services" element={<Services />} />
        </Route>
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Whoops404 />} />

      </Routes>

      <Header name="Marta" />
      <Main dishes={dishObjects} authorized={false} />
      <Checkbox />
      <Secret authorized={true}/>
      <Api login={'natalledm'} />
    </div>
  );
}

export default App;
