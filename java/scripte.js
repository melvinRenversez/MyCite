console.log("starting");

function voir_plus(){
       var text = document.getElementById("info");
       var btn =  document.getElementById("button");
       console.log(text.classList.length);
       console.log(btn.innerHTML)
       if (text.classList.length == 2){
              text.classList.remove("vsb");
              console.log("remove");
              btn.innerHTML = "voir moin"
       }else if (text.classList.length == 1){
              text.classList.add("vsb");
              console.log("add");
              btn.innerHTML = "voir plus"
       }
}