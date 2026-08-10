declare module 'resend' {
  export class Resend {
    constructor(apiKey: string)
    emails: {
      send(options: {
        from: string
        to: string
        replyTo?: string
        subject: string
        html: string
      }): Promise<{ error?: unknown }>
    }
  }
}

declare const process: {
  env: {
    RESEND_API_KEY?: string
    [key: string]: string | undefined
  }
}
