import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import Data from "../../src/data";

const Product = () => {

  //set data in users using state
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Assigning values when component mount
    setUsers(Data.all_categories);
  }, []);

  const product_list = users.map((item) => {
    return (
      //all all products listing here
      <div className="col s12 m4" key={item.id}>
        <div className="card">
          <Link to={`product/` + item.id}>
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator" src={item.background_image.max_808} />
            </div>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">
                {item.label}
              </span>

              <p>{item.description}</p>
            </div>
          </Link>
          <div className="card-action">
            <span>Display Count : {item.display_order}</span>
          </div>
        </div>
      </div>
    );
  });

  return (
    <Layout>
      <div className="row">{product_list}</div>
    </Layout>
  );
};

export default Product;
