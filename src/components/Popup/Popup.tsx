import styles from "./Popup.module.css";
import Card from "../Card/Card";

const Popup = (props: any) => (
  <div className={styles.popup}>
    <Card>
      <span onClick={props.click} className={styles.popupClose}/>
      {props.popUpInfo.company != null && (
        <div className={styles.popupInfo}>
          <img src={props.popUpInfo.company.logoPath} alt="Company image"/>
          <p>
            <strong>Company name: </strong>
            {props.popUpInfo.company.name}
          </p>
          <p>
            <strong>Company description: </strong>
            {props.popUpInfo.company.description}
          </p>
          <p>
            <strong>Company type: </strong>
            {props.popUpInfo.company.translatedUserType}
          </p>
          <p>
            <strong>Agicultural types: </strong>
            {props.popUpInfo.company.agricultureTypes.length ? (
              props.popUpInfo.company.agricultureTypes.map((type: string) => {
                return <span key={type}>{type} </span>;
              })
            ) : (
              <span>/</span>
            )}
          </p>
          <p>
            <strong>Production types: </strong>
            {props.popUpInfo.company.productionTypes.length ? (
              props.popUpInfo.company.productionTypes.map((type: string) => {
                return <span key={type}>{type} </span>;
              })
            ) : (
              <span>/</span>
            )}
          </p>
        </div>
      )}
    </Card>
  </div>
);

export default Popup;
