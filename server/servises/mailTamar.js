const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.office365.com',
  port: 4444,
  secure: false,
  auth: {
<<<<<<< HEAD
      user: '37325922656@mby.co.il',
      pass: 'Student@264'
=======
      user: 'avitalev111@gmail.com',
      pass: '214389777'
>>>>>>> f952b2e39d1c9915c5b26dd8e5d6069271e73278
  }
});

function sendEmail(from, body) {
  const mailOptions = {
      from: from,
      //' Daat Aaron 📜 <37325922656@mby.co.il>',
<<<<<<< HEAD
      to:'37325922656@mby.co.il',
=======
      to:'avitalev111@gmail.com',
>>>>>>> f952b2e39d1c9915c5b26dd8e5d6069271e73278
      subject: "שלום תמר, יש לי שאלה בנוגע ל...",
      text: body
  };
  return transporter.sendMail(mailOptions);
}

module.exports = {
  sendEmail
};
