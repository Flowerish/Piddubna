// ///<reference types= "Cypress"/>
// import { faker } from '@faker-js/faker';
 
// describe('Api OAuth', () => {
 
// const accessToken = 'Bearer ec18a526fd2eae8eff3b910dc464ee93806dace7fecc897cd46e536cd9203a50';
// const generateEmail = faker.internet.email();

// it('create user', () => {
// cy.request({
//      method: 'POST',
//      url: 'https://gorest.co.in/public/v1/users',
//      headers:{
//               Authorization: accessToken
//             },
//       body:{
//             name:"T1est N1ame",
//             gender:"male",
//             email: generateEmail,
//             status:"active"
//             }      
// }).then(function(response){
//    expect(response).to.have.property('status', 201); 
// }).then((response) => {
//     const userID = response.body.data.id;
//     cy.request({
//     method: 'GET',
//     url: `https://gorest.co.in/public/v1/users/${userID}`,
//     headers: {
//         Authorization: accessToken
//     }

// })
// })
    
// });
// });


 
// describe('Booking process', () => {
//     it('create user', () => {
//     cy.request({
//          method: 'POST',
//          url: 'https://restful-booker.herokuapp.com/booking',
//          body: {
//             firstname : "Jim",
//             lastname : "Brown",
//             totalprice : 111,
//             depositpaid : true,
//             bookingdates : {
//                 checkin : "2018-01-01",
//                 checkout : "2019-01-01"
//             },
//             additionalneeds : "Breakfast"
//         }
//     }).then((response) => {
//       expect(response).to.have.property('status', 200);
//       expect(response.body).to.have.any.keys('bookingid');
//       const bookingid = response.body.bookingid;
//       cy.log(bookingid);
//       cy.request({
//       method: 'POST',
//          url: 'https://restful-booker.herokuapp.com/auth',
//          body: {
//           username : "admin",
//           password : "password123"
//       }
//     }).then((responseAuth) =>{
//       const token = responseAuth.body.token;
//       cy.request({
//       method: 'PUT',
//          url: `https://restful-booker.herokuapp.com/booking/${bookingid}`,
//          body: {
//           firstname : "Jim",
//           lastname : "Brown",
//           totalprice : 111,
//           depositpaid : true,
//           bookingdates : {
//               checkin : "2018-01-02",
//               checkout : "2019-01-02"
//           },
//           additionalneeds : "Breakfast"
//       },
//          headers: {
//           Cookie: `token=${token}`
//          }
//         });
//     });
//     });
//     });
//     })
///<reference types = "Cypress"/>
import { faker } from '@faker-js/faker';


describe ('Updating user process',() => {
   
    const accessToken = 'Bearer 70a5b2f7a1e878218be8b563968cf0075dac60c3ad6e140454f1726e05a8ffc4';
    const generateEmail = faker.internet.email();
    const generateName = faker.name.fullName();


    it('user update', () => {
    cy.request({
        method: 'PATCH',
        url: `https://gorest.co.in/public/v2/users/11`,
        headers: {
                    Authorization: accessToken
                },  
        body: {
                email: faker.internet.email(),
                name: faker.name.fullName(),
                status: 'active'
        }
    }).then((updatedinfo) => {
    expect(updatedinfo).to.have.property('status', 200);
    expect(updatedinfo).to.have.property('email');
    expect(updatedinfo).to.have.property('name');
    expect(updatedinfo).to.have.property('status');
    expect(updatedinfo).to.have.property('id');
    expect(updatedinfo).to.have.property('gender')
    })
})
});// Не могу понять почему падает авторизация

//Test 2 for deletion
describe ('Deleting user using API', () => { 
    it('create user', () => {
        cy.request({
             method: 'POST',
             url: 'https://gorest.co.in/public/v1/users',
             headers:{
                      Authorization: accessToken
                    },
              body:{
                    name:"T1est N1ame",
                    gender:"male",
                    email: generateEmail,
                    status:"active"
                    }      
        }).then(function(response){
           expect(response).to.have.property('status', 201); 
        }).then((response) => {
            const userID = response.body.data.id;
            cy.request({
            method: 'GET',
            url: `https://gorest.co.in/public/v1/users/${userID}`,
            headers: {
                Authorization: accessToken
            }
        
        })
        })
    it('Here we remove the user from the list', () => {
    cy.request({
    method: 'DELETE',
    url: `https://gorest.co.in/public/v2/users/${userID}`,
    headers: {
        Authorization: accessToken
    }
}).then((response) => {
   expect(response).to.have.property('status', 204);
})
})
})
})