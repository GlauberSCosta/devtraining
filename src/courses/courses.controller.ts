import { Controller, Get } from "@nestjs/common";

@Controller('courses')
export class CoursesController {
  @Get()
  findAll() {
    return 'Listar Todos Cursos';
  }
}
