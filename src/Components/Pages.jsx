import facebookImage from "../public/images/facebook.png";
import instagramImage from "../public/images/instagram.png";
import twitterImage from "../public/images/twitter.png";
import ListWebPages from "./Footer/ListWebPages";

const Pages = () => {
  return (
    <div style={{ display: "flex", marginLeft: "15px" }}>
      <ListWebPages imageName={facebookImage} webName="Facebook" />
      <ListWebPages imageName={instagramImage} webName="Instagram" />
      <ListWebPages imageName={twitterImage} webName="Twitter" />
    </div>
  );
};

export default Pages;
