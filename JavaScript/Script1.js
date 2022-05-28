var user = document.querySelector('#txtusuario');
var key = document.querySelector('#txtsenha');
var NomeCadastro = document.querySelector('#NomeCadastro');
var SenhaCadastro = document.querySelector('#SenhaCadastro');

function Cadastrar() {
    if (localStorage.getItem("Nome") == NomeCadastro.value) {
        alert("Desculpe, o nome de usuário já existe.")
        achar = "sim";
    } else {
        localStorage.setItem("Nome", NomeCadastro.value)
        localStorage.setItem("Senha", SenhaCadastro.value)

        const win = window.open("Login.html", "_blank")
        win.focus();

    }



}
console.log(Lista_usuario)
console.log(Lista_Senha)

function verificar() {
    if (user.value == 'Lucas3146' && key.value == '123') {
        /*
        var site = "TechGames"
        var URL = "index.html"
        document.write("Clique no " + site.link(URL))*/
        var URL = "index.html"
        const win = window.open(URL, '_blank');
        win.focus();
    } else {
        alert("Desculpe, usuário ou senha estão incorretos");
    }

}
