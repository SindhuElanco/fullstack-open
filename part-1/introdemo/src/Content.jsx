import Part from "./Part"

const Content = (props) => {
    return (
        <>
            <Part part={props.parts[0].name} excercise={props.parts[0].exercises} /> <br/>
            <Part part={props.parts[1].name} excercise={props.parts[1].exercises} /><br/>
            <Part part={props.parts[2].name} excercise={props.parts[2].exercises} />
        </>
    )
}

export default Content