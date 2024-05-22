import * as React from 'react';
import { useState } from 'react'; 
import { Menubar } from 'primereact/menubar';
import { removeToken } from '../../../Store/Slices/authSlice';
import { useDispatch } from 'react-redux';


const rightLink = {
  fontSize: 16,
  color: '#f36',
  ml: 3,
};

function AppAppBar() {
  const dispatch=useDispatch()
  const [menuClicked, setMenuClicked] = useState(false);

  const items = [
      {
          label: 'בית',
          icon: 'pi pi-home',
          url: '/'
      },
      {
          label: 'התחבר',
          icon: 'pi pi-star',
          url: '/SignIn',
      },
      {
          label: 'הירשם',
          icon: 'pi pi-user',
          url: '/SignUp'
      },
      {
          label: 'התנתק',
          icon: 'pi pi-lock-open',
          command: () => {dispatch(removeToken()) },
          url: '/SignIn'
      },
      {
          label: 'רכישות קודמות',
          icon: 'pi pi-history',
          url: '/Package'
      },

      {
        label: 'כך זה יוצג למשתמש-חבילות הנופשים',
        icon: 'pi pi-shopping-cart',
        url: '/Shop2'
    },
    {
      label: 'עריכת נופשים',
      icon: 'pi pi-file-edit',
      url: '/UserList'
  },

      {
          label: 'משתמשים',
          icon: 'pi pi-search',
          items: [
              {
                  label: 'כל המשתמשים',
                  icon: 'pi pi-bolt',
                  url: '/MNGUser'
              },
              {
                  label: 'משתמשים רשומים',
                  icon: 'pi pi-server',
                  url: '/MNGUserRegister'
              },
             
          ]
      },

  ];

  const handleClick = () => {
      setMenuClicked(!menuClicked);
  };

  return (
    <div>
      {/* <AppBar position="fixed"> */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 999 }}>
    <div className="flex items-center justify-between card" style={{ padding: '0.5rem' }}>
        {/* <img className="w-9 sm:w-8em xl:w-10rem shadow-2 block xl:block mx-auto border-round" src={logo} alt="Logo" style={{ width: '3%' }}/> */}
        <Menubar model={items} onClick={handleClick} style={{ width: '100%', backgroundColor: '#fffff', color: '#b12c16' }} />
    </div>
</div>
      
      
    </div>
  );
}

export default AppAppBar;
