import './App.css';
import Header from "./Components/Header";
import Api from "./Components/Api";
import Main from './Components/Main';
import Secret from './Components/Secret';


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
      <Header name="Marta" />
      <Main dishes={dishObjects} authorized={false} />
      <Secret authorized={true}/>
      <Api login={'natalledm'} />
    </div>
  );
}

export default App;
