import { createSlice } from "@reduxjs/toolkit";

const tasksInitialState = [];
export const tasksSlice = createSlice({
	name: "tasks",
	initialState: tasksInitialState,
	reducers: {
		addTask: {
			reducer(state, action) {
				state.push(action.payload);
			},
			prepare(title, text) {
				return {
					payload: {
						id: Math.floor(Math.random() * 100) + 1,
						title,
						text,
						status: false,
					},
				};
			},
		},

		toggleStatus(state, action) {
			for (const task of state) {
				if (task.id === action.payload) {
					task.status = !task.status;
					break;
				}
			}
		},
	},
});
export const { addTask, toggleStatus } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
