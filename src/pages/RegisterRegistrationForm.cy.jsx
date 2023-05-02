import React from 'react'
import RegistrationForm from './Register'

describe('<RegistrationForm />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<RegistrationForm />)
  })
})