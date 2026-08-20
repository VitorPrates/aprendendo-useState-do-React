import "./CSSassets/Login.css"

export default function Login()
{
    function cancelar_acao(e)
    {
        e.target.preventDefault()
    }
    return(
        <form onSubmit={cancelar_acao} action="" className="formlogin">
            <label htmlFor=""><p>Nome</p>
                <input type="text" />
            </label>
            <label htmlFor=""><p>Senha</p>
                <input type="text" />
            </label>
            <button type="submit">Entrar</button>
            <button >Reset</button>
        </form>
    )
}
