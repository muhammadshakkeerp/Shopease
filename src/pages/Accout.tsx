import { Route, Routes } from "react-router-dom"
import { AccountSidebar, Login, Orders, Profile, Rewards, Wishlist } from "../paths"

const Account = () => {
    return (
        <div className="flex justify-between">
            {/* first section */}
            <div className="hidden xl:block w-1/5">
                <AccountSidebar />
            </div>
            {/* second section */}
            <div className="bg-gray-500 w-full xl:w-4/5">
                <Routes>
                    <Route path="/" element={<Account />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/rewards" element={<Rewards />} />
                    <Route path="/wishlist" element={<Wishlist />} />
                    <Route path="/orders" element={<Orders />} />
                </Routes>;
            </div>
        </div>
    )
}

export default Account