import React from "react";

function Fornecedores() {
    return (
        <form>
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
        </form>
    );
}

export default Fornecedores;