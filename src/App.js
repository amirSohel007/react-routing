import React from 'react';
import Navbar from './Components/Navbar';
import Layout from './Components/Layout'
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import About from './Components/About'
import Contact from './Components/Contact'
import Product from './Components/Products'
import ProductDetails from './Components/ProductDetails'


const Home =()=> {

  //api url : https://reqres.in/api/users
  return (
    <Layout>
      <div>
      
        <img src="https://www.blogtyrant.com/wp-content/uploads/2011/02/copyblogger_about.png" className="blog"/>
        <p>
          If you are a beginner who hasn’t tried yet a hand on data science
          projects, your possible transition from the starting point ‘no
          experience’ to so exceptionally desired destination called ‘expert’
          will be nothing more than datasets. Using all those websites with free
          data sets on various topics has a number of advantages. By dint of
          them, you can easily brush up your skills and develop your own style
          of working which is highly important today. And then, undoubtedly, you
          can confidently build an excellent data science/analyst CV, get a job
          of your dream and eventually feel like a data science king or a queen.
          Sounds great, isn’t it? So why then waiting any longer?
        </p>

        <p>
        s Using all those websites with free
          data sets on various topics has a number of advantages. By dint of
          them, you can easily brush up your skills and develop your own style
          of working which is highly important today. And then, undoubtedly, you
          can confidently build an excellent data science/analyst CV, get a job
          of your dream and eventually feel like a data science king or a queen. 
          If you are a beginner who hasn’t tried yet a hand on data science
          projects, your possible transition from the starting point ‘no
          experience’ to so exceptionally desired destination called ‘expert’
          will be nothing more than datasets. Using all those websites with free
          data sets on various topics has a number of advantages. By dint of
          them, you can easily brush up your skills and develop your own style
          of working which is highly important today. And then, undoubtedly, you
          can confidently build an excellent data science/analyst CV, get a job
          of your dream and eventually feel like a data science king or a queen.
          Sounds great, isn’t it? So why then waiting any longer?
        </p>
      </div>
    </Layout>
  );
}


function App() {
  return (

    <BrowserRouter>
      <Navbar />
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route exact path="/product" component={Product}></Route>
            <Route path="/product/:id" component={ProductDetails}></Route>
            <Route path="/contact" component={Contact}></Route>
          </Switch>
    </BrowserRouter>
  );
}

export default App;
