// Author: Anurag R Simha
// This is the parent component that renders elements of the webpage. It sets up the entire look and feel of the webpage.
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