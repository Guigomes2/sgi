import React from "react";

function produto() {
    return (
        <form>
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
        </form>
    );
}

export default produto;