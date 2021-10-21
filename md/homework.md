## Q1

![](https://i.imgur.com/6qDIWsb.jpg)
![](https://i.imgur.com/FrYmTAb.jpg)

## Q2

![](https://i.imgur.com/wu4tK28.jpg)
![](https://i.imgur.com/oSBWOrO.png)
![](https://i.imgur.com/q6PHXqC.jpg)
![](https://i.imgur.com/FuSnySm.jpg)

## Q3

![](https://i.imgur.com/6sRL6gf.jpg)

```js
// menu-item-datas.js
const items = [
  {
    id: 1,
    name: "HATS",
    remoteUrl: "https://i.ibb.co/cvpntL1/hats.png",
    size: "",
  },
  {
    id: 2,
    name: "JACKETS",
    remoteUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    size: "",
  },
  {
    id: 3,
    name: "SNEAKERS",
    remoteUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    size: "",
  },
  {
    id: 4,
    name: "WOMENS",
    remoteUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    size: "large",
  },
  {
    id: 5,
    name: "MENS",
    remoteUrl: "https://i.ibb.co/R70vBrQ/men.png",
    size: "large",
  },
];

export default items;
```

```js
// Directory_54.js
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
```

## Q6

![](https://i.imgur.com/r2qnlMw.jpg)
![](https://i.imgur.com/vKwzDPB.jpg)

```js
// Header_54.js
import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/crown.svg";
import "./Header.scss";
const Header_54 = () => {
  return (
    <div>
      <div class="header">
        <Link to="/" class="logo-container">
          <Logo />
        </Link>
        <div class="options">
          <Link to="/shop_54" class="option">
            Shop
          </Link>
          <Link to="/contact_54" class="option">
            Contact
          </Link>
          <Link to="/signin_54" class="option">
            Sign In
          </Link>
          <div class="cart-icon" onclick="cartToggle()">
            <img class="shopping-icon" src="./assets/shopping-bag.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header_54;
```

```js
// App_54.js
import { Switch, Route } from "react-router-dom";

import Header_54 from "./components/Header_54";
import Homepage_54 from "./pages/Homepage_54";
import ShopTwoPage_54 from "./pages/ShopTwoPage_54";
import ContactPage_54 from "./pages/ContactPage_54";
import SiginPage_54 from "./pages/SiginPage_54";

function App_54() {
  return (
    <div>
      <Header_54 />
      <Switch>
        <Route exact path="/" component={Homepage_54} />
        <Route exact path="/shop_54" component={ShopTwoPage_54} />
        <Route exact path="/contact_54" component={ContactPage_54} />
        <Route exact path="/signin_54" component={SiginPage_54} />
      </Switch>
    </div>
  );
}

export default App_54;
```
