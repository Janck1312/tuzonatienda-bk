import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule } from '@nestjs/config'
import { PrismaService } from './exchange/services/PrismaService'
import { StoreModule } from './store/store.module'
import { PermissionsModule } from './permissions/permissions.module'
import { RolesModule } from './roles/roles.module'
import { PermissionRolesModule } from './permission-roles/permission-roles.module'

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        StoreModule,
        PermissionsModule,
        RolesModule,
        PermissionRolesModule,
    ],
    controllers: [AppController],
    providers: [AppService, PrismaService],
    exports: [PrismaService],
})
export class AppModule {}
