import Part from "./Part"

const Content = (props) => {
    const {part} = props
    console.log('Content', part.map((part)=> part.name))
    // console.log(props)
    return (
        <>
        {part.map((part)=> 
            <Part part={part.name} excercise={part.exercises} key={part.id} />
            
        )}
        </>
    )
}

export default Content