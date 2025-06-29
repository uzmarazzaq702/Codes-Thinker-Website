import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Team from './pages/Team';
import Contactes from './pages/Contactes';
import Footer from './components/Footer';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Login from './pages/Login';
// import Signin from './pages/signin';
import Signin from "./pages/Signin";


import Whatsap from './pages/Whatsap';

import Project from './pages/Project';


const MainLayout = () => {
  return ( 
    <div className=' w-full min-h-screen overflow-x-hidden'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/services", element: <Services /> },
      { path: "/projects", element: <Project /> },
      { path: "/team", element: <Team /> },
      { path: "/contact", element: <Contactes /> },
      { path: "/login", element: <Login /> },
      { path: "/signin", element: <Signin /> },
      { path: "/whatsap", element: <Whatsap /> },
    ]
  }
]);
// 

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
