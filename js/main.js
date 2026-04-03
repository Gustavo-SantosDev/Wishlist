let btnAdd = document.getElementById('btn-add-item');

btnAdd.addEventListener('click', ()=>{
    criarCard();
})

function criarCard(){
    // 1. Card corpo
    const card = document.createElement('div');
    card.classList.add('itemW');

    // 2. Imagem do card
    const img = document.createElement('div');
    img.classList.add('box-pics')

    //3. Detalhes card
    const details = document.createElement('div');
    details.classList.add('box-name-price');

    //4. Nome do item
    const itemName = document.createElement('p');
    itemName.classList.add('item-name');

    //5. Valor do item
    const itemValue = document.createElement('p');
    itemValue.classList.add('item-value');

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
    btnCpt.classList.add('btn-complete');

    //9. btn delete
    const btnDel = document.createElement('button');
    btnDel.classList.add('btn-delete');
}

          //  <div class="itemW" id="itemId">
           //         <div class="box-pics" id="item-photo">foto</div>
             //       <div class="box-name-price box-mbt">
              //          <p class="item-name">Nome</p>
              //          <p class="item-value">valor</p>
              //      </div>
              //      <div class="box-progress box-mbt">
              //          <span class="item-progress">----barra----</span>
               //     </div>
              //      <div class="cpt-del">
              //          <button class="btn-complete">cpt</button>
              //          <button class="btn-delete">del</button>
               //     </div>
               // </div>