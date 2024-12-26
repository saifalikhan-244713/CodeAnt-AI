import styles from "../styles/stylesLanding.module.css";
import logo from "../images/logo.png";
import chartImg from "../images/Group 4.png";
import image1 from "../images/image 1.png";
import icon from "../images/Icon.png";
import image3 from "../images/image (3).png";
import image2 from "../images/image (2).png";
import key from "../images/key.png";
import logoBig from "../images/Subtract.png";
import { useState } from "react";

const SignInPage = () => {
  const [check, setCheck] = useState(0);
  return (
    <div
      className={`${styles.parent} container-fluid d-flex justify-content-center  vh-100`}
    >
      <div className="row w-100">
        {/* Left Section */}
        <div
          className="col-lg-6 d-none d-lg-flex flex-column justify-content-center align-items-center left-section"
          style={{ borderRight: "1px solid rgb(240, 235, 235)" }}
        >
          <div className="info-card shadow-lg" id={styles.infoTopCard}>
            <h4 className={`${styles.inter} fw-bold`} id={styles.leftHead}>
              <img src={logo} /> AI to Detect & Autofix Bad Code
            </h4>
            <hr className="w-100" />
            <div
              className="d-flex justify-content-between mt-3"
              id={styles.infoTopCardDetails}
            >
              <div className={styles.centerCardNum}>
                <h6 className={`fw-bold ${styles.cardNum}`}>30+</h6>
                <p className={styles.cardNumDetail}> Language Support</p>
              </div>
              <div className={styles.centerCardNum}>
                <h6 className={`fw-bold ${styles.cardNum}`}>10K+</h6>
                <p className={styles.cardNumDetail}>Developers</p>
              </div>
              <div className={styles.centerCardNum}>
                <h6 className={`fw-bold ${styles.cardNum}`}>100K+</h6>
                <p className={styles.cardNumDetail}>Hours Saved</p>
              </div>
            </div>
          </div>
          <div
            className="info-card shadow-lg issues-card  shadow-sm p-3 "
            id={styles.infoBotmCard}
          >
            <div className="d-flex justify-content-between align-items-center w-100">
              <div>
                <img id={styles.chartImg} src={chartImg} alt="" />
              </div>
              <div>
                <p className=" m-0 d-flex flex-column">
                  <div
                    className="text-primary fw-bold"
                    style={{ fontSize: "14px" }}
                  >
                    <i className=" fa-solid fa-arrow-up"></i> 14%
                  </div>{" "}
                  <div className="fw-400" style={{ fontSize: "12px" }}>
                    this week
                  </div>
                </p>
              </div>
            </div>
            <p className="mt-2 mb-0 fw-bold" style={{ fontSize: "14px" }}>
              Issues Fixed
            </p>
            <h4 className="fw-bold" style={{ fontSize: "32px" }}>
              500K+
            </h4>
          </div>
          <div id={styles.bigLogo}>
            <img src={logoBig} alt="" />
          </div>
        </div>

        {/* Right Section */}
        <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center right-section">
          {check ? (
            <div className={`${styles.signinCard} rounded`}>
              <h4
                className="fw-light text-center"
                style={{ fontSize: "30px", fontFamily: "inter" }}
              >
                <img src={logo} /> CodeAnt AI
              </h4>
              <h2 className="fw-400 text-center">Welcome to CodeAnt AI</h2>
              <div className="d-flex justify-content-center mt-3">
                <button
                  className={`btn mx-2 ${
                    check === 0 ? "btn-primary" : "btn-outline-primary"
                  }`}
                  style={{ width: "300px" }}
                  onClick={() => setCheck(0)}
                >
                  SAAS
                </button>
                <button
                  className={`btn mx-2 ${
                    check === 1 ? "btn-primary" : "btn-outline-primary"
                  }`}
                  style={{ width: "300px" }}
                  onClick={() => setCheck(1)}
                >
                  Self Hosted
                </button>
              </div>

              <hr />
              <div>
                <button
                  className={`btn btn-outline-secondary my-2 d-block ${styles.signinBtns}`}
                >
                  <img src={image3} alt="GitLab Logo" /> Self Hosted GitLab
                </button>
                <button
                  className={`btn btn-outline-secondary my-2 d-block ${styles.signinBtns}`}
                >
                  <img src={key} alt="" /> Sign in with SSO
                </button>
              </div>
            </div>
          ) : (
            <div className={`${styles.signinCard} rounded`}>
              <h4
                className="fw-light text-center"
                style={{ fontSize: "30px", fontFamily: "inter" }}
              >
                <img src={logo} /> CodeAnt AI
              </h4>
              <h2 className="fw-400 text-center">Welcome to CodeAnt AI two</h2>
              <div className="d-flex justify-content-center mt-3">
                <button
                  className={`btn mx-2 ${
                    check === 0 ? "btn-primary" : "btn-outline-primary"
                  }`}
                  style={{ width: "300px" }}
                  onClick={() => setCheck(0)}
                >
                  SAAS
                </button>
                <button
                  className={`btn mx-2 ${
                    check === 1 ? "btn-primary" : "btn-outline-primary"
                  }`}
                  style={{ width: "300px" }}
                  onClick={() => setCheck(1)}
                >
                  Self Hosted
                </button>
              </div>

              <hr />
              <div>
                <button
                  className={`btn btn-outline-secondary my-2 d-block ${styles.signinBtns}`}
                >
                  <img src={image1} alt="GitHub Logo" /> Sign in with GitHub
                </button>
                <button
                  className={`btn btn-outline-secondary my-2 d-block ${styles.signinBtns}`}
                >
                  <img src={icon} alt="Bitbucket Logo" /> Sign in with Bitbucket
                </button>
                <button
                  className={`btn btn-outline-secondary my-2 d-block ${styles.signinBtns}`}
                >
                  <img src={image2} alt="Azure Logo" /> Sign in with Azure
                  DevOps
                </button>
                <button
                  className={`btn btn-outline-secondary my-2 d-block ${styles.signinBtns}`}
                >
                  <img src={image3} alt="GitLab Logo" /> Sign in with GitLab
                </button>
              </div>
            </div>
          )}
          <p className={"text-center mt-3"} id={styles.policyLink}>
            By signing up you agree to the{" "}
            <a
              href="#"
              style={{
                textDecoration: "none",
                color: "#171717",
                fontWeight: "700",
              }}
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
