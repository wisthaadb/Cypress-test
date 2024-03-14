import { LoginPage } from "./pages/login_page"
const loginPage = new LoginPage()

describe('Login Test', () => {
    beforeEach(() => {
        cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.viewport(1024, 768)
    })
    it('Testcase 1 Successful login', () => {
        loginPage.inputUsername('student')
        loginPage.inputPassword('Password123')
        loginPage.clickLogin()
        cy.get('.post-title').should('have.text','Logged In Successfully')
    })

    it('Testcase 2 Login with invalid username', () => {
        loginPage.inputUsername('hohohaha')
        loginPage.inputPassword('Password123')
        loginPage.clickLogin()
        cy.get('#error').should('have.text','Your username is invalid!')
    })
    it('Testcase 3 Login with invalid password', () => {
        loginPage.inputUsername('student')
        loginPage.inputPassword('Pasoood333')
        loginPage.clickLogin()
        cy.get('#error').should('have.text','Your password is invalid!')
    })
})

