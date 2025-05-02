import Header from "./Header"
import Content from "./Content"
import Total from "./Total"
const Course = (props) => {
    const courses = props.course
console.log('course:', courses)
    return (
        <div>
            {courses.map((course) => 
            <div key={course.id}>
                <Header name={course.name} />
                <Content part={course.parts} />
                Total of <Total total={course}/> excercises
            </div>
        )}
        </div>
    )
}

export default Course