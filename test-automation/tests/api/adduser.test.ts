import {test} from '@playwright/test'


test('login test in contact list app to add user', async({page, request})=>
{
  const response =
  await request.post('https://thinking-tester-contact-list.herokuapp.com/users',{
    data:
    {
    "firstName": "Test",
    "lastName": "User",
    "email": "test@jake.com",
    "password": "myPassword"
}
  })
  const responseBody = await response.json()
  console.log(responseBody.token)



})