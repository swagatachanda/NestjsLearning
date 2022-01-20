import { MailerService } from '@nestjs-modules/mailer'
import { BadRequestException, Injectable } from '@nestjs/common'

@Injectable()
export class MailService {
    constructor(private mailerService: MailerService) {}

    async sendUserConfirmation(email: string, username: string) {
        await this.mailerService.sendMail({
            to: email,
            subject: 'Welcome to my app',
            template: 'confirmation',
            context: {
                name: username,
            },
        })
    }
}
