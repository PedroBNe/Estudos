import styles from "./styles.module.css"

export default function Section(props){
    return(
        <div
            {...props}
            className={`${styles.wrapper} ${props.className}`}
        >
            {props.children}
        </div>
    )
}