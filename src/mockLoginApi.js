// src/mockLoginApi.js

export function mockLoginApi(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const validUser = {
        email: 'user@example.com',
        password: '123456',
      };

      if (email === validUser.email && password === validUser.password) {
        resolve({ success: true, token: 'mock-token-123' });
      } else {
        reject(new Error('Invalid email or password'));
      }
    }, 1000); // simulate 1 second delay
  });
}
