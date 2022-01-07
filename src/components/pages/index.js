import React from "react"


function Index() {
    return (
        <form>
            <div>
                <div>
                    <h1>Login</h1> <hr></hr>

                    <label for="email">Email</label> <br></br>
                    <input
                        type="email"
                        id="emailLogin"
                        name="emailLogin"
                        placeholder='Enter your email'
                        onChange={onChange}
                        value={values.emailLogin}
                    /> <br></br>

                    <label for="senha">Senha</label> <br></br>
                    <input
                        type="password"
                        id="senha"
                        name="senha"
                        placeholder='Enter your password'
                        onChange={onChange}
                        value={values.senha}
                    /> <br></br>

                    <input
                        type="submit"
                        id="buttonLogin"
                        value="Login"
                    />
                </div>
            </div>
        </form>
    );
}

export default Index;