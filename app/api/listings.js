import { get } from "react-native/Libraries/Utilities/PixelRatio";
import client from "./client";

const endpoint = "/listings";

const getListings = () => client.get(endpoint);

export default {
  getListings,
};
