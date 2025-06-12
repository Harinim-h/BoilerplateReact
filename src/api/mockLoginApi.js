// src/api/mockLoginApi.js

export function mockLogin(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'test@example.com' && password === 'password123') {
        resolve({ status: 'success', token: 'abc123' });
      } else {
        reject(new Error('Invalid email or password'));
      }
    }, 1000); // simulate 1 second delay
  });
}
