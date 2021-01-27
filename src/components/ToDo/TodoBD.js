import React, {Component} from 'react';
import TodoItem from './TodoItem';

class TodoBD extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                {
                    this.props.todoList.filter(item => {
                        const type = this.props.showType;
                        if (type === 1) return item;
                        if (type === 2) return item.done;
                        if (type === 3) return !item.done;
                    }).map(item => {
                        return <TodoItem key={item.id}
                            data={item}
                            updateHelper={this.props.updateItem}
                            delHelper={this.props.deleteItem}
                        />
                    })
                }
            </div>
        );
    }
}

export default TodoBD;