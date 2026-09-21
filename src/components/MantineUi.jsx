import { Button, Drawer, Modal, PasswordInput, Rating, Select, Tabs, TextInput } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';
import { Cloud, Download, ImageIcon, MessageCircle, PersonStanding, Settings } from 'lucide-react'
import React from 'react'

const MantineUi = () => {
    const [opened, { open, close }] = useDisclosure(false);
  return (
    <div className='px-20'>
         <Button   leftSection={<Cloud/>} rightSection={<Download size={14} />}>Download</Button>

          <TextInput
          variant="filled"
    withAsterisk
      label="Your Name"
      placeholder="Your Full Name here..."
      leftSection= {<PersonStanding/>}
    />

      <PasswordInput
          variant="filled"
    withAsterisk
      label="Your Password"
      placeholder="Your password here...."
    />

      <Select
      searchable
      label="Your favorite library"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
    />

    <Rating defaultValue={1} />

       <Tabs defaultValue="gallery">
      <Tabs.List>
        <Tabs.Tab value="gallery" leftSection={<ImageIcon size={12} />}>
          Unish
        </Tabs.Tab>
        <Tabs.Tab value="messages" leftSection={<MessageCircle size={12} />}>
          Kalash
        </Tabs.Tab>
        <Tabs.Tab value="settings" leftSection={<Settings size={12} />}>
          Utsav
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="gallery">
        This is Unish
      </Tabs.Panel>

      <Tabs.Panel value="messages">
       This is Kalash
      </Tabs.Panel>

      <Tabs.Panel value="settings">
       This is Utsav
      </Tabs.Panel>
    </Tabs>

     <Drawer  position="left" opened={opened} onClose={close} title="Authentication" >
      This is content which i need in dialog
      </Drawer>

      <Button variant="default" onClick={open}>
        Open modal
      </Button>
    </div>
  )
}

export default MantineUi