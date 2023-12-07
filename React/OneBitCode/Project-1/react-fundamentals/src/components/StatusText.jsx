export default () => {

    const status = true;

    return (
        <h2
            style={{
                color: status ? "#00ff9f" : "#f64348"
            }}
        >
            É possível usar dessa forma: {status ? "ON" : "OFF"}
        </h2>
    )
    
}