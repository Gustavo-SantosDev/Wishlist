let headerNd = document.querySelector('.nd-floor-header');
let headerSt = document.querySelector('.st-floor-header');
let arrowBtn = document.getElementById('arrow-v');

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
})

btnBackMain.addEventListener('click', ()=>{
    windowSaldo.classList.toggle('visible');
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
        let oldValue = Number(userCashStr.textContent);
        let newValue = oldValue + validNumber;
        
    

        userCashStr.textContent = newValue.toFixed(2);
        userWallet.textContent = newValue.toFixed(2);

        inputAddCash.value = '';
    }
})

rmvBtn.addEventListener('click', () =>{
    let validNumber = verifyNumber(inputRmvCash);

    if(validNumber == undefined){
        return;
    } else{
        let oldValue = Number(userCashStr.textContent);
        let newValue = oldValue - validNumber;

        userCashStr.textContent = newValue.toFixed(2);
        userWallet.textContent = newValue.toFixed(2);

        inputRmvCash.value = '';
    }
})

