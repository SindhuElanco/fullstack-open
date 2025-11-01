const DisplayPerson = ({persons, onDelete}) => {
    return (
        <div>
            {persons.map((p) => 
            <p key={[p.name, p.number]}>
                {p.name}  {p.number} 
                <button onClick={() => onDelete(p.id)}>delete</button>
            </p>
            )}
        </div>
    )
}

export default DisplayPerson