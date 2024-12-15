import React from "react";
import ParticlesContainer from "../../Other/ParticlesContainer";
import Footercomponent from "../../Footer/FooterComponent";

import BlogInfo from "../../Other/BlogInfo";
import BlogNews from "../../Other/BlogNews";
import CategoryLink from "../../Form/CategoryLink";
import RoundedInput from "../../Form/RoundedInput";
import RoundedButton from "../../Form/RoundedButton";
import PouchMockup from "../../Other/PouchMockup";

import image from "../../../images/bgimg.jpg";
import PostedPageComponent from "../../Other/PostedPageComponent";
import PostCard from "../../Card/Postcard";
import AboutAuthorComponent from "../../Other/AboutAuthorComponent";
import CommentComponent from "../../Other/Commentcomponent";
import AddUser from "../../Users/AddUser";

const Blog1 = () => {
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
            pSize={`17px`}
          />

          {/* ---------------- */}
          <div
            className="flex"
            style={{
              width: "100%",
              marginTop: "70px",
              padding: "20px",
              border: "4px solid #6a1b9a",
              borderRadius: "20px",
            }}
          >
            <div
              style={{
                width: "250px",
                height: "100px",
                borderRadius: "20px",
                backgroundColor: "#6a1b9a",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="https://afsu.tohidur.com/img/quote-1.png"
                alt="Image not found"
              />
            </div>
            <div>
              <div style={{ textAlign: "start", marginLeft: "5%" }}>
                <div
                  style={{ fontSize: "30px" }}
                >{`“ If you've got an idea, start today. There's no better time than now to get going. That doesn't mean quit your job ”`}</div>
                <p style={{ fontSize: "15px", fontWeight: "normal" }}>
                  Writing by Jackson Doe
                </p>
              </div>
            </div>
          </div>
          {/* ------------ */}
          <p
            style={{
              color: "lightgray",
              fontSize: "17px",
              fontWeight: "normal",
              textAlign: "start",
            }}
          >
            lotsie roll dragée bonbon croisnt. Chupa chups loream sesame snaps
            jelly tiramiipsum dolor sit amet sou ffl liquorice oat cake biscuit
            jesms tiramisu jelly dash Caramels chocolatsweet roll tart. lotsie
            roll dragée b onbon croisnt. Chupa chups loream sesame snaps jelly
            tiramiipsum dolor sit amet sou ffl liquorice oat a ake biscuit jesms
            tiramisu jelly dash Caramelsn t. Chupa chups loream sesame snaps
            jelly tiramiipsum a olor sit amet souffl liquorice oat cake biscuit
            jesms tiramis.
          </p>
          <div style={{ textAlign: "start" }}>
            <ul style={{ fontSize: "20px" }}>
              <li
                style={{
                  listStyleType: "square",
                  color: "#6a1b9a",
                  marginTop: "15px",
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
                }}
              >
                <span style={{ color: "#555" }}>
                  Provide a motivational quote for you as you place your head on
                  the pillow
                </span>
              </li>
            </ul>
          </div>
          <div style={{ padding: "20px 0px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: "20px",
              }}
            >
              <PouchMockup src={`https://afsu.tohidur.com/img/profile-2.jpg`} />
              <PouchMockup src={`https://afsu.tohidur.com/img/profile-3.jpg`} />
            </div>
            <div style={{ marginTop: "20px" }}>
              <img
                style={{ borderRadius: "20px", width: "100%" }}
                src={`https://afsu.tohidur.com/img/profile-4.jpg`}
                alt="Image not found"
              />
            </div>
          </div>
          <p
            style={{
              color: "lightgray",
              fontSize: "17px",
              fontWeight: "normal",
              textAlign: "start",
            }}
          >
            Tighten your grip, Tarkin, the more star systems will slip through
            your fingers.Still, got a lot of spirit what do you think? What!? I
            don’t know what you’re talking about. I am a member of the
            Imperidiplomatic mission to Alderaan good is a reward if you aint
            tas around to use it Besides, attackin station ain’t my idea of cou
            rage. It’s more like suicide.
          </p>

          {/* --------- */}

          <div
            style={{
              color: "lightgray",
              fontSize: "17px",
              fontWeight: "normal",
              textAlign: "start",
              display: "flex",
            }}
          >
            <div style={{ width: "70%" }}>
              <p>
                ipsum dolor sit amet soufflé. I love liquorice oat cake biscuit
                tiramisu jelly danish Caramels its chorice sw eet roll tart.
                Jelly fruitcake tart caramels marzipan. Brownie I love chocolate
                that bar sesliquorice. I love to otsie roll dragée bonbon
                croisnt. Chupa chups lo ream sesame snaps jelly tiramiipsum
                dolor sit am et souffl liquorice oat cake biscuit jesms tiramisu
                jelly dash Caramels chocolatsweet roll tart. Jelly-o fruitc ake
                tart caramels marzipan.
              </p>
            </div>
            <div style={{ marginLeft: "20px", width: "30%" }}>
              <img
                style={{ borderRadius: "20px" }}
                src={`https://afsu.tohidur.com/img/blog-6.jpg`}
                alt="Profile Page 1"
              />
            </div>
          </div>
          <p
            style={{
              color: "lightgray",
              fontSize: "17px",
              fontWeight: "normal",
              textAlign: "start",
            }}
          >
            you’re talking about. I am a member of the Imperidiplomatic mission
            to Alderaan good is a reward if you aint tas around to use it
            Besides, attackin station ain’t my idea of courage. It’s more like
            suicide.
          </p>

          <PostedPageComponent />
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "50px",
            }}
          >
            <div style={{ width: "50%" }}>
              <PostCard
                text={`Whether you get knocked...`}
                content={`Previews Post`}
                textAlign={`start`}
              />
            </div>
            <div style={{ width: "50%", marginLeft: "20px" }}>
              <PostCard
                text={`It’s whether you get up...`}
                content={`Next Post`}
                textAlign={`end`}
              />
            </div>
          </div>
          <div style={{ marginTop: "50px" }}>
            <AboutAuthorComponent
              img={`https://afsu.tohidur.com/img/blog-7.jpg`}
              name={`About Author`}
              role={`Graphic Designer`}
              aboutAuthor={`Lorem ipsum dolor sit amet, consectetur adipis Vivamus sceler neque in Nam vitae urnasodales neque in faucibus.`}
            />
          </div>

          <h2
            style={{
              marginBottom: "20px",
              marginTop: "20px",
              textAlign: "start",
            }}
          >
            02 Comments
          </h2>

          <div style={{ marginTop: "50px" }}>
            <CommentComponent
              img={`https://afsu.tohidur.com/img/comment-1.jpg`}
              name={`Nolwar Disoza`}
              date={`10 months ago`}
              aboutAuthor={`Lorem ipsum dolor sit amet, consectetur adipis Vivamus sceler neque in Nam vitae urnasodales neque in faucibus.`}
            />
          </div>
          <div style={{ marginTop: "50px" }}>
            <CommentComponent
              img={`https://afsu.tohidur.com/img/comment-2.jpg`}
              name={`Thomas Walkar`}
              date={`10 months ago`}
              aboutAuthor={`Lorem ipsum dolor sit amet, consectetur adipis Vivamus sceler neque in Nam vitae urnasodales neque in faucibus.`}
            />
          </div>
          <h2
            style={{
              marginBottom: "20px",
              marginTop: "20px",
              textAlign: "start",
            }}
          >
            Leave a Comment
          </h2>
          <div style={{ marginTop: "50px" }}>
            <AddUser />
          </div>
        </div>

        {/* Part 2 */}
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
              img={`https://afsu.tohidur.com/img/recent-news-1.jpg`}
              date={`December 5, 2023`}
              title={`Interview Photographer Mark Seliger`}
              h2Size={`15px`}
            />
            <BlogNews
              img={`https://afsu.tohidur.com/img/recent-news-2.jpg`}
              date={`December 5, 2023`}
              title={`Interview Photographer Mark Seliger`}
            />
            <BlogNews
              img={`https://afsu.tohidur.com/img/recent-news-3.jpg`}
              date={`December 5, 2023`}
              title={`Interview Photographer Mark Seliger`}
            />
            <BlogNews
              img={`https://afsu.tohidur.com/img/recent-news-4.jpg`}
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

export default Blog1;
