import React from 'react'

type Props = {} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLTableSectionElement>,
  HTMLTableSectionElement
>

export const TFoot = React.forwardRef<HTMLTableSectionElement, Props>(
  function TFoot({ children, ...rest }, ref) {
    return (
      <tfoot {...rest} ref={ref}>
        {children}
      </tfoot>
    )
  }
)
