import React from 'react'
import Cards from '../components/Services/Cards'
import Perfect from '../components/Services/Perfect'
import Latest from '../components/Services/Latest'

// import Latest from '../components/Services/Latest' // remove if unused

const Services = () => {
  return (
    <div>
       <Perfect/>
       <Latest/>
        <Cards />
       
    </div>
  )
}

export default Services;
