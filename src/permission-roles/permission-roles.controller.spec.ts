import { Test, TestingModule } from '@nestjs/testing'
import { PermissionRolesController } from './permission-roles.controller'

describe('PermissionRolesController', () => {
    let controller: PermissionRolesController

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [PermissionRolesController],
        }).compile()

        controller = module.get<PermissionRolesController>(
            PermissionRolesController,
        )
    })

    it('should be defined', () => {
        expect(controller).toBeDefined()
    })
})
