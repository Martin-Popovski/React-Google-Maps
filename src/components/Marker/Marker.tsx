import styles from './Marker.module.css';

const Marker = (props: any) => (
    <div className={styles.marker} style={{backgroundColor: props.user.userMarkerColor}} onClick={props.click}>
        <span className={styles.markerText}>{props.user.listingsCount}</span>
    </div>
);

export default Marker;