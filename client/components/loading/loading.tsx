import { FunctionComponent } from "react";
import styles from './loading.module.css'

interface LoadingProps {
    
}
 
const Loading: FunctionComponent<LoadingProps> = () => {
    return (  
        <div className={styles['preloader']}>
        <div className={styles["loader"]}></div>
    </div>
    );
}
 
export default Loading;