import Score from "./Score";

function Student({student}) {
    return (  
        <div>
            <ul>
                <li><strong>Name: </strong>{student.name}</li>
                <br></br>
                <li><strong>Bio: </strong>{student.bio}</li>
                <br></br>
                <Score scores={student.scores} />
                
            </ul>
        </div>
    );
}

export default Student