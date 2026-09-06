import React from "react";
import { Link } from "react-router-dom";
import NftImage from "../../images/nft.png";

const Landing = () => {
  return (
    <section
      id="section-hero"
      style={{
        minHeight: "900px",
        paddingTop: "110px",
        paddingBottom: "120px",
        background: "#ffffff",
        overflow: "hidden",
      }}
    >
      <div className="container">
        <div
          className="row align-items-center"
          style={{ minHeight: "720px" }}
        >
          <div className="col-md-6">
            <h6
              style={{
                color: "#8364e2",
                fontWeight: "700",
                fontSize: "16px",
                marginBottom: "20px",
              }}
            >
              GIGALAND MARKET
            </h6>

            <h1
              style={{
                fontSize: "64px",
                lineHeight: "1.1",
                fontWeight: "700",
                marginBottom: "25px",
                color: "#111129",
              }}
            >
              Create, sell or collect digital items.
            </h1>

            <p
              className="lead"
              style={{
                maxWidth: "560px",
                fontSize: "19px",
                lineHeight: "1.7",
                color: "#6f6f78",
                marginBottom: "30px",
              }}
            >
              Unit of data stored on a digital ledger, called a blockchain,
              that certifies a digital asset to be unique and therefore not
              interchangeable
            </p>

            <Link
              to="/explore"
              className="btn-main"
              style={{
                padding: "12px 40px",
                borderRadius: "6px",
              }}
            >
              Explore
            </Link>
          </div>

          <div className="col-md-6">
            <div
              style={{
                position: "relative",
                minHeight: "720px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  width: "900px",
                  height: "900px",
                  borderRadius: "50%",
                  background: "#f1efff",
                  left: "-40px",
                  top: "-110px",
                  zIndex: 0,
                }}
              ></div>

              <img
                src={NftImage}
                alt="NFT marketplace"
                style={{
                  position: "relative",
                  zIndex: 1,
                  width: "100%",
                  maxWidth: "620px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;