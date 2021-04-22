import React, {Component} from 'react';

class Contador extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contador: 0
        };
    }

    aumentaContador = () => {
        this.setState({contador: this.state.contador + 1});
    }

    render() {
        return (
            <div>
                <span>{"contador: " + this.state.contador}<br/></span>
                <button onClick={this.aumentaContador}>Haz clic para aumentar</button>
            </div>);
    }
}

export default Contador;