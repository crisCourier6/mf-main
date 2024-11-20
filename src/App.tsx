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

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
              <Route path="/" element={<Navigate to="/login"/>}/>
              <Route path="login">
                <Route index={true} element={<LoginView />}/>
                <Route path="request" element={<RequestView/>}/>
              </Route>
              <Route path="activate/:id/:token" element={<ActivateView />}/>
              <Route path="home">
                <Route index={true} element={<HomeView/>}></Route>
              </Route>
              <Route path="food">
                <Route index={true} element={<FoodListLocalView/>}></Route>
                <Route path=":id" element={<FoodProfileView/>}></Route>
                <Route path=":id/edit" element={<FoodEditView/>}></Route>
                <Route path=":id/history" element={<FoodEditHistoryView/>}></Route>
              </Route>
              <Route path="food-edit">
                <Route index={true} element={<FoodEditListView/>}></Route>
              </Route>
              <Route path="users">
                <Route path=":id" element={<UserProfileView/>}></Route>
                <Route path=":id/food-prefs" element={<UserFoodPrefsView/>}></Route>
                <Route path=":id/food-history" element={<UserFoodHistoryView/>}></Route>
                <Route path=":id/food-diary" element={<FoodDiaryView/>}></Route>
                <Route path=":id/food-edits" element={<FoodEditUserListView/>}></Route>
                <Route path=":id/notifications" element={<UserNotificationsView/>}></Route>
              </Route>
              <Route path="experts">
                <Route index={true} element={<ExpertListView/>}></Route>
              </Route>
              <Route path="stores">
                <Route index={true} element={<StoreListView/>}></Route>
                <Route path=":id/catalogue" element={<StoreCatalogueView/>}></Route>
              </Route>
              <Route path="articles">
                <Route index={true} element={<ArticleListView/>}></Route>
              </Route>
              <Route path="stats">
                <Route index={true} element={<UserStatsView/>}></Route>
                <Route path=":id" element={<StatsDetailsView/>}></Route>
              </Route>
              <Route path="search">
                <Route index={true} element={<FoodSearchLocalView/>}></Route>
              </Route>
              <Route path="scan">
                <Route index={true} element={<ScannerView/>}></Route>
              </Route>
              <Route path="wait">
                <Route index={true} element={<Loading/>}></Route>
              </Route>

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