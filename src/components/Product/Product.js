import React from 'react';
import ReactModal from '../ReactModal/ReactModal';
import './Product.css'
const Product = (props) => {
    // console.log(props.product);
    const { setCartCount } = props;
    // console.log(props);
    return (
        <div className='col-md-4 mb-2' data-aos="fade-up">
            <div className="card p-3 border">
                <img id="img-id" className='w-50 m-auto img-fluid' src={props.product.image} alt="" />
                <h2>{props.product.title.slice(0, 10)}</h2>
                <div className='d-flex justify-content-around'>
                    <button onClick={setCartCount} className='btn btn-success'>Add to Cart</button>
                    <button className='btn btn-danger'>Delete</button>
                    {/* <button className='btn btn-info'>Details</button> */}
                    <ReactModal product={props.product}></ReactModal>
                </div>

            </div>

        </div>
    );
};

export default Product;