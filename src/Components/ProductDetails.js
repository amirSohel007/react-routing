import React from "react";
import Layout from "../Components/Layout";
import { useState, useEffect } from "react";
import Data from '../../src/data'

const ProductDetails = (props) => {
  const [item, setItem] = useState({});
  useEffect(() => {
    //fidnding that id in arrya and getting return in singleitem
     const singleitem = Data.all_categories.find((currentItem) => {
      return currentItem.id == props.match.params.id;
    });

    //after getting in singleitem, Assigning in state
    setItem(singleitem);
  }, []);
  return (

    <Layout>
      <div className="row">
        <div className="col s5 m15">
          <div className="card">
            <div className="card-image">
            <img src={item.background_image ? item.background_image.original : 'loading..'}/ >
              <span className="card-title text-black">
               {item.label}
              </span>
            </div>
            <div className="card-content">
              <p>
               {item.description}
              </p>
            </div>
          </div>
        </div>
        <div className="col s7 m7">
            <h3>{item.label}</h3>
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
       
          </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
