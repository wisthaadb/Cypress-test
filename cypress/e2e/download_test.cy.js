describe('Test Download file', () => {
    beforeEach(() => {
        cy.visit('https://id.wikipedia.org/wiki/Saccharomyces_boulardii')
    });
    // it('Download image from wikipedia', () => {
    //     cy.get('.mw-file-description > .mw-file-element').invoke('attr','src').then((tempSrc) => {
    //         const src1 = tempSrc
    //         cy.downloadFile(src1, 'mydownloads', 'fungi test.jpg')
    //     })
    //     })

    it('Download image from wikipedia', () => {
        cy.get('.mw-file-description > .mw-file-element')
            .should('have.attr','src','//upload.wikimedia.org/wikipedia/commons/thumb/6/66/Saccharomyces_boulardii.jpg/250px-Saccharomyces_boulardii.jpg')
            .invoke('attr','src').then((tempSrc) => {
                cy.downloadFile(tempSrc, 'mydownloads', 'fungi test.jpg')
        })
        })
    });