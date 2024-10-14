export const getEmailInput = () => {
    return cy.get('input[placeholder=Email]')
}

export const getPasswordInput = () => {
    return cy.get('input[placeholder=Password]')
}

export const getPhoneInput = () => {
    return cy.get('input[value="+375"]')
}

export const getNameInput = () => {
    return cy.get('input[placeholder=Name]')
}

export const getConfirmPasswordInput = () => {
    return cy.get('input[placeholder="Confirm Password"]')
}

export const getLoginButton = () => {
    return cy.get('button[data-cy="login"]')
}
