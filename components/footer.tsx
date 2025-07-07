import {  TrendingUp } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="bg-gray-900 text-white py-8 sm:py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400" />
                <span className="text-lg sm:text-xl font-bold">SmartInvest</span>
              </div>
              <p className="text-gray-400 text-sm sm:text-base">
                Empowering investors with AI-driven insights and real-time market intelligence.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm sm:text-base">Platform</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <Link href="/dashboard" className="hover:text-white transition-colors">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="hover:text-white transition-colors">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/news" className="hover:text-white transition-colors">
                    News
                  </Link>
                </li>
                
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm sm:text-base">Features</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Real-time News</li>
                <li>AI Analysis</li>
                <li>Portfolio Tracking</li>
                <li>Smart Alerts</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm sm:text-base">Support</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 SmartInvest. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer