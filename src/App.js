import React from "react";
import "./App.css";
import Lemonpic from "./images/lemon.png";
import Tomatobody from "./images/tomatobody.png";
import Tomatoleaf from "./images/tomatoleaf.png";
import Bow from "./images/bow.png";
import Leafshade from "./images/leafshade.png";
import Leaf from "./images/leaf.png";
import Strawberry from "./images/strawberry.png";
import Bottlebottom from "./images/bottlebottom.png";
import Bottletopy from "./images/bottletop.png";
import Bucket from "./images/bucket.png";
import Cake from "./images/cake.png";
import Chicken from "./images/chicken.png";
import Disher from "./images/disher.png";
import Fishflesh from "./images/fishflesh.png";
import Flesh from "./images/flesh.png";
import Hand from "./images/hand.png";
import Hat from "./images/hat.png";
import Mustach from "./images/mustach.png";
import Pizzacrust from "./images/pizzacrust.png";
import Plate from "./images/plate.png";
import Shampinecup from "./images/shampinecup.png";
import Shampinecup2 from "./images/shampinecup2.png";
import Teacup from "./images/teacup.png";

function App() {
  return (
    <div class="container mobileview">
      <div class="column">
        <div class="card">
          <div className="alignment" style={{ marginTop: "250px" }}>
            <div className="front_icon">
              <img src={Bottlebottom} className="edge-image" alt="" />
              <img src={Bottletopy} className="edge-imagecap" alt="" />
              <img src={Bucket} className="edge-image1" alt="" />
              <img src={Cake} className="edge-image2" alt="" />
              <img src={Chicken} className="edge-image3" alt="" />
              <img src={Disher} className="edge-image4" alt="" />
            </div>
            <h2 className="fontstyle">RESTAURANT</h2>
            <h2 className="fontstyle">MENU</h2>
          </div>
          <div className="front_second">
            <img src={Fishflesh} className="edge-image5" alt="" />
            <img src={Flesh} className="edge-image6" alt="" />
            <img src={Hand} className="edge-image7" alt="" />
            <img src={Hat} className="edge-image8" alt="" />
            <img src={Mustach} className="edge-image9" alt="" />
            <img src={Pizzacrust} className="edge-image10" alt="" />
            <img src={Plate} className="edge-image11" alt="" />
            <img src={Shampinecup} className="edge-image12" alt="" />
            <img src={Shampinecup2} className="edge-image13" alt="" />
            <img src={Teacup} className="edge-image14" alt="" />
          </div>
        </div>
      </div>
      &nbsp; &nbsp; &nbsp; &nbsp;
      <div class="column">
        <div class="card mobileview">
          <img src={Tomatobody} className="corner-image top" alt="" />
          <img src={Tomatoleaf} className=" corner-image top" alt="" />
          <div class="item">
            <h3 className="subtitle">SALADS</h3>
            <div className="headings">
              <p className="subheading">
                DISH NAME
                <strong
                  className="mobileview"
                  style={{ color: "#cfe083", paddingLeft: "295px" }}
                >
                  $9.00
                </strong>
              </p>
              <p class="price">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </p>
              <p className="subheading">
                DISH NAME
                <strong
                  className="mobileview"
                  style={{ color: "#cfe083", paddingLeft: "295px" }}
                >
                  $9.00
                </strong>
              </p>
              <p class="price">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </p>
              <p className="subheading">
                DISH NAME
                <strong
                  className="mobileview"
                  style={{ color: "#cfe083", paddingLeft: "295px" }}
                >
                  $9.00
                </strong>
              </p>
              <p class="price">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </p>
              <img src={Bow} className="corner-image icon" alt="" />
            </div>
            <img src={Leafshade} className="corner-image iconleaf" alt="" />
          </div>
          <div class="item">
            <h3 className="subtitle">APPETIZERS</h3>
            <div className="headings">
              <p className="subheading">
                DISH NAME
                <strong
                  className="mobileview"
                  style={{ color: "#cfe083", paddingLeft: "295px" }}
                >
                  $9.00
                </strong>
              </p>
              <p class="price">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </p>
              <p className="subheading">
                DISH NAME
                <strong
                  className="mobileview"
                  style={{ color: "#cfe083", paddingLeft: "295px" }}
                >
                  $9.00
                </strong>
              </p>
              <p class="price">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </p>
              <p className="subheading">
                DISH NAME
                <strong
                  className="mobileview"
                  style={{ color: "#cfe083", paddingLeft: "295px" }}
                >
                  $9.00
                </strong>
              </p>
              <p class="price">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </p>
              <img src={Strawberry} className="corner-image icon" alt="" />
            </div>
          </div>
          <div class="item">
            <h3 className="subtitle">DESERTS</h3>
            <div className="headings">
              <p className="subheading">
                DISH NAME
                <strong
                  className="mobileview"
                  style={{ color: "#cfe083", paddingLeft: "295px" }}
                >
                  $9.00
                </strong>
              </p>
              <p class="price">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </p>
              <p className="subheading">
                DISH NAME
                <strong
                  className="mobileview"
                  style={{ color: "#cfe083", paddingLeft: "295px" }}
                >
                  $9.00
                </strong>
              </p>
              <p class="price">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </p>
              <img src={Lemonpic} className="corner-image iconleaf" alt="" />
            </div>
          </div>
          <div class="item">
            <h3 className="subtitle">DRINKS</h3>
            <div className="headings">
              <p className="subheading">
                DISH NAME
                <strong
                  className="mobileview"
                  style={{ color: "#cfe083", paddingLeft: "295px" }}
                >
                  $9.00
                </strong>
              </p>
              <p class="price">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </p>
              <p className="subheading">
                DISH NAME
                <strong
                  className="mobileview"
                  style={{ color: "#cfe083", paddingLeft: "295px" }}
                >
                  $9.00
                </strong>
              </p>
              <p class="price">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </p>
              <p className="subheading">
                DISH NAME
                <strong
                  className="mobileview"
                  style={{ color: "#cfe083", paddingLeft: "295px" }}
                >
                  $9.00
                </strong>
              </p>
              <p class="price">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
