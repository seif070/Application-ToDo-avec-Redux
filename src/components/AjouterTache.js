import React, { useState } from 'react';

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

export default AjouterTache;
