import logo from './logo.svg';
import './App.css';
import Hola from "./component/Hola";
import {Component} from "react";
import Contador from "./component/Contador";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <div className="App-intro">
                    <Hola nombre={prompt("Dime tu nombre")}/>
                    <Contador/>
                </div>
            </div>
        );
    }
}

export default App;
