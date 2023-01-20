

export const Todolist =({todos,onDeleteTodo})=>(
    <ul>
        {todos.map(({id,text,completed})=>
        <li key={id}>
            <input type="checkbox"
            checked={completed}
            onChange={}/>
        </li>
        )}
    </ul>
)