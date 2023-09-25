import Env from '@ioc:Adonis/Core/Env'

export const SHARED_ENV = {}

export const TESTNET_ENV = {
  ...SHARED_ENV,
  HYPERION_DOMAIN: 'https://testnet.telos.net',
}

export const MAINNET_ENV = {
  ...SHARED_ENV,
  HYPERION_DOMAIN: 'https://mainnet.telos.net',
}

export const ENV = {
  testnet: TESTNET_ENV,
  mainnet: MAINNET_ENV,
}

export const getEnv = () => {
  const env = Env.get('CHAIN')
  return ENV[env]
}
