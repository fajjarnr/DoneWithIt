import Constants from "expo-constants";

const settings = {
  dev: {
    apiURL: "https://donewithit-server.herokuapp.com/api",
  },
  staging: {
    apiURL: "https://donewithit-server.herokuapp.com/api",
  },
  prod: {
    apiURL: "https://donewithit-server.herokuapp.com/api",
  },
};

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;
  if (Constants.manifest.releaseChannel === "staging") return settings.staging;
  return settings.prod;
};

export default getCurrentSettings();
