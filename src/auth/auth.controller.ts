import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Req,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';

import { AuthService } from './auth.service';


@Controller('auth')
export class AuthController {
/*  constructor(private authService: AuthService) {}

  @Get('allusers')
  getAllUsers() {
    return  this.authService.getAllUsers();
  }

  @Post('signup')
  signup(@Body() signupDto: SignupDto) {
    //return this.authService.signup(signupDto);
  }

  @Post('signin')
  signin(@Body() signinDto: SigninDto) {
    //return this.authService.signin(signinDto);
  }

  @Post('reset-password')
  resetPasswordDemand(@Body() resetPasswordDemandDto: ResetPasswordDemandDto) {
    //return this.authService.resetPasswordDemand(resetPasswordDemandDto);
  }

  @Post('reset-password-confirmation')
  resetPasswordConfirmation(
    @Body() resetPasswordConfirmationDto: ResetPasswordConfirmationDto,
  ) {
    //return this.authService.resetPasswordConfirmation(resetPasswordConfirmationDto,);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete('delete')
  delete(@Req() request: Request, @Body() deleteAccountDto: DeleteAccountDto) {
    const userId = request.user['userId'];
    //return this.authService.deleteAccount(userId, deleteAccountDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('oneuser/:id')
  getOneUser(
    @Req() request: Request,
    @Param('id', ParseIntPipe) userId: number,
  ) {
    const userIdG = request.user['userId'];
    //return this.authService.getOneUser(userId);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('modif')
  modifuser(@Req() request: Request, @Body() modifUserDto: ModifUserDto) {
    const userId = request.user['userId'];
    //return this.authService.modifuser(userId, modifUserDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('modifstatut')
  modifstatut(
    @Req() request: Request,
    @Body() modifStatutUserDto: ModifStatutUserDto,
  ) {
    const userId = request.user['userId'];
    //return this.authService.modifstatut(userId, modifStatutUserDto);
  }*/

}

