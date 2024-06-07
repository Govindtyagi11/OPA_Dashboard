import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Layout from "./Layout/Layout";
import "./index.css";
import MainLogin from "./pages/MainLogin/MainLogin";
import CourseLogin from "./pages/Courses/CourseLogin/CourseLogin";
import CourseLoginPage from "./pages/Courses/CourseLoginPage";
import CourseCreatePage from "./pages/Courses/CourseCreatePage";
import checkAuth from "./auth";
import JobLogin from "./pages/Jobs/JobLogin/JobLogin";
import JobLoginPage from "./pages/Jobs/JobLoginPage";
import JobCreatePage from "./pages/Jobs/JobCreatePage";
import RecruiterLogin from "./pages/Jobs/Recruiter/RecruiterLogin";
import JobLandingPage from "./pages/Jobs/JobLandingPage/JobLandingPage";
import ResumeProfile from "./pages/Jobs/ResumeProfile/ResumeProfile";

function App() {
  const token = checkAuth()
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<MainLogin />} />
        <Route path="/course-login" element={<CourseLogin />} />
        <Route path="/course-login-page" element={<CourseLoginPage />} />
        <Route path="/course-create-page" element={<CourseCreatePage />} />
        <Route path="/job-login" element={<JobLogin />} />
        <Route path="/job-login-page" element={<JobLoginPage />} />
        <Route path="/job-create-page" element={<JobCreatePage />} />
        <Route path="/recruiter-login" element={<RecruiterLogin />} />
        <Route path="/job-landing-page" element={<JobLandingPage />} />
        <Route path="/resume-profile" element={<ResumeProfile />} />
        {/* Place new routes over this */}
        <Route path="/app/*" element={<Layout />} />

        <Route path="*" element={<Navigate to={token ? "/app/dashboard" : "/login"} replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
