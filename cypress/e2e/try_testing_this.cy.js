/// <reference types="cypress"/>
describe('Upload Download Test', () => {
    beforeEach(() => {
        cy.visit('https://trytestingthis.netlify.app/')
    });
    it('Upload file', () => {
        cy.get('#myfile').attachFile('Saccharomyces_cerevisiae_SEM.jpg')
        cy.get('#myfile').should('contain.value','Saccharomyces_cerevisiae_SEM.jpg')
    })
});