import React, {Component} from 'react';

class TodoHD extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="HD">
                <form id="to-do-form" onSubmit={this.props.addItem}>
                    <input type="text" placeholder="Enter task" value= {''} onChange={e => e.target.value}></input>
                    <button type="submit">Add</button>
                </form>
                {/* <input type="text" ref="newItem" onKeyDown={e => {
                    if (e.key === 'Enter') {
                        this.add(this.refs.newItem.value)
                    }
                }}/>
                <button onClick={
                    () => this.add(this.refs.newItem.value)
                }>Add</button> */}
            </div>
        );
    }

    add(item) {
        this.props.addTodo(item);
    }
}

export default TodoHD;