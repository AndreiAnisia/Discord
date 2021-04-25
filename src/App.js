import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Chat from './components/Chat';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

function App() {
   const user = useSelector(selectUser);
   const dispatch = useDispatch();

   useEffect(() => {
      // listens for change in the auth
      auth.onAuthStateChanged((authUser) => {
         if (authUser) {
            // the user is logged in
            dispatch(
               login({
                  uid: authUser.uid,
                  photo: authUser.photoURL,
                  email: authUser.email,
                  displayName: authUser.displayName,
               })
            );
         } else {
            // the user is logged out
            dispatch(logout());
         }
      });
   }, [dispatch]);

   return (
      <div className="app">
         {user ? (
            <>
               <Sidebar />

               <Chat />
            </>
         ) : (
            <Login />
         )}
      </div>
   );
}

export default App;
