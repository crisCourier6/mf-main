import React, { lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from "react-router-dom";

import LoginView from "./views/LoginView";
import HomeView from "./views/HomeView";
import FoodProfileView from "./views/FoodProfileView";
import FoodListLocalView from "./views/FoodListLocalView";
import Redirect from "./components/Redirect";
import ActivateView from "./views/ActivateView";
import FoodSubmissionView from "./views/FoodSubmissionView";
import UserProfileView from "./views/user-profile/UserProfileView";
import UserFoodPrefsView from "./views/user-profile/UserFoodPrefsView";
import UserFoodHistoryView from "./views/user-profile/UserFoodHistoryView";
import FoodEditView from "./views/food-edits/FoodEditView";
import RequestView from "./views/RequestView";
import FoodDiaryView from "./views/food-diary/FoodDiaryView";

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
              </Route>
              <Route path="users">
                <Route path=":id" element={<UserProfileView/>}></Route>
                <Route path=":id/food-prefs" element={<UserFoodPrefsView/>}></Route>
                <Route path=":id/food-history" element={<UserFoodHistoryView/>}></Route>
                <Route path=":id/food-diary" element={<FoodDiaryView/>}></Route>
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