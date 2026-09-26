import React from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import AuthorImage_1 from "../../images/author_thumbnail_1.jpg";
import AuthorImage_2 from "../../images/author_thumbnail_2.jpeg";
import AuthorImage_3 from "../../images/author_thumbnail_3.jpeg";
import AuthorImage_4 from "../../images/author_thumbnail_4.jpeg";
import AuthorImage_5 from "../../images/author_thumbnail_5.jpeg";
import AuthorImage_6 from "../../images/author_thumbnail_6.jpeg";
import AuthorImage_10 from "../../images/author_thumbnail_10.jpeg";


import Collection1 from "../../images/collection-1-background.png";
import Collection2 from "../../images/collection-2-background.png";
import Collection3 from "../../images/collection-3-background.png";
import Collection4 from "../../images/collection-4-background.png";
import Collection5 from "../../images/collection-5-background.jpg";
import Collection6 from "../../images/collection-6-background.jpg";

export const collections = [
  {
    id: 22,
    title: "Abstraction",
    erc: "ERC-192",
    image: Collection1,
    author: AuthorImage_1,
    likes: 25,
    opened: 250,price: "0.62",owner: AuthorImage_10,
  },
  {
    id: 17,
    title: "Patternlicious",
    erc: "ERC-661",
    image: Collection2,
    author: AuthorImage_2,
    likes: 25,
    opened: 250,price: "0.62",owner: AuthorImage_10,
  },
  {
    id: 18,
    title: "Skecthify",
    erc: "ERC-164",
    image: Collection3,
    author: AuthorImage_3,
    likes: 25,
    opened: 250,price: "0.62",owner: AuthorImage_10,
  },
  {
    id: 19,
    title: "Cartoonism",
    erc: "ERC-112",
    image: Collection4,
    author: AuthorImage_4,
    likes: 25,
    opened: 250,price: "0.62",owner: AuthorImage_10,
  },
  {
    id: 20,
    title: "Virtuland",
    erc: "ERC-68",
    image: Collection5,
    author: AuthorImage_5,
    likes: 25,
    opened: 250,price: "0.62",owner: AuthorImage_10,
  },
  {
    id: 21,
    title: "Papercut",
    erc: "ERC-316",
    image: Collection6,
    author: AuthorImage_6,
    likes: 25,
    opened: 250,price: "0.62",owner: AuthorImage_10,
  },
];

const HotCollections = () => {
  return (
    <section id="section-collections" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Hot Collections</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
        </div>

        <OwlCarousel loop margin={10} nav items={4}>
          {collections.map((collection) => (
            <div className="nft_coll" key={collection.id}>
              <div className="nft_wrap">
                <Link to={"/item-details/" + collection.id}>
                  <img
                    src={collection.image}
                    className="lazy img-fluid"
                    alt={collection.title}
                    style={{
                      width: "100%",
                      height: "155px",
                      objectFit: "cover",
                    }}
                  />
                </Link>
              </div>

              <div className="nft_coll_pp">
                <Link to="/author">
                  <img className="lazy" src={collection.author} alt="Creator" />
                  <i className="fa fa-check"></i>
                </Link>
              </div>

              <div className="nft_coll_info">
                <Link to={"/item-details/" + collection.id}>
                  <h4>{collection.title}</h4>
                </Link>

                <span>{collection.erc}</span>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </section>
  );
};

export default HotCollections;
