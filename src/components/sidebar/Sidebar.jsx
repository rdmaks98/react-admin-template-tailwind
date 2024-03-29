import React from 'react'
import { MdDashboard, MdOutlineDashboardCustomize } from "react-icons/md";
import { RiSettings3Line } from "react-icons/ri";
const Sidebar = () => {
    return (
        <div className="h-screen bg-indigo-600 dark:bg-slate-950">
            <div className="flex flex-col gap-3 w-full text-slate-300 h-full justify-between">
                <div className="flex flex-col gap-10 px-4 mt-4">
                    <div className="flex items-center justify-center gap-2">
                        <div className="text-indigo dark:text-white text-xl md:text-4xl">
                            <MdDashboard />
                        </div>
                        <div className="hidden md:flex font-bold">
                            Admin
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 text-md sm:text-sm lg:text-lg">
                        <div className="flex items-center gap-2">
                            <div><MdOutlineDashboardCustomize /></div>
                            <div className='hidden sm:flex hover:text-slate-100 cursor-pointer'> Dashboard</div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div><MdOutlineDashboardCustomize /></div>
                            <div className='hidden sm:flex hover:text-slate-100 cursor-pointer'> Cards</div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div><MdOutlineDashboardCustomize /></div>
                            <div className='hidden sm:flex hover:text-slate-100 cursor-pointer'> Order</div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div><MdOutlineDashboardCustomize /></div>
                            <div className='hidden sm:flex hover:text-slate-100 cursor-pointer'> Product</div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div><MdOutlineDashboardCustomize /></div>
                            <div className='hidden sm:flex hover:text-slate-100 cursor-pointer'> Billing</div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div><MdOutlineDashboardCustomize /></div>
                            <div className='hidden sm:flex hover:text-slate-100 cursor-pointer'> Users</div>
                        </div>
                    </div>

                </div>
                <div className="flex items-center text-md sm:text-xs md;text-sm lg:text-lg px-4 mb-4 gap-2">
                    <div><RiSettings3Line /></div>
                    <div className='="hidden sm:flex'>Settings</div>
                </div>
            </div>
        </div>

    )
}

export default Sidebar