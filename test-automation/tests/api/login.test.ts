import {test} from '@playwright/test'


test('login test in contact list app', async({page, request})=>
{
  const response =
  await request.post('https://thinking-tester-contact-list.herokuapp.com/users/login',{
    data:
    {
    "email": "cyril_test@test.com",
    "password": "test1234567"
}
  })
  const responseBody = await response.json()
  console.log(responseBody.token)



})