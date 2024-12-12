import React from "react";
import ParticlesContainer from "../Other/ParticlesContainer";
import image from "../../images/bgimg.jpg";
import Footercomponent from "../Footer/FooterComponent";
import PouchMockup from "../Other/PouchMockup";

const ServiceDetail = () => {
  return (
    <>
      <ParticlesContainer title="Services Details" img={image} />
      <div
        style={{
          width: "85%",
          display: "flex",
          justifyContent: "space-around",
          margin: "0 auto",
          textAlign: "start",
        }}
      >
        <div style={{ width: "50%" }}>
          <h2 style={{ fontSize: "50px", fontWeight: "bold" }}>
            Stunning Design
          </h2>
          <p
            style={{
              marginTop: "20px",
              fontSize: "19px",
              color: "lightgray",
              textAlign: "start",
            }}
          >
            Lorem ipm dolor amet, consectetur magm maiores.Ipsa dolor sit ilmes
            esymagnam maores.magnam maores. Lorem ipm dolor amet, consec y Lorem
            ipm dolor amet, consectetur magm maiores.Ipsa dolor sit ilm tetur
            magm maiores.Ipsa dolor sit ilmesy Lorem ipm dolor amet, cons
            ectetur magm maiores.Ipsa dolor sit ilmesymagnam maores.magnam ipm
            dolor amet, consectetur maores.
          </p>
        </div>
        <div style={{ width: "50%" }}>
          <h2
            style={{ fontSize: "50px", fontWeight: "bold", marginLeft: "25px" }}
          >
            Service Benefits
          </h2>

          <ul
            style={{
              fontSize: "20px",
              marginTop: "20px",
              marginLeft: "50px",
              fontSize: "17px",
            }}
          >
            <li
              style={{
                listStyleType: "square",
                color: "#6a1b9a",
                marginTop: "15px",
                textAlign: "start",
              }}
            >
              <span style={{ color: "#555" }}>
                Motivation and encouragement from time to time
              </span>
            </li>
            <li
              style={{
                listStyleType: "square",
                color: "#6a1b9a",
                marginTop: "15px",
                textAlign: "start",
              }}
            >
              <span style={{ color: "#555" }}>
                1000 motivational quotes in the database
              </span>
            </li>
            <li
              style={{
                listStyleType: "square",
                color: "#6a1b9a",
                marginTop: "15px",
                textAlign: "start",
              }}
            >
              <span style={{ color: "#555" }}>
                If you don’t need either of these at the moment, you certainly
                have friends
              </span>
            </li>
            <li
              style={{
                listStyleType: "square",
                color: "#6a1b9a",
                marginTop: "15px",
                textAlign: "start",
              }}
            >
              <span style={{ color: "#555" }}>
                You and help uplift your day.
              </span>
            </li>
            <li
              style={{
                listStyleType: "square",
                color: "#6a1b9a",
                marginTop: "15px",
                textAlign: "start",
              }}
            >
              <span style={{ color: "#555" }}>
                Provide a motivational quote for you as you place your head on
                the pillow
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div
        style={{
          marginTop: "70px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          style={{
            borderRadius: "20px",
            marginTop: "70px",
            marginLeft: "50px",
            marginRight: "50px",
            width: "85%",
            marginBottom: "70px",
          }}
          src={`https://afsu.tohidur.com/img/services-1.jpg`}
          alt="Profile Page 1"
        />

        <div style={{ width: "85%", textAlign: "start" }}>
          <div>
            <h2 style={{ fontSize: "45px" }}>Service Moto</h2>
          </div>
          <div>
            <p style={{ color: "lightgray" }}>
              lotsie roll dragée bonbon croisnt. Chupa chups loream sesame snaps
              jelly tiramiipsum dolor sit amet sou ffl liquorice oat cake
              biscuit jesms tiramisu jelly dash Caramels chocolatsweet roll
              tart. lotsie roll dragée b onbon croisnt. Chupa chups loream
              sesame snaps jelly tiramiipsum dolor sit amet sou ffl liquorice
              oat a ake biscuit jesms tiramisu jelly dash Caramelsn t. Chupa
              chups loream sesame snaps jelly tiramiipsum a olor sit amet souffl
              liquorice oat cake biscuit jesms ls chocolatsweet roll tart.
              lotsie roll dragée b onbon croisnt. Chupa chups l tiramis.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              margin: "0 auto",
              textAlign: "start",
              marginBottom: "70px",
            }}
          >
            <div style={{ width: "50%" }}>
              <h2
                style={{
                  fontSize: "45px",
                  fontWeight: "bold",
                }}
              >
                What We Provide
              </h2>

              <ul
                style={{
                  fontSize: "20px",
                  marginTop: "20px",
                  fontSize: "17px",
                }}
              >
                <li
                  style={{
                    listStyleType: "none",
                    color: "#6a1b9a",
                    marginTop: "15px",
                    textAlign: "start",
                  }}
                >
                  <span style={{ color: "#555" }}>
                    Motivation and encouragement from time to time
                  </span>
                </li>
                <li
                  style={{
                    listStyleType: "none",
                    color: "#6a1b9a",
                    marginTop: "15px",
                    textAlign: "start",
                  }}
                >
                  <span style={{ color: "#555" }}>
                    1000 motivational quotes in the database
                  </span>
                </li>
                <li
                  style={{
                    listStyleType: "none",
                    color: "#6a1b9a",
                    marginTop: "15px",
                    textAlign: "start",
                  }}
                >
                  <span style={{ color: "#555" }}>
                    If you don’t need either of these at the moment, you
                    certainly have friends
                  </span>
                </li>
                <li
                  style={{
                    listStyleType: "none",
                    color: "#6a1b9a",
                    marginTop: "15px",
                    textAlign: "start",
                  }}
                >
                  <span style={{ color: "#555" }}>
                    You and help uplift your day.
                  </span>
                </li>
                <li
                  style={{
                    listStyleType: "none",
                    color: "#6a1b9a",
                    marginTop: "15px",
                    textAlign: "start",
                  }}
                >
                  <span style={{ color: "#555" }}>
                    Provide a motivational quote for you as you place your head
                    on the pillow
                  </span>
                </li>
              </ul>
            </div>
            <div style={{ width: "50%" }}>
              <PouchMockup
                src={`https://afsu.tohidur.com/img/services-2.jpg`}
              />
            </div>
          </div>
        </div>
      </div>
      <Footercomponent />
    </>
  );
};

export default ServiceDetail;
