import userService from "./../services/user.service";
const sgMail = require("@sendgrid/mail");

const API_KEY =
  "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";

const save = async (req, res) => {
  const newUser = { ...req.body };
  try {
    const user = await userService.save(newUser);
    const token = await user.generateAuthToken();
    res.send({ user, token });
    sgMail.setApiKey(API_KEY);
    const msg = {
      to: newUser.email,
      from: "assignment@yopmail.com", // Use the email address or domain you verified above
      subject: "Thanks for Signing up from BuyEasy",
      text: "Thank you for choosing BuyEasy",
      html: "<strong>This is a test email for the website BuyEasy.</strong>",
    };
    //ES6
    sgMail.send(msg).then(
      () => {},
      (error) => {
        console.error(error);

        if (error.response) {
          console.error(error.response.body);
        }
      }
    );
  } catch (error) {
    res.status(400).send(error);
  }
};

const login = async (req, res) => {
  try {
    const user = await userService.login(req.body.email, req.body.password);
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (error) {
    res.status(400).send(error);
  }
};

const logout = async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });
    await req.user.save();

    res.send();
  } catch (e) {
    res.status(500).send();
  }
};

export default {
  save: save,
  login: login,
  logout: logout,
};
