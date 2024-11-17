import WebPages from "./WebPages";
import footer from "../../public/images/footer.png";

const Footercomponent = () => {
  return (
    <footer
      className="w-full flex-col flex justify-center md:flex-column"
      style={{
        width: "100%",
        backgroundImage: `url(${footer})`,
        padding: "5%",
      }}
    >
      <div className="w-full flex-col flex justify-center md:flex-row">
        <img
          style={{ marginBottom: "25px" }}
          className="w-16 md:w-32 lg:w-48 flex flex-col items-center justify-between"
          src="../../../images/afsu-logo.png"
          alt="Logo"
        />
      </div>
      <div className="w-full flex-col flex justify-center md:flex-row">
        <h4 style={{ color: "white", width: "60%", fontSize: "20px" }}>
          Duis sed odio sit amet nibh vulputate cursus a sit amet mauris Morbi
          accumsan ipsuy a odio tincdunt ilmauctor Class aptent taciti sociosqu
          ads Etiam.
        </h4>
      </div>
      <div
        className="w-full flex-col flex justify-center md:flex-row"
        style={{ padding: "5%" }}
      >
        <WebPages />
      </div>
      <h5 style={{ color: "white" }}>
        Copyright © 2024 AfsuBy Tohidur Hasan, All Rights Reserved
      </h5>
    </footer>
  );
};

export default Footercomponent;
