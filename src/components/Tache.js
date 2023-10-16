import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask } from './actions';

const Tache = ({ id, description, isDone }) => {
const dispatch = useDispatch();

const handleToggleTask = () => {
dispatch(toggleTask(id));
};

return (
<div>
<input type="checkbox" checked={isDone} onChange={handleToggleTask} />
<span>{description}</span>
</div>
);
};

export default Tache;