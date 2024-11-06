import WebPages from "./WebPages";
import footer from "../../public/images/footer.png";

const Footercomponent = () => {
  return (
    <footer
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        backgroundImage: `url(${footer})`,
      }}
    >
      {/* <h4>
        Duis sed odio sit amet nibh vulputate cursus a sit amet mauris Morbi
        accumsan ipsuy a odio tincdunt ilmauctor Class aptent taciti sociosqu
        ads Etiam.
      </h4> */}
      <WebPages />
      {/* <h5>Copyright © 2024 AfsuBy Tohidur Hasan, All Rights Reserved</h5> */}
    </footer>
  );
};

export default Footercomponent;
