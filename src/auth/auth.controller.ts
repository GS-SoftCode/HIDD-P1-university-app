import { Controller, Post, Body, Get, UseGuards, createParamDecorator, ExecutionContext } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserLoginDto } from './dto/login.dto';
import { UserRegisterDto } from './dto/register.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

// Helper para obtener el usuario autenticado sin decorador externo
export const GetUser = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  return request.user;
});

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() registerDto: UserRegisterDto) {
    return this.authService.register(registerDto);
  }

  @Post('login')
  login(@Body() loginDto: UserLoginDto) {
    return this.authService.login(loginDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Body() _body: any, @GetUser() user: any) {
    // Devuelve el usuario autenticado extraído del request
    return user;
  }
}
