import React, { Component } from "react";
import { CategoryNavigation } from "./CategoryNavigation";
import { ProductList } from "./ProductList";

export class Shopt extends Component {
    render() {
        return <div className="container-fuid">
            <div className="row">
                <div className="col bg-dark text-white">
                    <div className="nav-brand">SPORTS STORE</div>
                </div>
            </div>
            <div className="row">
                <div className="col-3 p-2">
                    <CategoryNavigation baseUrl="/shop/products" categories={ this.props.categories} />
                </div>
                <div className="col-9 p-2">
                    <ProductList products={ this.props.products } />
                </div>
            </div>
        </div>
    }
}