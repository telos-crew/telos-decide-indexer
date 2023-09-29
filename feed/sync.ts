import axios from 'axios'
import { getEnv } from '../constants/env'

const { HYPERION_DOMAIN } = getEnv()
const START_TIME = Date.now()

const CONFIG = {
  'telos.decide': {
    contract: 'telos.decide',
    iterator: 1,
    handler: null,
    isProcessing: false,
    params: {
      code: 'telos.decide', // contract account
      sort: 'asc',
      limit: 200,
      after: '2022-06-01T00:00:00.000Z',
    },
  },
}

export const syncDeltas = async (contract: string) => {
  try {
    if (CONFIG[contract].isProcessing) return
    CONFIG[contract].isProcessing = true
    let url = `${HYPERION_DOMAIN}/v2/history/get_deltas`
    const {
      data: { deltas },
    } = await axios(url, {
      params: CONFIG[contract].params,
    })
    console.log('deltas', deltas)
    // sort deltas by timestamp
    deltas.sort((a, b) => a.timestamp - b.timestamp)
  } catch (err) {
    console.log(err.message)
  } finally {
  }
}
