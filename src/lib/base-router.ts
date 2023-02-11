import { Configuration } from '@/config'
import { FastifyInstance } from 'fastify'
import {
  PuppeteerWrapper,
  PuppeteerWrapperManager,
} from './puppeteer-wrapper.class'

/**
 * REST API ルーターの基底クラス
 */
export abstract class BaseRouter {
  protected fastify: FastifyInstance
  protected config: Configuration
  protected wrapper: PuppeteerWrapper
  protected wrapperManager: PuppeteerWrapperManager

  constructor(
    fastify: FastifyInstance,
    config: Configuration,
    wrapper: PuppeteerWrapper,
    wrapperManager: PuppeteerWrapperManager
  ) {
    this.fastify = fastify
    this.config = config
    this.wrapper = wrapper
    this.wrapperManager = wrapperManager
  }

  /**
   * ルーターを初期化する
   *
   * this.fastify.register() でルーターを登録する
   */
  abstract init(): void
}
