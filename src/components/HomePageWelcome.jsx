import React from "react";
import dialImg from "../images/dialyzer-img.png"

const HomePageWelcome = () => {
  return (
    <div style={{ position: "relative" }}>
      <div
        className="welcome"
        style={{
          backgroundColor: "whitesmoke",
          textAlign: "center",
          padding: "20px 0px",
        }}
      >
        <h1 style={{ fontWeight: "600" }}>Welcome to Assam Health Care </h1>
        <h3>Your Premier Destination for Cutting-Edge Surgical Equipment!</h3>
      </div>

      {/* <section id="welcome-section">
        <div>
          <div className="welcome-text">
            <h2>
              Experience Our Products
            </h2>
            <p>
              Mixta continues to offer value by sharing the know-how in which it
              is an expert and has accumulated through time, as well as selling
              the products it makes on an individual basis while considering the
              user experience. <br></br> Would you like to experience the virtual tour of
              the projects we create?
            </p>
          </div>

          <div className="welcome-image">
              <img src={dialImg} />
            </div>
        </div>
      </section> */}

<div className="container section">
  <div className="row">
    <div className="col-md-6">
      <h3>Highly Skilled Volunteers</h3>
      <p>
        Through its program, TopVolunteer™, GetLance partners with leading
        nonprofits and NGOs around the world who need high-skilled talent for
        their volunteer initiatives. Members of the GetLance network are
        encouraged to offer their skills and experience to these projects,
        whether to solve a timely problem or to contribute on an ongoing basis.
      </p>
    </div>
    <div className="col-md-6">
      <img className="image-dialyzer" src={dialImg} alt="" />
    </div>
  </div>
 
</div>

    </div>
  );
};

export default HomePageWelcome;
