console.log("index.js loaded");

var count = 0;

function Button_switch(){
       console.log('Button_switch');
       var page = document.getElementById("content-page");
       var form_left = document.getElementById("Form-left");
       var form_right = document.getElementById("Form-right");
       var Button_left = document.getElementById("BLeft");
       var Button_right = document.getElementById("BRight");
       var buttonL = document.getElementById("Blog-Left");
       var buttonR = document.getElementById("Blog-Right");
       count++;
       if (count == 2){
              count = 0
              console.log("reset count");
       }
       console.log(count);
       if (count == 0){
              page.classList.remove("page-right");
              page.classList.add("page-left");
              form_right.classList.add("hidden-form");
              form_left.classList.remove("hidden-form");
              form_left.classList.add("visible-form");
              form_right.classList.remove("visible-form");
              Button_right.classList.add("visible-button");
              Button_left.classList.remove("visible-button");
              Button_left.classList.add("hidden");
              Button_right.classList.remove("hidden");
              buttonL.classList.add("hidden-btn");
              buttonR.classList.remove("hidden-btn");
              console.log("add left");
       }else if (count == 1){
              page.classList.remove("page-left");
              page.classList.add("page-right");
              form_left.classList.add("hidden-form");
              form_right.classList.remove("hidden-form");
              form_right.classList.add("visible-form");
              form_left.classList.remove("visible-form");
              Button_left.classList.add("visible-button");
              Button_right.classList.remove("visible-button");
              Button_right.classList.add("hidden");
              Button_left.classList.remove("hidden");
              buttonR.classList.add("hidden-btn");
              buttonL.classList.remove("hidden-btn");
              console.log("add right");
       }else{
              console.log("error count");
       }
}