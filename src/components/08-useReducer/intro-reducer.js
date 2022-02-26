
const estadoInicial = [{
    id: 1,
    todo: 'Comprar bolo',
    done: false
}];

const reducerTodo = (state = estadoInicial, action) => {

    if (action?.type === 'agregar') {
        return [...estadoInicial, action.payload]
    }

    return estadoInicial;
}

let todos = reducerTodo();

// todos.push() no usar el push con use reducer en React por que modifica el state

const newTodo = {
    id: 2,
    todo: 'Comprar kitkat',
    done: false
};

const accionAgregar = {
    type: 'agregar',
    payload: newTodo
}

todos = reducerTodo(todos, accionAgregar)

console.log(todos)