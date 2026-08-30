import { useParams } from "react-router-dom"

function CourseDetail () {

    const params  = useParams()


    console.log(params)
    return (
        <>
        This is course detail page of {params.name}
        </>
    )
}

export default CourseDetail