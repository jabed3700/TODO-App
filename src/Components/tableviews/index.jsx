import React from "react";
import PropTypes from "prop-types";
import {Input,Button,Table} from 'reactstrap'
// import Todos from "../todos";

const RowItem = ({todo,toggleSelect,toggleComplete})=>(
    <tr>
        <th scope="row">
            <Input
            type = 'checkbox'
            id={todo.id}
            checked={todo.isSelect}
            onchange = {()=>toggleSelect(todo.id)}
            />
        </th>
        <th>
            {todo.time.toDateString()}
        </th>
        <th>{todo.text}</th>
        <th>
            <Button color={todo.isComplete ? 'danger':'success'} onclick={()=>toggleComplete(todo.id)}>
            {todo.isComplete?'Completed':'Running'}
            </Button>
        </th>
    </tr>
)

RowItem.prototype ={
    todo:PropTypes.object.isRequired,
    toggleSelect: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired,
}


const TableView = ({todos,toggleSelect,toggleComplete}) =>(
    <Table>
        <thead>
            <tr>
                <th>#</th>
                <th>Time</th>
                <th>Todo</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
           {todos.map(todo=>(
            <RowItem 
            key = {todo.id} 
            todo = {todo}
            toggleSelect={toggleSelect}
            toggleComplete={toggleComplete}
            />

           ))}
        </tbody>
    </Table>
)

TableView.prototype ={
    todos:PropTypes.object.isRequired,
    toggleSelect: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired,
}

export default TableView;