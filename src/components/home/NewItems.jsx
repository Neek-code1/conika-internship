import React from "react";
import AuthorImage_1 from "../../images/author_thumbnail_1.jpg";
import AuthorImage_2 from "../../images/author_thumbnail_2.jpeg";
import AuthorImage_7 from "../../images/author_thumbnail_7.jpeg";
import AuthorImage_8 from "../../images/author_thumbnail_8.jpeg";
import AuthorImage_9 from "../../images/author_thumbnail_9.jpg";
import AuthorImage_10 from "../../images/author_thumbnail_10.jpeg";
import AuthorImage_3 from "../../images/author_thumbnail_3.jpeg";
import NFTimage from "../../images/nftImage.jpg";
import NFTimage2 from "../../images/nftimage2.jpg";
import NFTimage3 from "../../images/nftimage3.jpg";
import NFTimage4 from "../../images/nftimage4.jpg";
import NFTimage5 from "../../images/nftimage5.webp";
import NFTimage6 from "../../images/nftimage6.webp";
import NFTimage7 from "../../images/nftimage7.webp";
import NewItem from "./NewItem";

import OwlCarousel from "react-owl-carousel";

export const items = [
  {
    id:1,
    title: "Pinky Ocean",
    price: "1.07",
    author: AuthorImage_1,
    image: NFTimage,
    likes: 69,
    countdown: 177,
  },
  {
    id:2,
    title: "Deep Sea Phantasy",
    price: "0.17",
    author: AuthorImage_7,
    image: NFTimage2,
    likes: 99,
  },
  {
    id:3,
    title: "Rainbow Style",
    price: "0.18",
    author: AuthorImage_8,
    image: NFTimage3,
    likes: 17,
  },
  {
    id:4,
    title: "Two Tigers",
    price: "0.77",
    author: AuthorImage_9,
    image: NFTimage4,
    likes: 16,
    countdown: 57,
  },
  {
    id:5,
    title: "The Truth",
    price: "0.27",
    author: AuthorImage_10,
    image: NFTimage5,
    likes: 14,
    countdown: 115,
  },
  {
    id:6,
    title: "Running Puppets",
    price: "0.37",
    author: AuthorImage_2,
    image: NFTimage6,
    likes: 74,
    countdown: 195,
  },
  {
    id:7,
    title: "USA Wordmation",
    price: "1.07",
    author: AuthorImage_3,
    image: NFTimage7,
    likes: 42,
  },
];

const NewItems = () => {
  return (
    <section id="section-items" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>New Items</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <OwlCarousel loop margin={10} nav items={4}>
            {items.map((item, index) => (
              <NewItem item={item} key={index}/>
            ))}
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
};

export default NewItems;


