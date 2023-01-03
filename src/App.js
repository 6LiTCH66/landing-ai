import './App.css';
import {Navbar} from "./components";
import {Header, Services, Solutions, About, Belief, Faq, Footer} from "./containers";

function App() {
  return (
    <div className="App">
        <Navbar/>

        <Header/>

        <Services/>

        <Solutions/>

        <About/>

        <Belief/>
        
        <Faq/>

        <Footer/>

    </div>
  );
}

export default App;
