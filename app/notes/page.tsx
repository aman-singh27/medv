"use client"

import { Sidebar } from "@/components/sidebar"
import { TopNav } from "@/components/top-nav"
import { useState } from "react"
import { Plus, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotesPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const notes = [
    {
      id: 1,
      title: "Follow-up on Hypertension",
      date: "2025-10-28",
      preview: "Patient responding well to medication adjustment...",
      category: "Clinical",
    },
    {
      id: 2,
      title: "Lab Results Review",
      date: "2025-10-25",
      preview: "All values within normal range except glucose...",
      category: "Lab",
    },
    {
      id: 3,
      title: "Patient Education Session",
      date: "2025-10-20",
      preview: "Discussed dietary changes and exercise routine...",
      category: "Education",
    },
  ]

  return (
    <div className="flex h-screen bg-background">
      <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <TopNav onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

        <div className="flex-1 overflow-auto bg-gray-50 p-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-3xl font-bold text-foreground">Clinical Notes</h1>
              <Button className="bg-[#00BFA5] hover:bg-[#00897b] text-white">
                <Plus className="h-4 w-4 mr-2" />
                New Note
              </Button>
            </div>

            <div className="bg-white rounded-lg p-4 mb-6 border border-gray-200">
              <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2">
                <Search className="h-4 w-4 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search notes..."
                  className="bg-transparent outline-none text-sm flex-1"
                />
              </div>
            </div>
            <div className="space-y-4">
              {notes.map((note) => (
                <div
                  key={note.id}
                  className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md transition-all cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-foreground">{note.title}</h3>
                    <span className="text-xs bg-[#00BFA5] text-white px-2 py-1 rounded-full">{note.category}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{note.preview}</p>
                  <p className="text-xs text-gray-500">{note.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
