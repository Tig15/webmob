import MobileBottomTabBar from "./navigation/Navigation/HomeStack";
import NavHead from "./components/NavHead";
import ProductCard from "./components/ProductCard";
import CommonSearch from "./components/Search";
import WebSidebar from "./components/Sidebar";
import AppNavigator from "./navigation/appNavigator";

const config = {
  webComponents: [
    {
      name: "WebSidebar",
      component: <WebSidebar />,
    },
    {
      name: "NavHead",
      component: <NavHead />,
    },
    {
      name: "ProductCard",
      component: <ProductCard />,
    },
  ],
  mobileComponents: [
    {
      name: "AppNavigate",
      component: <AppNavigator />,
    },
  ],
};

export default config;
