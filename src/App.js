import './App.css';
import {Navbar} from "./components";
import {Header, Services, Solutions} from "./containers";

function App() {
  return (
    <div className="App">
        <Navbar/>

        <Header/>

        <Services/>

        <Solutions/>

    </div>
  );
}

export default App;
