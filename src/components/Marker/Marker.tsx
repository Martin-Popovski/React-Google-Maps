import styles from "./Marker.module.css";
import { User } from "../../models/User";
import { TradeType } from "../../models/TradeType";
import { UserType } from "../../models/UserType";
import { MarkerColor } from "../../models/MarkerColor";

const Marker = (props: any) => {
  const getMarkerColor = (user: User) => {
    let markerColor;
    switch (user.primaryTradeType || user.userTypeIdentifier) {
      case TradeType.Buyer:
        markerColor = MarkerColor.Green;
        break;
      case TradeType.Seller:
        markerColor = MarkerColor.Yellow;
        break;
      case UserType.Advisor:
        markerColor = MarkerColor.Black;
        break;
      case UserType.Farmer:
        markerColor = MarkerColor.Grey;
        break;
      case UserType.TradingHouse:
        markerColor = MarkerColor.Blue;
        break;
      case UserType.Mill:
        markerColor = MarkerColor.Orange;
        break;
    }

    return markerColor;
  };

  return (
    <div
      className={styles.marker}
      style={{ backgroundColor: getMarkerColor(props.user) }}
      onClick={props.click}
    >
      <span className={styles.markerText}>{props.user.listingsCount}</span>
    </div>
  );
};

export default Marker;
