import React from "react";
import TitleContainer from "../Homepages/TitleContainer";
import OurService from "./OurService";

const Service = () => {
  return (
    <>
      <TitleContainer />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center", // Centers vertically if needed
          minHeight: "100vh", // Ensures it takes the full height of the viewport for vertical centering
        }}
      >
        <div
          style={{
            width: "90%",
            maxWidth: "1200px", // Restricts the width for better centering
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center", // Adds space between the `GraphicsCard` components
                padding: "10px",
                margin: "10px auto", // Centers the inner div horizontally within the parent
                width: "80%", // Adjusts the width as needed
              }}
            >
              <OurService
                title={`Graphichs Design`}
                description={`Lorem ipm dolor amet, consectetur magm maiores.Ipsa dolor sit ilmesy magnam maores.`}
                icon={`https://publicdomainvectors.org/tn_img/Anonymous_Paper_4_icon.webp`}
              />
              <OurService
                title={`Graphichs Design`}
                description={`Lorem ipm dolor amet, consectetur magm maiores.Ipsa dolor sit ilmesy magnam maores.`}
                icon={`https://cdn-icons-png.flaticon.com/512/1185/1185316.png`}
              />
              <OurService
                title={`Stunning Design`}
                description={`Lorem ipm dolor amet, consectetur magm maiores.Ipsa dolor sit ilmesy magnam maores.`}
                icon={`https://cdn.iconscout.com/icon/premium/png-256-thumb/crop-3302286-2788249.png`}
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center", // Adds space between `GraphicsCard` components
                padding: "10px",
                margin: "10px auto", // Centers this inner div as well
                width: "80%", // Adjust the width as needed
              }}
            >
              <OurService
                title={`Immigration Application`}
                description={`Lorem ipm dolor amet, consectetur magm maiores.Ipsa dolor sit ilmesy magnam maores.`}
                icon={`https://icons.veryicon.com/png/o/object/home-icon/lamp-14.png`}
              />
              <OurService
                title={`Innovative Ideas`}
                description={`Lorem ipm dolor amet, consectetur magm maiores.Ipsa dolor sit ilmesy magnam maores.`}
                icon={`https://cdn-icons-png.flaticon.com/512/9888/9888073.png`}
              />
              <OurService
                title={`Project Management`}
                description={`Lorem ipm dolor amet, consectetur magm maiores.Ipsa dolor sit ilmesy magnam maores.`}
                icon={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStV5Kjft6Cxc8lJwR4lUPAvHdiT6IAmhR5CQ&s`}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
