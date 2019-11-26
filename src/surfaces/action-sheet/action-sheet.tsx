import * as React from 'react'
import ReactDOM from 'react-dom'
import { IgniticSettingsContext } from '../../context/ignitic-settings-context'

// const Sheet = posed.div()
// const Shade = posed.div()

type Props = {
  open: boolean
  children: React.ReactNode
}

export function ActionSheet(props: Props) {
  const igniticSettings = React.useContext(IgniticSettingsContext)
  if (igniticSettings.container == undefined) {
    return null
  }
  // <PoseGroup>
  //   <Shade key="shade" />
  //   <Sheet key="sheet">{props.children}</Sheet>
  // </PoseGroup>
  return ReactDOM.createPortal(null, igniticSettings.container)
}
