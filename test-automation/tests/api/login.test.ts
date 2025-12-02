import { expect, test } from '@playwright/test';

test('login test in contact list app', async ({ page, request }) => {
  const response = await request.post('https://thinking-tester-contact-list.herokuapp.com/users/login',
    {
      data: {
        email: 'test1@test.com',
        password: 'Test@123',
      },
    }
  );

  const responseBody = await response.json();
  console.log(responseBody.token);

});


test('Add user in contact list app', async ({ page, request }) => {
  const response = await request.post('https://thinking-tester-contact-list.herokuapp.com/users',
    {
      data: {
        firstName: 'madhuMS',
        lastName: 'mmsr',
        email: 'test22@test.com',
        password: 'Test@123',
      },
    }
  );

  const responseBody = await response.json();
  console.log(responseBody.token);

});



