import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import Carousel from "./Components/Carousel";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ProductDetail from "./Components/ProductDetail";
import PropTypes from "prop-types";


class App extends Component {
  state ={
    numberOfItemsInCart: 0,
    cartItems: []
  }

  constructor(props) {
    super(props);
    this.handleAddtoCart = this.handleAddtoCart.bind(this);
  }
  
  handleAddtoCart(item) {
      const items = this.state.cartItems;
        
      items.push(item);
      this.setState({
          cartItems: items
      });
      console.log(this.state.cartItems);
    // const items = this.state.cartItems.slice();
    // items.push(item);
    // this.setState({
    //   cartItems: items
    }

    // this.setState({numberOfItemsInCart: this.state.numberOfItemsInCart + 1});
    // this.setState({cart: this.state.cart.push(this.props.products)});
    // console.log(this.props.cart);
        
      
  

  
  render() {
    const ProductDetails = this.props.products.map((p) => {
      return (
            <ProductDetail
              key={p.id}
              product={p}
              onHandleAddtoCart={this.handleAddtoCart} />
      );
    });
    // const products = this.props.products; 
    
    // const singleProduct = products.map((singleItem) => {
    //   return <ProductDetail products={singleItem} handleAddtoCart={handleAddtoCart} />
    // });
    
  
    return (
      <div className="App">
        {/* <Header>*/}
        <Header numberOfItemsInCart={this.state.cartItems.length} cart={this.state.cartItems} />
        {/* </Header>*/}
 
        <div className="container">

          <div className="row">

          <div className="col-md-3">
            <p className="lead">Shop Name</p>
            <div className="list-group">
              <a href="#" className="list-group-item">Category 1</a>
              <a href="#" className="list-group-item">Category 2</a>
              <a href="#" className="list-group-item">Category 3</a>
            </div>
          </div>

            <div className="col-md-9">
              {/* <Carousel>*/}
              <Carousel />
              {/* </Carousel>*/}
              <div className="row">
                {/* <ProductDetail>*/}
                


                {/* <ProductDetail products={props.products}/> */}
                {ProductDetails}
                    
                {/* </ProductDetail>*/}
    
                {/*
                    <div className="col-sm-4 col-lg-4 col-md-4">
                        <h4><a href="#">Like this template?</a>
                        </h4>
                        <p>If you like this template, then check out <a target="_blank" href="http://maxoffsky.com/code-blog/laravel-shop-tutorial-1-building-a-review-system/">this tutorial</a> on how to build a working review system for your online store!</p>
                        <a className="btn btn-primary" target="_blank" href="http://maxoffsky.com/code-blog/laravel-shop-tutorial-1-building-a-review-system/">View Tutorial</a>
                    </div>
*/}
              </div>

            </div>

          </div>

        </div>
   
        <div className="container">

          <hr />

          {/* <Footer>*/}
          <Footer />  
          {/* </Footer>*/}
        </div>
      </div>
    );
  }
}



App.propTypes = {
  numberOfItemsInCart: PropTypes.Number,
  products: PropTypes.Object,
  cart: PropTypes.Array
};

export default App;
