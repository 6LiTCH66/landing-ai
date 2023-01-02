import './App.css';
import {Navbar} from "./components";
import {Header, Services, Solutions, About, Belief} from "./containers";

function App() {
  return (
    <div className="App">
        <Navbar/>

        <Header/>

        <Services/>

        <Solutions/>

        <About/>

        <Belief/>

    </div>
  );
}

export default App;
