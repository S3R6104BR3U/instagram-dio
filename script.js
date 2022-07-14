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


 /* mudar tema */
var white=true;
function tema(){
  if(white===true){
    document.getElementById("style").href="style-escuro.css";
    document.getElementById("btn-tema").value="Tema Claro";
    white=false;
  }

  else{
    document.getElementById("style").href="style.css";
    document.getElementById("btn-tema").value="Tema Escuro";
    white=true;
  }
}