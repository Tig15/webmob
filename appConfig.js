import MobileBottomTabBar from "./components/BottomTab";
import NavHead from "./components/NavHead";
import CommonSearch from "./components/Search";
import WebSidebar from "./components/Sidebar";

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
  ],
  mobileComponents: [
    {
      name: "BottomTabBar",
      component: <MobileBottomTabBar />,
    },
  ],
};

export default config;
