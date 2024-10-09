import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('songs')
export class SongsController {
  @Post()
  addSong() {
    return 'Add new song endpoint';
  }

  @Get()
  findAll() {
    return 'Find All Songs endpoint';
  }

  @Get(':id')
  findOne() {
    return 'Find one song endpoint';
  }

  @Put(':id')
  updateSong() {
    return 'Update song based on the id';
  }

  @Delete(':id')
  deleteSong() {
    return 'Delete song endpoint';
  }
}
