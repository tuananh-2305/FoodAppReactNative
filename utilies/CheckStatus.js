import { colors } from "../contants";
export const changeColorStatus = (status) => {
  return status.toLowerCase().trim() == "opening now"
    ? colors.success
    : status.toLowerCase().trim() == "closing soon"
    ? colors.alert
    : status.toLowerCase().trim() == "comming soon"
    ? colors.warning
    : colors.success;
};
