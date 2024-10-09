import { SongsService } from './songs.service';
import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('songs')
export class SongsController {

  constructor(private songsService: SongsService){}

  @Post()
  createSong() {
    return  this.songsService.createSong("Do the right things!")
  }

  @Get()
  findAll() {
    return this.songsService.findAll();
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
