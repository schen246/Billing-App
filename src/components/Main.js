import React, {Component} from 'react';
import ToDo from "./ToDo/ToDo";

class Main extends Component {
    render() {
        return(
            <div className="main">
                <ToDo />
            </div>
        );
    }
}

export default Main;