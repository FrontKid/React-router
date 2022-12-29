import React from 'react'
import { useParams, Link } from 'react-router-dom'
import dataCours from '../data/coursesData'
import NotFound from './NotFound'

const SingleCourse = () => {
  const { slug } = useParams()
  const course = dataCours.find((course) => course.slug === slug)
  console.log(course);
  if (!course) {
    return <NotFound />
  }
  return (
    <>
      <div>
        {course.title}
      </div>
      <Link to='/courses'>Go back</Link>
    </>
  )
}

export default SingleCourse