const bcrypt = require("bcryptjs");

module.exports.updateMe = async ({ data, user, dataSources }) => {
  const { name, surname, email, password, sex } = data;

  if (!user) return null;

  const changePassword = async () => {
    if (password.length === 0) return user.password;
    return await bcrypt.hash(password, 12);
  };

  const userData = {
    id: user.id,
    email: email.length !== 0 ? email : user.email,
    password: await changePassword(),
    name: name.length !== 0 ? name : user.name,
    surname: surname.length !== 0 ? surname : user.surname,
    sex: sex.length !== 0 ? sex : user.sex,
  };

  const updatedUser = dataSources.userAPI.updateUser(userData);
  if (!updatedUser) return "Не получилось обновить данные!";
  return "Пользователь обновлён!";
};
