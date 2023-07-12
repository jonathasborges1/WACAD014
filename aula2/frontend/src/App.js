import './App.css';
import Table from './components/Table';
import Navbar from './components/Navbar';
import CardProducts from './components/CardProducts';


const cardProductData = [
  {
    title: "Titulo Card 1",
    price: "R$ 100,00",
    subtitle: "Descricao Card 1",
    src: "assets/produtos/pc.jpg"
  },
  {
    title: "Titulo do Card 2",
    price: "R$ 1000,00",
    subtitle: " Descricao do Card 2",
    src: "assets/produtos/pc.jpg"
  },
  {
    title: "Titulo do Card 3",
    price: "R$ 200,00",
    subtitle: " Descricao do Card 3",
    src: "assets/produtos/pc.jpg"
  },
  {
    title: "Titulo do Card 4",
    price: "R$ 900,00",
    subtitle: " Descricao do Card 4",
    src: "assets/produtos/pc.jpg"
  },
  {
    title: "Titulo do Card 5",
    price: "R$ 400,00",
    subtitle: " Descricao do Card 5",
    src: "assets/produtos/pc.jpg"
  },
  {
    title: "Titulo do Card 6",
    price: "R$ 300,00",
    subtitle: " Descricao do Card 6",
    src: "assets/produtos/pc.jpg"
  },
]

const navbarOptions = [
  {
    title: "Login",
    subItems: []
  },
  {
    title: "Signup",
    subItems: []
  },
  {
    title: "Produtos",
    subItems: ["Cadastrar", "Editar", "Deletar"]
  }
];

function App() {
  return (
    <div className="App">
      <header className="App-header">

        {/* <Table/> */}
        
        <Navbar navbarOptions={navbarOptions}/>

        <CardProducts cardProducts={cardProductData} />

      </header>
    </div>
  );
}

export default App;
