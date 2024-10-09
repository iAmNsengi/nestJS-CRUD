import { CreateSongDTO } from './dto/create-song-dto';
import { SongsService } from './songs.service';
export declare class SongsController {
    private songsService;
    constructor(songsService: SongsService);
    create(createSongDTO: CreateSongDTO): any[];
    findAll(): any[];
    findOne(): string;
    updateSong(): string;
    deleteSong(): string;
}
