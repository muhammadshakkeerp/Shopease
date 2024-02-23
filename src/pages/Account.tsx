import { Route, Routes } from "react-router-dom"
import { AccountDetails, Login, Orders, Profile, Rewards, Wishlist } from "../optimazation/AppOptimazation"
import { AccountSidebar } from "../paths"

const Account = () => {
    return (
        <div className="flex justify-between flex-col xl:flex-row">
            {/* first section */}
            <div className=" xl:block xl:w-1/5">
                <AccountSidebar />
            </div>
            {/* second section */}
            <div className="bg-primary w-full xl:xl:w-4/5">
                <Routes>
                    <Route path="/account" element={<AccountDetails />} />
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

