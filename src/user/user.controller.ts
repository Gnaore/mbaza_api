import { Body, Controller, Delete, Get, Post, UseGuards, Req, ParseIntPipe, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { SignupDto } from './Dto/signupDto';
import { SigninDto } from './Dto/signinDto';
import { ResetPasswordDemandDto } from './Dto/resetPasswordDemandDto';
import { ResetPasswordConfirmationDto } from './Dto/resetPasswordConfirmationDto';
import { AuthGuard } from '@nestjs/passport';
import { DeleteAccountDto } from './Dto/deleteAccountDto';
import { Request } from 'express';
import { ModifUserDto } from './Dto/modifUserDto';
import { ModifStatutUserDto } from './Dto/modifStatutUserDto';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){}

    @Get('allusers')
    getAllUsers() {
      return  this.userService.getAllUsers();
    }

    @Get('testmail')
    testmail() {
      return  this.userService.testmail();
    }


    
    @Post('signup')
    signup(@Body() signupDto: SignupDto) {
      return this.userService.signup(signupDto);
    }

    @Post('signin')
    signin(@Body() signinDto: SigninDto) {
      return this.userService.signin(signinDto);
    }


    @Post('reset-password')
    resetPasswordDemand(@Body() resetPasswordDemandDto: ResetPasswordDemandDto) {
      return this.userService.resetPasswordDemand(resetPasswordDemandDto);
    }
  
    @Post('reset-password-confirmation')
    resetPasswordConfirmation(
      @Body() resetPasswordConfirmationDto: ResetPasswordConfirmationDto,
    ) {
      return this.userService.resetPasswordConfirmation(resetPasswordConfirmationDto,);
    }
  
  /*  @UseGuards(AuthGuard('jwt'))
    @Delete('delete')
    delete(@Req() request: Request, @Body() deleteAccountDto: DeleteAccountDto) {
      const userId = request.user['userId'];
      return this.userService.deleteAccount(userId, deleteAccountDto);
    }*/
  
    @UseGuards(AuthGuard('jwt'))
    @Get('oneuser/:id')
    getOneUser(
      @Req() request: Request,
      @Param('id', ParseIntPipe) userId: number,
    ) {
      const userIdG = request.user['userId'];
      return this.userService.getOneUser(userId);
    }
  
    @UseGuards(AuthGuard('jwt'))
    @Post('modif')
    modifuser(@Req() request: Request, @Body() modifUserDto: ModifUserDto) {
      const userId = request.user['userId'];
      return this.userService.modifuser(userId, modifUserDto);
    }
  
    @UseGuards(AuthGuard('jwt'))
    @Post('modifstatut')
    modifstatut(
      @Req() request: Request,
      @Body() modifStatutUserDto: ModifStatutUserDto,
    ) {
      const userId = request.user['userId'];
      return this.userService.modifstatut(userId, modifStatutUserDto);
    }  
    
}
