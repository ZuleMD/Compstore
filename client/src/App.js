import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom'

import Homescreen from './screens/Homescreen';
import Loginscreen from './screens/Loginscreen';
import Registerscreen from './screens/Registerscreen';
import Footer from './components/Footer';
import Adminscreen from './screens/Adminscreens/Adminscreen'
import CompDetails from './screens/CompDetails';
function App() {
  return (
    <div>
      <BrowserRouter>

        <Route path="/" exact component={Homescreen} />
        <Route path="/dashboard" component={Adminscreen} />
        <Route path="/register" exact component={Registerscreen} />
        <Route path="/login" exact component={Loginscreen} />
        <Route path="/compdetails" exact component={CompDetails} />

      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
