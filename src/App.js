import logo from './logo.svg';
import './App.css';
import Signin from './Signin/Signin.js'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Signup from './Signup/Signup.js'
import Verify from './Verify/Verify.js'
import Forgot from './Forgot/Forgot.js'
import Welcome from './Welcome/Welcome.js'

function App() {
  return (
<>
    <Router>
      <Routes>
        <Route exact path='/' element={<Signin/>}/>
        <Route exact path='/signup' element={<Signup/>}/>
        <Route exact path='/verify' element={<Verify/>}/>
        <Route exact path='/forgot' element={<Forgot/>}/>
        <Route exact path='/welcome' element={<Welcome/>}/>

      </Routes>
    </Router>
</> 
 );
}

export default App;
