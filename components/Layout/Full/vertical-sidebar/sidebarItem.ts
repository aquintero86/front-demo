import {
    LayoutDashboardIcon,BorderAllIcon,
    AlertCircleIcon,
    CircleDotIcon,
    BoxMultiple1Icon,
    LoginIcon, MoodHappyIcon, ApertureIcon, UserPlusIcon
  } from 'vue-tabler-icons';
  
  export interface menu {
    header?: string;
    title?: string;
    icon?: any;
    to?: string;
    chip?: string;
    BgColor?: string;
    chipBgColor?: string;
    chipColor?: string;
    chipVariant?: string;
    chipIcon?: string;
    children?: menu[];
    disabled?: boolean;
    type?: string;
    subCaption?: string;
  }
  
  const sidebarItem: menu[] = [
    { header: 'Home' },
    {
      title: 'Dashboard',
      icon: LayoutDashboardIcon,
      to: '/'
    },
    { header: 'ui' },
    {
      title: "Campañas",
      icon: BorderAllIcon,
      to: "/components/campains",
    },
    {
      title: "Alert",
      icon: AlertCircleIcon,
      to: "/components/alerts",
      
    },
    {
      title: "Button",
      icon: CircleDotIcon,
      to: "/components/buttons",
    },
    
  
    { header: 'Auth' },
    {
      title: 'Login',
      icon: LoginIcon,
      to: '/auth/login'
  },
  {
      title: 'Register',
      icon: UserPlusIcon,
      to: '/auth/register'
  },
  { header: 'Extra' },
  {
      title: 'Icons',
      icon: MoodHappyIcon,
      to: '/pages/icons'
  },
  {
      title: 'Sample Page',
      icon: ApertureIcon,
      to: '/pages/sample-page'
  },
  
  ];
  
  export default sidebarItem;
  