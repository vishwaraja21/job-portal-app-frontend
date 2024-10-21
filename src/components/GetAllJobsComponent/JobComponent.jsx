import React from 'react'

const JobComponent = ({job}) => {
  return (
    <div className='card'>
      <div className='text-container'>
        <h3>{job.position}</h3>
        <p className='status'>
          {job.company}
        </p>
        <p className="status">
          {job.location}
        </p>
        {/* <p className="title">Written by</p> */}
        <p className="salary">{job.salary}</p>
        <p className="description">{job.description}</p>
      </div>
    </div>
  )
}

export default JobComponent
