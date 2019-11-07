import React, { Component } from 'react';
import './App.css';


class App extends Component {  
  render() {
    return (
      <div className="container-fluid">
        <nav className="navbar navbar-light bg-warning">
          <h1>Loja do jão Celulares AND Acessorios</h1>

           <form className="form-inline">
             <input className="form-control mr-sm-2" type="search" placeholder="Pesquisar" aria-label="Pesquisar" />
             <i className="fas fa-search btn"></i>
           </form>

           <form class="form-inline">

             <div class="input-group">
              <div class="input-group-prepend">
               <span class="input-group-text" id="basic-addon1">@</span>
              </div>
              <input type="text" class="form-control" placeholder="Usuário" aria-label="Usuário" aria-describedby="basic-addon1" />
             </div>

             <div class="input-group">
              <div class="input-group-prepend">
               <span class="input-group-text" id="basic-addon1">#</span>
              </div>
              <input type="text" class="form-control" placeholder="Senha" aria-label="Senha" aria-describedby="basic-addon1" />
             </div>


           </form>
        </nav>

      <footer className="footer bg-warning text-center">
        <h1>Loja do jão Porque aqui tem coragem!</h1>
      </footer>

      </div>
    );
  }
}

export default App;
