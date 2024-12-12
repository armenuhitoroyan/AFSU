import React from "react";
import ParticlesContainer from "../../Other/ParticlesContainer";
import Footercomponent from "../../Footer/FooterComponent";

import BlogInfo from "../../Other/BlogInfo";
import Pagination from "../../Other/Pagination";
import BlogNews from "../../Other/BlogNews";
import CategoryLink from "../../Form/CategoryLink";
import RoundedInput from "../../Form/RoundedInput";
import RoundedButton from "../../Form/RoundedButton";
import image from "../../../images/bgimg.jpg";

const OurBlog = () => {
  return (
    <>
      <ParticlesContainer title="Our Blog" img={image} />
      <div
        style={{
          width: "97%",
          display: "flex",
          margin: "0 auto",
          padding: "70px",
        }}
      >
        <div style={{ width: "60%" }}>
          <BlogInfo
            img={`https://afsu.tohidur.com/img/zoom-3.jpg`}
            profileImg={`https://afsu.tohidur.com/img/45.jpg`}
            date={`December 5, 2023`}
            author={`Willimes Marker`}
            title={`Professionals with a Global Mindset`}
            text={`ipsum dolor sit amet soufflé. I love liquorice oat cake biscuit
            tiramisu jelly danish Caramels its chorice sw eet roll tart. Jelly
            fruitcake tart caramels marzipan. Brownie I love chocolate that bar
            sesliquorice. I love to otsie roll dragée bonbon croisnt. Chupa
            chups loream sesame snaps jelly tiramiipsum dolor sit amet sou ffl
            liquorice oat cake biscuit jesms tiramisu jelly dash Caramels
            chocolatsweet roll tart. Jelly-o fruitcake ta rt caramels marzipan
            Brownie I love chocolate bar. Cake I love liquorice n’t act so
            surprised, Your Highnes You weren’t on any mercy mison this time to
            this shp before me.`}
            h2Size={`45px`}
          />
          <div style={{ marginTop: "50px" }}>
            <BlogInfo
              img={`https://afsu.tohidur.com/img/zoom-1.jpg`}
              profileImg={`https://afsu.tohidur.com/img/45.jpg`}
              date={`December 5, 2023`}
              author={`Willimes Marker`}
              title={`Professionals with a Global Mindset`}
              h2Size={`45px`}
              text={`ipsum dolor sit amet soufflé. I love liquorice oat cake biscuit
            tiramisu jelly danish Caramels its chorice sw eet roll tart. Jelly
            fruitcake tart caramels marzipan. Brownie I love chocolate that bar
            sesliquorice. I love to otsie roll dragée bonbon croisnt. Chupa
            chups loream sesame snaps jelly tiramiipsum dolor sit amet sou ffl
            liquorice oat cake biscuit jesms tiramisu jelly dash Caramels
            chocolatsweet roll tart. Jelly-o fruitcake ta rt caramels marzipan
            Brownie I love chocolate bar. Cake I love liquorice n’t act so
            surprised, Your Highnes You weren’t on any mercy mison this time to
            this shp before me.`}
            />
          </div>
          <div style={{ marginTop: "50px" }}>
            <BlogInfo
              img={`https://afsu.tohidur.com/img/zoom-2.jpg`}
              profileImg={`https://afsu.tohidur.com/img/45.jpg`}
              date={`December 5, 2023`}
              author={`Willimes Marker`}
              title={`Professionals with a Global Mindset`}
              h2Size={`45px`}
              text={`ipsum dolor sit amet soufflé. I love liquorice oat cake biscuit
            tiramisu jelly danish Caramels its chorice sw eet roll tart. Jelly
            fruitcake tart caramels marzipan. Brownie I love chocolate that bar
            sesliquorice. I love to otsie roll dragée bonbon croisnt. Chupa
            chups loream sesame snaps jelly tiramiipsum dolor sit amet sou ffl
            liquorice oat cake biscuit jesms tiramisu jelly dash Caramels
            chocolatsweet roll tart. Jelly-o fruitcake ta rt caramels marzipan
            Brownie I love chocolate bar. Cake I love liquorice n’t act so
            surprised, Your Highnes You weren’t on any mercy mison this time to
            this shp before me.`}
            />
          </div>
          <div style={{ marginTop: "50px" }}>
            <BlogInfo
              img={`https://afsu.tohidur.com/img/profile-1.jpg`}
              profileImg={`https://afsu.tohidur.com/img/45.jpg`}
              date={`December 5, 2023`}
              author={`Willimes Marker`}
              title={`Professionals with a Global Mindset`}
              h2Size={`45px`}
              text={`ipsum dolor sit amet soufflé. I love liquorice oat cake biscuit
            tiramisu jelly danish Caramels its chorice sw eet roll tart. Jelly
            fruitcake tart caramels marzipan. Brownie I love chocolate that bar
            sesliquorice. I love to otsie roll dragée bonbon croisnt. Chupa
            chups loream sesame snaps jelly tiramiipsum dolor sit amet sou ffl
            liquorice oat cake biscuit jesms tiramisu jelly dash Caramels
            chocolatsweet roll tart. Jelly-o fruitcake ta rt caramels marzipan
            Brownie I love chocolate bar. Cake I love liquorice n’t act so
            surprised, Your Highnes You weren’t on any mercy mison this time to
            this shp before me.`}
            />
          </div>
          <div style={{ marginTop: "50px" }}>
            <BlogInfo
              img={`https://afsu.tohidur.com/img/profile-2.jpg`}
              profileImg={`https://afsu.tohidur.com/img/45.jpg`}
              date={`December 5, 2023`}
              author={`Willimes Marker`}
              title={`Professionals with a Global Mindset`}
              h2Size={`45px`}
              text={`ipsum dolor sit amet soufflé. I love liquorice oat cake biscuit
            tiramisu jelly danish Caramels its chorice sw eet roll tart. Jelly
            fruitcake tart caramels marzipan. Brownie I love chocolate that bar
            sesliquorice. I love to otsie roll dragée bonbon croisnt. Chupa
            chups loream sesame snaps jelly tiramiipsum dolor sit amet sou ffl
            liquorice oat cake biscuit jesms tiramisu jelly dash Caramels
            chocolatsweet roll tart. Jelly-o fruitcake ta rt caramels marzipan
            Brownie I love chocolate bar. Cake I love liquorice n’t act so
            surprised, Your Highnes You weren’t on any mercy mison this time to
            this shp before me.`}
            />
          </div>
          <div
            style={{
              marginTop: "70px",
              border: "1px solid gray",
              borderRadius: "35px",
              width: "43.5%",
            }}
          >
            <Pagination />
          </div>
        </div>
        <div style={{ width: "40%" }}>
          <div
            style={{
              width: "90%",
              backgroundColor: "#f8f9fa",
              borderRadius: "20px",
              marginLeft: "10%",
              paddingInline: "25px",
              paddingTop: "30px",
              paddingBottom: "30px",
              textAlign: "start",
            }}
          >
            <h2 style={{ fontSize: "30px", fontWeight: "bold" }}>
              Recent News
            </h2>
            <div
              style={{
                width: "70px",
                height: "3px",
                backgroundColor: "#4219dc",
              }}
            ></div>
            <BlogNews
              img={`https://afsu.tohidur.com/img/showcase-1.jpg`}
              date={`December 5, 2023`}
              title={`Interview Photographer Mark Seliger`}
            />
            <BlogNews
              img={`https://afsu.tohidur.com/img/showcase-2.jpg`}
              date={`December 5, 2023`}
              title={`Interview Photographer Mark Seliger`}
            />
            <BlogNews
              img={`https://afsu.tohidur.com/img/showcase-3.jpg`}
              date={`December 5, 2023`}
              title={`Interview Photographer Mark Seliger`}
            />
            <BlogNews
              img={`https://afsu.tohidur.com/img/showcase-4.jpg`}
              date={`December 5, 2023`}
              title={`Interview Photographer Mark Seliger`}
            />
          </div>
          {/* **************** */}
          <div
            style={{
              width: "90%",
              backgroundColor: "#f8f9fa",
              borderRadius: "20px",
              marginLeft: "10%",
              paddingInline: "25px",
              paddingTop: "30px",
              paddingBottom: "30px",
              textAlign: "start",
              marginTop: "30px",
            }}
          >
            <h2 style={{ fontSize: "30px", fontWeight: "bold" }}>Categories</h2>
            <div
              style={{
                width: "70px",
                height: "3px",
                backgroundColor: "#4219dc",
              }}
            ></div>
            <div style={{ marginTop: "20px" }}>
              <CategoryLink hRef={`Graphic Design`} prefNumber={`10`} />
            </div>
            <div style={{ marginTop: "20px" }}>
              <CategoryLink hRef={`Graphic Design`} prefNumber={`10`} />
            </div>
            <div style={{ marginTop: "20px" }}>
              <CategoryLink hRef={`Ui/Ux Design`} prefNumber={`10`} />
            </div>
            <div style={{ marginTop: "20px" }}>
              <CategoryLink hRef={`Creative Studio`} prefNumber={`10`} />
            </div>
            <div style={{ marginTop: "20px" }}>
              <CategoryLink hRef={`Mobile Application`} prefNumber={`10`} />
            </div>
          </div>

          {/* ******************** */}
          <div
            style={{
              width: "90%",
              backgroundColor: "#f8f9fa",
              borderRadius: "20px",
              marginLeft: "10%",
              paddingInline: "25px",
              paddingTop: "30px",
              paddingBottom: "30px",
              textAlign: "start",
              marginTop: "30px",
            }}
          >
            <h2 style={{ fontSize: "30px", fontWeight: "bold" }}>Meta Links</h2>
            <div
              style={{
                width: "70px",
                height: "3px",
                backgroundColor: "#4219dc",
              }}
            ></div>
            <div
              style={{
                marginTop: "20px",
                width: "100%",
                padding: "20px",
                backgroundColor: "white",
                color: "black",
              }}
            >
              <div style={{ marginTop: "10px" }}>
                <a href="#">Log in</a>
              </div>
              <div style={{ marginTop: "10px" }}>
                <a href="#">Entries RSS</a>
              </div>
              <div style={{ marginTop: "10px" }}>
                <a href="#">Comments RSS</a>
              </div>
              <div style={{ marginTop: "10px" }}>
                <a href="#">WordPress.org</a>
              </div>
            </div>
          </div>

          {/* **************************** */}
          <div
            style={{
              width: "90%",
              backgroundColor: "#f8f9fa",
              borderRadius: "20px",
              marginLeft: "10%",
              paddingInline: "25px",
              paddingTop: "30px",
              paddingBottom: "30px",
              textAlign: "start",
              marginTop: "30px",
            }}
          >
            <h2 style={{ fontSize: "30px", fontWeight: "bold" }}>
              Gallery Photos
            </h2>
            <div
              style={{
                width: "70px",
                height: "3px",
                backgroundColor: "#4219dc",
              }}
            ></div>
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <div>
                <img
                  style={{ borderRadius: "20px" }}
                  src={`https://afsu.tohidur.com/img/showcase-5.jpg`}
                  alt="Image not found"
                />
              </div>
              <div style={{ marginLeft: "20px" }}>
                <img
                  style={{ borderRadius: "20px" }}
                  src={`https://afsu.tohidur.com/img/showcase-6.jpg`}
                  alt="Image not found"
                />
              </div>
            </div>
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <div>
                <img
                  style={{ borderRadius: "20px" }}
                  src={`https://afsu.tohidur.com/img/showcase-7.jpg`}
                  alt="Image not found"
                />
              </div>
              <div style={{ marginLeft: "20px" }}>
                <img
                  style={{ borderRadius: "20px" }}
                  src={`https://afsu.tohidur.com/img/showcase-8.jpg`}
                  alt="Image not found"
                />
              </div>
            </div>
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <div>
                <img
                  style={{ borderRadius: "20px" }}
                  src={`https://afsu.tohidur.com/img/showcase-9.jpg`}
                  alt="Image not found"
                />
              </div>
              <div style={{ marginLeft: "20px" }}>
                <img
                  style={{ borderRadius: "20px" }}
                  src={`https://afsu.tohidur.com/img/profile-home-img-1.jpg`}
                  alt="Image not found"
                />
              </div>
            </div>
          </div>
          {/* ////////////////////////// */}
          <div
            style={{
              width: "90%",
              backgroundColor: "#f8f9fa",
              borderRadius: "20px",
              marginLeft: "10%",
              paddingInline: "25px",
              paddingTop: "30px",
              paddingBottom: "30px",
              textAlign: "start",
              marginTop: "30px",
            }}
          >
            <h2 style={{ fontSize: "30px", fontWeight: "bold" }}>
              Subscribe Newsletter
            </h2>
            <div
              style={{
                width: "70px",
                height: "3px",
                backgroundColor: "#4219dc",
              }}
            ></div>
            <div style={{ marginTop: "20px" }}>
              <p style={{ color: "lightgray" }}>
                Lorem ipsum dolor sit amet, consec tetu adipisci my nibh euismod
              </p>
            </div>
            <div style={{ marginTop: "20px" }}>
              <RoundedInput
                type={`text`}
                placeholder={`Enter your email...`}
                onChange={() => {
                  console.log("Email entered");
                }}
              />
            </div>
            <div style={{ marginTop: "20px" }}>
              <RoundedButton className={`rounded-button`} text={`Subscribe`} />
            </div>
          </div>
        </div>
      </div>
      <Footercomponent />
    </>
  );
};

export default OurBlog;
