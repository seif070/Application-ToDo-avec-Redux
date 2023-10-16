import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../components/redux/actions';

const AjouterTache = ({ addTask }) => {
const [description, setDescription] = useState('');

const handleAddTask = () => {
addTask(description);
setDescription('');
}

return (
<div>
<input
type="text"
placeholder="Ajouter une tâche"
value={description}
onChange={(e) => setDescription(e.target.value)}
/>

<button onClick={handleAddTask}>Ajouter</button>
</div>
);
}

const mapDispatchToProps = {
addTask
};

export default connect(null, mapDispatchToProps)(AjouterTache);
