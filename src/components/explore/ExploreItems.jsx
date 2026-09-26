import React from "react";
import { Link } from "react-router-dom";
import AuthorImage_1 from "../../images/author_thumbnail_1.jpg";
import AuthorImage_2 from "../../images/author_thumbnail_2.jpeg";
import AuthorImage_3 from "../../images/author_thumbnail_3.jpeg";
import AuthorImage_4 from "../../images/author_thumbnail_4.jpeg";
import AuthorImage_5 from "../../images/author_thumbnail_5.jpeg";
import AuthorImage_6 from "../../images/author_thumbnail_6.jpeg";
import AuthorImage_7 from "../../images/author_thumbnail_7.jpeg";
import AuthorImage_8 from "../../images/author_thumbnail_8.jpeg";
import AuthorImage_9 from "../../images/author_thumbnail_9.jpg";
import AuthorImage_10 from "../../images/author_thumbnail_10.jpeg";
import AuthorImage_11 from "../../images/author_thumbnail_11.jpg";
import AuthorImage_12 from "../../images/author_thumbnail_12.jpeg";
import NFTimage from "../../images/nftImage.jpg";
import NFTimage2 from "../../images/nftimage2.jpg";
import NFTimage3 from "../../images/nftimage3.jpg";
import NFTimage4 from "../../images/nftimage4.jpg";
import NFTimage5 from "../../images/nftimage5.webp";
import NFTimage6 from "../../images/nftimage6.webp";
import NFTimage7 from "../../images/nftimage7.webp";
import NFTimage8 from "../../images/nftimage8.webp";
import NFTimage9 from "../../images/nftimage9.webp";
import NFTimage10 from "../../images/nftimage10.jpg";
import NFTimage11 from "../../images/nftimage11.webp";
import NFTimage12 from "../../images/nftimage12.webp";
import NFTimage13 from "../../images/nftimage13.jpg";
import NFTimage14 from "../../images/nftimage14.webp";
import NFTimage15 from "../../images/nftimage15.jpg";
import NFTimage16 from "../../images/nftimage16.jpg";
import NewItem from "../home/NewItem";
import { useState } from "react";

export const items = [
  {
    id:1,
    title: "Pinky Ocean",
    price: "1.07",
    author: AuthorImage_1,
    owner: AuthorImage_6,
    image: NFTimage,
    likes: 69,
    countdown: 186,
    opened: 450
  },
  {
    id:2,
    title: "Deep Sea Phantasy",
    price: "0.17",
    author: AuthorImage_7,
    owner: AuthorImage_2,
    image: NFTimage2,
    likes: 99,
    opened: 450
  },
  {
    id:3,
    title: "Rainbow Style",
    price: "0.18",
    author: AuthorImage_8,
    owner: AuthorImage_3,
    image: NFTimage3,
    likes: 17,
    countdown: 326,
    opened: 450
  },
  {
    id:16,
    title: "Two Tigers",
    price: "0.77",
    author: AuthorImage_9,
    owner: AuthorImage_6,
    image: NFTimage4,
    likes: 16,
    opened: 450
  },
  {
    id:4,
    title: "The Truth",
    price: "0.27",
    author: AuthorImage_10,
    owner: AuthorImage_4,
    image: NFTimage5,
    likes: 14,
    opened: 450
  },
  {
    id:5,
    title: "Running Puppets",
    price: "0.37",
    author: AuthorImage_2,
    owner: AuthorImage_9,
    image: NFTimage6,
    likes: 74,
    opened: 450
  },
  {
    id:6,
    title: "USA Wordmation",
    price: "1.07",
    author: AuthorImage_3,
    owner: AuthorImage_11,
    image: NFTimage7,
    likes: 42,
    countdown: 172,
    opened: 450
  },
  {
    id:7,
    title: "Loop Donut",
    price: "1.85",
    author: AuthorImage_4,
    owner: AuthorImage_12,
    image: NFTimage8,
    likes: 32,
    countdown: 193,
    opened: 450
  },
  {
    id:8,
    title: "Lady Copter",
    price: "1.25",
    author: AuthorImage_5,
    owner: AuthorImage_10,
    image: NFTimage9,
    likes: 70,
    countdown: 487,
    opened: 450
  },
  {
    id:9,
    title: "Purple Planet",
    price: "1.25",
    author: AuthorImage_11,
    owner: AuthorImage_2,
    image: NFTimage10,
    likes: 60,
    countdown: 487,
    opened: 450
  },
  {
    id:10,
    title: "Oh Yeah!",
    price: "1.57",
    author: AuthorImage_6,
    owner: AuthorImage_5,
    image: NFTimage11,
    likes: 48,
    opened: 450
  },
  {
    id:11,
    title: "This Our Story",
    price: "0.22",
    author: AuthorImage_12,
    owner: AuthorImage_10,
    image: NFTimage12,
    likes: 65,
    countdown: 188,
    opened: 450
  },
  {
    id:12,
    title: "Pixel World",
    price: "0.31",
    author: AuthorImage_10,
    owner: AuthorImage_7,
    image: NFTimage13,
    likes: 25,
    countdown: 181,
    opened: 450
  },
  {
    id:13,
    title: "I believe I Can Fly",
    price: "0.62",
    author: AuthorImage_9,
    owner: AuthorImage_10,
    image: NFTimage14,
    likes: 25,
    countdown: 203,
    opened: 450
  },
  {
    id:14,
    title: "Cute Astronout",
    price: "0.32",
    author: AuthorImage_4,
    owner: AuthorImage_12,
    image: NFTimage15,
    likes: 75,
    countdown: 214,
    opened: 450
  },
  {
    id:15,
    title: "Teal Ocean",
    price: "0.29",
    author: AuthorImage_1,
    owner: AuthorImage_8,
    image: NFTimage16,
    likes: 68,
    countdown: 107,
    opened: 450
  },
];

const ExploreItems = () => {
  const [howManyToShow, setHowManyToShow] = useState(8);

  return (
    <>
      <div>
        <select id="filter-items" defaultValue="">
          <option value="">Default</option>
          <option value="price_low_to_high">Price, Low to High</option>
          <option value="price_high_to_low">Price, High to Low</option>
          <option value="likes_high_to_low">Most liked</option>
        </select>
      </div>
      {items.slice(0, howManyToShow).map((item, index) => (
        <div
          key={index}
          className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
          style={{ display: "block", backgroundSize: "cover" }}
        >
          <NewItem item={item} />
        </div>
      ))}

      {items.length > howManyToShow && <div className="col-md-12 text-center">
        <Link
          to=""
          id="loadmore"
          className="btn-main lead"
          onClick={() => setHowManyToShow((prev) => prev + 4)}
        >
          Load more
        </Link>
      </div>}
    </>
  );
};

export default ExploreItems;
