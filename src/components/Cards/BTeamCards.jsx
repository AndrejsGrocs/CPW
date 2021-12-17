import React from "react";
import ReactDOM from "react-dom";
import fbPic from "../../assets/images/icons-social-media/FB.png";
import twitterPic from "../../assets/images/icons-social-media/twitter.png";
import mailPic from "../../assets/images/icons-social-media/mail.png";

export default function BTeamCards() {
  return (
    <section>
      <div class="row">
        <h1 class="text-center">
          <span>🌶️ Chilly Productive Workee Team</span>
        </h1>

        <div class="col-md-4">
          <div class="card profile-card-1">
            <img
              src="https://images.pexels.com/photos/946351/pexels-photo-946351.jpeg?w=500&h=650&auto=compress&cs=tinysrgb"
              alt="profile-sample1"
              class="background"
            />
            <img
              src="https://randomuser.me/api/portraits/women/20.jpg"
              alt="profile-image"
              class="profile"
            />
            <div class="card-content">
              <h2>
                Peony Langner<small>Tech Team</small>
              </h2>
              <div class="icon-block">
                <a href="#" style={{ width: "1.5rem" }}>
                  <img
                    className="icons"
                    src={fbPic}
                    alt="FB"
                    style={{ width: "30px" }}
                  />
                </a>
                <a href="#">
                  <img
                    className="icons"
                    src={twitterPic}
                    alt="FB"
                    style={{ width: "30px" }}
                  />
                </a>
                <a href="#">
                  <img
                    className="icons"
                    src={mailPic}
                    alt="FB"
                    style={{ width: "30px" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* <!--Profile Card 3--> */}
        <div class="col-md-4">
          <div class="card profile-card-3">
            <div class="background-block">
              <img
                src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="profile-sample1"
                class="background"
              />
            </div>
            <div class="profile-thumb-block">
              <img
                src="https://randomuser.me/api/portraits/men/41.jpg"
                alt="profile-image"
                class="profile"
              />
            </div>
            <div class="card-content">
              <h2>
                Robin Skladny<small>Frontend</small>
              </h2>
              <div class="icon-block">
                <a href="#" style={{ width: "1.5rem" }}>
                  <img
                    className="icons"
                    src={fbPic}
                    alt="FB"
                    style={{ width: "30px" }}
                  />
                </a>
                <a href="#">
                  <img
                    className="icons"
                    src={twitterPic}
                    alt="FB"
                    style={{ width: "30px" }}
                  />
                </a>
                <a href="#">
                  <img
                    className="icons"
                    src={mailPic}
                    alt="FB"
                    style={{ width: "30px" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card profile-card-1">
            <img
              src="https://images.pexels.com/photos/946351/pexels-photo-946351.jpeg?w=500&h=650&auto=compress&cs=tinysrgb"
              alt="profile-sample1"
              class="background"
            />
            <img
              src="https://randomuser.me/api/portraits/women/20.jpg"
              alt="profile-image"
              class="profile"
            />
            <div class="card-content">
              <h2>
                Lars Nemeth<small>Tech Team</small>
              </h2>
              <div class="icon-block">
                <a href="#" style={{ width: "1.5rem" }}>
                  <img
                    className="icons"
                    src={fbPic}
                    alt="FB"
                    style={{ width: "30px" }}
                  />
                </a>
                <a href="#">
                  <img
                    className="icons"
                    src={twitterPic}
                    alt="FB"
                    style={{ width: "30px" }}
                  />
                </a>
                <a href="#">
                  <img
                    className="icons"
                    src={mailPic}
                    alt="FB"
                    style={{ width: "30px" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card profile-card-3">
            <div class="background-block">
              <img
                src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="profile-sample1"
                class="background"
              />
            </div>
            <div class="profile-thumb-block">
              <img
                src="https://randomuser.me/api/portraits/men/41.jpg"
                alt="profile-image"
                class="profile"
              />
            </div>
            <div class="card-content">
              <h2>
                Riccardo Limiti<small>Designer</small>
              </h2>
              <div class="icon-block">
                <a href="#" style={{ width: "1.5rem" }}>
                  <img
                    className="icons"
                    src={fbPic}
                    alt="FB"
                    style={{ width: "30px" }}
                  />
                </a>
                <a href="#">
                  <img
                    className="icons"
                    src={twitterPic}
                    alt="FB"
                    style={{ width: "30px" }}
                  />
                </a>
                <a href="#">
                  <img
                    className="icons"
                    src={mailPic}
                    alt="FB"
                    style={{ width: "30px" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card profile-card-1">
            <img
              src="https://images.pexels.com/photos/946351/pexels-photo-946351.jpeg?w=500&h=650&auto=compress&cs=tinysrgb"
              alt="profile-sample1"
              class="background"
            />
            <img
              src="https://randomuser.me/api/portraits/women/20.jpg"
              alt="profile-image"
              class="profile"
            />
            <div class="card-content">
              <h2>
                Andrejs Grosc<small>Frontend</small>
              </h2>
              <div class="icon-block">
                <a href="#">
                  <img
                    className="icons"
                    src={fbPic}
                    alt="FB"
                    style={{ width: "30px" }}
                  />
                </a>
                <a href="#">
                  <img
                    className="icons"
                    src={twitterPic}
                    alt="FB"
                    style={{ width: "30px" }}
                  />
                </a>
                <a href="#">
                  <img
                    className="icons"
                    src={mailPic}
                    alt="FB"
                    style={{ width: "30px" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card profile-card-3">
            <div class="background-block">
              <img
                src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="profile-sample1"
                class="background"
              />
            </div>
            <div class="profile-thumb-block">
              <img
                src="https://randomuser.me/api/portraits/men/41.jpg"
                alt="profile-image"
                class="profile"
              />
            </div>
            <div class="card-content">
              <h2>
                Lukasz<small>Frontend</small>
              </h2>
              <div class="icon-block" display="flex">
                <a href="#" style={{ width: "1.5rem" }}>
                  <img
                    className="icons"
                    src={fbPic}
                    alt="FB"
                    style={{ width: "30px" }}
                  />
                </a>
                <a href="#">
                  <img
                    className="icons"
                    src={twitterPic}
                    alt="FB"
                    style={{ width: "30px" }}
                  />
                </a>
                <a href="#">
                  <img
                    className="icons"
                    src={mailPic}
                    alt="FB"
                    style={{ width: "30px" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
