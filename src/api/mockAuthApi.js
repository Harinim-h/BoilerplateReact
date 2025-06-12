// ✅ Helper to get users from localStorage
const getUsers = () => {
  return JSON.parse(localStorage.getItem('users')) || [];
};

// ✅ Helper to save users to localStorage
const saveUsers = (users) => {
  localStorage.setItem('users', JSON.stringify(users));
};

// ✅ Register new user
export const registerUser = (email, password) => {
  const users = getUsers();

  // Check if email already registered
  const exists = users.find((user) => user.email === email);
  if (exists) {
    throw new Error('User already exists. Please login instead.');
  }

  // Add new user and save
  users.push({ email, password });
  saveUsers(users);
};

// ✅ Login user
export const loginUser = (email, password) => {
  const users = getUsers();

  // Check if user exists and password matches
  const validUser = users.find(
    (user) => user.email === email && user.password === password
  );

  if (!validUser) {
    throw new Error('Invalid email or password');
  }

  // Store currently logged-in email
  localStorage.setItem('userEmail', email);
};

// ✅ Logout user (only clears session, not registration)
export const logoutUser = () => {
  const email = localStorage.getItem('userEmail');
  if (!email) return;

  // Remove the logged-in email from localStorage
  localStorage.removeItem('userEmail');

  // Remove user from registered users list
  const users = getUsers();
  const filteredUsers = users.filter(user => user.email !== email);
  saveUsers(filteredUsers);
};

export const getCurrentUser = () => {
  return localStorage.getItem('userEmail');
};
