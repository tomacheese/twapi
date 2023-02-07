import { FastifyReply } from 'fastify'
import { Page } from 'puppeteer-core'

export class Utils {
  public static send<T>(reply: FastifyReply, data: T) {
    reply.send(data)
  }

  public static filterNull<T>(array: (T | null)[]): T[] {
    return array.filter((item) => item !== null) as T[]
  }

  public static filterUndefined<T>(array: (T | undefined)[]): T[] {
    return array.filter((item) => item !== undefined) as T[]
  }

  public static async pageScroll(page: Page) {
    await page.evaluate(() => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
    })
  }

  public static omit<T, K extends keyof T>(object: T, keys: K[]): Omit<T, K> {
    const result = {} as Omit<T, K>
    for (const key in object) {
      // @ts-ignore
      if (keys.includes(key as K)) {
        continue
      }
      // @ts-ignore
      result[key as keyof Omit<T, K>] = object[key as keyof T]
    }
    return result
  }
}
