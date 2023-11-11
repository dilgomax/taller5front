class menumain extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.innerHTML = `

        
        <header class="header">
        <div class="child-header">
          <div class="box-logo">
            <a href="" class="link-logo"></a>
          </div>
          
          <nav class="box-menu-navegacion" id="menu-navegacion">
            <ul class="menu-navegacion">
              <li class="item-menu">
                <a href="../index.html" class="item-menu-link">Inicio</a>
              </li>
              
              
              <li class="item-menu item-menu-sub-menu">
                <a href="#" class="item-menu-link">Taller Front End</a>
                <i class="fas fa-angle-down angle-view-sub-menu"></i>
                
                <ul class="sub-menu" id="sub-menu">
                  <li class="item-menu">
                    <a href="punto1.html" class="item-menu-link">Punto 1</a>
                  </li>
                  <li class="item-menu">
                    <a href="punto2.html" class="item-menu-link">Punto 2</a>
                  </li>
                  <li class="item-menu">
                    <a href="punto3.html" class="item-menu-link">Punto 3</a>
                  </li>
                  <li class="item-menu">
                    <a href="punto4.html" class="item-menu-link">Punto 4</a>
                  </li>
                  <li class="item-menu">
                    <a href="punto5.html" class="item-menu-link">Punto 5</a>
                  </li>
                  <li class="item-menu">
                    <a href="punto6.html" class="item-menu-link">Punto 6</a>
                  </li>
                  <li class="item-menu">
                    <a href="punto7y8.html" class="item-menu-link">Punto 7 y 8</a>
                  </li>
                  <li class="item-menu">
                    <a href="punto9.html" class="item-menu-link">Punto 9</a>
                  </li>
                  <li class="item-menu">
                    <a href="punto10.html" class="item-menu-link">Punto 10</a>
                  </li>
                  <li class="item-menu">
                    <a href="punto11.html" class="item-menu-link">Punto 11</a>
                  </li>
                  <li class="item-menu">
                    <a href="punto12.html" class="item-menu-link">Punto 12</a>
                  </li>
                </ul>
              </li>
              <li class="item-menu">
                <a href="https://taller6back.my-style.in" class="item-menu-link" target="_blank" >Taller Back End</a>
              </li>
              <li class="item-menu">
              <a href="http://vidriosydivisiones.my-style.in" class="item-menu-link" target="_blank" >Proyecto vidrieria</a>
            </li>
              <li class="item-menu item-menu-sub-menu">
                <a href="../index.html #contacto" class="item-menu-link">Contacto</a>
               <!-- <i class="fas fa-angle-down angle-view-sub-menu"></i>
                
                <ul class="sub-menu" id="sub-menu">
                  <li class="item-menu">
                    <a href="#" class="item-menu-link">GitHub</a>
                  </li>
                  <li class="item-menu">
                    <a href="#" class="item-menu-link"></a>
                  </li>
                  <li class="item-menu">
                    <a href="#" class="item-menu-link">Campañas de Google Ads</a>
                  </li>
                  <li class="item-menu">
                    <a href="#" class="item-menu-link">Campañas de Facebook Ads</a>
                  </li>
                  <li class="item-menu">
                    <a href="#" class="item-menu-link">Diseño para Redes Sociales</a> -->
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        
          <button class="btn-hamburguesa" id="btn-hamburguesa">
            <span></span>
            <span></span>
            <span></span>
          </button>
        
        </div>
      </header>
        
        
        `;
    }
}

window.customElements.define("menu-main", menumain);