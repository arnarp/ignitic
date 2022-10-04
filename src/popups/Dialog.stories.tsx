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
        <H1 variant="h4" color="neutral" id={hId}>
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

export const Default = Template.bind({}) as ComponentStory<typeof Dialog>
Default.args = {
  open: false,
}
