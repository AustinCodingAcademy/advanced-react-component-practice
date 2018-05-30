import React from "react";
import PropTypes from "prop-types";

function ProductDetail (props) {
    // const {name, price, description, reviews, rating, imgUrl} = props.products;
    const starSpans = [];
    for (let index = 0; index < props.product.rating; index ++){
        starSpans.push(<span key={index} className="glyphicon glyphicon-star" />);
    }
    const emptyStarSpans = [];
    for (let index=0; index < 5- props.product.rating; index++){
        emptyStarSpans.push(<span key={index} className="glyphicon glyphicon-star-empty" />);
        
    }

//   const ratingStar = <span className="glyphicon glyphicon-star"></span>;
//   const productIndex = {props.products.rating};

//   ratingStarNumbers = function (){
//       for (i = 0; i < {productIndex};i++ ){
//           {ratingStar};
//       }
//   }
    //   render() {
    //     const products = this.props.products;
    //     const handleAddtoCart = this.props.handleAddtoCart;

    return (
    
      <div className="col-sm-4 col-lg-4 col-md-4">
        <div className="thumbnail">
          <img src={props.product.imgUrl} />
          <div className="caption">
            <h4 className="pull-right">{props.product.price}</h4>
            <h4><a href="#">{props.product.name}</a>
            </h4>
            <p>{props.product.description}<a target="_blank" href="http://www.bootsnipp.com">Bootsnipp - http://bootsnipp.com</a>.</p>
          </div>
          <div className="addButton">
            <button type="button" className="btn btn-defualt" onClick={() =>props.onHandleAddtoCart(props.product)}>Add To Cart</button>
          </div>


          <div className="ratings">
            <p className="pull-right">{props.product.reviews}</p>
            <p>

            {starSpans}
            {emptyStarSpans}
              {/* <span className="glyphicon glyphicon-star" />
              <span className="glyphicon glyphicon-star" />
              <span className="glyphicon glyphicon-star" />
              <span className="glyphicon glyphicon-star" />
              <span className="glyphicon glyphicon-star" /> */}
              {/* {ratingStarNumbers} */}

            </p>
          </div>
        </div>
      </div>

    

    );
//   function theClick() {
//     props.onHandleAddtoCart(props.products);
//   }


}
 

ProductDetail.propTypes = {
  products: PropTypes.object.isRequired
  
};
export default ProductDetail;
