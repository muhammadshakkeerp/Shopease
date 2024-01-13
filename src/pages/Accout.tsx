import {  Route, Routes } from "react-router-dom"
import { AccountSidebar } from "../paths"

const Account = () => {
    return (
        <div>
            {/* first section */}
            <AccountSidebar />
            {/* second section */}
            <div>
                <Routes>
                        <Route path="/login/login" element={``} />
                </Routes>
            </div>
        </div>
    )
}

export default Account