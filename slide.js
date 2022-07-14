var i;
i=1;

const intervalo = window.setInterval(function slid() {
          
          if(i === 1){
            document.getElementById("print").src = "./img/print1.png";
          }

          else if(i === 2){
            document.getElementById('print').src = "./img/print2.png";
          }

          else if(i === 3){
            document.getElementById("print").src = "./img/print3.png";
          }

          else if(i === 4){
            document.getElementById("print").src = "./img/print4.png";
          }

          i++;

          if(i>4){
            i=1;
          }

        } , 2000);

 /* var i;
i=1;

 window.onclick = function slid() {
          
          if(i === 1){
            document.getElementById("print").src = "./img/print1.png";
          }

          else if(i === 2){
            document.getElementById('print').src = "./img/print2.png";
          }

          else if(i === 3){
            document.getElementById("print").src = "./img/print3.png";
          }

          else if(i === 4){
            document.getElementById("print").src = "./img/print4.png";
          }

          i++;

          if(i>4){
            i=1;
          }

        } */