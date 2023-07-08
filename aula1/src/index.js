// Cria um alias para a função React.createElement para facilitar sua utilização posteriormente.
const e = React.createElement;

// Define uma nova classe chamada WebAcademy que estende a classe React.Component. Isso cria um novo componente React chamado WebAcademy.
class WebAcademy extends React.Component {

   // O construtor é um método especial que é chamado quando um novo objeto da classe é criado.
   // Neste caso, ele define o estado inicial do componente WebAcademy com a propriedade liked definida como false.
   constructor(props) {
      super(props);
      this.state = { liked: false };
   }
   
   // O método render() é necessário em todos os componentes React e é responsável por retornar o conteúdo que será exibido pelo componente.
   // Neste caso, ele retorna uma string que contém a mensagem "Hello World! Web Academy - Jonathas Borges Cavalcante - Minha primeira página React".
   render() {
      const nomeCompleto = 'Jonathas Borges Cavalcante';
      const mensagem = 'Minha primeira página React';
      return ( `Hello World! Web Academy - ${nomeCompleto} - ${mensagem}` );
   }

}

// Essas linhas de código selecionam um elemento do documento com o ID web_academy_container e o armazenam na variável domContainer.
// Em seguida, é criada uma raiz de renderização (root) do React usando ReactDOM.createRoot, passando o domContainer.
// Por fim, o componente WebAcademy é renderizado na raiz usando root.render().
const domContainer = document.querySelector('#web_academy_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(WebAcademy));
