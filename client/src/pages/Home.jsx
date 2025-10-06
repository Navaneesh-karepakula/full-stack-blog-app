import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import BlogList from '../components/Bloglist'
import Newsletter from '../components/Newsletter'
const Home = () => {
  return (
    <>
      <Navbar/>
      <Header/>
      <BlogList/>
      <Newsletter/>
    </>
  )
}

export default Home