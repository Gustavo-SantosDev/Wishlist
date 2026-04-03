let btnAdd = document.getElementById('btn-add-item');



let boxItem = document.querySelector('.box-items');

btnAdd.addEventListener('click', ()=>{
    const info = getInfo();
    criarCard(info);
})

function getInfo(){
    const inputImg = document.getElementById('add-img');
    const arquivo = inputImg.files[0]; // era 'arquive'
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
    const value = inputValue.value;

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

    //7. Barra de progresso
    const itemProgress = document.createElement('div');
    itemProgress.classList.add('item-progress');

    //8. Box btn 
    const boxBtn = document.createElement('div');
    boxBtn.classList.add('cpt-del');

    //9. btn complete
    const btnCpt = document.createElement('button');
    btnCpt.classList.add('btn-complete', 'btn');
    btnCpt.textContent = 'cpt';

    //10. btn delete
    const btnDel = document.createElement('button');
    btnDel.classList.add('btn-delete', 'btn');
    btnDel.textContent = 'del';

    details.appendChild(itemName);
    details.appendChild(itemValue);
    progressBar.appendChild(itemProgress);
    boxBtn.appendChild(btnCpt);
    boxBtn.appendChild(btnDel);

    card.appendChild(img);
    card.appendChild(details);
    card.appendChild(progressBar);
    card.appendChild(boxBtn);

    boxItem.appendChild(card);
}
