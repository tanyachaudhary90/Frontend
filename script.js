let box = document.getElementById("box");


let buttons = document.querySelectorAll("button");


buttons.forEach(function(button){


    button.addEventListener("click",function(){


        let type = button.getAttribute("data-type");



        if(type=="bg"){


            let color = button.getAttribute("data-color");

            box.style.backgroundColor = color;


        }



        else if(type=="text"){


            let color = button.getAttribute("data-color");

            box.style.color = color;


        }



        else if(type=="font"){


            let font = button.getAttribute("data-font");

            box.style.fontFamily = font;


        }



        else if(type=="size"){


            let size = button.getAttribute("data-size");

            box.style.fontSize = size;


        }


    });


});



document.getElementById("reset").addEventListener("click",function(){


    box.style.backgroundColor="black";

    box.style.color="white";

    box.style.fontFamily="Arial";

    box.style.fontSize="16px";


});