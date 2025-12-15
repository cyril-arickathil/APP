import {test} from '@playwright/test'


test('login test in contact list app to add user', async({page, request})=>
{
  const response =
  await request.patch('https://thinking-tester-contact-list.herokuapp.com/users',{
    data:
    {
    "firstName": "Rani",
    "lastName": "User",
    "email": "test@jaxe.com",
    "password": "Test@123"
}
  })
  const responseBody = await response.json()
  console.log(responseBody.token)



})