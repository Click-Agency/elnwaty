import { createTransport, Transporter } from "nodemailer";
import { Options } from "nodemailer/lib/mailer";
import { ConnectionOptions } from "tls";

class Mailer {
  private static instance: Mailer;

  private transporter: Transporter;

  public constructor(
    host: string,
    user: string,
    pass: string,
    {
      port = 465,
      secure = true,
      tls = { rejectUnauthorized: false },
      ...transporter
    }: {
      port?: number;
      secure?: boolean;
      tls?: ConnectionOptions;
    } & Partial<Transporter> = {}
  ) {
    this.transporter = createTransport({
      host,
      port,
      secure,
      auth: {
        user: user,
        pass: pass,
      },
      tls,
      ...transporter,
    });
  }

  public static getInstance(
    host: string,
    user: string,
    pass: string,
    config?: {
      port?: number;
      secure?: boolean;
      tls?: ConnectionOptions;
    } & Partial<Transporter>
  ): Mailer {
    if (!Mailer.instance)
      Mailer.instance = new Mailer(host, user, pass, config);
    return Mailer.instance;
  }

  public sendMail(
    name: string,
    from: string,
    to: string | string[],
    mailOptions: Options = {}
  ) {
    return this.transporter.sendMail({
      from: `${name} <${from}>`,
      to,
      ...mailOptions,
    });
  }
}

export default Mailer;
