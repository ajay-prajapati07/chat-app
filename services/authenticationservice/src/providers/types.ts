import { User, UserRelations } from '@sourceloop/authentication-service/dist/models/user.model';
import * as GoogleStrategy from 'passport-google-oauth20';
export interface GoogleSignUpFn {
    (profile: GoogleStrategy.Profile): Promise<(User & UserRelations) | null>;
}