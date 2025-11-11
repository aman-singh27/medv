"use client"

import { Menu, Search, Settings, Bell, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"

interface TopNavProps {
  onMenuClick: () => void
}

export function TopNav({ onMenuClick }: TopNavProps) {
  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={onMenuClick} className="lg:hidden">
          <Menu className="h-5 w-5" />
        </Button>
        <h1 className="text-2xl font-bold text-foreground">Patient Dashboard</h1>
      </div>

      <div className="flex items-center gap-4">
        {/* Search bar */}
        <div className="hidden md:flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2">
          <Search className="h-4 w-4 text-gray-500" />
          <input type="text" placeholder="Search records..." className="bg-transparent outline-none text-sm w-32" />
        </div>

        {/* Action buttons */}
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
        </Button>

        <Button variant="ghost" size="icon">
          <Settings className="h-5 w-5" />
        </Button>

        <Button variant="ghost" size="icon" className="text-red-600 hover:text-red-700">
          <LogOut className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}
