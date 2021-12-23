import './App.css';

function App() {
  return (

    <>

      {/* tela de Login */}

      <div>
        <h1>Login</h1> <hr></hr>
        <label for="email">Email</label> <br></br>
        <input type="email" id="emailLogin" name="emailLogin" placeholder='Enter your email'></input> <br></br>
        <label for="senha">Senha</label> <br></br>
        <input type="password" id="senha" name="senha" placeholder='Enter your password'></input> <br></br>
        <input type="submit" id="buttonLogin" value="Login"></input>
      </div>

      {/* Tela de Cadastro de empresa */}

      <div>

        <div>
          <h2>Nova empresa</h2> <hr></hr>
          <label for="nome">Razão Social</label> <br></br>
          <input type="text" id="social" name="social"></input> <br></br>

          <label for="nome">Nome fantasia</label> <br></br>
          <input type="text" id="fantasia" name="fantasia"></input> <br></br>

          <label for="nome">CNPJ</label> <br></br>
          <input type="number" id="cnpj" name="cnpj"></input> <br></br>

          <label for="nome">Email</label> <br></br>
          <input type="email" id="emailEmpersa" name="emailEmpresa"></input> <br></br> <hr></hr>

          <label for="nome">CEP</label> <br></br>
          <input type="number" id="cep" name="cep"></input> <br></br>

          <label for="nome">Endereço</label> <br></br>
          <input type="text" id="endereco" name="endereco"></input> <br></br>

          <label for="nome">Número</label> <br></br>
          <input type="number" id="numero" name="numero"></input> <br></br>

          <label for="nome">Complemento</label> <br></br>
          <input type="text" id="complemento" name="complemento"></input> <br></br>

          <label for="nome">Bairro</label> <br></br>
          <input type="text" id="bairro" name="bairro"></input> <br></br>

          <label for="nome">Cidade</label> <br></br>
          <input type="text" id="cidade" name="cidade"></input> <br></br> <hr></hr>

          <label for="nome">Latitude</label> <br></br>
          <input type="number" id="latitude" name="latitude"></input> <br></br>

          <label for="nome">Longitude</label> <br></br>
          <input type="number" id="longitude" name="longitude"></input> <br></br>

          <input type="submit" id="buttonCadastra" value="Cadastrar"></input>
          <input type="submit" id="buttonCncelar" value="Cancelar"></input>

        </div>

      </div>

      {/* Tela de novo produto */}

      <div>
        <div>
          <h2>Novo produto</h2> <hr></hr>

          <label for="nome">URL da imagem</label> <br></br>
          <input type="url" id="urlImagem" name="urlImagem"></input> <br></br>

          <label for="nome">Nome</label> <br></br>
          <input type="text" id="nome" name="nome"></input> <br></br>

          <label for="nome">Custo unitário</label> <br></br>
          <input type="number" id="custo" name="custo"></input> <br></br>

          <label for="nome">Descrição</label> <br></br>
          <textarea id="descricao" name="descricao" rows="4" cols="50"></textarea> <br></br> <hr></hr>

          <label for="nome">Fornecedor</label> 
          <select name="fornecedor" id="fornecedor">
            <option value="fornecedor1">Fornecedor 1</option>
            <option value="fornecedor2">Fornecedor 2</option>
            <option value="fornecedor3">Fornecedor 3</option> 
                       
          </select>

          <label for="nome">Grupo</label> 
          <select name="grupo" id="grupo">
            <option value="grupo1">Grupo 1</option>
            <option value="grupo2">Grupo 2</option>
            <option value="grupo3">Grupo 3</option>

          <input type="submit" id="cadastrarProduto" value="Cadastrar"></input>
          <input type="submit" id="cancelarProduto" value="Cancelar"></input>
           
          </select> 

        </div>

      </div>

      {/* Mapa 

      <div>
        <div> 
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d21532.521189264553!2d-43.90864880836765!3d-19.88746987624558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1640106410590!5m2!1spt-BR!2sbr" 
        width="600" 
        height="450" 
        style="border:0;" 
        allowfullscreen="" 
        loading="lazy">
          
        </iframe>
        </div>
      </div>
      
      */}

      {/* Cadastro de novos fornecedores */}

      <div>
        <div>
          <h2>Novo fornecedor</h2> <hr></hr>{/* Melhorar a pagina de fornecedores */} 

          <label for="nome">Novo Fornecedor</label> <br></br>
          <input type="text" id="novoFornecedor" name="novoFornecedor"></input> <br></br>

          <label for="nome">Produto fornecido</label> <br></br>
          <input type="text" id="produtoFornecido" name="produtoFornecido"></input> <br></br>

          <label for="nome">Valor unitário do produto</label> <br></br>
          <input type="number" id="valorUnitario" name="valorUnitario"></input> <br></br>

          <label for="nome">Quantidade</label> <br></br>  
          <input type="number" id="quantidade" name="quantidade"></input> <br></br>

          <input type="submit" id="cadastrarFornecedor" value="Cadastrar"></input>
          <input type="submit" id="cancelarFornecedor" value="Cancelar"></input>
        </div>
      </div>


    </>
  );
}

export default App;
