import React, {Component} from 'react';
import TodoHD from "./TodoHD";
import TodoBD from "./TodoBD";
import TodoFT from "./TodoFT";

class ToDo extends Component {
    constructor() {
        super();
        this.state = {
            todos: [
                {id: 1, title: "task1", done: true},
                {id: 2, title: "task2", done: false},
                {id: 3, title: "task3", done: false},
                {id: 4, title: "task4", done: false},
                {id: 5, title: "task5", done: false},
                {id: 6, title: "task6", done: false}
            ],
            type: 1 // 1-all, 2-done, 3-not done
        }
    }

    render() {
        return (
            <div>
                <TodoHD addTodo={this.addItem.bind(this)} />
                <TodoBD todoList={this.state.todos}
                    updateItem={this.updateItem.bind(this)}
                    deleteItem={this.deleteItem.bind(this)}
                    showType={this.state.type}
                />
                <TodoFT todoList={this.state.todos}
                    changeType={this.changeType.bind(this)}
                    type={this.state.type}
                />
            </div>
        );
    }

    addItem(title) {
        this.setState({
            todos: [...this.state.todos, {
                id: this.state.todos.length + 1,
                title: title,
                done: false
            }]
        });
    }

    updateItem(id, done) {
        this.setState({
            todos: this.state.todos.map(item => item.id === id ? {...item, done: done} : item)
        });
    }

    deleteItem(id) {
        this.setState({
            todos: this.state.todos.filter(item => item.id !== id)
        });
    }

    changeType(type) {
        this.setState({type});
    }
}

export default ToDo;