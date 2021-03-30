import * as React from "react"
import PropTypes from "prop-types" // I want to check in on this
import Header from "./header"
import Footer from "./footer"
 
 import SEO from "./seo"
 
 const Layout = ({ children }) => {
 
   return (
     <>
       <SEO />
       <Header />
         <main>{children}</main>
       <Footer />
     </>
   )
 }
 
 Layout.propTypes = {
   children: PropTypes.node.isRequired,
 }
 
 export default Layout
 