import './App.css';

import {BrowserRouter,Switch,Route} from "react-router-dom";
import Home from "./Pages/Home";
import AppoinmentPage from "./Pages/Appoiment/AppoinmentPage";
import Footer from "./Components/Foooter/Footer";
import LogIn from "./Pages/LogInPage/LogIn";
import AuthProvider from "./Context/AuthProvider";
import Register from "./Pages/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Dashboard from "./Pages/DashBoard/Dashboard";
import NavigationHeader from "./Components/Navigation/Navigation";


function App() {
  return (
    <div className="App">
     <AuthProvider>
         <BrowserRouter>
             <NavigationHeader></NavigationHeader>
             <Switch>
                 <Route exact path="/">
                     <Home></Home>
                 </Route>
                 <Route exact path="/home">
                     <Home></Home>
                 </Route>
                 <Route path="/appoinment">
                     <AppoinmentPage></AppoinmentPage>
                 </Route>
                 <Route path="/login">
                     <LogIn></LogIn>
                 </Route>
                 <Route path="/register">
                     <Register></Register>
                 </Route>
                 <PrivateRoute path="/dashboard">
                     <Dashboard></Dashboard>
                 </PrivateRoute>
             </Switch>
             <Footer></Footer>
         </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
