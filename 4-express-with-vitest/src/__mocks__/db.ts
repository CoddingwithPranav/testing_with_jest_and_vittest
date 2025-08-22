import { beforeEach } from 'vitest'
import { mockDeep, mockReset } from 'vitest-mock-extended'
import { PrismaClient } from '../generated/prisma'

export const prismaClient = mockDeep<PrismaClient>()