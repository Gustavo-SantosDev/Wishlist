let headerNd = document.querySelector('.nd-floor-header');
let headerSt = document.querySelector('.st-floor-header');
let arrowBtn = document.getElementById('arrow-v');

const overlay = document.getElementById('overlay');

// quando clicar, alterna a classe ativa no segundo header
// e atualiza acessibilidade + ícone de direção
arrowBtn.addEventListener('click', () => {
    headerNd.classList.toggle('active');
    headerSt.classList.toggle('active');


    const isOpen = headerNd.classList.contains('active');
    arrowBtn.setAttribute('aria-expanded', isOpen);
    arrowBtn.textContent = isOpen ? '˄' : '˅';
});

let btnSaldo = document.getElementById('user-cash');
let btnBackMain = document.getElementById('back-to-main');
let windowSaldo = document.querySelector('.cash-window');

btnSaldo.addEventListener('click', ()=>{
    windowSaldo.classList.toggle('visible');
    overlay.classList.toggle('active');
    btnSaldo.classList.toggle('active');
})

btnBackMain.addEventListener('click', ()=>{
    windowSaldo.classList.toggle('visible');
    btnSaldo.classList.toggle('active');
    overlay.classList.toggle('active');
})

let userCashStr = document.getElementById('user-amount');
let userWallet = document.getElementById('user-amount-wallet');
let inputAddCash = document.getElementById('add-cash');
let inputRmvCash = document.getElementById('rmv-cash');
let addBtn = document.getElementById('add-cash-btn');
let rmvBtn = document.getElementById('rmv-cash-btn');

function verifyNumber(input1){
    input1 = input1.value

    if(input1.trim() === ''){
        alert('adicione uma quantia')
        return;
    }

    input1 = Number(input1);

    if(isNaN(input1)){
        alert('apenas numeros')
        return ;
    } else {
        return input1;
    }
}

addBtn.addEventListener('click', () =>{
    let validNumber = verifyNumber(inputAddCash);

    if(validNumber == undefined){
        return;
    } else{
        let oldValue = Number(userCashStr.textContent.replace(/\./g, "").replace(",", "."));
        let newValue = oldValue + validNumber;
        
    

        userCashStr.textContent = newValue.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        userWallet.textContent = newValue.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

        inputAddCash.value = '';

        atualizarBarras();
    }
})

rmvBtn.addEventListener('click', () =>{
    let validNumber = verifyNumber(inputRmvCash);

    if(validNumber == undefined){
        return;
    } else{
        let oldValue = Number(userCashStr.textContent.replace(/\./g, "").replace(",", "."));
        let newValue = oldValue - validNumber;

        userCashStr.textContent = newValue.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        userWallet.textContent = newValue.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

        inputRmvCash.value = '';

        atualizarBarras();
    }
})

overlay.addEventListener('click', () => {
    overlay.classList.toggle('active');
    btnSaldo.classList.toggle('active');
    windowSaldo.classList.toggle('visible');
})
