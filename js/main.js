let body = document.querySelector('body');

let btnNight = document.querySelector('.mode');

function modoDark(){
    body.classList.toggle('night-mode');
}

btnNight.addEventListener('click', ()=>{
    modoDark(body);
})

let btnListStyle = document.querySelector('.list-type');

function toggleList(){
    let boxItemRow = document.querySelector('.box-items');
    let itemWRow = document.querySelectorAll('.itemW'); 
    let boxPicsRow = document.querySelectorAll('.box-pics');

    boxItemRow.classList.toggle('row');
    
    itemWRow.forEach(item => {
        item.style.opacity = '0';
        setTimeout(() => {
        item.classList.toggle('row');
        item.style.opacity = '1';
    }, 300);
    });
    boxPicsRow.forEach(item => {
        item.classList.toggle('row');
    });
}

btnListStyle.addEventListener('click', toggleList);

let btnAdd = document.getElementById('btn-add-item');

let boxItem = document.querySelector('.box-items');

btnAdd.addEventListener('click', ()=>{
    const info = getInfo();
    if(!info) return;
    criarCard(info);
    const labelImg = document.querySelector('.fake-ipt-img');
    labelImg.textContent = 'Selecionar Imagem';
    labelImg.style.color = '#939393';
    labelImg.style.fontWeight = 'normal';
})

const inputImg = document.getElementById('add-img');
const labelImg = document.querySelector('.fake-ipt-img');

inputImg.addEventListener('change', () => {
    const arquivo = inputImg.files[0];
    if(arquivo){
        labelImg.textContent = arquivo.name;
        labelImg.style.color = 'black';
        labelImg.style.fontWeight = '600';
    }
});

function getInfo(){
    const inputImg = document.getElementById('add-img');
    const arquivo = inputImg.files[0]; 
    const imgURL = arquivo ? URL.createObjectURL(arquivo) : null;

    const inputName = document.getElementById('add-name');
    const inputValue = document.getElementById('add-value');

    if(!arquivo){
        alert('Adicione uma imagem');
        return;
    }

    if(inputName.value.trim() === ''){
        alert('Adicione um nome');
        return;
    }

    if(inputValue.value.trim() === ''){
        alert('Adicione um valor');
        return;
    }


    const name = inputName.value;  // salva antes de limpar
    const value = Number(inputValue.value);

    inputImg.value = '';
    inputName.value = '';
    inputValue.value = '';

    return {
        imgURL,
        name,
        value
    }

}


function criarCard(info){
    if(!info) return;

    // 1. Card corpo
    const card = document.createElement('div');
    card.classList.add('itemW');

    // 2. Imagem do card
    const img = document.createElement('div');
    img.classList.add('box-pics');

    if (info.imgURL) {
    const imgElement = document.createElement('img');
    imgElement.src = info.imgURL;
    img.appendChild(imgElement);    
    }

    //3. Detalhes card
    const details = document.createElement('div');
    details.classList.add('box-name-price');

    //4. Nome do item
    const itemName = document.createElement('p');
    itemName.classList.add('item-name');
    itemName.textContent = info.name;

    //5. Valor do item
    const itemValue = document.createElement('p');
    itemValue.classList.add('item-value');
    itemValue.textContent = `R$: ${parseFloat(info.value).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

    //6. Box da barra de progresso
    const progressBar = document.createElement('div');
    progressBar.classList.add('box-progress');

    //7. Area Barra de progresso
    const areaProgress = document.createElement('div');
    areaProgress.classList.add('area-progress');

    //7.1 Barra de progresso
    const itemProgress = document.createElement('div');
    itemProgress.classList.add('item-progress');

    metaItem(itemProgress, info.value);

    //8. Box btn 
    const boxBtn = document.createElement('div');
    boxBtn.classList.add('box-btn');

    //9. btn complete
    const btnCpt = document.createElement('button');
    btnCpt.classList.add('btn-complete', 'btn');
    btnCpt.textContent = '🏆';

    //10. btn delete
    const btnDel = document.createElement('button');
    btnDel.classList.add('btn-delete', 'btn');
    btnDel.textContent = '❌';

    details.appendChild(itemName);
    details.appendChild(itemValue);
    progressBar.appendChild(areaProgress);
    areaProgress.appendChild(itemProgress);
    boxBtn.appendChild(btnCpt);
    boxBtn.appendChild(btnDel);

    card.appendChild(img);
    card.appendChild(details);
    card.appendChild(progressBar);
    card.appendChild(boxBtn);

    boxItem.appendChild(card);
}

function metaItem(fill, meta){
    let saldoStr = document.getElementById('user-amount');
    let saldoNb = Number(saldoStr.textContent.replace(/\./g, "").replace(",", "."));

    let metaNb;

    if(typeof meta === 'number'){
        metaNb = meta;
    }else{
        metaNb = Number(meta.textContent.replace("R$:", " ").replace(/\./g, "").replace(",", "."));
    }

    let calcUCM = Math.min((saldoNb / metaNb) * 100, 100);

    fill.style.width = calcUCM + '%';

    //Tentando trocar barra de progresso por texto 'Completo!' ao preencher a barra
    //Perfeito! Mas tem um detalhe: toda vez que o atualizarBarras rodar, ele vai criar um novo p e adicionar novamente, acumulando vários "Completado!" no mesmo card.
    // Precisa verificar se o p já existe antes de criar. Tenta usar o querySelector no fill.parentElement para checar se já tem um p lá dentro antes de criar um novo.
    // Tenta aí!

    // if(calcUCM >= 100){

    //     let p = document.createElement('p');
    //     p.textContent = 'Completado!'

    //     fill.style.display = 'none';

    //     fill.parentElement.appendChild(p);
    // }
}

function atualizarBarras(){
    let cards = document.querySelectorAll('.itemW');

    cards.forEach(card => {
        let meta = card.querySelector('.item-value');
        
        let fill = card.querySelector('.item-progress');

        metaItem(fill, meta);
    });
}




// criando barra de progresso


