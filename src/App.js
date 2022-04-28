import {BrowserRouter,Switch,Route} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {useEffect} from 'react';

import {auth} from './firebase';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { setUser } from './redux/actions';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import Admission from './pages/Admission';
import Art from './components/Courses/Art';
import Science from './components/Courses/Science';
import Commarce from './components/Courses/Commerce';

import Navigation from './components/navigation';

import UserRoute from './components/UserRoute';
import Footer from './components/Footer';

import AdmissionForm from './components/AdmissionForms/AdmissionForm';

const App =()=>{
  
  const dispatch = useDispatch();
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch(setUser(authUser));
      }else{
        dispatch(setUser(null));
      }
    })
  },[dispatch])
  return (
    <BrowserRouter>
      <div >
        <Navigation/>
        {/* <div className='App'> */}
        <div>
        <Switch>
          <Route exact path ="/" component={Home} />
          <Route exact path ="/login" component={Login} />
          <Route exact path ="/signup" component={Register} />
          <UserRoute exact path ="/admission" component={Admission} />
          <Route exact path ="/contactus" component={ContactUs} />
          <Route exact path ="/about" component={About} />
          <Route exact path ="/science" component={Science} />
          <Route exact path ="/commarce" component={Commarce} />
          <Route exact path ="/art" component={Art} />
          <Route exact path ="/admissionFillForm" component={AdmissionForm} />
        </Switch>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
   
  );
}

export default App;
