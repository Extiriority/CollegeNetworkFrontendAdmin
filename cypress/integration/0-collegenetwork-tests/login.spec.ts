import { cy, it } from 'local-cypress'

describe('test login', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000')
	})

	it('should be logged in', () => {
		cy.contains('Sign in')

		cy.get('#floatingInput')
			.type('a@a.com', {delay: 100}).should('have.value', 'a@a.com')
		cy.get('#floatingPassword')
			.type('a', {delay: 100}).should('have.value', 'a')

		cy.get('[data-cy="checkbox"]').not('[disabled]')
			.check().should('be.checked')

		cy.get('[data-cy="submit"]').click()
	});

	it('should show incorrect credentials', () => {
		cy.contains('Sign in')

		cy.get('#floatingInput')
			.type('wrong@a.com', {delay: 100}).should('have.value', 'wrong@a.com')
		cy.get('#floatingPassword')
			.type('ao48gaj', {delay: 100}).should('have.value', 'ao48gaj')

		cy.get('[data-cy="submit"]').click()

		cy.contains('email or password is wrong')
	});
})