import './App.css';
import Index from './components';
import Cadastro from './components/cadastro'; 
import Produto from './components/produto';
import Mapa from './components/mapa';
import Fornecedores from './components/fornecedores';



function App() {
  return (
    <>
      <Index />
      <Cadastro />
      <Produto />
      {/* <Mapa /> */}
      <Fornecedores />
    </>
  );
}

export default App;
