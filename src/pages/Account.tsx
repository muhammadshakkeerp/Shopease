import { Route, Routes } from "react-router-dom"
import { AccountDetails, Login, Orders, Profile, Rewards, Wishlist } from "../optimazation/AppOptimazation"
import { AccountSidebar } from "../paths"
import { Suspense } from "react"

const Account = () => {
    return (
        <div className="flex justify-between flex-col xl:flex-row">
            {/* first section */}
            <div className=" xl:block xl:w-1/5">
                <AccountSidebar />
            </div>
            {/* second section */}
            <Suspense fallback={<div className="text-center">Loading...</div>}>
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
            </Suspense>
        </div>
    )
}

export default Account

