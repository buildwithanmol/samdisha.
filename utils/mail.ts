import nodemailer from 'nodemailer';

const authObject = {
    user: process.env.NODEMAILER_EMAIL,
    pass: process.env.NODEMAILER_PW,
}

export async function queryEmail(payload: {
    email: string,
    name: string,
    query: string
}) {
    var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: authObject,
    });

    const blog_query = `
        <p>Name: ${payload.name}</p>
        <p>Email: ${payload.email}</p>
        <p>Query: ${payload.query}</p>
    `

    const mailOptions = {
        from: process.env.NODEMAILER_EMAIL,
        to: ['samdishavishwakarma@gmail.com', 'developwithanmol@gmail.com'],
        subject: 'Notification | Samdisha Blog',
        html: blog_query
    };

    await new Promise((res, rej) => {
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                rej(error);
            } else {
                res(info);
                console.log("Email Sent");
                return true;
            }
        });
    });
}