const Total = (props) => {
    const { total } = props
    console.log('Total', total.parts)
    
 
    return (
        <>
       {total.parts.reduce((sum, part) => sum + part.exercises, 0)}
        </>
    )
}

export default Total