import React, { useState } from 'react'
import './AddNewJobsComponent.css'
import axios from 'axios'

const AddNewJobsComponent = () => {
  const [jobInfo, setJobInfo] = useState({
    position: '',
    company: '',
    location: '',
    salary: '',
    description:'',
  });

  const positionHandler = (event) => {
    setJobInfo({
      ...jobInfo,
      position: event.target.value,
    });
  };

  const companyHandler = (event) => {
    setJobInfo({
      ...jobInfo,
      company: event.target.value,
    });
  };

  const locationHandler = (event) => {
    setJobInfo({
      ...jobInfo,
      location: event.target.value,
    });
  };

  const salaryHandler = (event) => {
    setJobInfo({
      ...jobInfo,
      salary: event.target.value,
    });
  };

  const descriptionHandler = (event) => {
    setJobInfo({
      ...jobInfo,
      description: event.target.value,
    });
  };

  const { position, company, location, salary, description } = jobInfo;

  const formSubmitHandler = (event) => {
    event.preventDefault()
    
    axios
      .post(`http://localhost:3500/api/v1/jobs`, jobInfo)
      .then(response => {
        alert(`${response.data.position} is added successfully`)
        window.location.href = '/'
      })
      .catch(error => {
        if(error.response)
          {
            alert(`Status ${error.response.status} - ${error.response.message}`)
          }
      })
  }


  return (
    <form className='form-container' onSubmit={formSubmitHandler}>
      <h2>Adding a new job</h2>

      <div className='form-group'>
        <label>Job Positon</label>
        <input
          type='text'
          placeholder='Enter the job position'
          value={position}
          onChange={positionHandler}
          required
        />
      </div>

      <div className='form-group'>
        <label>Company Name</label>
        <input
          type='text'
          className='form-control'
          placeholder='Enter the company name'
          value={company}
          onChange={companyHandler}
          required
        />
      </div>

      <div className='form-group'>
        <label>Location</label>
        <input
          type='text'
          placeholder='Enter the location'
          value={location}
          onChange={locationHandler}
          required
        />
      </div>

      <div className='form-group'>
        <label>Salary</label>
        <input
          type='text'
          placeholder='Enter the salary'
          value={salary}
          onChange={salaryHandler}
          required
        />
      </div>

      <div className='form-group'>
        <label>Description</label>
        <input
          type='text'
          placeholder='Enter the description'
          value={description}
          onChange={descriptionHandler}
          required
        />
      </div>

      <div>
        <button type='submit'>Add</button>
      </div>
    </form>
  );
};

export default AddNewJobsComponent;
