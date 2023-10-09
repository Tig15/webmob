import { Platform } from "react-native";
import config from "../appConfig";

const { commonComponents, webComponents, mobileComponents } = config;

const ComponentManager = {
  getComponent: (componentName) => {
    const commonComponentLength = commonComponents?.filter(
      (a) => a.name == componentName
    )?.length;
    if (commonComponentLength > 0) {
      return getCommonComponent(componentName);
    } else if (Platform.OS === "web") {
      console.log("Web");
      return getWebComponent(componentName);
    } else if (Platform.OS === "android" || Platform.OS === "ios") {
      console.log("Android & iOS");
      return getMobileComponent(componentName);
    }
    return null;
  },
};

function getWebComponent(componentName) {
  return (
    webComponents?.find((a) => a.name == componentName)?.component || <></>
  );
}

function getMobileComponent(componentName) {
  return (
    mobileComponents?.find((a) => a.name == componentName)?.component || <></>
  );
}

function getCommonComponent(componentName) {
  return (
    commonComponents?.find((a) => a.name == componentName)?.component || <></>
  );
}

export default ComponentManager;
