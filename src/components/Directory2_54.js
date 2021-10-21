import { useState, useEffect } from "react";
import "./Directory_54.scss";
import MenuItem_54 from "./MenuItem_54";
import axios from "axios";
// import menuItem_54 from "./menu-item-datas";
const Directory2_54 = () => {
  const [menuItems, setMenuItems] = useState([]);
  const fetchMenuItems = async () => {
    const { data } = await axios
      .get("https://heroku-crown54.herokuapp.com/api_54/category_54")
      .catch((err) => {
        throw new Error(err);
      });
    setMenuItems(data);
  };
  useEffect(() => {
    fetchMenuItems();
  }, []);
  return (
    <div>
      <div className="directory-menu">
        {menuItems.map((item) => {
          const { id, name, remote_url, size } = item;
          return (
            <MenuItem_54
              key={id}
              name={name}
              remoteUrl={remote_url}
              size={size}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Directory2_54;
