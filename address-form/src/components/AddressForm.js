import React, { useState } from "react"

const AddressForm = props => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [zipCode, setZipCode] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [email, setEmail] = useState("")

  const handleFirstNameChange = event => {
    event.preventDefault()
    setFirstName(event.currentTarget.value)
  }

  const handleLastNameChange = event => {
    event.preventDefault()
    setLastName(event.currentTarget.value)
  }

  const handleAddressChange = event => {
    event.preventDefault()
    setAddress(event.currentTarget.value)
  }

  const handleCityChange = event => {
    event.preventDefault()
    setCity(event.currentTarget.value)
  }

  const handleStateChange = event => {
    event.preventDefault()
    setState(event.currentTarget.value)
  }

  const handleZipCodeChange = event => {
    event.preventDefault()
    setZipCode(event.currentTarget.value)
  }

  const handlePhoneNumberChange = event => {
    event.preventDefault()
    setPhoneNumber(event.currentTarget.value)
  }

  const handleEmailChange = event => {
    event.preventDefault()
    setEmail(event.currentTarget.value)
  }


  const handleSubmit = event => {
    event.preventDefault()
    console.log(firstName)
    console.log(lastName)
    console.log(address)
    console.log(city)
    console.log(state)
    console.log(zipCode)
    console.log(phoneNumber)
    console.log(email)
  }
  return (
    <form className="callout" id="shipping-address-form" onSubmit={handleSubmit}>
      <h1>Shipping Address</h1>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={firstName} onChange={handleFirstNameChange}
        />
      </div>

      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={lastName}
          onChange={handleLastNameChange}
        />
      </div>

      <label htmlFor="address">Address:</label>
      <input
        type="text"
        id="address"
        name="address"
        value={address}
        onChange={handleAddressChange}
        />

      <div>
        <label htmlFor="city">City:</label>
        <input type="text" id="city" name="city" value={city}
        onChange={handleCityChange}/>
      </div>

      <div>
        <label htmlFor="state">State:</label>
        <input type="text" id="state" name="state" value={state}
        onChange={handleStateChange}/>
      </div>

      <div>
        <label htmlFor="zipCode">Zip Code:</label>
        <input type="text" id="zipCode" name="zipCode" value={zipCode}
        onChange={handleZipCodeChange}/>
      </div>

      <div>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input type="text" id="phoneNumber" name="phoneNumber" value={phoneNumber}
        onChange={handlePhoneNumberChange}/>
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email" value={email}
        onChange={handleEmailChange}/>
      </div>

      <input type="submit" className="button" value="Submit " />
    </form>
  )
}

export default AddressForm
