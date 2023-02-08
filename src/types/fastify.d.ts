import { Account } from '@/config'

declare module 'fastify' {
  interface FastifyRequest {
    account?: Account
  }
}
