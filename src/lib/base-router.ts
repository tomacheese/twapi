import { Configuration } from '@/config'
import { FastifyInstance } from 'fastify'
import { PuppeteerWrapper } from './puppeteer-wrapper.class'

/**
 * REST API ルーターの基底クラス
 */
export abstract class BaseRouter {
  protected fastify: FastifyInstance
  protected config: Configuration
  protected wrapper: PuppeteerWrapper

  constructor(
    fastify: FastifyInstance,
    config: Configuration,
    wrapper: PuppeteerWrapper
  ) {
    this.fastify = fastify
    this.config = config
    this.wrapper = wrapper
  }

  /**
   * ルーターを初期化する
   *
   * this.fastify.register() でルーターを登録する
   */
  abstract init(): void
}
