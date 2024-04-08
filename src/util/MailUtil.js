const mailer = require('nodemailer');

const sendingMail = async(to,subject,text) => {


    const transporter = mailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'pythonforsamir@gmail.com',
            pass: 'zkhjguziuxyvqhmw'
        }
    })


    const mailOptions = {
        from: 'pythonforsamir@gmail.com',
        to: to,
        subject: subject,
        //text: text
        html: `<h1>${text}</h1>`
    }


    const mailres = await transporter.sendMail(mailOptions)
    console.log("mailres...", mailres);
    return mailres;
}


module.exports = {
    sendingMail
}