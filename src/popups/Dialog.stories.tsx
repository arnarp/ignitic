import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Button, H1, IconButton, P } from '../core'
import { useUUID } from '../hooks'
import { Dialog, DialogContent, DialogFooter, DialogHeader } from './Dialog'
import { MdClose } from 'react-icons/md'

export default {
  title: 'Popups/Dialog',
  component: Dialog,
  args: {},
  argTypes: {},
} as ComponentMeta<typeof Dialog>

const Template: ComponentStory<typeof Dialog> = (args) => {
  const hId = useUUID()
  return (
    <Dialog {...args} headingId={hId}>
      <DialogHeader>
        <H1 fontVariant="h4" color="neutral" id={hId} mA="o">
          Dialog title
        </H1>
        <IconButton aria-label="Loka" color="neutral">
          <MdClose />
        </IconButton>
      </DialogHeader>
      <DialogContent>
        <P>Dialog content</P>
      </DialogContent>
      <DialogFooter>
        <Button variant="filled" onClick={() => {}}>
          Hætta við
        </Button>
        <Button variant="filled" onClick={() => {}}>
          Vista
        </Button>
      </DialogFooter>
    </Dialog>
  )
}

const FullScreenTemplate: ComponentStory<typeof Dialog> = (args) => {
  const hId = useUUID()
  return (
    <Dialog {...args} headingId={hId}>
      <DialogHeader maxW="48" w="100p">
        <H1 fontVariant="h4" color="neutral" id={hId}>
          Dialog title
        </H1>
        <IconButton aria-label="Loka" color="neutral">
          <MdClose />
        </IconButton>
      </DialogHeader>
      <DialogContent maxW="48" w="100p">
        <P>Dialog content</P>
      </DialogContent>
      <DialogFooter maxW="48" w="100p">
        <Button variant="filled" onClick={() => {}}>
          Hætta við
        </Button>
        <Button variant="filled" onClick={() => {}}>
          Vista
        </Button>
      </DialogFooter>
    </Dialog>
  )
}

export const Default = Template.bind({})
Default.args = {
  open: false,
}
Default.parameters = {
  chromatic: { disableSnapshot: true },
}

export const Open = Template.bind({})
Open.args = {
  open: true,
}

export const OpenFullScreen = FullScreenTemplate.bind({})
OpenFullScreen.args = {
  open: true,
  variant: 'fullscreen',
}
