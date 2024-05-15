    const btnCloseMenu = document.getElementById("closemenu");
    const menuDiv = document.getElementById("menu_mobile");
    let opacidade = "100%";
    
  abrirMenu = () => {
    if(opacidade == "0%") {
        opacidade = "100%";
        menuDiv.style.opacity = opacidade;
    }
  }
  fecharMenu = () => {
    if(opacidade == "100%"){
        opacidade = "0%";
        menuDiv.style.opacity = opacidade;
    }
}
  
  //Animação 
  const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
      const context = this;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };
  
  const target = document.querySelectorAll("[data-anime]");

    function AnimeScroll(){
        const WindowTop = Math.floor(window.scrollY) + ((window.innerHeight * 3) / 4);
        target.forEach(function(element){
            if(WindowTop > element.offsetTop){
                element.classList.add("animate")
            } else {
                element.classList.remove("animate")
            }
        });
        
    };

    AnimeScroll();
    if(target.length){
        window.addEventListener("scroll", debounce(AnimeScroll), 200); 
    }

      function criarModal() {
      const modal = document.querySelector("#modal");
      const TextModal = document.querySelector("#text_modal");
      const CloseModal = document.querySelector("#close_modal");

      modal.showModal();
      modal.classList.add("modal1");

      modal.innerHTML = `
        <div class="middle">
        <div class="bar bar1"></div>
        <div class="bar bar2"></div>
        <div class="bar bar3"></div>
        <div class="bar bar4"></div>
        <div class="bar bar5"></div>
        <div class="bar bar6"></div>
        <div class="bar bar7"></div>
        <div class="bar bar8"></div>
        </div>
      `;

      setTimeout(() => {
        fecharModal()
      }, 1500);
  }

  // Função para fechar o modal
  function fecharModal() {
      const modal = document.querySelector("#modal");
      modal.close();
  }

  // Evento onload da janela
  window.onload=function(){
    criarModal();
    opacidade = "0%"
    menuDiv.style.opacity = opacidade;
    Menu1()

    function Menu1(){
        btnCloseMenu.addEventListener("click", function() {
            abrirMenu();
            btnCloseMenu.addEventListener("click", function() {
            fecharMenu();
             Menu1();
        });
    });
    }
  }