import { createServer } from 'miragejs'

import { ContactsMocked } from '../mock/contact-data'

export const initMirageServer = (): void => {
  createServer({
    routes () {
      this.get('/api/contacts', () => ({
        contacts: ContactsMocked
      }))
    }
  })
}
