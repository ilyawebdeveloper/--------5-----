import { ButtonHTMLAttributes, Children, FC, PropsWithChildren, ReactElement } from "react";

import styles from "./Button.module.scss";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement>{};

const Button: FC<PropsWithChildren<IButton>> = ({children, ...rest}) => {
    return ( 
       <button className={styles.button} {...rest}> 
            {children} 
       </button>
    );
}
 
export default Button;