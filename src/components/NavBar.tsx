import{HStack, Image} from "@chakra-ui/react"
import logo from '../assets/logo.webp'
import ColorModeSwitch from './Switch';


const NavBar = () => {
  return (
    <HStack justifyContent={'space-between'} paddingRight={'10px'}>
        <Image src= {logo} boxSize={'5%'} />
        <ColorModeSwitch />
    </HStack>  
  )

  
}

export default NavBar