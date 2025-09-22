import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { db } from "./firebase.js";

async function carregarlista(){
    const lista = document.getElementById('lista');
    lista.innerHTML = "";

    try{
        const querySnapshot = await getDocs(collection(db, "defeitos"));
        if (querySnapshot.empty){
            lista.innerHTML = `<strong><li>Nenhum item cadastrado.</li></strong>`;
            return;
        }
        querySnapshot.forEach(doc => {
        const item = doc.data();
        const li = document.createElement('li');  
        li.dataset.item = JSON.stringify(item);     
        li.innerHTML = `
        <strong>${item.defeito}</strong> <br> 
        ${item.descricao} <br> 
        <span class="data">${item.data}</span> <br> 
        <button class="info">+</button>
        `        
        lista.appendChild(li);
        }); 
        
        lista.addEventListener('click', function (event){
            const li = event.target.closest('li');
            if (!li) return;

            const item = JSON.parse(li.dataset.item);

            if (event.target.classList.contains('info')){
                li.innerHTML = `
                <strong>${item.nome}</strong> <br>
                <button class="voltar">-</button>
                `;
                li.dataset.item = JSON.stringify(item);
            }

            if (event.target.classList.contains('voltar')){
                li.innerHTML = `
                <strong>${item.defeito}</strong> <br>
                ${item.descricao} <br>
                <span class="data">${item.data}</span> <br>
                <button class="info">+</button>
                `;
                li.dataset.item = JSON.stringify(item);
            }
        });
        
    } catch (error){
        console.error("Erro ao carregar lista: ", error);
        lista.innerHTML = `<li>Erro ao carregar item.</li>`
    }    
}

const lista = document.getElementById('lista');
const pesquisar = document.querySelector('.pesquisar');

    pesquisar.addEventListener('input', (event) => {
        const procura = event.target.value.toLowerCase();
        const itens = lista.querySelectorAll('li');

        itens.forEach(item => {
            const conteudoPesquisa = item.textContent.toLowerCase();
        if (conteudoPesquisa.includes(procura)){
            item.style.display = '';
        } else {
            item.style.display = "none";
        }
        })   
    })

carregarlista();