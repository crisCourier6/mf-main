import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import LoginView from "./views/accounts/LoginView";
import HomeView from "./views/HomeView";
import FoodProfileView from "./views/food-profile/FoodProfileView";
import FoodListLocalView from "./views/food-profile/FoodListLocalView";
import ActivateView from "./views/accounts/ActivateView";
import UserProfileView from "./views/user-profile/UserProfileView";
import UserFoodPrefsView from "./views/user-profile/UserFoodPrefsView";
import UserFoodHistoryView from "./views/user-profile/UserFoodHistoryView";
import FoodEditView from "./views/food-edits/FoodEditView";
import RequestView from "./views/accounts/RequestView";
import FoodDiaryView from "./views/food-diary/FoodDiaryView";
import FoodEditUserListView from "./views/food-edits/FoodEditUserListView";
import ExpertListView from "./views/expert-profile/ExpertListView";
import StoreListView from "./views/store-profile/StoreListView";
import StoreCatalogueView from "./views/store-profile/StoreCatalogueView";
import FoodSearchLocalView from "./views/food-profile/FoodSearchLocal";
import ArticleListView from "./views/expert-profile/ArticleListView";
import UserNotificationsView from "./views/notifications/UserNotificationsView";
import Loading from "./components/Loading";
import FoodEditHistoryView from "./views/food-edits/FoodEditHistoryView";
import UserStatsView from "./views/stats/UserStatsView";
import StatsDetailsView from "./views/stats/StatsDetailsView";
import ScannerView from "./views/ScannerView";
import FoodEditListView from "./views/food-edits/FoodEditListView";
import PublicRoute from "./components/PublicRoute";
import ProtectedRoute from "./components/ProtectedRoute";
import InvalidRoute from "./components/InvalidRoute";
import ResetPassView from "./views/accounts/ResetPassView";

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
              <Route path="/" element={<Navigate to="/login" replace={true}/>}/>
              <Route path="login">
                <Route index={true} element={<PublicRoute><LoginView/></PublicRoute>}/>
                <Route path="request" element={<PublicRoute><RequestView/></PublicRoute>}/>
                <Route path="reset/:id/:activationToken" element={<PublicRoute><ResetPassView/></PublicRoute>}/>
              </Route>
              <Route path="activate/:id/:token" element={<PublicRoute><ActivateView /></PublicRoute>}/>
              <Route path="home">
                <Route index={true} element={<ProtectedRoute><HomeView/></ProtectedRoute>}></Route>
              </Route>
              <Route path="food">
                <Route index={true} element={<ProtectedRoute><FoodListLocalView/></ProtectedRoute>}></Route>
                <Route path=":id" element={<ProtectedRoute><FoodProfileView/></ProtectedRoute>}></Route>
                <Route path=":id/edit" element={<ProtectedRoute><FoodEditView/></ProtectedRoute>}></Route>
                <Route path=":id/history" element={<ProtectedRoute><FoodEditHistoryView/></ProtectedRoute>}></Route>
              </Route>
              <Route path="food-edit">
                <Route index={true} element={<ProtectedRoute><FoodEditListView/></ProtectedRoute>}></Route>
              </Route>
              <Route path="users">
                <Route path=":id" element={<ProtectedRoute><UserProfileView/></ProtectedRoute>}></Route>
                <Route path=":id/food-prefs" element={<ProtectedRoute><UserFoodPrefsView/></ProtectedRoute>}></Route>
                <Route path=":id/food-history" element={<ProtectedRoute><UserFoodHistoryView/></ProtectedRoute>}></Route>
                <Route path=":id/food-diary" element={<ProtectedRoute><FoodDiaryView/></ProtectedRoute>}></Route>
                <Route path=":id/food-edits" element={<ProtectedRoute><FoodEditUserListView/></ProtectedRoute>}></Route>
                <Route path=":id/notifications" element={<ProtectedRoute><UserNotificationsView/></ProtectedRoute>}></Route>
              </Route>
              <Route path="experts">
                <Route index={true} element={<ProtectedRoute><ExpertListView/></ProtectedRoute>}></Route>
              </Route>
              <Route path="stores">
                <Route index={true} element={<ProtectedRoute><StoreListView/></ProtectedRoute>}></Route>
                <Route path=":id/catalogue" element={<ProtectedRoute><StoreCatalogueView/></ProtectedRoute>}></Route>
              </Route>
              <Route path="articles">
                <Route index={true} element={<ProtectedRoute><ArticleListView/></ProtectedRoute>}></Route>
              </Route>
              <Route path="stats">
                <Route index={true} element={<ProtectedRoute><UserStatsView/></ProtectedRoute>}></Route>
                <Route path=":id" element={<ProtectedRoute><StatsDetailsView/></ProtectedRoute>}></Route>
              </Route>
              <Route path="search">
                <Route index={true} element={<ProtectedRoute><FoodSearchLocalView/></ProtectedRoute>}></Route>
              </Route>
              <Route path="scan">
                <Route index={true} element={<ProtectedRoute><ScannerView/></ProtectedRoute>}></Route>
              </Route>
              <Route path="waiting">
                <Route index={true} element={<Loading/>}></Route>
              </Route>
              <Route path="*" element={<InvalidRoute />} />

          </Routes>
      </Router>
      
    </div>
    // <div className="App">
    //   FRONTEND PADRE
    //   <Suspense fallback={<div>Cargando...</div>}>
    //     <MiComponente />
    //   </Suspense>
    // </div>
  );
}

export default App;