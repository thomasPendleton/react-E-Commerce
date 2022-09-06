import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import {
  AboutPage,
  AuthWrapper,
  CartPage,
  CheckoutPage,
  ErrorPage,
  HomePage,
  PrivateRoute,
  ProductsPage,
  SingleProductPage,
} from "./pages" 

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <Switch>
        <Route exact path="/">
          <HomePage></HomePage>
        </Route>
        <Route exact path="/about">
          <AboutPage></AboutPage>
        </Route>
        <Route exact path="/cart">
          <CartPage></CartPage>
        </Route>
        <Route exact path="/products">
          <ProductsPage></ProductsPage>
        </Route>

        <Route exact path="/products/:id" children={<SingleProductPage />} />

        <Route exact path="/checkout">
          <CheckoutPage></CheckoutPage>
        </Route>
        <Route exact path="*">
          <ErrorPage></ErrorPage>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  )
}

export default App