
import assert from 'assert'
import bass from '../lib'
import { bx } from '../lib'

describe('exports', () => {

  it('should export bass as default', () => {
    assert(bass)
  })

  it('should export bx', () => {
    assert(bx)
  })

})
