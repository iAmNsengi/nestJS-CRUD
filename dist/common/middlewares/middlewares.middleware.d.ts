import { NestMiddleware } from '@nestjs/common';
export declare class MiddlewaresMiddleware implements NestMiddleware {
    use(req: any, res: any, next: () => void): void;
}
