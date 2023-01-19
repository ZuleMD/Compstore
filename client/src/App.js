import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom'

import Homescreen from './screens/Clientscreens/Homescreen';
import Loginscreen from './screens/Adminscreens/auth/Loginscreen';
import Registerscreen from './screens/Adminscreens/auth/Registerscreen';
import Footer from './components/Footer';
import Adminscreen from './screens/Adminscreens/CRUD/Adminscreen'
import CompDetails from './screens/Clientscreens/CompDetails';
function App() {
  return (
    <div>
      <BrowserRouter>

        <Route path="/" exact component={Homescreen} />
        <Route path="/dashboard" component={Adminscreen} />
        <Route path="/register" exact component={Registerscreen} />
        <Route path="/login" exact component={Loginscreen} />
        <Route path="/compdetails/:compid" exact component={CompDetails} />

      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
