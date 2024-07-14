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

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
              <Route path="/" element={<LoginView />}/>
              <Route path="login">
                <Route index={true} element={<LoginView />}/>
              </Route>
              <Route path="activate/:id/:token" element={<ActivateView />}/>
              <Route path="home">
                <Route index={true} element={<HomeView/>}></Route>
                <Route path=":id" element={<HomeView/>}></Route>
              </Route>
              <Route path="food">
                <Route index={true} element={<FoodListLocalView/>}></Route>
                <Route path=":id" element={<FoodProfileView/>}></Route>
                <Route path=":id/edit" element={<FoodSubmissionView/>}></Route>
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