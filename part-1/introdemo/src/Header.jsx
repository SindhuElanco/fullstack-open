const Header = (props) => {
    const {name} = props
    // console.log('Header', name.map((course) => course.name))
    console.log(name)
    return(
        <> 
        {}
        <h1>{name}</h1>
        </>
    )
}

export default Header