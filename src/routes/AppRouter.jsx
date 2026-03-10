import {createBrowserRouter, Navigate, Outlet, RouterProvider} from 'react-router'
// import Friends from '@/pages/Friends'
// import Home from '@/pages/Home'
// import Login from '@/pages/Login'
// import Profile from '@/pages/Profile'
import { lazy, Suspense } from 'react'
import ThemePreview from '@/components/ThemePreview'
const Login = lazy(()=>import('../pages/Login'))
const Home = lazy(()=>import('../pages/Home'))
const Friends = lazy(()=>import('../pages/Friends'))
const Profile = lazy(()=>import('../pages/Profile'))

const commonRouter =[
  {path: 'theme', element: <ThemePreview />}
]

const guestRouter = createBrowserRouter([
 {path : '/', element: <Login />},
 {path : '*', element: <Navigate to='/' />},
  ...commonRouter
])

const userRouter = createBrowserRouter([
 {
   path: '/', element: <>
     <p className='py-4 border'>Header</p>
     <Outlet />
   </>,
   children: [
     { path: '', element: <Home /> },
     { path: 'friends', element: <Friends /> },
     { path: 'profile', element: <Profile/> },
     { path: '*', element: <Navigate to='/' /> },
     ...commonRouter
   ]
 }
])




function AppRouter() {
 const user = 'andy@ggg.mail'
//  const user = null
 const finalRouter = user ? userRouter : guestRouter
 return (
  <Suspense fallback={<span className="loading loading-bars loading-md"></span>}>
   <RouterProvider router={finalRouter} />
  </Suspense>
 )
}

export default AppRouter