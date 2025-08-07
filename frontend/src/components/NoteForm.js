import React, { useState } from 'react';
import axios from 'axios';

export default function NoteForm({ onAdd }) {
  const [note, setNote] = useState({ title: '', content: '', tags: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newNote = {
      ...note,
      tags: note.tags.split(',').map(t => t.trim())
    };
    await axios.post('http://localhost:3001/api/notes', newNote);
    setNote({ title: '', content: '', tags: '' });
    onAdd();
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <input name="title" value={note.title} onChange={handleChange} placeholder="Title" required />
      <textarea name="content" value={note.content} onChange={handleChange} placeholder="Content" />
      <input name="tags" value={note.tags} onChange={handleChange} placeholder="Tags (comma-separated)" />
      <button type="submit">Add Note</button>
    </form>
  );
}
