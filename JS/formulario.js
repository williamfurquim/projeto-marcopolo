import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { db } from "./firebase.js";

const form = document.getElementById('form');

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const nome = document.getElementById('inputNome').value.trim();
    const defeito = document.getElementById('inputDefeito').value.trim();
    const descricao = document.getElementById('inputDescricao').value.trim();
    const data = document.getElementById('inputData').value.trim();

    if (!defeito || !descricao || !data || !nome) {
        alert('Preencha todos os campos o melhor possível para sua observação ter mais prioridade!');
        return;
    }


    try {
        await addDoc(collection(db, "defeitos"), {
            defeito,
            descricao,
            data,
            nome           
        });
        form.reset();
        alert('Sua requisição foi adicionada com sucesso!')

    } catch (error) {
        console.error("Erro ao salvar: ", error);
        alert("Houve um erro, tente novamente.")
    }
});