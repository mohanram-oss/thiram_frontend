import React from 'react';

const About = () => {
  return (
    <div style={{ margin: 0, padding: 0, fontFamily: "Open Sans, sans-serif", boxSizing: "border-box" }}>
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#f1f1f1" }}>
        <div className="about-section" style={{ background: "url(https://images.pexels.com/photos/7134983/pexels-photo-7134983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2) no-repeat left", backgroundSize: "55%", backgroundColor: "#fdfdfd", overflow: "hidden", padding: "100px 0" }}>
          <div className="inner-container" style={{ width: "55%", float: "right", backgroundColor: "#fdfdfd", padding: "150px" }}>
            <h1 style={{ marginBottom: "30px", fontSize: "30px", fontWeight: "900" }}>About Us</h1>
            <p className="text" style={{ fontSize: "13px", color: "#545454", lineHeight: "30px", textAlign: "justify", marginBottom: "40px" }}>
              Thiram is a natural grocery store originated in Banglore. It is serving a variety of natural products directly from farmers.     contact : 8618163415 mail : mahadevvan.ganesan@gmail.com
            </p>
            <div className="skills" style={{ display: "flex", justifyContent: "space-between", fontWeight: "700", fontSize: "13px" }}>
              <span>NATURAL</span>
              <span>FROM FARMERS</span>
              <span>BEST QUALITY</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
