import React, { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoItem from './components/TodoItem';
//bla
function App() {
  const initialValues = [
    { id: 1, title: "Wake Up" },
    { id: 2, title: "Make Breakfast" }
  ];

  const [items, setItems] = useState(initialValues);
  const [item, setItem] = useState('');
  const [editItem, setEditItem] = useState(false);
  const [id, setId] = useState(uuidv4());

  const handleChange = (e) => {
    console.log('handle change')
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('handle submit');
  };

  const clearList = () => {
    console.log('clear List');
  };

  const handleDelete = (id) => {
    console.log(`handle delete ${id}`);
  }

  const handleEdit = (id) => {
    console.log(`handle edit ${id}`);
  }

  return (
    <div className='container'>
      <div className="row">
        <div className="col-10 col-md-8 mx-auto mt-5">
          <h3 className='text-capitalize text-center'>Todo Input</h3>
          <TodoInput
            item={item}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            editItem={editItem}
          />
          <TodoList
            items={setItems}
            clearList={clearList}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
