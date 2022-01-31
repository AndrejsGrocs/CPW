import React from "react";
import ReactDOM from "react-dom";
import mailPic from "../../assets/images/icons-social-media/mail.png";
import RobinPic from "../../assets/images/Profile pictures/Robin_fit_pic.png";
import banner from "../../assets/images/Banner/Healfify-no-text.png";
import PeonyPic from "../../assets/images/Profile pictures/Peony.jpeg";
import Andrej from "../../assets/images/Profile pictures/Andrey-Detochkin-scaled.jpg";
import rocky from "../../assets/images/Profile pictures/IMG_7217.JPG";
import Lars from "../../assets/images/Profile pictures/Lars.png";
import Luk from "../../assets/images/Profile pictures/Lukasz Trzcinski.png";
import ldin from "../../assets/images/icons-social-media/ldin.png";
import git from "../../assets/images/icons-social-media/git.png";

export default function BTeamCards() {
  return (
    <div
      className="container d-flex justify-content-evenly align-items-center row row-cols-1 row-cols-md-3 g-3 align-self-center mt-3"
      style={{ margin: "auto" }}
    >
      <div
        className="card mb-3 p-3 m-5 col shadow bg-body rounded profile-card-3"
        style={{ maxWidth: "18rem", minWidth: "30rem", height: "350px" }}
      >
        <img
          src={banner}
          alt="profile-sample1"
          className="background background-block backCard3"
        />

        <img src={RobinPic} alt="profile-image" className="profile" />

        <div className="card-content">
          <h2>
            Robin Skladny<small>Frontend Team</small>
          </h2>
          <div className="icon-block">
            <a href="https://de.linkedin.com/in/robin-skladny-647a1b229" target="_blank">
              <img
                className="icons m-2"
                src={ldin}
                alt="linkedin"
                style={{ width: "30px" }}
              />
            </a>
            <a href=" https://github.com/Robynio" target="_blank">
              <img
                className="icons m-2"
                src={git}
                alt="gitHub"
                style={{ width: "30px" }}
              />
            </a>
            <a href="mailto:robin_skladny@gmx.de">
              <img
                className="icons m-1"
                src={mailPic}
                alt="email"
                style={{ width: "30px" }}
              />
            </a>
          </div>

          <div
            className="card text-black mb-3 p-3 m-5 col shadow bg-body rounded profile-card-1"
            style={{ maxWidth: "18rem", minWidth: "30rem", height: "350px" }}
          >
            <div className="backFondo background" />
            <img src={PeonyPic} alt="profile-image" className="profile" />
            <div className="card-content mt-4">
              <h2>
                Peony Langner<small>Tech Team</small>
              </h2>
              <div className="icon-block" target="_blank">
                <a
                  href="https://de.linkedin.com/in/peony-langner-6808b218a"
                  style={{ width: "1.5rem" }}
                >
                  <img
                    className="icons m-2 rounded"
                    src={ldin}
                    alt="linkedin"
                    style={{ width: "30px" }}
                  />
                </a>
                <a href="https://github.com/Peony-Langner" target="_blank">
                  <img
                    className="icons m-2"
                    src={git}
                    alt="gitHub"
                    style={{ width: "30px" }}
                  />
                </a>
                <a href="mailto:peony.langner@hotmail.de">
                  <img
                    className="icons m-1"
                    src={mailPic}
                    alt="email"
                    style={{ width: "30px" }}
                  />
                </a>
              </div>
            </div>
          </div>

          <div
            className="card mb-3 p-3 m-5 col shadow bg-body rounded profile-card-3"
            style={{ maxWidth: "18rem", minWidth: "30rem", height: "350px" }}
          >
            <img
              src={banner}
              alt="profile-sample1"
              className="background background-block backCard3"
            />

            <img
              className="icons m-2"
              src={git}
              alt="gitHub"
              style={{ width: "30px" }}
            />

            <div className="card-content">
              <h2>
                Andrejs Grocs<small>Frontend/Backend</small>
              </h2>
              <div className="icon-block">
                <a
                  href="https://www.linkedin.com/in/andrejs-grocs-andrey-detochkin-ab2106141"
                  target="_blank"
                >
                  <img
                    className="icons m-2 rounded"
                    src={ldin}
                    alt="linkedin"
                    style={{ width: "30px" }}
                  />
                </a>
                <a href="https://github.com/AndrejsGrocs" target="_blank">
                  <img
                    className="icons m-2"
                    src={git}
                    alt="gitHub"
                    style={{ width: "30px" }}
                  />
                </a>
                <a href="mailto:andrey.detochkin@gmail.com">
                  <img
                    className="icons m-1"
                    src={mailPic}
                    alt="FB"
                    style={{ width: "30px" }}
                  />
                </a>
              </div>
            </div>
          </div>

          <div
            className="card text-black mb-3 p-3 m-5 col shadow bg-body rounded profile-card-1"
            style={{ maxWidth: "18rem", minWidth: "30rem", height: "350px" }}
          >
            <div className="backFondo2 background" />
            <img src={rocky} alt="profile-image" className="profile" />
            <div className="card-content mt-4">
              <h2>
                Riccardo Limiti<small>Designer</small>
              </h2>
              <div className="icon-block">
                <a
                  href="https://www.linkedin.com/in/riccardo-limiti-a81061226/"
                  style={{ width: "1.5rem" }}
                  target="_blank"
                >
                  <img
                    className="icons m-2 rounded"
                    src={ldin}
                    alt="linkedin"
                    style={{ width: "30px" }}
                  />
                </a>
                <a href="https://github.com/Razzokk8" target="_blank">
                  <img
                    className="icons m-2"
                    src={git}
                    alt="gitHub"
                    style={{ width: "30px" }}
                  />
                </a>
                <a href="mailto:riccardo.limiti@gmail.com">
                  <img
                    className="icons m-1"
                    src={mailPic}
                    alt="email"
                    style={{ width: "30px" }}
                  />
                </a>
              </div>
            </div>
          </div>

          <div
            className="card mb-3 p-3 m-5 col shadow bg-body rounded profile-card-3"
            style={{ maxWidth: "18rem", minWidth: "30rem", height: "350px" }}
          >
            <img
              src={banner}
              alt="profile-sample1"
              className="background background-block backCard3"
            />

            <img
              className="icons m-1"
              src={mailPic}
              alt="email"
              style={{ width: "30px" }}
            />

            <div className="card-content">
              <h2>
                Lars Nemeth<small>Tech Team</small>
              </h2>
              <div className="icon-block">
                <a
                  href="https://www.linkedin.com/in/lars-nemeth-a2b28ab4/"
                  target="_blank"
                >
                  <img
                    className="icons m-2 rounded"
                    src={ldin}
                    alt="linkedin"
                    style={{ width: "30px" }}
                  />
                </a>
                <a href="https://github.com/LarsNemeth" target="_blank">
                  <img
                    className="icons m-2"
                    src={git}
                    alt="gitHub"
                    style={{ width: "30px" }}
                  />
                </a>
                <a href="mailto:lars@radiotape.de">
                  <img
                    className="icons m-1"
                    src={mailPic}
                    alt="FB"
                    style={{ width: "30px" }}
                  />
                </a>
              </div>
            </div>
          </div>

          <div
            className="card text-black mb-3 p-3 m-5 col shadow bg-body rounded profile-card-1"
            style={{ maxWidth: "18rem", minWidth: "30rem", height: "350px" }}
          >
            <div className="backFondo3 background" />
            <img src={Luk} alt="profile-image" className="profile" />
            <div className="card-content mt-4">
              <h2>
                Lukasz Trzcinski
                <small>Frontend Team</small>
              </h2>
              <div className="icon-block">
                <a
                  href="www.linkedin.com/in/lukasz-trzcinski-berlin"
                  style={{ width: "1.5rem" }}
                  target="_blank"
                >
                  <img
                    className="icons m-2 rounded"
                    src={ldin}
                    alt="linkedin"
                    style={{ width: "30px" }}
                  />
                </a>
                <a href="https://github.com/lukascane" target="_blank">
                  <img
                    className="icons m-2"
                    src={git}
                    alt="FB"
                    style={{ width: "30px" }}
                  />
                </a>
                <a href="mailto:lukastrz6@gmail.com">
                  <img
                    className="icons m-1"
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

      <div
        className="card text-black mb-3 p-3 m-5 col shadow bg-body rounded profile-card-1"
        style={{ maxWidth: "18rem", minWidth: "30rem", height: "350px" }}
      >
        <div className="backFondo background" />
        <img src={PeonyPic} alt="profile-image" className="profile" />
        <div className="card-content mt-4">
          <h2>
            Peony Langner<small>Tech Team</small>
          </h2>
          <div className="icon-block" target="_blank">
            <a
              href="https://de.linkedin.com/in/peony-langner-6808b218a"
              style={{ width: "1.5rem" }}
            >
              <img
                className="icons m-2"
                src={ldin}
                alt="linkedin"
                style={{ width: "30px" }}
              />
            </a>
            <a href="https://github.com/Peony-Langner" target="_blank">
              <img
                className="icons m-2"
                src={git}
                alt="gitHub"
                style={{ width: "30px" }}
              />
            </a>
            <a href="mailto:peony.langner@hotmail.de">
              <img
                className="icons m-1"
                src={mailPic}
                alt="email"
                style={{ width: "30px" }}
              />
            </a>
          </div>
        </div>
      </div>

      <div
        className="card mb-3 p-3 m-5 col shadow bg-body rounded profile-card-3"
        style={{ maxWidth: "18rem", minWidth: "30rem", height: "350px" }}
      >
        <img
          src={banner}
          alt="profile-sample1"
          className="background background-block backCard3"
        />

        <img src={Andrej} alt="profile-image" className="profile" />

        <div className="card-content">
          <h2>
            Andrej Grocs<small>Frontend/Backend</small>
          </h2>
          <div className="icon-block">
            <a
              href="https://www.linkedin.com/in/andrejs-grocs-andrey-detochkin-ab2106141"
              target="_blank"
            >
              <img
                className="icons m-2"
                src={ldin}
                alt="linkedin"
                style={{ width: "30px" }}
              />
            </a>
            <a href="https://github.com/AndrejsGrocs" target="_blank">
              <img
                className="icons m-2"
                src={git}
                alt="gitHub"
                style={{ width: "30px" }}
              />
            </a>
            <a href="mailto:andrey.detochkin@gmail.com">
              <img
                className="icons m-1"
                src={mailPic}
                alt="FB"
                style={{ width: "30px" }}
              />
            </a>
          </div>
        </div>
      </div>

      <div
        className="card text-black mb-3 p-3 m-5 col shadow bg-body rounded profile-card-1"
        style={{ maxWidth: "18rem", minWidth: "30rem", height: "350px" }}
      >
        <div className="backFondo2 background" />
        <img src={rocky} alt="profile-image" className="profile" />
        <div className="card-content mt-4">
          <h2>
            Riccardo Limiti<small>Designer</small>
          </h2>
          <div className="icon-block">
            <a
              href="https://www.linkedin.com/in/riccardo-limiti-a81061226/"
              style={{ width: "1.5rem" }}
              target="_blank"
            >
              <img
                className="icons m-2"
                src={ldin}
                alt="linkedin"
                style={{ width: "30px" }}
              />
            </a>
            <a href="https://github.com/Razzokk8" target="_blank">
              <img
                className="icons m-2"
                src={git}
                alt="gitHub"
                style={{ width: "30px" }}
              />
            </a>
            <a href="mailto:riccardo.limiti@gmail.com">
              <img
                className="icons m-1"
                src={mailPic}
                alt="email"
                style={{ width: "30px" }}
              />
            </a>
          </div>
        </div>
      </div>

      <div
        className="card mb-3 p-3 m-5 col shadow bg-body rounded profile-card-3"
        style={{ maxWidth: "18rem", minWidth: "30rem", height: "350px" }}
      >
        <img
          src={banner}
          alt="profile-sample1"
          className="background background-block backCard3"
        />

        <img src={Lars} alt="profile-image" className="profile" />

        <div className="card-content">
          <h2>
            Lars Nemeth<small>Tech Team</small>
          </h2>
          <div className="icon-block">
            <a
              href="https://www.linkedin.com/in/lars-nemeth-a2b28ab4/"
              target="_blank"
            >
              <img
                className="icons m-2"
                src={ldin}
                alt="linkedin"
                style={{ width: "30px" }}
              />
            </a>
            <a href="https://github.com/LarsNemeth" target="_blank">
              <img
                className="icons m-2"
                src={git}
                alt="gitHub"
                style={{ width: "30px" }}
              />
            </a>
            <a href="mailto:lars@radiotape.de">
              <img
                className="icons m-1"
                src={mailPic}
                alt="FB"
                style={{ width: "30px" }}
              />
            </a>
          </div>
        </div>
      </div>

      <div
        className="card text-black mb-3 p-3 m-5 col shadow bg-body rounded profile-card-1"
        style={{ maxWidth: "18rem", minWidth: "30rem", height: "350px" }}
      >
        <div className="backFondo3 background" />
        <img src={Luk} alt="profile-image" className="profile" />
        <div className="card-content mt-4">
          <h2>
            Lukasz Trzcinski
            <small>Frontend Team</small>
          </h2>
          <div className="icon-block">
            <a
              href="https://www.linkedin.com/in/lukasz-trzcinski-berlin"
              style={{ width: "1.5rem" }}
              target="_blank"
            >
              <img
                className="icons m-2"
                src={ldin}
                alt="linkedin"
                style={{ width: "30px" }}
              />
            </a>
            <a href="https://github.com/lukascane" target="_blank">
              <img
                className="icons m-2"
                src={git}
                alt="FB"
                style={{ width: "30px" }}
              />
            </a>
            <a href="mailto:lukastrz6@gmail.com">
              <img
                className="icons m-1"
                src={mailPic}
                alt="FB"
                style={{ width: "30px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
