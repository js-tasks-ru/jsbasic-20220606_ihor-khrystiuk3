function showSalary(users, age) {
  const filteredUsers = users.filter(user => user.age <= age);
  const result = filteredUsers.map((user, index, users) => {
    const template = `${user.name}, ${user.balance}`;
    if (index + 1 === users.length) {
      return template;
    }
    return `${template}\n`;
  });
  return result.join('');
}
