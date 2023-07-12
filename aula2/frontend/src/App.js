import logo from './logo.svg';
import './App.css';
import Table from './components/Table';
import Navbar from './components/Navbar';
import CardProducts from './components/CardProducts';


const dataCards = [
  {
    title: "Titulo Card 1",
    subtitle: "Descricao Card 1",
    src: "assets/produtos/pc.jpg"
  },
  {
    title: "Titulo do Card 2",
    subtitle: " Descricao do Card 2",
    src: "assets/produtos/pc.jpg"
  },
  {
    title: "Titulo do Card 3",
    subtitle: " Descricao do Card 3",
    src: "assets/produtos/pc.jpg"
  },
  {
    title: "Titulo do Card 4",
    subtitle: " Descricao do Card 4",
    src: "assets/produtos/pc.jpg"
  },
  {
    title: "Titulo do Card 5",
    subtitle: " Descricao do Card 5",
    src: "assets/produtos/pc.jpg"
  },
  {
    title: "Titulo do Card 6",
    subtitle: " Descricao do Card 6",
    src: "assets/produtos/pc.jpg"
  },
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Table/>
        <Navbar/>
        {/* <CardProducts/> */}

        {dataCards.map((card, index) => {  
          return(
            <CardProducts key={index} src={card.src} title={card.title} subtitle={card.subtitle}  />
          )
        })}

        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
