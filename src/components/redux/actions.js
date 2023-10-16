


export const addTask = (description) => ({
type: 'ADD_TASK',
payload: { description, isDone: false },
});

export const toggleTask = (id) => ({
type: 'TOGGLE_TASK',
payload: { id },
});

