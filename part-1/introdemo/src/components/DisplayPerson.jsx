const DisplayPerson = ({persons}) => {
    return (
        <div>
            {persons.map((p) => <p key={[p.name, p.number]}>{p.name}  {p.number} </p>)}
        </div>
    )
}

export default DisplayPerson