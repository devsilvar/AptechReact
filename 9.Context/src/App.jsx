import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Todolist from './todolist/Todolist';
import ContolledForm from './forms/ContolledForm';
import MultipleVal from './forms/MultipleVal';
import UncontrolledForm from './forms/UncontrolledForm';
import { DisplayForms } from './forms/DanielTodo';

function App() {
  console.log('i was rerendered');
  return (
    <section className='me-auto w-25'>
      <Todolist />
      {/* <ContolledForm />
      <MultipleVal />
      <UncontrolledForm />
      <DisplayForms /> */}

      <h2>Hello</h2>
    </section>
  );
}

export default App;
