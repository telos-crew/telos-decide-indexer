import type { ApplicationContract } from '@ioc:Adonis/Core/Application'
import { syncDeltas } from '../feed'

export default class AppProvider {
  constructor(protected app: ApplicationContract) {}

  public register() {
    // Register your own bindings
  }

  public async boot() {
    // IoC container is ready
  }

  public async ready() {
    // const { default: Database } = await import('@ioc:Adonis/Lucid/Database')
    // const { default: Redis } = await import('@ioc:Adonis/Addons/Redis')
    const { default: Env } = await import('@ioc:Adonis/Core/Env')
    setInterval(() => syncDeltas('telos.decide'), 2000)
  }

  public async shutdown() {
    // Cleanup, since app is going down
  }
}
