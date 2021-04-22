import React, {Component} from 'react';

class Hola extends Component {
    render() {
        return (<h1>{this.props.nombre === "Roger" ? "Hola Roger": "Tu no eres Roger"}</h1>);
    }
}

export default Hola;