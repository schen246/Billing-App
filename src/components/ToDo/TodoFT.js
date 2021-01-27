import React, {Component} from 'react';

class TodoFT extends Component {
    constructor() {
        super();
    }

    render() {
        const list = this.props.todoList;
        const allLen = list.length;
        const doneLen = list.filter(item => item.done).length;
        const notDoneLen = list.filter(item => !item.done).length;
        return (
            <div>
                <button
                    onClick={() => {this.props.changeType(1)}}
                    className={this.props.type === 1 ? 'active' : null}
                >All ({allLen})</button>

                <button
                    onClick={() => {this.props.changeType(2)}}
                    className={this.props.type === 2 ? 'active' : null}
                >Done ({doneLen})</button>

                <button
                    onClick={() => {this.props.changeType(3)}}
                    className={this.props.type === 3 ? 'active' : null}
                >Todo ({notDoneLen})</button>
            </div>
        );
    }
}

export default TodoFT;