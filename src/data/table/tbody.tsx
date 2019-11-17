import * as React from 'react'

type Props = {} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLTableSectionElement>,
  HTMLTableSectionElement
>

export const TBody = React.forwardRef<HTMLTableSectionElement, Props>(
  function TBody({ children, ...rest }, ref) {
    return (
      <tbody {...rest} ref={ref}>
        {children}
      </tbody>
    )
  }
)
