import React from "react"

function index() {
    return (
        <form>
            <div>
                <div>
                    <h1>Login</h1> <hr></hr>
                    <label for="email">Email</label> <br></br>
                    <input type="email" id="emailLogin" name="emailLogin" placeholder='Enter your email'></input> <br></br>
                    <label for="senha">Senha</label> <br></br>
                    <input type="password" id="senha" name="senha" placeholder='Enter your password'></input> <br></br>
                    <input type="submit" id="buttonLogin" value="Login"></input>
                </div>
            </div>
        </form>
    );
}

export default index;