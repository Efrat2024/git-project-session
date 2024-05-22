const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.office365.com',
  port: 587,
  secure: false,
  auth: {
<<<<<<< HEAD
    user: '37325922656@mby.co.il',
    pass: 'Student@264'
=======
    user: 'tamarsilver3@gmail.com',
    pass: '214389777'
>>>>>>> f952b2e39d1c9915c5b26dd8e5d6069271e73278
  }
});

function sendEmail(to, body) {
  const mailOptions = {
<<<<<<< HEAD
      from: ' תמר נופשים 📜 <37325922656@mby.co.il>',
      to: to,
      subject: "שלום! כאן תמר נופשים ",
=======
      from: ' Daat Aaron 📜 <tamarsilver3@gmail.com>',
      to: to,
      subject: "hello ",
>>>>>>> f952b2e39d1c9915c5b26dd8e5d6069271e73278
      text: body
  };
  return transporter.sendMail(mailOptions);
}

module.exports = {
  sendEmail
};
