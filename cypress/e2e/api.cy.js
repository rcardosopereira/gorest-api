/// <reference types="Cypress" />

describe('Testes de APIs', () => {
  const apiUrl = 'https://gorest.co.in/public/v2/todos';
 
  it('Deverá aplicar uma validação de schema ao resultado', () => {
    cy.request('GET', apiUrl).then((response) => {
      expect(response.status).to.equal(200);
      
      cy.wrap(response.body).each((todo) => {
        expect(todo).to.have.all.keys('id', 'user_id', 'title', 'due_on', 'status');
      });
    });
  });

  it('Deverá interpretar e validar o valor “due_on”', () => {
    cy.request('GET', apiUrl)
      .then((response) => {
        expect(response.status).to.equal(200);
        cy.wrap(response.body).each((todo) => {
          const dueDate = new Date(todo.due_on);
          const currentDate = new Date();
  
          expect(dueDate.getTime()).to.be.greaterThan(currentDate.getTime());
        });
      });
  });
  
  it('Deverá validar se todos os resultados têm status completed', () => {
    cy.request('GET', apiUrl)
      .its('body')
      .each((todo) => {
        expect(todo.status).to.eq('completed');
      });
  });

  it('Deverá verificar se todos têm status completed ou pending', () => {
    cy.request('GET', apiUrl)
      .its('body')
      .each((todo) => {
        expect(todo.status).to.satisfy((status) => {
          return status === 'completed' || status === 'pending';
        }, 'Expected status to be "completed" or "pending"');
      });
  });

});