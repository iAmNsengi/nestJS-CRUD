import { CreateSongDTO } from './dto/create-song-dto';
import { SongsService } from './songs.service';
import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) {}

  @Post()
  create(@Body() createSongDTO: CreateSongDTO) {
    return this.songsService.create(createSongDTO);
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
