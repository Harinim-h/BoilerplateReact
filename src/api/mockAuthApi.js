// ✅ Only 4 allowed users
const allowedUsers = [
  { email: 'user1@example.com', password: '1234' },
  { email: 'harini@example.com', password: '4567' },
  { email: 'user2@example.com', password: 'pass789' },
  { email: 'user3@example.com', password: 'pass000' }
];

// ✅ Get registered users from localStorage
const getUsers = () => {
  return JSON.parse(localStorage.getItem('users')) || [];
};

// ✅ Save users to localStorage
const saveUsers = (users) => {
  localStorage.setItem('users', JSON.stringify(users));
};

// ✅ Register only allowed users
export const registerUser = (email, password) => {
  const users = getUsers();

  // Allow only if matches one of the 4 allowed users
  const isAllowed = allowedUsers.find(
    (u) => u.email === email && u.password === password
  );
  if (!isAllowed) {
    throw new Error('Registration not allowed.Invalid User.');
  }

  // Check if already registered
  const exists = users.find((user) => user.email === email);
  if (exists) {
    throw new Error('User already registered. Please login.');
  }

  // Save user
  users.push({ email, password });
  saveUsers(users);
};

// ✅ Login user
export const loginUser = (email, password) => {
  const users = getUsers();

  const validUser = users.find(
    (user) => user.email === email && user.password === password
  );

  if (!validUser) {
    throw new Error('Invalid email or password');
  }

  localStorage.setItem('userEmail', email);
};

// ✅ Logout user and remove them from registered list
export const logoutUser = () => {
  const email = localStorage.getItem('userEmail');
  if (!email) return;

  // Remove user from localStorage session
  localStorage.removeItem('userEmail');

  // Remove from registered list
  const users = getUsers();
  const updatedUsers = users.filter((user) => user.email !== email);
  saveUsers(updatedUsers);
};

// ✅ Get current logged-in user
export const getCurrentUser = () => {
  return localStorage.getItem('userEmail');
};
