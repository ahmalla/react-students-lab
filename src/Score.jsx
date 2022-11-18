function Score({scores}) {

    const score = scores.map((score) => {

    return (  
        <div>
            <ul>
                <li><strong>Date: </strong>{score.date}</li>
                <li><strong>Score: </strong>{score.score}</li>
                <br></br>
            </ul>
        </div>
    );
})
return (
    <div>
        {score}
    </div>
)
}

export default Score