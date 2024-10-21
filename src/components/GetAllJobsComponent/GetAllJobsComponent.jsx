import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './GetAllJobsComponent.css'
import JobComponent from './JobComponent'

const GetAllJobsComponent = () => {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    axios
    .get('http://localhost:3500/api/v1/jobs')
    .then(response => {
      setJobs(response.data)
    })
    .catch(error => console.log(error))
  }, [])

  return (
    <div className ='jobs'>
      {jobs.map((job, index) => (
        <JobComponent job = {job} key={index}/>
        ))}
    </div>
  )
}

export default GetAllJobsComponent