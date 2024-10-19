import { AppComponent } from "./app.component";

describe(AppComponent.name, () => {
  it('should render', () => {
    cy.mount(AppComponent);
    cy.contains('Hello').should('be.visible');
  });
});
