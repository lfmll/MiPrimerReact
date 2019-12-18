import React,{Component} from 'react';
import logo from './logo.svg';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardText} from 'material-ui/Card';

import {indigo400, redA400, lightBlueA400, amberA400} from 'material-ui/styles/colors';
import './App.css';


import Title from './componentes/titulo';
import {hola} from './componentes/titulo';

// function App() {
class App extends Component{
  constructor(props){
    super(props);
    this.state={
      numero:0
    };
    this.updateNumero=this.updateNumero.bind(this);
  }
    // cambiar por intervalos
    // setInterval(()=>{
    //   this.setState({
    //     numero:this.state.numero+1
    //   });
    // },3000)

    updateNumero(){
      this.setState({
        numero:this.state.numero+1
      });
    }

  render(){
    return (
      <MuiThemeProvider>
        <div>
          <div className="App-Fondo">
            <div style={{"width":"80%","margin":"0 auto"}}>
            <Title></Title>
            <h2>{this.state.numero}</h2>
            // <button onClick={()=>{this.updateNumero()}}>Crear Cuenta</button>
            <RaisedButton label="Crear Cuenta" onClick={this.updateNumero} primary={true}/>
            <img src={process.env.PUBLIC_URL+'/imagen/face.jpg'}/>

            </div>

          </div>

          <div style={{'background-color': indigo400, 'padding':'40px'}}>
            <ul>
              <Card className="Header-Benefit">
                <CardText>
                  <div className="row">
                    <div className="Header-Benefit-image" style={{'backgroundColor': redA400}}>
                      <img src={process.env.PUBLIC_URL+'/imagen/profesional.jpg'}/>
                        <div className="Header-Benefit-content">
                          <h3>Cosas por Hacer</h3>
                          <p>completa la lista</p>
                          <h3>Dudas?</h3>
                        </div>
                    </div>
                  </div>

                </CardText>
              </Card>

            </ul>
          </div>
        </div>
      </MuiThemeProvider>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     {hola()}
      //     <h1 className="App-title">Hola Luis Fernando </h1>
      //     <Title titles="Fercho"></Title>
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    );
  }
}

export default App;
