<h1 align="center">Dar AL-NAWATI</h1>

#### [!CAUTION] You need to add the necessary environment variables to backend and frontend

```env
#backend
PORT="8080"

NODEMAILER_HOST="your_mail_host"
NODEMAILER_USER="your_host_email"
NODEMAILER_PASS="your_host_password"
NODEMAILER_SUBJECT="subject_will_end_to_all_emails"

WEB_BASE_URL="https://your_frontend.uri"

#frontend
VITE_API_BASE_URL="https://your_backend.uri"
```

```evn
#For emailjs

const template = {
    from_name: data.name,
    from_email: data.email,
    phone: data.phone,
    subject: data.type,
    to_name: "Dar AlNawati",
    message: data.message,
};

VITE_EMAILJS_SERVICE_ID = "service_id"
VITE_EMAILJS_TEMPLATE_ID = "temp_id"
VITE_EMAILJS_KEY = "key"
```

### Made with:

» React JS <br>
» Tailwind CSS <br>
» I18next <br>
» Swiper <br>

» Node.Js <br>
» NodeMailer <br>
» Express <br>
» xlsx <br>

» TypeScript <br>
