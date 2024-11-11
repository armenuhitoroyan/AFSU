import facebookImage from "../public/images/facebook.png";
import instagramImage from "../public/images/instagram.png";
import twitterImage from "../public/images/twitter.png";

import Logos from "./Footer/logos";

const Pages = () => {
  return (
    <div style={{ display: "flex", marginLeft: "15px" }}>
      <Logos imageName={facebookImage} />
      <Logos imageName={instagramImage} />
      <Logos imageName={twitterImage} />
    </div>
  );
};

export default Pages;
