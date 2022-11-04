const Tweet = (props) => {
    return (
        <div>
            <span>{props.username}</span>
            <br></br>
            <span>{props.name}</span>
            <br></br>
            <span>{props.date}</span>
            <br></br>
            <span>{props.message}</span>

        </div>
    );
}