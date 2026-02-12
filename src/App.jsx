// Author: Anurag R Simha
// This file helps render the elements of the webpage.
import { useState } from 'react'
import './App.css'
import Layout from './components/Layout'
import Form from './components/Form'
import DetailsDisplay from './components/DetailsDisplay'

function App() {
  const [userData, setUserData] = useState(null)

  const handleFormSubmit = (data) => {
    setUserData(data)
  }

  return (
    <Layout>
      <Form onSubmittingForm={handleFormSubmit} />
      {userData && (
        <DetailsDisplay name={userData.name} age={userData.age}/>
      )}
    </Layout>
  )
}

export default App