"use client"

import type React from "react"

import {
  ChevronLeft,
  Home,
  FileText,
  Beaker,
  ImageIcon,
  Heart,
  MessageSquare,
  AlertCircle,
  TrendingUp,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface SidebarProps {
  isOpen: boolean
  onToggle: () => void
}

interface VitalSign {
  label: string
  value: string
  unit: string
  status: "normal" | "warning" | "critical"
  icon: React.ReactNode
}

export function Sidebar({ isOpen, onToggle }: SidebarProps) {
  const pathname = usePathname()

  const menuItems = [
    { icon: Home, label: "Overview", href: "/", active: pathname === "/" },
    { icon: FileText, label: "Notes", href: "/notes", active: pathname === "/notes" },
    { icon: FileText, label: "Documents", href: "/documents", active: pathname === "/documents" },
    { icon: Beaker, label: "Labs", href: "/labs", active: pathname === "/labs" },
    { icon: ImageIcon, label: "Imaging", href: "/imaging", active: pathname === "/imaging" },
    { icon: Heart, label: "Vital Signs", href: "/vitals", active: pathname === "/vitals" },
    { icon: MessageSquare, label: "Communication", href: "/messages", active: pathname === "/messages" },
  ]

  const vitals: VitalSign[] = [
    {
      label: "Heart Rate",
      value: "72",
      unit: "bpm",
      status: "normal",
      icon: <Heart className="h-4 w-4" />,
    },
    {
      label: "Blood Pressure",
      value: "120/80",
      unit: "mmHg",
      status: "normal",
      icon: <TrendingUp className="h-4 w-4" />,
    },
    {
      label: "Temperature",
      value: "98.6",
      unit: "°F",
      status: "normal",
      icon: <AlertCircle className="h-4 w-4" />,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "critical":
        return "text-red-500 bg-red-50"
      case "warning":
        return "text-yellow-600 bg-yellow-50"
      default:
        return "text-green-600 bg-green-50"
    }
  }

  return (
    <div
      className={`transition-all duration-300 flex flex-col ${isOpen ? "w-64" : "w-20"} border-r border-gray-700`}
      style={{ backgroundColor: "#2c3e50", color: "white" }}
    >
      {/* Header */}
      <div className="p-4 border-b border-gray-700 flex items-center justify-between">
        {isOpen && <h1 className="text-lg font-bold">MedVault+</h1>}
        <Button variant="ghost" size="icon" onClick={onToggle} className="text-white hover:bg-gray-700">
          <ChevronLeft className="h-5 w-5" />
        </Button>
      </div>

      {/* Patient Info */}
      {isOpen && (
        <div className="p-4 border-b border-gray-700">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600" />
            <div>
              <p className="font-semibold text-sm">Prescott MacCaffery</p>
              <p className="text-xs text-gray-300">Patient ID: E8DB</p>
            </div>
          </div>

          <div className="space-y-3">
            {vitals.map((vital, idx) => (
              <div
                key={idx}
                className={`p-3 rounded-lg border border-gray-600 transition-all hover:border-[#00BFA5] ${getStatusColor(
                  vital.status,
                )}`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-medium text-gray-300">{vital.label}</span>
                  <div className="flex items-center gap-1">{vital.icon}</div>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="font-bold text-sm">{vital.value}</span>
                  <span className="text-xs text-gray-400">{vital.unit}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Special History */}
          <div className="mt-4 pt-4 border-t border-gray-700 space-y-2 text-xs">
            <p className="text-gray-300">Special History:</p>
            <p className="text-gray-400">Alcohol, Tobacco</p>
            <p className="text-gray-300 mt-2">Current:</p>
            <p className="text-gray-400">10-hour plan</p>
            <p className="text-gray-300 mt-2">Allergies:</p>
            <p className="text-gray-400">Do not resuscitate</p>
          </div>
        </div>
      )}

      {/* Navigation Menu */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item, idx) => (
          <Link key={idx} href={item.href}>
            <button
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                item.active ? "bg-[#00BFA5] text-white" : "text-gray-300 hover:bg-gray-700"
              }`}
            >
              <item.icon className="h-5 w-5" />
              {isOpen && <span className="text-sm">{item.label}</span>}
            </button>
          </Link>
        ))}
      </nav>
    </div>
  )
}
