/*
const tooltip = document.querySelector("#tooltip");
const body = document.querySelector("body");
const header = document.querySelector(".top-site");

//alvo.addEventListener("evento", função);

//mouseover, função arrow no body >>>>> criar uma função no mause ao passar o mouse ele fica cinza
//mouseout, função arrow no body devolve sem cor 
body.addEventListener("mouseover", (e) => {
    body.style.background = "gray";
});
body.addEventListener("mouseout", (e) => {
    body.style.background = "unset";
});

tooltip.addEventListener("mouseover", (e) => {
    console.log("Altura da Pagina", body.clientHeight);
    console.log("Largura da Pagina", body.clientWidth);
    console.log("Altura do tootip", tooltip.clientHeight);
    console.log("Largura do tooltip", tooltip.clientWidth);
    console.log("Altura do mouse", e.clientY);
    console.log("Largura do mouse", e.clientX);



    if(document.querySelector(".tooltip")) {           // aqui ele esta criando 
        document.querySelector(".tooltip").remove();
        }
    const newDiv = document.createElement("div");
    newDiv.classList.add("tooltip");
    newDiv.innerHTML =  
    "Gelatooo para tú aaaaaah chasy wiiiii wiiiii daa hahaha me want bananaaa! Daa jiji bappleees tank yuuu! Butt po kass gelatooo hahaha. Potatoooo poulet tikka masala butt poopayee uuuhhh po kass. Chasy belloo! Daa baboiii ti aamoo! Daa.";

    const largura = 200;
    newDiv.style.position = "fixed";
    newDiv.style.width = largura + "px";
    newDiv.style.top = e.clientY + "px";
    newDiv.style.display = "flex";
    newDiv.style.left =
      (e.clientX + largura > body.clientWidth
        ? e.clientX - largura - 20
        : e.clientX + largura) + "px";
  
    console.log(newDiv.style.width, "width");
  
    header.appendChild(newDiv);
  
});

tooltip.addEventListener("mouseout", (e)=>{
    if(document.querySelector(".tooltip")) {
    document.querySelector(".tooltip").remove();
    }
});
.>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

>>>>>>>>>>>>>>>>>>>>>>>>>>>> solução do desafio em grupo >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
*/
function tooltip(tooltip, newDiv) {
    tooltip = document.querySelector('#tooltip');
    const body = document.querySelector('body');
    const header = document.querySelector('.top-site');


    body.addEventListener('mouseover', (e) => {
        body.style.background = 'gray';
    })

    body.addEventListener('mouseout', (e) => {
        body.style.background = 'unset';
    })

    tooltip.addEventListener('mouseover', (e) => {
        if (document.querySelector('.tooltip')) {
            document.querySelector('.tooltip').remove();
        }

        newDiv = document.createElement('div');
        newDiv.classList.add('tooltip');
        newDiv.innerHTML = 'Minions ipsum gelatooo uuuhhh para tú bappleees para tú tank yuuu! Gelatooo po kass. Bappleees poopayee tulaliloo pepete belloo! Wiiiii. Baboiii hana dul sae bappleees pepete hana dul sae po kass po kass baboiii.';

        const largura = 200;
        newDiv.style.position = "fixed";
        newDiv.style.width = largura + "px";
        newDiv.style.top = e.clientY + "px";
        newDiv.style.display = "flex";
        newDiv.style.left =

            (e.clientX + largura > body.clientWidth
                ? e.clientX - largura - 20
                : e.clientX + largura) + "px";

        header.appendChild(newDiv);

        tooltip.addEventListener('mouseout', () => {
            newDiv.remove();
        })
    })
} tooltip()
/*>>>>>>>>>>>>>>>>>>>>>>>>>>>> solução do Professor >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//const tooltip = document.querySelector("#tooltip");

const tooltip = (target, texto) => {
    const body = document.querySelector("body");
    const tooltipTarget = document.querySelector(target);
  
    tooltipTarget.addEventListener("mouseover", (e) => {
      if (document.querySelector(".tooltip")) {
        document.querySelector(".tooltip").remove();
      }
  
      const newDiv = document.createElement("div");
      newDiv.classList.add("tooltip");
      newDiv.innerHTML = texto;
  
      const largura = 200;
      newDiv.style.position = "fixed";
      newDiv.style.width = largura + "px";
      newDiv.style.top = e.clientY + "px";
      newDiv.style.display = "flex";
      newDiv.style.left =
        (e.clientX + largura > body.clientWidth
          ? e.clientX - largura - 20
          : e.clientX + largura) + "px";
  
      tooltipTarget.parentNode.appendChild(newDiv);
    });
  
    tooltipTarget.addEventListener("mouseout", (e) => {
      if (document.querySelector(".tooltip")) {
        document.querySelector(".tooltip").remove();
      }
    });
  };
  
  tooltip("#tooltip", "texto do tooltip");
  */