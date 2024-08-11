const cron = require("node-cron");
const express = require("express");
const nodeMailer = require('nodemailer');

const app = express();

// schedule tasks to be run on the server
cron.schedule("* * * * *", function () {
    console.log("Running Cron Job");

    let transporter = nodeMailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: '<TEST_USER>', // generated ethereal user
            pass: '<TEST_PASSWORD>' // generated ethereal password
        }
    });

    const mailOptions = {
        from: '"John Doe" <john.doe@example.com>', // sender address
        to: 'jane.doe@example.com', // list of receivers
        subject: 'Hello there!', // Subject line
        text: 'A Message from Node Cron App', // plain text body
        html: '<b>A Message from Node Cron App</b>' // html body
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Message sent: %s', info.messageId); // log the message ID
        }
    });
});

app.listen(8000, () => {
    console.log("Server started on port 8000");
});
