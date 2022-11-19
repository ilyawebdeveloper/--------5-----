import { FC, useState } from "react";

import cn from 'clsx';
import styles from "./Gallery.module.scss";

const Gallery: FC<{images: string[]}> = ({images}) => {

    const [currentIndex, setCurrentIndex] = useState(1);


    return ( 
        <div className={styles.gallery}>
            <div 
                style={{
                    backgroundImage: `url(${images[currentIndex]})`
                }} 
                className={cn(styles.image, styles.main)}
            />

            <div className={styles.list}>
                {images.map((image, index) => (
                    <button key={image} onClick={() => setCurrentIndex(index)} className={cn(styles.
                        item, {    
                            [styles.active]: index === currentIndex
                        }
                    )}>
                        <div 
                            style={{
                                backgroundImage: `url(${image})`
                            }} 
                            className={styles.image}
                        />
                    </button>
                ))}
            </div>
        </div>
     );
}
 
export default Gallery;