const PersonForm = ({onSubmit, name, num, setName, setNum}) => {
     
    return(
        <div>
            <form onSubmit={onSubmit}>
        <div>
          name: <input value={name} onChange={setName} /> 
        </div>
        <div>
          number: <input value={num} onChange={setNum} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
        </div>
    )
}

export default PersonForm