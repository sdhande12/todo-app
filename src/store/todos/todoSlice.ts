import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ITodo {
    id: Number;
    desc: string;
    isComplete?: boolean;
}

const initialState: ITodo[] = [
    { id: 1, desc: 'Check Email' },
    { id: 2, desc: 'Water Plant' },
    { id: 3, desc: 'Buy Grocery' }
];

export const todoSlice = createSlice({
    name: 'todoSlice',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<ITodo>) => {
            state.push(action?.payload);
        },
        complete: (state, action: PayloadAction<Number>) => {
            const item = state.find(x => x.id === action.payload);
            if (item) {
                item.isComplete = true;
            }
        }
    }
});

export const { addTodo, complete } = todoSlice.actions;
export default todoSlice.reducer;