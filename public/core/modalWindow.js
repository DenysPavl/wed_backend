let modal = document.getElementById("modalWindow");

function OpenModal(){
    modal.style.display = "block";
}

function DeleteToken(){
    localStorage.removeItem('token');
}

function CloseModal(){
    modal.style.display = "none";
}

window.onclick = function(event){ // щоб вікно закривалось при натисканні мишкою за його рамками
    if (event.target == modal)
        CloseModal();
}