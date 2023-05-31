import { useState } from 'react';
function Todo() {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([]);
    const handleChange = (e) => {
        console.log(e.target.value);
        setTodo(e.target.value)
    }
    const addTodo = () => {
         // ['manger', 'lire', 'boire un café'] boire un café const array = [...todos]
        //  const nTodos = todos.slice();
        //  nTodos.push(todo)
        setTodos([...todos, todo]);
        setTodo('');
    }
    const deleteTodo = (todo) => {
        console.log(todo);
        const newTodos = todos.filter((item) => item !== todo);
        setTodos(newTodos);
    }
    console.log('todos', todos);
  return (
    <div>
      <h1>React Todo App</h1>
      <div>
        <input
            type="text"
            plaeholder="Ajouter nouveau Todo"
            value={todo}
            onChange={handleChange}
        />
        <button onClick={addTodo}>Ajouter</button>
      </div>
      <ul>
        {todos.length > 0 ? todos.map((item) => (
                <li>{item}
                    <button onClick={() => deleteTodo(item)}>Delete</button>
                </li>
        ))
    : (
        <div>Aucun Todo trouvé</div>
    )
    }
      </ul>
    </div>
  );
}

export default Todo;
