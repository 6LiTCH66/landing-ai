import './App.css';
import {Navbar} from "./components";
import {Header, Services, Solutions, About} from "./containers";

function App() {
  return (
    <div className="App">
        <Navbar/>

        <Header/>

        <Services/>

        <Solutions/>

        <About/>

    </div>
  );
}

export default App;
