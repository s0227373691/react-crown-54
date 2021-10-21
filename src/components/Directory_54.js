import React from "react";
import "./Directory_54.scss";
import MenuItem_54 from "./MenuItem_54";

import menuItem_54 from "./menu-item-datas";
const Directory_54 = () => {
  return (
    <div>
      <div className="directory-menu">
        {menuItem_54.map((item) => {
          const { id, name, remoteUrl, size } = item;
          return (
            <MenuItem_54
              key={id}
              name={name}
              remoteUrl={remoteUrl}
              size={size}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Directory_54;
