import { ItemList } from "../../components/item-list/item-list.component";

import "./home.container.css";

export const Home = (props) => {
  const { children, greeting } = props;

  return (
    <div className="home">
      <div>
        <img
          src={process.env.PUBLIC_URL + "/images/main.jpg"}
          className="home-main-image"
          alt="main image"
        />
      </div>
      <ItemList />
    </div>
  );
};
