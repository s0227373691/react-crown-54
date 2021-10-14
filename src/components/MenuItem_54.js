import React from "react";
import "./MenuItem_54.scss";

const MenuItem_54 = ({ name, remoteUrl, size }) => {
  return (
    <div class={`${size} menu-item`}>
      <img class="background-image" src={remoteUrl} alt="" />
      <a href="./hats.html" class="content">
        <h1 class="title">{name}</h1>
        <span class="subtitle">SHOP NOW</span>
      </a>
    </div>
  );
};

export default MenuItem_54;
