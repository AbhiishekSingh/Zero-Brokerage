const nodemailer = require('nodemailer')

// Create a transporter object
const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email service
    auth: {
        user: "imabhishekk20@gmail.com", // Your email from .env
        pass: process.env.EMAIL_PASS, // Your email password from .env
    },
});

// Email options
const mailOptions = {
    from: process.env.EMAIL_USER, // Sender address
    // to: `${}`, // List of recipients
    subject: 'Test Email from Nodemailer', // Subject line
    text: 'Hello, this is a test email sent using Nodemailer!', // Plain text body
    // html: '<b>Hello, this is a test email sent using Nodemailer!</b>', // HTML body
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Email sent: ' + info.response);
});
