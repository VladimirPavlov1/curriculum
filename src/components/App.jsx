import { Component } from "react";
import todos from "./todos.json"


class App extends Component {
  
  state = {
    todos:todos,
   }

   deleteTodos=todoId=>(
    this.setState(prevState=>({
      todos:prevState.todos.filter(todo=>todo.id!==todoId)
    }))
   )

   onToggleCompleted=todoId=>(
    this.setState(prevState=>({
      todos:prevState.todos.map(todo=>{
        if(todo.id===todoId){
          return {...todo, completed:!todo.completed}
          
        }
        return todo;
      })
    }))
   )
  
  
  
  
  render(){ 

    const{todos}=this.state

    return <div>
  
      <TodoList todos={todos} onDeleteTodo={this.deleteTodos}/>
    </div>
  };
};

export default App;
