
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { sellers } from "./TopSellers";


function formatTime(seconds) {
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds - hours * 3600) / 60);
  seconds = seconds - hours * 3600 - minutes * 60;

  return ` ${hours}h ${minutes}m ${seconds}s`;
}

function Countdown({ minutes }) {
  const [time, setTime] = useState(minutes * 60);

  useEffect(() => {
    //this is for updating it every second
    const interval = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    //this is for stopping interval
    const timeout = setTimeout(() => {
  clearInterval(interval);
}, minutes * 60 * 1000);
   return () => {
  clearInterval(interval);
  clearTimeout(timeout);
};
  }, [minutes]);

  return minutes && formatTime(time);
}

export default function NewItem({ item }) {

const author = sellers.find(seller=>seller.image === item.author)

  return (
    <div className="nft__item" >
      <div className="author_list_pp">
        <Link
          to={"/author/"+author.id}
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title={"Creator: " + item.author}
        >
          <img className="lazy" src={item.author} alt="" />
          <i className="fa fa-check"></i>
        </Link>
      </div>
      {item.countdown && (
        <div className="de_countdown">
          <Countdown minutes={item.countdown} />
        </div>
      )}

      <div className="nft__item_wrap">
        <div className="nft__item_extra">
          <div className="nft__item_buttons">
            <button>Buy Now</button>
            <div className="nft__item_share">
              <h4>Share</h4>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">

  <i className="fa fa-facebook fa-lg"></i>

</a>

<a href="https://twitter.com" target="_blank" rel="noreferrer">

  <i className="fa fa-twitter fa-lg"></i>

</a>

<a href="mailto:">

  <i className="fa fa-envelope fa-lg"></i>
              </a>
            </div>
          </div>
        </div>

        <Link to={"/item-details/"+item.id}>
          <img src={item.image} className="lazy nft__item_preview" alt="" />
        </Link>
      </div>
      <div className="nft__item_info">
        <Link to={"/item-details/"+item.id}>
          <h4>{item.title}</h4>
        </Link>
        <div className="nft__item_price">{item.price} ETH</div>
        <div className="nft__item_like">
          <i className="fa fa-heart"></i>
          <span>{item.likes}</span>
        </div>
      </div>
    </div>
  );
}
