import React, {Component} from 'react';

class TodoItem extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <input type="checkbox"
                    checked={this.props.data.done}
                    onChange={() => {
                        this.props.updateHelper(this.props.data.id, !this.props.data.done)
                    }}
                />
                <span>{this.props.data.title}</span>
                <button onClick={
                    () => {
                        this.props.delHelper(this.props.data.id)
                    }
                }>Delete</button>
            </div>
        );
    }
}

export default TodoItem;