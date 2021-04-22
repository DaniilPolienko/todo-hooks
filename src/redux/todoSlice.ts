import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react-dom/test-utils';


interface Item {
    id: string,
    message: string
    done: boolean,
    uuid: string,
    createdAt: string,
  }
  
const todoSlice = createSlice({
    name: 'todos',
    initialState: [] as Item[],
    reducers: {
        addTodo: (state, action) => {
            const newTodo : Item= {
                id: Date.now().toString(36) + Math.random().toString(36).substring(2),
                message: action.payload.message,
                done: false,
                uuid: '123123123123',
                createdAt: Date.now().toString()
            };
            state.push(newTodo)
        },
         toggleComplete: (state, action) => {
             const index = state.findIndex((todo) => todo.id === action.payload.id)
             console.log(index)
             console.log(action.payload.id)
             state[index].done = action.payload.done
         },
         getTodos: (state, action) => {
            const newTodo : Item= {
                id: action.payload.id,
                message: action.payload.message,
                done: action.payload.done,
                uuid: action.payload.uuid,
                createdAt: action.payload.createdAt,
            };
            state.push(newTodo)
         }
    }
})

export const { addTodo, toggleComplete, getTodos } = todoSlice.actions;

export default todoSlice.reducer