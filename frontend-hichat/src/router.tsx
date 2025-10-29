import { createBrowserRouter } from "react-router";
import LandingPages from "./features/landing/pages/LandingPages";
import SignUpPage from "./features/auth/pages/SignUpPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPages />
    },
    {
        path: "/sign-up",
        element: <SignUpPage />
    }
])

export default router