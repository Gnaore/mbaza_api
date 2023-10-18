import { Module } from '@nestjs/common';
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
import { WcallbackModule } from './wcallback/wcallback.module';
import { LocataireModule } from './locataire/locataire.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import * as dotenv from 'dotenv';
import { AppController } from './app.controller';
import { AppService } from './app.service';

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,
    }),
    ConfigModule.forRoot({ isGlobal: true }), //Pour utiliser les variables d'environnement
    BanqueModule,
    MailerModule,
    BailleurModule,
    TypebienModule,
    PaysModule,
    UploadModule, //Pour envoi de mail
    MulterModule.register({ dest: './files' }),
    /*ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'files'), // Chemin vers le répertoire des fichiers statiques (images, etc.)
    }),*/
    ProprieteModule,
    BienModule,
    WcallbackModule,
    LocataireModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
