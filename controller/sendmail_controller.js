const nodemailer=require('nodemailer');

const sendmail=async(req,res)=>{
    let testAccount=await nodemailer.createTestAccount();
    let transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'larue.von@ethereal.email',
            pass: 'PWNFSpfHspaVEJw362'
        }
    });

    let info=await transporter.sendMail({
        from: '"Aniket Acharya" <aniketacharya30@gmail.com>',
        to: 'ghosalabhishek34@gmail.com',
        subject: 'Hello ✔',
        text: 'Hello world?',
        html: '<b>Hello world?</b>'
    });
    console.log("Message sent: %s",info.messageId);
    res.send(info);
};

module.exports={sendmail};