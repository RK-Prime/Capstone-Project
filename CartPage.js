
function updateValue(inputValue){
    let newValue_add = 15*inputValue;
   
    document.getElementById('item-cost').innerText = '$'+`${newValue_add}`;
    let itemcostValue = Number(newValue_add);

    document.getElementById('item-cost-num').innerText = '$' + `${newValue_add}`;

    let shipItem = document.getElementById('item-ship-num').innerText;
    let shipValue = Number(shipItem.replace('$', ''));

    let totalValue = shipValue + itemcostValue;
    document.getElementById('item-total-num').innerText = '$' + `${totalValue}`;
}


//Value Increment
function add_count(){
    var inputValue = Number(document.getElementById('item-num').value);
    if(inputValue>=0){
        inputValue++;
        document.getElementById('item-num').value = inputValue;
    }
    
    updateValue(inputValue);
    console.log(inputValue);
}


// Value Decrement
function sub_count(){
    var inputValue = Number(document.getElementById('item-num').value);

    if(inputValue >= 0){
        inputValue--;
        document.getElementById('item-num').value = inputValue;
        updateValue(inputValue);
    }
    if(inputValue < 0){
        inputValue = 0;
        document.getElementById('item-num').value = inputValue;

        // inputValue = 1;
        updateValue(inputValue=1)
        setTimeout(()=>alert("Quantity can't be less than 0"),0.1);
    }


    console.log(inputValue);
}


function del_item(){
    setTimeout(()=>location.reload(), 1);
}
