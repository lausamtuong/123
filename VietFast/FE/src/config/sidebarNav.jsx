import {
  FcHome,
  FcKindle,
  FcBiotech,
  FcVoicePresentation,
  FcSupport,
  FcBullish,
} from "react-icons/fc";

const sidebarNav = [
    {
        link: '/admin',
        section: 'home',
        icon: <FcHome size={30} />,
        text: 'Home'
    },
    {
        link: './contacts',
        section: 'contact',
        icon: <FcKindle size={30} />,
        text: 'Contacts'
    },
    {
        link: './customers',
        section: 'customers',
        icon: <FcVoicePresentation size={30}/>,
        text: 'Customers'
    },
   
]

export default sidebarNav