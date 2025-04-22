import React from 'react'
import { FaArrowTrendUp } from 'react-icons/fa6'
import { GoGraph } from 'react-icons/go'

function ChefDashboardPage() {
    return (
        <div>
            <div className="bg-white p-4 w-64 border">
                <div className="flex justify-between">
                    <div>
                        <p className="text-gray-500 text-sm">Total AI Interactions</p>
                        <p className="text-blue-600 text-3xl font-bold">40,689</p>
                    </div>
                    <div className="flex items-center mt-2">
                        <GoGraph />
                    </div>
                </div>
                <div className="bg-blue-100 p-2 rounded-full">
                        <span className="text-green-500 text-sm"> From last month</span>
                        <FaArrowTrendUp /><span>+15</span>
                </div>
            </div>
        </div>
    )
}

export default ChefDashboardPage