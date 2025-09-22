import { auth } from "./firebase.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";


const formCadastro = document.getElementById('form-cadastro');
const formLogin = document.getElementById('form-login');
const status = document.getElementById('status');
const logOut = document.getElementById('logout-button');


if (formCadastro) {
    formCadastro.addEventListener("submit", async (e) => {
        e.preventDefault();
        const email = formCadastro['cadastroEmail'].value;
        const senha = formCadastro['cadastroSenha'].value;

        try {
            await createUserWithEmailAndPassword(auth, email, senha);
            alert('Cadastrado com sucesso!');
            window.location.href = "./setores.html";
        } catch (error) {
            console.error("Erro ao se cadastrar:", error.message);
            alert("Erro ao se cadastrar");
        }
    });
}


if (formLogin) {
    formLogin.addEventListener("submit", async (e) => {
        e.preventDefault();
        const email = formLogin['loginEmail'].value;
        const senha = formLogin['loginSenha'].value;

        try {
            await signInWithEmailAndPassword(auth, email, senha);
            window.location.href = "./setores.html";
        } catch (error) {
            console.error("Erro ao logar:", error.message);
            alert("Erro ao logar.");
        }
    });
}


if (logOut) {
    logOut.addEventListener("click", async () => {
        try {
            await signOut(auth);
            alert("Usuário deslogado.");
            window.location.href = "./index.html"
        } catch (error) {
            console.error("Erro ao tentar deslogar:", error.message);
        }
    });
}


if (status) {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            status.innerHTML = `${user.email}`;
        } else {
            status.innerHTML = `Não logado`;
        }
    });
}
