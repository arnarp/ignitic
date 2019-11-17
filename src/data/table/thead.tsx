import * as React from 'react'

type Props = {} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLTableSectionElement>,
  HTMLTableSectionElement
>

export const THead = React.forwardRef<HTMLTableSectionElement, Props>(
  function THead({ children, ...rest }, ref) {
    return (
      <thead {...rest} ref={ref}>
        {children}
      </thead>
    )
  }
)
