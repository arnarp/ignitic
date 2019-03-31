import * as React from 'react'

import { uuid } from '../utils/uuid'

export function useUUID() {
  return React.useMemo<string>(() => uuid(), [])
}
