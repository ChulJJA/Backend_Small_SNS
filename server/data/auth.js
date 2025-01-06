let users = [
  // {
  //   id: '1',
  //   username: 'chulseung100',
  //   password: 'Tlqkfgkrltlfgek1@',
  //   name: 'Chul',
  //   email: 'cl1550@rutgers.edu',
  //   url: '',
  // },
];

export async function findByUsername(username) {
  return users.find((user) => user.username === username);
}

export async function findById(id) {
  return users.find((user) => user.id === id);
}

export async function createUser(user) {
  const created = { ...user, id: Date.now().toString() };
  users.push(created);
  return created.id;
}
