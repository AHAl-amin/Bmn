import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './Root/Roots.jsx';
// import ErrorPage from './component/ErrorPage/ErrorPage.jsx';
// import Home from './component/Home/Home.jsx';
import Home from './component/Home/Home.jsx'
import UserDashboardLayout from './component/UsersDashboard/UserDashboardLayout/UserDashboardLayout.jsx';
// import OderManangement from './component/UsersDashboard/UserDashboardPages/OderManangement.jsx';
import AdminDashboardLayout from './component/AdminDashboard/AdminDashboardLayout/AdminDashboardLayout.jsx';
import AdminDashboard from './component/AdminDashboard/AdminDashboardPages/AdminDashboard.jsx';
import AdminDashboardMessage from './component/AdminDashboard/AdminDashboardPages/AdminDashboardUser.jsx';
// import AdminDashboardChats from './component/AdminDashboard/AdminDashboardPages/AdminDashboardChats.jsx';
import AdminDashboardAiChat from './component/AdminDashboard/AdminDashboardPages/AdminDashboardChefs.jsx';
import AdminDashboardNotification from './component/AdminDashboard/AdminDashboardPages/AdminDashboardSubscription.jsx';

import Registration from './component/Shared/Registration/Registration.jsx';

// import ConfirmEmail from './component/Shared/ConfirmEmail/ConfirmEmail.jsx';
import Verification from './component/Shared/Verification/Verification.jsx';
import ConfirmPassword from './component/Shared/Admin_ConfirmPassword/Admin_ConfirmPassword.jsx';
import PasswordChangeSuccesfully from './component/Shared/PasswordChangeSuccesfully/PasswordChangeSuccesfully.jsx';


import Admin_login from './component/Shared/Admin_login/Admin_login.jsx';
import Admin_ConfirmPassword from './component/Shared/Admin_ConfirmPassword/Admin_ConfirmPassword.jsx';
import UserSignup from './component/Shared/UserSignup/UserSignup.jsx';
import UserSingin from './component/Shared/UserSignin/UserSignin.jsx';
import AllRecipes from './component/UsersDashboard/UserDashboardPages/AllRecipes/AllRecipes.jsx';
import AiChat from './component/UsersDashboard/UserDashboardPages/AiChat/AiChat.jsx';
import RecipesDettails from './component/UsersDashboard/UserDashboardPages/RecipesDettails/RecipesDettails.jsx';
import Community from './component/UsersDashboard/UserDashboardPages/Community.jsx';
import SaveRecipes from './component/UsersDashboard/UserDashboardPages/SaveRecipes.jsx';
import CommunityPost from './component/UsersDashboard/UserDashboardPages/CommunityPost.jsx';
import ProfileAndSetting from './component/UsersDashboard/UserDashboardPages/ProfileAndSetting.jsx';
import ChefDashboardLayout from './component/ChefDashboard/ChefDashboardLayout/ChefDashboardLayout.jsx';
import ChefDashboardPage from './component/ChefDashboard/ChefDashboardPage/ChefDashboardPage.jsx';
import ChefAllRecipes from './component/ChefDashboard/ChefDashboardPage/ChefAllRecipes.jsx';
import ChefRecipesDettilsView from './component/ChefDashboard/ChefDashboardPage/ChefRecipesDettilsView.jsx';
import ChefRecipesEditPage from './component/ChefDashboard/ChefDashboardPage/ChefRecipesEditPage.jsx';
import AiTraining from './component/ChefDashboard/ChefDashboardPage/AiTraining.jsx';
import ChefSettingAndPrivecy from './component/ChefDashboard/ChefDashboardPage/ChefSettingAndPrivecy.jsx';
import FacebookUser from './component/ChefDashboard/ChefDashboardPage/FacebookUser.jsx';
import Branding from './component/ChefDashboard/ChefDashboardPage/Branding.jsx';
import ChefSubscribtion from './component/ChefDashboard/ChefDashboardPage/ChefSubscribtion.jsx';
import ChefCommunity from './component/ChefDashboard/ChefDashboardPage/ChefCommunity.jsx';
import AdminDashboardChefs from './component/AdminDashboard/AdminDashboardPages/AdminDashboardChefs.jsx';
import AdminDashboardUser from './component/AdminDashboard/AdminDashboardPages/AdminDashboardUser.jsx';
import AdminDashboardSubscription from './component/AdminDashboard/AdminDashboardPages/AdminDashboardSubscription.jsx';
import AdminDashboardSettingPrivecy from './component/AdminDashboard/AdminDashboardPages/AdminDashboardSettingPrivecy.jsx';
import UserInspirationChat from './component/UsersDashboard/UserDashboardPages/UserInspirationChat.jsx';
// import UserSingin from './component/Shared/UserSignin/UserSignin.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  // ----------user dashboard---------
  {
    path: "/dashboard",
    element: (<UserDashboardLayout />),
    children: [
      {
        index: true,
        element: <AllRecipes/>
      },
      {
        path:'ai_chat',
        element:<AiChat/>
      },
      {
        path:'recipes_dettails',
        element:<RecipesDettails/>
      },

      {
        path:'community',
        element:<Community/>
      },
      {
        path:'save_recipes',
        element:<SaveRecipes/>
      },
     
      {
        path:'community_post',
        element:<CommunityPost/>
      },
     
      {
        path:'profile_settings',
        element:<ProfileAndSetting/>
      },
      
      {
        path:"inspiration_chat",
        element:<UserInspirationChat/>
      }
     
      
     
      
     
    ]
  },

  //.................Chef Dashboard.............


{
  path: "/chef_dashboard",
  element: (<ChefDashboardLayout/>),
  children:[

    {
      index: true,
      element: <ChefDashboardPage/>
    },

    {
      path:'chef_all_recipes',
      element: <ChefAllRecipes/>
    },
    {
      path:'chef_recipese_dettails_view',
      element: <ChefRecipesDettilsView/>
    },
    {
      path:'chef_recipese_edit_page',
      element: <ChefRecipesEditPage/>
    },
    {
      path:'ai_training',
      element: <AiTraining/>
    },
    {
      path:'chef_settings_privecy',
      element: <ChefSettingAndPrivecy/>
    },
    {
      path:'branding',
      element: <Branding/>
    },
    {
      path:'chef_subscribtion',
      element: <ChefSubscribtion/>
    },
    {
      path:'facebook_user',
      element: <FacebookUser/>
    },

    {
      path:'chef_community',
      element:<ChefCommunity/>
    },
    



  ]
}
,


  //--------------admin dashboard----------

  {
    path: "/Admin_Dashboard",
    element: <AdminDashboardLayout />,
    children: [
      {
        index: true,
        element: <AdminDashboard />
      },
      {
        path: "chefs", // Relative path under /Admin_Dashboard
        element: <AdminDashboardChefs/>,
        children: [
          
          {
            path:"chatbot",
            element:<AdminDashboardAiChat/>
          }
        ]
      },
   
      {
        path:"users",
        element:<AdminDashboardUser/>
      },
      {
        path:"subscriber",
        element:<AdminDashboardSubscription/>
      },
      {
        path:"settings_privecy",
        element:<AdminDashboardSettingPrivecy/>
      },
    
    ]
  },



  // .................user Authentications.................

  {
    path:'/user_signup',
    element:<UserSignup/>
  },
  {
    path:'/user_signin',
    element:<UserSingin/>
  },
  // .................Admin Authentications.................
  
  {
    path:"/registration",
    element:<Registration/>
    

  },
  {
    path:'/Admin_login',
    element:<Admin_login/>
  },
  {
    path:'/admin_confirmPassword',
    element:<Admin_ConfirmPassword/>
  },
  {
    path:'/verification',
    element:<Verification/>
  },
  {
    path:'/confirm_password',
    element:<ConfirmPassword/>
  },
  {
    path:'/password_change_succesfull',
    element:<PasswordChangeSuccesfully/>
  }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </StrictMode>,
)
