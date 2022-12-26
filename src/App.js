import './App.css';
import { useState } from 'react';
import homepic from "./main.png"
import Footer from './components/Footer';
import { Link } from 'react-router-dom'
import {BrowserRouter as Router} from 'react-router-dom';


function App() {


  return (
    <Router>
    <>
      <div className="container mx-auto flex m-8 place-content-center">
      <div className='box m-4'>
        <h2 className="font-serif text-4xl font-semibold"> Welcome to Aibacus </h2>
        <div className='sm:hidden md:hidden lg:hidden xl:hidden max-w-xs mx-auto m-4' >
        <img src={homepic} className='rounded-xl'></img>
      </div>

      <p className='mt-6 font-serif text-l'>A place where you can:</p> 
      <ul className='font-serif text-l p-2 list-disc'>
        <li>help your child learn faster and more effectively</li>
        <li>instantly create assignments adapted to your child's unique learning style</li>
        <li>observe the pace and analyze the learning progress</li>
        <li>share your ideas with other parents</li>
      </ul>

      <button className='mt-6 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl'>
        Sign up today
      </button>
      
      <p className='mt-6 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl'>
      <Link to="/Footer">
      Next page
      </Link>
      </p>

      </div>

      <div className='hidden sm:block md:block lg:block xl:block mr-6 max-w-md' >
      <img src={homepic} className='rounded-xl'></img>
      </div>
      </div>
    </>
    </Router>
  );
}

export default App;
