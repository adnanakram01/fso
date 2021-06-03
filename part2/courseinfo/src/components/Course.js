import React from 'react'

const Header = ( {course} ) => {
    return (
        <h1>{course.name}</h1>
    )
}

const Content = ( {course} ) => {
    return (
        <p>
            {course.parts.map(e => {
                return <p>
                    {e.name} {e.exercises}
                    </p>
                })}
        </p>
    )
}

const Total = ( {course} ) => {

    var exercises = course.parts.map(e => e.exercises)

    var total = exercises.reduce((sum, e) => {
        return e + sum
    },0)

    return (
        <p>
            <b>total of {total} exercises</b>
        </p>
    )
}

const Course = ( {course} ) => {
    return (
        <div>
            <Header course={course} />
            <Content course={course} />
            <Total course={course} />
        </div>
    )
}

export default Course