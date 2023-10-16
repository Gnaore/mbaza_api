import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

type Payload = {
  sub: number;
  email: string;
};

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    configService: ConfigService,
   // private readonly prismaService: PrismaService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get('SECRET_KEY'),
      ignoreExpiration: false,
    });
  }

  /*async validate(payload: Payload) {
    const user = await this.prismaService.user.findUnique({
      where: { email: payload.email },
    });
    if (!user) throw new NotFoundException("L'utilisateur n'existe pas");
    //Reflect.deleteProperty(user, 'password');
    //Reflect.deleteProperty(user, 'createdAt');
    //console.log(user);
    return user;
  }*/
}
