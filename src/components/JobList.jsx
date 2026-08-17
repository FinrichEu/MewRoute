import React from 'react'
import JobCard from './JobCard.jsx'

export default function JobList() {

  const jobs = [
    {
      logo: 'NC',
      title: 'Junior Frontend Developer',
      company: 'North Cloud',
      location: 'Berlin, Germany',
      tags: ['Remote', 'Visa support', 'React'],
    }
  ]

  return (
    <div className="job-list"></div>
  )
}

