export class LoginPage {
    username_textbox = '#username'
    password_textbox = '#password'
    login_button = '#submit'

    inputUsername(username) {
        cy.get(this.username_textbox).type(username)
    }
    inputPassword(password) {
        cy.get(this.password_textbox).type(password)
    }
    clickLogin() {
        cy.get(this.login_button).click()
    }
}