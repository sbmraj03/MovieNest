import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { auth } from '../utils/firebase'
import { LOGO } from '../utils/constants'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { removeUser, addUser } from '../utils/userSlice'


const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user.user);
  const dispatch = useDispatch()

  const handlesignOut = () => {
    signOut(auth)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        navigate('/error')
      });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);


  return (
    <div className="absolute w-full flex justify-between items-center px-8 py-2 bg-gradient-to-b from-black z-50">
      {/* Logo */}
      <img
        className="w-44"
        src= {LOGO}
        alt="logo"
      />

      {/* Right Section */}
      {user && (
        <div className="flex items-center space-x-4">
          {/* Language Dropdown */}
          <select
            className="bg-black text-white border border-gray-500 px-2 py-1 rounded"
            defaultValue="en"
          >
            <option value="en">English</option>
            <option value="hi">हिन्दी</option>
          </select>

          {/* Sign Out Button */}
          <button className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700" onClick={handlesignOut}>
            Sign Out
          </button>
        </div>    
        )
      }
    </div>
  );
};

export default Header;
