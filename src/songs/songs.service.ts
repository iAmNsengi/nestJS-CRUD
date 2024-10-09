import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
  private readonly songs = [];

  createSong(song) {
    this.songs.push(song);
  }

  findAll() {
    return this.songs;
  }
}
