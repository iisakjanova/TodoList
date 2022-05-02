import { Typography } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import TodoList from './containers/TodoList/TodoList';
import EditTask from './containers/EditTask/EditTask';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route exact path='/' element={<TodoList />} />
          <Route exact path='/add' element={<EditTask />} />
          <Route exact path='/edit/:id' element={<EditTask />} />
          <Route path='*' element={<Typography variant='h4'>Not found</Typography>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;