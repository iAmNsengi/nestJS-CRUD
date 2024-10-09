import { SongsService } from './songs.service';
export declare class SongsController {
    private songsService;
    constructor(songsService: SongsService);
    createSong(): void;
    findAll(): any[];
    findOne(): string;
    updateSong(): string;
    deleteSong(): string;
}
