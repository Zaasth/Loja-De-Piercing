    const btnCloseMenu = document.getElementById("closemenu");
    const menuDiv = document.getElementById("menu_mobile");
    let opa = "100%";
    
  abrirMenu = () => {
    if(opa == "0%") {
        opa = "100%";
        menuDiv.style.opacity = opa;
    }
  }
  fecharMenu = () => {
    if(opa == "100%"){
        opa = "0%";
        menuDiv.style.opacity = opa;
    }
}

window.onload=function(){
    opa = "0%"
    menuDiv.style.opacity = opa;
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
