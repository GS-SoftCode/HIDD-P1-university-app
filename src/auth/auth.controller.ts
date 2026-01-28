import { Controller, Post, Body, Get, UseGuards, createParamDecorator, ExecutionContext } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserLoginDto } from './dto/login.dto';
import { RegisterAdminDto } from './dto/register-admin.dto';
import { RegisterDocenteDto } from './dto/register-docente.dto';
import { RegisterEstudianteDto } from './dto/register-estudiante.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { RolesGuard } from './guards/roles.guard';
import { Roles } from './decorators/roles.decorator';

// Helper para obtener el usuario autenticado sin decorador externo
export const GetUser = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  return request.user;
});

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register-admin')
  async registerAdmin(@Body() dto: RegisterAdminDto) {
    return this.authService.registerAdmin(dto);
  }

  @Post('register-docente')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  async registerDocente(@Body() dto: RegisterDocenteDto) {
    return this.authService.registerDocente(dto);
  }

  @Post('register-estudiante')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  async registerEstudiante(@Body() dto: RegisterEstudianteDto) {
    return this.authService.registerEstudiante(dto);
  }

  @Post('login')
  login(@Body() loginDto: UserLoginDto) {
    return this.authService.login(loginDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Body() _body: any, @GetUser() user: any) {
    return user;
  }
}