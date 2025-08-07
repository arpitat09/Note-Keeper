import React from 'react';
import axios from 'axios';

export default function NoteList({ notes, onDelete }) {
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3001/api/notes/${id}`);
    onDelete();
  };

  return (
    <div>
      {notes.map(note => (
        <div className="note-card" key={note._id}>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <p className="tags"><strong>Tags:</strong> {note.tags.join(', ')}</p>
          <button onClick={() => handleDelete(note._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
