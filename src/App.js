import React, { Component } from 'react';
import './App.css';
import logo from './Logo.PNG' ;
import logoF from './LogoF.PNG';


class App extends Component {  
  render() {
    return (
      <div className="container-fluid">
        <nav className="navbar navbar-light">

          <img src={logo} alt=" Logo" />
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

      <footer className="footer text-center">
      <img src={logoF} alt=" LogoF " id='logo-footer-id' className="img-fluid" />
      </footer>

      </div>
    );
  }
}

export default App;
