import React from "react";
import { Link } from "react-router-dom";
import AuthorImage from "../../images/author_thumbnail_1.jpg";
import AuthorImage2 from "../../images/author_thumbnail_2.jpeg";
import AuthorImage3 from "../../images/author_thumbnail_3.jpeg";
import AuthorImage4 from "../../images/author_thumbnail_4.jpeg";
import AuthorImage5 from "../../images/author_thumbnail_5.jpeg";
import AuthorImage6 from "../../images/author_thumbnail_6.jpeg";
import AuthorImage7 from "../../images/author_thumbnail_7.jpeg";
import AuthorImage8 from "../../images/author_thumbnail_8.jpeg";
import AuthorImage9 from "../../images/author_thumbnail_9.jpg";
import AuthorImage10 from "../../images/author_thumbnail_10.jpeg";
import AuthorImage11 from "../../images/author_thumbnail_11.jpg";
import AuthorImage12 from "../../images/author_thumbnail_12.jpeg";

export const sellers = [
  { id:1, name: "Monica Lucas", image: AuthorImage, income: "1.2 ETH" },
  { id:2,name: "Lori Hart", image: AuthorImage2, income: "7.2 ETH" },
  { id:3,name: "Gayle Hicks", image: AuthorImage3, income: "2.7 ETH" },
  { id:4,name: "Stacy Long", image: AuthorImage4, income: "1.3 ETH" },
  { id:5,name: "Mamie Barnett", image: AuthorImage5, income: "4.4 ETH" },
  { id:6,name: "Jimmy Wright", image: AuthorImage6, income: "2.8 ETH" },
  { id:7,name: "Claude Banks", image: AuthorImage11, income: "3.8 ETH" },
  { id:8,name: "Ida Chapman", image: AuthorImage12, income: "5.2 ETH" },
  { id:9,name: "Fred Ryan", image: AuthorImage10, income: "0.7 ETH" },
  { id:10,name: "Nicholas Daniels", image: AuthorImage7, income: "4.2 ETH" },
  { id:11,name: "Karla Sharp", image: AuthorImage8, income: "1.2 ETH" },
  { id:12,name: "Franklin Greer", image: AuthorImage9, income: "1.1 ETH" },


];

const TopSellers = () => {
  return (
    <section id="section-popular" className="pb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Top Sellers</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <div className="col-md-12">
            <ol className="author_list">
              {sellers.map((seller, index) => (
                <li key={index}>
                  <div className="author_list_pp">
                    <Link to={"/author/"+seller.id}>
                      <img
                        className="lazy pp-author"
                        src={seller.image}
                        alt=""
                      />
                      <i className="fa fa-check"></i>
                    </Link>
                  </div>
                  <div className="author_list_info">
                    <Link to={"/author/"+seller.id}>{seller.name}</Link>
                    <span>{seller.income}</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSellers;
