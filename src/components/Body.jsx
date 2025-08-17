import Login from "./Login"
import Browse from './Browse'
import { createBrowserRouter, RouterProvider} from "react-router";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      Component: Login,
    },
    {
      path: "/Browse",
      Component: Browse,
    },
  
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user){
        const {uid, email, displayName} = user;
        dispatch(addUser({uid, email, displayName}));
      }
      else{
        dispatch(removeUser());
      }
    })
  }, []);

  return (
    <div> 
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body
