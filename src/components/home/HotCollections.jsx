import React from "react";
import { Link } from "react-router-dom";

import AuthorImage from "../../images/author_thumbnail.jpg";

import Collection1 from "../../images/collection-1-background.png";
import Collection2 from "../../images/collection-2-background.png";
import Collection3 from "../../images/collection-3-background.png";
import Collection4 from "../../images/collection-4-background.png";

const collections = [
  {
    id: 1,
    title: "Abstraction",
    erc: "ERC-192",
    image: Collection1,
  },
  {
    id: 2,
    title: "Patternlicious",
    erc: "ERC-661",
    image: Collection2,
  },
  {
    id: 3,
    title: "Skecthify",
    erc: "ERC-164",
    image: Collection3,
  },
  {
    id: 4,
    title: "Cartoonism",
    erc: "ERC-112",
    image: Collection4,
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

        <div className="row">
          {collections.map((collection) => (
            <div
              className="col-lg-3 col-md-6 col-sm-6 mb30"
              key={collection.id}
            >
              <div className="nft_coll">

                <div className="nft_wrap">
                  <Link to="/explore">
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
                    <img
                      className="lazy"
                      src={AuthorImage}
                      alt="Creator"
                    />
                    <i className="fa fa-check"></i>
                  </Link>
                </div>

                <div className="nft_coll_info">
                  <Link to="/explore">
                    <h4>{collection.title}</h4>
                  </Link>

                  <span>{collection.erc}</span>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HotCollections;