import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './exchange/services/PrismaService';
import { StoreModule } from './store/store.module';
import { PermissionsModule } from './permissions/permissions.module';
import { RolesModule } from './roles/roles.module';
import { PermissionRolesModule } from './permission-roles/permission-roles.module';
import { UsersModule } from './users/users.module';
import { AuthenticationModule } from './authentication/authentication.module';

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        StoreModule,
        PermissionsModule,
        RolesModule,
        PermissionRolesModule,
        UsersModule,
        AuthenticationModule,
    ],
    controllers: [AppController],
    providers: [AppService, PrismaService],
    exports: [PrismaService],
})
export class AppModule {}
