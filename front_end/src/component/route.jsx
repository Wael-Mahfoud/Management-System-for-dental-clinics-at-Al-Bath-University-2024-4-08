// components/Navbar.js

import { useUser } from '@/logic/UserContext';
import Guest from './Gust';
import Patient from './Patient';
import Student from './Student';
import Admin from './Admin';
import Doctor from './Doctor';


export default function Navbar() {
  const { user, logout } = useUser();

  return (
    <nav>
      {user ? (
        user.type == "student" ?
          <><Student /></>
          :
          user.type == "admin" ?
            <><Admin /></>
            : user.type == "doctor" ?
              <><Doctor /></> :

              <>
                <Patient />

              </>
      ) : (
        <Guest />
      )}
    </nav>
  );
}
