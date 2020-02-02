
import React, { Component } from 'react';
export default class Products extends Component {

    render() {


        return (
            <div className="row box"  >
                <div id="products" className="col-md-4 text" style={{paddingTop: "100px"}}>
                    {`${this.props.count} products found.`}
                </div>
                <div className="col-md-4">
                    {/* <label>Order by
               <select className="form-control" value={this.props.sort} onChange={this.props.handleSortChange}>
                            <option value="">Select</option>
                            <option value="lowestprice">Lowest to highest</option>
                            <option value="highestprice">Highest to lowest</option>
                        </select>
                    </label> */}
                </div>
                <div className="col-md-4 filter" style={{ paddingTop: "30px", marginTop:"60px" }}>
                    <label > <span id="words">Filter </span>
               <select className="form-control" value={this.props.size} onChange={this.props.handleSizeChange}>
                            <option value="">ALL</option>
                            <option value="x">Decaffeinated Teas</option>
                            <option value="m">Caffeinated</option>
                            <option value="XXL">Flower Teas</option>
                            <option value="s">Seasonal</option>
                            <option value="l">Best Sellers</option>
                            {/* <option value="xl">XL</option> */}
                            
                        </select>  
                    </label> 
                </div>
            </div>
        )
    }
}