import { uuid } from 'itils/dist/misc/uuid'
import * as React from 'react'

export function useUUID() {
  return React.useMemo<string>(() => uuid(), [])
}
