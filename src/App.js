import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import './App.css';
import DrinksDetails from './components/DrinksDetails/DrinksDetails';
import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts';
import Header from './components/Header/Header';
import Login from './components/Header/Login/Login';
import Home from './components/Home/Home';
import Logout from "./components/Logout/Logout";
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/private/PrivateRoute';
import Products from './components/Products/Products';
import Register from './components/Register/Register';
import Testimonials from './components/Testimonials/Testimonials';
import AuthProvider from './Context/AuthProvider';
// out context Api

function App() {

  return (
    <div className="App">

      <AuthProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={
              <Home />
            } />

            <Route path="/home" element={
              <Home />
            } />

            <Route path="/drinks" element={<Products />} />

            {/* Private Route Starts */}
            <Route path="/*" element={<PrivateRoute />}>
              <Route path="drinks_details/:id" element={<DrinksDetails />} />
              <Route path="featured" element={<FeaturedProducts />} />
              <Route path="logout" element={<Logout />} />
            </Route>
            {/* Private Route Ends */}

            <Route path="/testimonials"
              element={<Testimonials />}
            />

            <Route path="/login"
              element={
                <Login />}
            />

            <Route path="/register"
              element={
                <Register />
              }
            />

            <Route path="*" element={<NotFound />
            } />

          </Routes>
        </Router>

      </AuthProvider>

    </div>
  );
}

export default App;
