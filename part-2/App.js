const App = () => {
    return (
        <div>
            <Tweet username="Testing" name="Tester McTesting" date={new Date().toDateString()} message="First test!" />
            <Tweet username="Second" name="Number Two" date={new Date().toDateString()} message="Yeehaw!" />
            <Tweet username="Third" name="El Tercero" date={new Date().toDateString()} message="Blah blah blah" />
        </div>
    )
}