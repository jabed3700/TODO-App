import React from "react";

import ListView from "../listviews";
import TableView from "../tableviews";

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
        ]
    }
    toggleSelect = todoId =>{

    }
    toggleComplete = todoId =>{

    }
    render(){
        return(
            <div>
                <h1 className="display-4 text-center mb-4">Todo Application</h1>
                <div className="">
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
            </div>
        )
    }
}

export default Todos;