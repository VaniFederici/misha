import { ItemList } from "../../components/item-list/item-list.component";

import "./home.container.css";

export const Home = (props) => {
  const { children, greeting } = props;

  return (
    <div className="home">
      <div
        className="home-main-image-container"
        style={{
          background: `url("${process.env.PUBLIC_URL}/images/main.jpg") no-repeat left`,
          backgroundSize: "cover",
        }}
      >
        <img
          src={process.env.PUBLIC_URL + "/images/logo-2.png"}
          className="home-main-logo"
          alt="main image"
        />
        <img
          src={process.env.PUBLIC_URL + "/images/arrow.png"}
          className="home-main-arrow"
          alt="arrow image"
        />
      </div>
      <ItemList />
    </div>
  );
};
