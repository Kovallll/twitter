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

export const getProfileName = () => {
    return cy.get('p[data-cy="profile-name"]')
}

export const getProfileDescription = () => {
    return cy.get('p[data-cy="profile-description"]')
}

export const getProfileSocial = () => {
    return cy.get('p[data-cy="profile-social"]')
}

export const getModalSocial = () => {
    return cy.get('input[data-cy="modal-social"]')
}

export const getModalDescription = () => {
    return cy.get('input[data-cy="modal-description"]')
}

export const getModalName = () => {
    return cy.get('input[data-cy="modal-name"]')
}

export const getModal = () => {
    return cy.get('div[data-cy="modal"]')
}

export const getEditButton = () => {
    return cy.get('button[data-cy="edit-button"]')
}

export const getEditInModalButton = () => {
    return cy.get('button[data-cy="edit-button-in-modal"]')
}

export const getToggleThemeButton = () => {
    return cy.get('div[data-cy="toggle-theme"]')
}

export const getTweetButton = () => {
    return cy.get('button[data-cy="tweet-button"]')
}

export const getBody = () => {
    return cy.get('body')
}

export const getSearch = () => {
    return cy.get('input[data-cy="search"]')
}

export const getSearchPopup = () => {
    return cy.get('div[ data-cy="search-popup"]')
}

export const getTweetCreator = () => {
    return cy.get('div[data-cy="tweet-creator"]')
}
