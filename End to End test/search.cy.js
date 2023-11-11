describe('Search', () => {
    it('Search section', ()=>{
      cy.visit('https://simonsmith.github.io/github-user-search/#/search')
      cy.get('#searchInput').type("shofi{enter}")
      cy.get('.User_username_rnfkwd').then(($pass)=>{
        if($pass.text()=="shofirocky")
        {
            $pass.trigger('click');
        }
        
        else{
          cy.get('.User_username_rnfkwd').eq(1).click()
        }
    })
    }) 
})