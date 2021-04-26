import './App.css';
import {Component} from "react";
import Contador from "./component/Contador";
import Hola from "./component/Hola";
import Title from "./component/Titulo";
//import {Button} from "@material-ui/core";
import Button from "./component/Button"

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newTask: "",
            //tasks: [],
        }
    }

    handleTaskChange = (event) => {
        this.setState({
            newTask: event.target.value,
        })
    }

    render() {
        return (
            <div className="container">
                <Title/>
                <Hola nombre="Escribe algo"/>
                <div className="input">
                    <input onChange={this.handleTaskChange} type="text"/>
                </div>
                <h2>{this.state.newTask}</h2>
                <Contador/>
                <div>
                    <h2>
                        Prueba de botón con material ui
                    </h2>
                </div>
                <Button/>
            </div>
        );
    }
}

export default App;
