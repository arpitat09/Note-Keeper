import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';

function App() {
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    const res = await axios.get('http://localhost:3001/api/notes');
    setNotes(res.data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="container">
      <h1>📝 Notes Keeper</h1>
      <NoteForm onAdd={fetchNotes} />
      <NoteList notes={notes} onDelete={fetchNotes} />
    </div>
  );
}

export default App;
