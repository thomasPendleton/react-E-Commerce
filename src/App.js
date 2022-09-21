import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Navbar, Sidebar, Footer } from "./components"
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
    <AuthWrapper>
      <Router>
        <Navbar></Navbar>
        <Sidebar></Sidebar>

        <Routes>
          <Route path="/" element={<HomePage />} />

          {/*  <Route exact path="/">
             <HomePage></HomePage>
           </Route> */}

          <Route path={"about"} element={<AboutPage />} />
          {/* <Route exact path="/about">
            <AboutPage></AboutPage>
          </Route> */}

          <Route path={"cart"} element={<CartPage />} />
          {/* <Route exact path="/cart">
            <CartPage></CartPage>
          </Route> */}

          <Route path={"products"} element={<ProductsPage />} />
          {/* <Route exact path="/products">
            <ProductsPage></ProductsPage>
          </Route> */}

          <Route path={"products/:id"} element={<SingleProductPage />} />
          {/* <Route exact path="/products/:id" children={<SingleProductPage />} /> */}

          <Route
            path={"checkout"}
            element={
              <PrivateRoute>
                <CheckoutPage />
              </PrivateRoute>
            }
          />
          {/* <PrivateRoute exact path="/checkout">
          <CheckoutPage></CheckoutPage>
           </PrivateRoute> */}

          <Route path={"*"} element={<ErrorPage />} />
          {/*  <Route exact path="*">
             <ErrorPage></ErrorPage>
           </Route> */}
        </Routes>

        <Footer></Footer>
      </Router>
    </AuthWrapper>
  )
}

export default App
