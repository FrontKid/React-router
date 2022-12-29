import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './components/Home';
import Contacts from './components/Contacts';
import Info from './components/Info';
import NotFound from './components/NotFound';
import AllCourses from './components/AllCourses'
import SingleCourse from './components/SingleCourse';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='contacts' element={<Contacts />} />
            <Route path='info' element={<Info />} />
            <Route path='courses' element={<AllCourses />} />
            <Route path='courses/:slug' element={<SingleCourse />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
