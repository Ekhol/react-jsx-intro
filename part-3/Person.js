const Person = (props) => {
    let vote = props.age >= 18 ? "Please go vote!" : "You must be 18 to vote!";
    let hobbies = props.hobbies.map(h => <li>{h}</li>);

    return (
        <div>
            <p>Learn some info about this person:</p>
            <ul>
                <li>Name: {props.name}</li>
                <li>Age: {props.age}</li>
                <ul>
                    Hobbies:
                    {hobbies}
                </ul>
            </ul>
            <h3>{vote}</h3>
        </div>
    );
}