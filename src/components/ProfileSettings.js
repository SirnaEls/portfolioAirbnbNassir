import React from 'react'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
// React Icons
import {BsGlobe} from 'react-icons/bs'
import {AiOutlineMenu} from 'react-icons/ai'
import {FaRegUserCircle} from 'react-icons/fa'
import {flexCenter} from 'themes/commonStyles'
import {BiMailSend} from 'react-icons/bi'


function ProfileSettings() {
  return (
    <Box sx={flexCenter}>
        <Link href='mailto:nassir.elabbassi@outlook.fr'>Collaborons ensemble<BiMailSend size={18} /> </Link>
        <Stack>
            <Button><BsGlobe size={24}/></Button>
            <Button sx={{
                borderRadius:10, border:'1px solid #ddd'
            }}>
                <Stack>
                    <AiOutlineMenu size={24}/>
                    <FaRegUserCircle size={24} />
                </Stack>
            </Button>
        </Stack>
    </Box>
  )
}

export default ProfileSettings