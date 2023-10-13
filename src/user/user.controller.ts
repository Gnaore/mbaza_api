import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { SignupDto } from './Dto/signupDto';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){}

    @Get('allusers')
    getAllUsers() {
      return  this.userService.getAllUsers();
    }
    
    @Post('signup')
    signup(@Body() signupDto: SignupDto) {
      return this.userService.signup(signupDto);
    }
    
}
