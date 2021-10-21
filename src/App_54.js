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
