import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Dashboard from "../pages/dashboard/Dashboard";
import Categories from "../pages/categories/Categories";
import MyTask from "../pages/my-task/MyTask";
import SignUp from "../pages/auth/signup/SignUp";
import SignIn from "../pages/auth/signin/SignIn";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="sign-up" element={<SignUp />} />
          <Route path="login" element={<SignIn />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="task-categories" element={<Categories />} />
            <Route path="my-tasks" element={<MyTask />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
