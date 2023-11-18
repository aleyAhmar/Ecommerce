import React from "react";
import dialImg from "../images/dialyzer-img.png"
import health from "../images/health.jpg"

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

      <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary" style={{ backgroundImage:`url(${health})`, backgroundSize:"cover"}}>
  <div className="col-lg-6 px-0">
    <h1 className="display-4 fst-italic">
      Your Health, Our Priority
    </h1>
    <p className="lead my-3">
    At Assam Health Care, we understand the profound importance of your health, and it serves as our unwavering commitment. As a dedicated surgical company, we prioritize the well-being of our clients with a steadfast focus on delivering top-notch healthcare solutions. Our mission is to provide you with the highest quality surgical products, ensuring that your health journey is supported by cutting-edge technology and a commitment to excellence. Trust us to make your health our top priority, because your well-being is at the heart of everything we do. Welcome to a healthier future with Assam Health Care.
    </p> 
     

  </div>
</div>

{/* Services */}

<div className="container marketing text-center mt-3 p-5">
  {/* Three columns of text below the carousel */}
  <div className="row">
    <div className="col-lg-4">
      <svg
        className="bd-placeholder-img rounded-circle"
        width={140}
        height={140}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Placeholder"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      >
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
      </svg>
      <h2 className="fw-normal">Heading</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex deleniti molestias quidem mollitia incidunt cumque quasi cupiditate rem unde omnis?
      </p>
      <p>
        
      </p>
    </div>
    {/* /.col-lg-4 */}
    <div className="col-lg-4">
      <svg
        className="bd-placeholder-img rounded-circle"
        width={140}
        height={140}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Placeholder"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      >
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
      </svg>
      <h2 className="fw-normal">Heading</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ad non culpa reiciendis? Odio eum quaerat corporis incidunt obcaecati beatae?
      </p>
      
    </div>
    {/* /.col-lg-4 */}
    <div className="col-lg-4">
      <svg
        className="bd-placeholder-img rounded-circle"
        width={140}
        height={140}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Placeholder"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      >
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
      </svg>
      <h2 className="fw-normal">Heading</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quasi voluptate quia fuga iure! Amet ea rerum id voluptas consectetur.
      </p>
      
    </div>
    {/* /.col-lg-4 */}
  </div>
  {/* /.row */}
  
</div>


      


    </div>
  );
};

export default HomePageWelcome;
