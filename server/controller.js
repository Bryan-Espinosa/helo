const registerUser = (req, res) => {
  const reguser = req.app
    .get("db")
    .reguser.registerUser(username, password)
    .then(response => res.status(200).json(response))
    .catch(err => console.log(err));
};

const login = (req, res) => {
  const user = req.app
    .get("db")
    .user.login(username, password)
    .then(response => res.status(200).json(response))
    .catch(err => console.log(err));
};

module.exports = {
  login,
  registerUser
};
