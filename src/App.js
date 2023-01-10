
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const  App =()=> {
  const [progress,  setProgress]=useState(0)

 const apiKey='18a45edad44c4641aa6af99df9c276a9'
    return (
       <div>
        <BrowserRouter>
          <NavBar/>
          <LoadingBar 
            color="#882CFF"
            progress={progress}
            height={3}
          />  
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  apiKey={apiKey}
                  setProgress={setProgress}
                  key="General"
                  pageSize={5}
                  category="general"
                  country="us"
                />
              }
            />
            <Route
              path="/business"
              element={
                <News
                  apiKey={apiKey}
                  setProgress={setProgress}
                  key="Business"
                  pageSize={5}
                  category="business"
                  country="us"
                />
              }
            />
            <Route
              path="/entertainment"
              element={
                <News
                  apiKey={apiKey}
                  setProgress={setProgress}
                  key="Entertainment"
                  pageSize={5}
                  category="entertainment"
                  country="us"
                />
              }
            />
            <Route
              path="/sports"
              element={
                <News
                  apiKey={apiKey}
                  setProgress={setProgress}
                  key="Sports"
                  pageSize={5}
                  category="sports"
                  country="us"
                />
              }
            />
            <Route
              path="/health"
              element={
                <News
                  apiKey={apiKey}
                  setProgress={setProgress}
                  key="Health"
                  pageSize={5}
                  category="health"
                  country="us"
                />
              }
            />
            <Route
              path="/science"
              element={
                <News
                  apiKey={apiKey}
                  setProgress={setProgress}
                  key="Science"
                  pageSize={5}
                  category="science"
                  country="us"
                />
              }
            />
            <Route
              path="/technology"
              element={
                <News
                  apiKey={apiKey}
                  setProgress={setProgress}
                  key="Technology"
                  pageSize={5}
                  category="technology"
                  country="us"
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </div> 
    );
  }
  export default App;