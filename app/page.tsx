"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { DiagnosisTimeline } from "@/components/diagnosis-timeline"
import { AnatomicalModel } from ".//components/anatomical-model"
import { DocumentsGrid } from "./components/documents-grid"
import { TopNav } from "./components/top-nav"

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <TopNav onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

        {/* Content Area */}
        <div className="flex-1 overflow-auto bg-gray-50">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 auto-rows-max lg:auto-rows-fr">
            {/* Left: Timeline */}
            <div className="lg:col-span-1 min-h-96">
              <DiagnosisTimeline />
            </div>

            {/* Center: Anatomical Model */}
            <div className="lg:col-span-1 min-h-96 flex items-center justify-center">
              <AnatomicalModel />
            </div>

            {/* Right: Documents */}
            <div className="lg:col-span-1 min-h-96">
              <DocumentsGrid />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
