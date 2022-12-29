import React from 'react'
import { Link } from 'react-router-dom'
import coursesData from '../data/coursesData'
const AllCourses = () => {
  return (
    <>
      <div>All COURSES</div>
      {coursesData.map(({ slug, id, title }) => <Link className='pageLink' key={id} to={`${slug}`}>{title}</Link>)}
    </>

  )
}

export default AllCourses