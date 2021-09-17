import { useState } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "../Marker/Marker";
import Popup from "../Popup/Popup";
import { User } from "../../models/User";
import styles from "./GoogleMap.module.css";

interface GoogleMapInterface {
  users: User[];
}

export const GoogleMap = (props: GoogleMapInterface) => {
  const [popupInfo, setPopupInfo]: [any, Function] = useState(null);

  const openPopup = (user: User) => {
    setPopupInfo(user);
  };

  const closePopup = () => {
    setPopupInfo(null);
  };

  const defaultProps = {
    center: {
      lat: 50,
      lng: 25,
    },
    zoom: 4,
  };

  return (
    <div className={styles.googleMap}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDhslsCNo7ykPML8NNSNdyodynrubTN__I" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {props.users.map((user: User) => (
          <Marker
            key={user.id}
            lat={user.position.lat}
            lng={user.position.lng}
            user={user}
            click={() => openPopup(user)}
          />
        ))}
        {popupInfo && (
          <Popup
            lat={popupInfo.position.lat}
            lng={popupInfo.position.lng}
            popUpInfo={popupInfo}
            click={() => closePopup()}
          />
        )}
      </GoogleMapReact>
    </div>
  );
};
