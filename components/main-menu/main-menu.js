export class MainMenu extends HTMLElement{
    constructor(){
        super();
        this.render();
    }
    render(){
        this.innerHTML = /*html*/ `
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                <a class="navbar-brand" href="/index.html"> <img src="/imagenes/logoPrincipal-xl.png"  width="120px" height="120px" alt="" class="logo-principal"></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/campusarline.html">REGISTRO DE EMPLEADOS </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">REGISTRO DE USUARIOS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">COMPRA DE VUELOS</a>
                    </li>
                    </ul>
                </div>
                </div>
            </nav> 
        `
        
    }   
}
customElements.define("main-menu", MainMenu);

