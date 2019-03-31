import * as React from 'react'

import { Omit } from '../../types/omit'
import { Text, TextProps, defaultProps } from '.'

type Props = Omit<TextProps, 'as'>

export function H3(props: Props) {
  return <Text as="h3" {...props} />
}

H3.defaultProps = defaultProps
