import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import GetAllJobsComponent from './components/GetAllJobsComponent/GetAllJobsComponent';
import AddNewJobsComponent from './components/AddNewJobsComponent/AddNewJobsComponent';
import EditJobsComponent from './components/EditJobsComponent/EditJobsComponent';
import DeleteJobsComponent from './components/DeleteBooksComponent/DeleteJobsComponent';

function App() {
  return (
    <Router>
            <div className="container">
              <h1>Job Portal App</h1>
              
            <nav className="nav-menu">
                <Link to="/" >Home</Link>
                <Link to="/admin/add" >Add Jobs</Link>
                <Link to="/admin/edit" >Edit Jobs</Link>
                <Link to="/admin/delete" >Delete Jobs</Link>
            </nav>
           <Routes>
                 <Route exact path='/' element={<GetAllJobsComponent/>}></Route>
                 <Route path='/admin/add' element={<AddNewJobsComponent/>}></Route>
                 <Route path='/admin/edit' element={<EditJobsComponent/>}></Route>
                 <Route path='/admin/delete' element={<DeleteJobsComponent/>}></Route>
          </Routes>
          </div>
       </Router>
  );
}

export default App;
