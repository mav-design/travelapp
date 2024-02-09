import {SearchTour} from '@widgets/searchTour/SearchTour.jsx'
import styles from './Home.module.css'




export function Home(){

  return <div className={styles.searchBody}>
    <SearchTour/>
  </div>
}