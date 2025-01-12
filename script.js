//your code herehttps://www.svgrepo.com/show/345221/three-dots.svg
https://www.svgrepo.com/show/345221/three-dots.svg
() => { 
  cy.visit(baseUrl + "/main.html"); 
  cy.get("div").then(span => { 
    const text = span.text().trim(); 
    expect(text).to.eq('Welcome to the world of Web development'); 
  }); 
}