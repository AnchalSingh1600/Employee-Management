import Header from './components/headerComponent';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Switch} from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import AddEmployeeComponent from './components/AddEmployeeComponent';
import ShowAllList from './components/ShowAllList'

function App() {
  return (
    <>
      <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<ShowAllList />}></Route>
          <Route path="/employees" element={<ListEmployeeComponent />}></Route>
          <Route path="/add-employee" element={<AddEmployeeComponent />}></Route>
          <Route path="/edit-employee/:id" element={<AddEmployeeComponent />}></Route>
        </Routes>
      </div>
      <FooterComponent/>
      </Router>   
    </>
  ); 
}

export default App;
 

