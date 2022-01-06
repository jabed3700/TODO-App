import React from "react";
import {Modal,ModalBody,ModalHeader} from 'reactstrap'
import shortid from "shortid";

import ListView from "../listviews";
import TableView from "../tableviews";
import CreateTodoForm from "../todo-form"
import Controller from "../controller"

class Todos extends React.Component{
    state = {
        todos:[
            {
                id:'1',
                text:'lorem ipsum',
                desciption: 'Simple description',
                time: new Date(),
                isComplete:false,
                isSelect:false,
            },
            {
                id:'2',
                text:'lorem ipsum',
                desciption: 'Simple description',
                time: new Date(),
                isComplete:false,
                isSelect:false,
            },
            {
                id:'3',
                text:'lorem ipsum',
                desciption: 'Simple description',
                time: new Date(),
                isComplete:false,
                isSelect:false,
            },
        ],
        isOpenTodoForm:false,
        searchTerm:''
    }
    toggleSelect = todoId =>{
        const todos = [...this.state.todos] 
        const todo = todos.find(t=>t.id ===todoId) 
        todo.isSelect = !todo.isSelect;

        this.setState({todos})
    }
    toggleComplete = todoId =>{
        const todos = [...this.state.todos] 
        const todo = todos.find(t=>t.id ===todoId) 
        todo.isComplete = !todo.isComplete;

        this.setState({todos})
    }
    handleSearch=()=>{}
    toggleForm=()=>{
        this.setState({
            isOpenTodoForm: !this.state.isOpenTodoForm
        })
    }
    createTodo = todo=>{
        todo.id= shortid.generate()
        todo.time = new Date()
        todo.isComplete = false
        todo.isSelect = false

        const todos = [todo, ...this.state.todos] 
        this.setState({todos})
        this.toggleForm()

    }
    render(){
        return(
            <div>
                <h1 className="display-4 text-center mb-4">Todo Application</h1>
                <Controller
                    term={this.state.searchTerm} 
                    toggleForm = {this.toggleForm}
                    handleSearch = {this.handleSearch}
                    
                />
                <div className="mt-4">
                    <ListView todos={this.state.todos}
                    toggleSelect={this.toggleSelect}
                    toggleComplete={this.toggleComplete}
                    />
                </div>
                <div className="">
                    <TableView todos={this.state.todos}
                    toggleSelect={this.toggleSelect}
                    toggleComplete={this.toggleComplete}
                    />
                </div>

                <Modal
                    isOpen = {this.state.isOpenTodoForm}
                    toggle={this.toggleForm}
                >
                    <ModalHeader toggle={this.toggleForm}>
                    Create new Todo Item
                    </ModalHeader>

                    <ModalBody>
                        <CreateTodoForm createTodo = {this.createTodo}/>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default Todos;