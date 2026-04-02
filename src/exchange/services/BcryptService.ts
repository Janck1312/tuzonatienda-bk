import * as bcrypt from 'bcryptjs';

export class BcryptService {
    static makeHash(password: string): string {
        return bcrypt.hashSync(password, 10);
    }

    static compareHash(password: string, hash: string): boolean {
        return bcrypt.compareSync(password, hash);
    }
}
