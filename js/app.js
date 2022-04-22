function menuOculto(){
  let menuTarget = document.querySelector('.menuOculto');
  let menuTarget2 = document.querySelector('.menuOculto2');
  let triggerMenu = document.querySelector('.menuBtn');
  let closeMenu = document.querySelector('.closeMenu');
  let contentMenu = document.querySelector('.contentMenu');

  triggerMenu.addEventListener("click", ()=>{
      setTimeout(function() {
        menuTarget.style.height = "100%";
      }, 300);
        menuTarget2.style.height = "100%";

      setTimeout(function() {
        contentMenu.style.display = "block";
      }, 450);
  })

  closeMenu.addEventListener("click", ()=>{
    menuTarget.style.height = "0%";
    setTimeout(function() {
      menuTarget2.style.height = "0%";
    }, 300);
    contentMenu.style.display = "none";
  })
}

function animationMenuOculto(){
  let listaTextos = document.getElementsByClassName('textAnimation');

  let nuevaLineaTrigger = document.querySelector('.nuevaLinea');
  let todosProductosTrigger = document.querySelector('.todosProductos');
  let cestaCompraTrigger = document.querySelector('.cestaCompra');
  let nuestrasTiendasTrigger = document.querySelector('.nuestrasTiendas');

// Nuestras Tiendas apartado
  nuevaLineaTrigger.addEventListener("mouseover", (event)=>{

    for (var i = 0; i < listaTextos.length; i++) {
      listaTextos[i].style.transform = "translateX(0%)";
      listaTextos[i].style.opacity = "1";
      listaTextos[i].innerHTML = "NUEVA LÍNEA";
    }
    setTimeout(function() {
      for (var i = 0; i < listaTextos.length; i++) {
        listaTextos[i].style.color = "#F5D93D";
      }
    }, 100); setTimeout(function() {
      for (var i = 0; i < listaTextos.length; i++) {
        listaTextos[i].style.color = "white";
      }
    }, 400);
  }) 

  nuevaLineaTrigger.addEventListener("mouseout", ()=>{

      for (var i = 0; i < listaTextos.length; i++) {
        listaTextos[i].style.transform = "translateX(-100%)";
        listaTextos[i].style.opacity = "0";
        listaTextos[i].style.color = "white";
    }
  }) 

// Todos los productos apartado
  todosProductosTrigger.addEventListener("mouseover", ()=>{
    for (var i = 0; i < listaTextos.length; i++) {
      listaTextos[i].style.transform = "translateX(0%)";
      listaTextos[i].style.opacity = "1";
      listaTextos[i].innerHTML = "TODOS PROD.";
    }
    setTimeout(function() {
      for (var i = 0; i < listaTextos.length; i++) {
        listaTextos[i].style.color = "#F5D93D";
      }
    }, 100); setTimeout(function() {
      for (var i = 0; i < listaTextos.length; i++) {
        listaTextos[i].style.color = "white";
      }
    }, 400);
  })

  todosProductosTrigger.addEventListener("mouseout", ()=>{
    for (var i = 0; i < listaTextos.length; i++) {
      listaTextos[i].style.transform = "translateX(-100%)";
      listaTextos[i].style.opacity = "0";
      listaTextos[i].style.color = "white";
    }
  })
// Cesta compra apartado
  cestaCompraTrigger.addEventListener("mouseover", ()=>{
    for (var i = 0; i < listaTextos.length; i++) {
      listaTextos[i].style.transform = "translateX(0%)";
      listaTextos[i].style.opacity = "1";
      listaTextos[i].innerHTML = "Cesta compra";
    }
    setTimeout(function() {
      for (var i = 0; i < listaTextos.length; i++) {
        listaTextos[i].style.color = "#F5D93D";
      }
    }, 100); setTimeout(function() {
      for (var i = 0; i < listaTextos.length; i++) {
        listaTextos[i].style.color = "white";
      }
    }, 400);
  })

  cestaCompraTrigger.addEventListener("mouseout", ()=>{
    for (var i = 0; i < listaTextos.length; i++) {
      listaTextos[i].style.transform = "translateX(-100%)";
      listaTextos[i].style.opacity = "0";
      listaTextos[i].style.color = "white";
    }
  })
// Nuestras tiendas apartado
  nuestrasTiendasTrigger.addEventListener("mouseover", ()=>{
    for (var i = 0; i < listaTextos.length; i++) {
      listaTextos[i].style.transform = "translateX(0%)";
      listaTextos[i].style.opacity = "1";
      listaTextos[i].innerHTML = "nues. tiendas";
    }
    setTimeout(function() {
      for (var i = 0; i < listaTextos.length; i++) {
        listaTextos[i].style.color = "#F5D93D";
      }
    }, 100); setTimeout(function() {
      for (var i = 0; i < listaTextos.length; i++) {
        listaTextos[i].style.color = "white";
      }
    }, 400);
  })

  nuestrasTiendasTrigger.addEventListener("mouseout", ()=>{
    for (var i = 0; i < listaTextos.length; i++) {
      listaTextos[i].style.transform = "translateX(-100%)";
      listaTextos[i].style.opacity = "0";
      listaTextos[i].style.color = "white";
    }
  })
}

function modalMainPage(){
  let triggerOpen = document.querySelector('.btn1');
  let triggerOpen2 = document.querySelector('.btn2');
  let triggerClose = document.querySelector('.closeModal');

  let targetModal = document.querySelector('.modalShoe');
  let targetContent = document.querySelector('.contentModal');
  let balls = document.querySelector('.bolaModal');

  console.log(balls);
  triggerOpen.addEventListener("click", ()=>{
      targetModal.style.display = "block";

      setTimeout(function() {
        targetContent.style.transform = "translateY(0%)";
      }, 10); 
  })

  triggerOpen2.addEventListener("click", ()=>{
      targetModal.style.display = "block";
      
      setTimeout(function() {
        targetContent.style.transform = "translateY(0%)";
      }, 10); 
  })

  triggerClose.addEventListener("click", ()=>{
    targetContent.style.transform = "translateY(-100%)";

    setTimeout(function() {
      targetModal.style.display = "none";
    }, 10);
  })
}

