import React from 'react'

export const IgniticContext = React.createContext<{
  /**
   * Container that the react app renders to
   */
  container?: HTMLElement
}>({})
