import './App.css';
import {Navbar} from "./components";
import {Header, Services, Solutions, About, Belief, Faq} from "./containers";

function App() {
  return (
    <div className="App">
        {/*<Navbar/>*/}

        <Header/>

        <Services/>

        <Solutions/>

        <About/>

        <Belief/>
        
        <Faq/>

    </div>
  );
}

export default App;
