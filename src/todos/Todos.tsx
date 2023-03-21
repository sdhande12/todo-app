import type { RootState } from "../store/store";
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, ITodo, complete } from "../store/todos/todoSlice";
const Todos = () => {
    const todos = useSelector((state: RootState) => state.todo);
    const dispatch = useDispatch();

    return (
        <ul>
            {todos?.map(x => (
                <li style={{ backgroundColor: x?.isComplete ? 'red' : 'gray' }}>{x?.desc}

                    <button onClick={() => dispatch(complete(x.id))}>Complete</button>
                </li>
            ))}
        </ul>
    );
}

export default Todos;