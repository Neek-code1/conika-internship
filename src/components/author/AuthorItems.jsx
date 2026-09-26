import React from "react";
import { Link } from "react-router-dom";
import AuthorImage from "../../images/author_thumbnail_1.jpg";
import nftImage from "../../images/nftImage.jpg";
import { items } from "../home/NewItems";
import NewItem from "../home/NewItem";

const AuthorItems = ({ author }) => {
  return (
    <div className="de_tab_content">
      <div className="tab-1">
        <div className="row">
          {items.map((item, index) => (
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={index}>
              <NewItem item={{...item,author:author.image}}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuthorItems;
