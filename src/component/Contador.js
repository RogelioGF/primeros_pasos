import React, {Component} from 'react';

class Contador extends Component {
    constructor() {
        super();
        this.state = {
            contador: 0
        };
    }

    aumentaConatador = () => {
        this.setState({contador: this.state.contador + 1});
    }

    render() {
        return (
            <div>
                <span>{"contador: " + this.state.contador}<br/></span>
                <button onClick={this.aumentaConatador}>Haz clic para aumentar</button>
            </div>);
    }
}

export default Contador;