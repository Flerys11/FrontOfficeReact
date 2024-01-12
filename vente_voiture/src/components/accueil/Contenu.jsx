import React from 'react';
import { Link } from 'react-router-dom';

function importAll(r) {
    return r.keys().map(r);
}

const productImages = importAll(require.context('../../front/img/products/', false, /\.(png|jpe?g|svg)$/));

const products = [
    { name: 'Kui Ye Chen’s AirPods', price: '$250' },
    { name: 'Kui Ye Chen’s AirPods', price: '$250' },
    { name: 'Kui Ye Chen’s AirPods', price: '$250' },
    { name: 'Kui Ye Chen’s AirPods', price: '$250' },
    { name: 'Kui Ye Chen’s AirPods', price: '$250' },
    { name: 'Kui Ye Chen’s AirPods', price: '$250' },
    { name: 'Kui Ye Chen’s AirPods', price: '$250' },

];

console.log("Length of productImages:", productImages.length);

function Contenu() {
    return (
        <div className="row">
            {productImages.map((image, index) => (
                <div className="col-xl-3 col-lg-4 col-sm-6" key={index}>
                    <div className="product text-center">
                        <div className="position-relative mb-3">
                            <div className="badge text-white bg-"></div>
                            <Link to="/product-detail" className="d-block">
                                <img className="img-fluid w-100" src={image} alt={`Product ${index + 1}`} />
                            </Link>
                            <div className="product-overlay">
                                <ul className="mb-0 list-inline">
                                    <li className="list-inline-item m-0 p-0">
                                        <Link to="#!" className="btn btn-sm btn-outline-dark">
                                            <i className="far fa-heart"></i>
                                        </Link>
                                    </li>
                                    <li className="list-inline-item m-0 p-0">
                                        <Link to="/Detail" className="btn btn-sm btn-dark">
                                            Add to cart
                                        </Link>
                                    </li>
                                    <li className="list-inline-item me-0">
                                        <Link to="#productView" className="btn btn-sm btn-outline-dark" data-bs-toggle="modal">
                                            <i className="fas fa-expand"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {products[index] && (
                            <>
                                <h6><Link className="reset-anchor" to="/product-detail">{products[index].name}</Link></h6>
                                <p className="small text-muted">{products[index].price}</p>
                            </>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Contenu;
