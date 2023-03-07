var enterBtn = document.querySelector("#enter");
var userInput = document.querySelector("#userInput");
var list = document.querySelector("#shoppingList");

function validItem(input) {
    return input.length > 0;
}
function addListItem(list, userInput){
    var itemText = userInput.value;
    if(validItem(itemText) === true) {

        var newLi = document.createElement("li");
        var newDiv = document.createElement("div");
        var newBtn = document.createElement("button");

        newDiv.innerText = itemText;
        newDiv.addEventListener("click",function(){ 
            newDiv.classList.toggle("done"); 
        });
        newLi.appendChild(newDiv);

        newBtn.innerText = "Remove";
        newBtn.addEventListener("click",function(){ 
            newBtn.parentElement.remove();
        })
        newLi.appendChild(newBtn);

        list.appendChild(newLi);
        userInput.value = "";
    }
}
{/* <li><div>Notebook</div><button>Remove</button></li>  */}

document.querySelectorAll("#shoppingList > li button").forEach(function(e){ 
    e.addEventListener("click",function(){ 
        e.parentElement.remove();
    })
});


document.querySelectorAll("#shoppingList > li div").forEach(function(e){ 
    e.addEventListener("click",function(){ 
        e.classList.toggle("done"); 
    })
});

enterBtn.addEventListener("click",function(){ 
    addListItem(list,userInput); 
});

userInput.addEventListener("keypress",function(e){ 
    if(e.keyCode === 13) {
        addListItem(list,userInput); 
    }
});

(document.querySelector("#newAtTop")).addEventListener("click",function(e){ 
    list.classList.toggle("newItemsAtTop"); 
});
