import * as React from 'react'

import { Omit } from '../../types/omit'
import { Text, TextProps, defaultProps } from '.'

type Props = Omit<TextProps, 'as'>

export function H1(props: Props) {
  return <Text as="h1" {...props} />
}

H1.defaultProps = defaultProps
