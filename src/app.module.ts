import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prismaserv/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { MailerModule } from './mailer/mailer.module';
import { BanqueModule } from './banque/banque.module';
import { BailleurModule } from './bailleur/bailleur.module';
import { TypebienModule } from './typebien/typebien.module';
import { PaysModule } from './pays/pays.module';
import { UploadModule } from './upload/upload.module';
import { MulterModule } from '@nestjs/platform-express';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ProprieteModule } from './propriete/propriete.module';
import { BienModule } from './bien/bien.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), //Pour utiliser les variables d'environnement
    AuthModule,
    BanqueModule,
    PrismaModule, //ORM
    MailerModule,
    BailleurModule,
    TypebienModule,
    PaysModule,
    UploadModule, //Pour envoi de mail
    MulterModule.register({ dest: './files' }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'files'), // Chemin vers le répertoire des fichiers statiques (images, etc.)
    }),
    ProprieteModule,
    BienModule,
  ],
  controllers: [],
})
export class AppModule {}
