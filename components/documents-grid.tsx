"use client"

import type React from "react"

import { FileText, Activity, Zap, Brain, Download, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface Document {
  id: string
  title: string
  date: string
  type: string
  icon: React.ReactNode
  color: string
  physician: string
  category: "neurology" | "cardiology" | "lab" | "general"
}

export function DocumentsGrid() {
  const [selectedDoc, setSelectedDoc] = useState<string | null>(null)
  const [filterCategory, setFilterCategory] = useState<string>("all")

  const documents: Document[] = [
    {
      id: "1",
      title: "Visit Neurology",
      date: "16:31",
      type: "Neurology",
      icon: <Brain className="h-6 w-6" />,
      color: "bg-green-50 border-green-200",
      physician: "Dr. Peterson",
      category: "neurology",
    },
    {
      id: "2",
      title: "Abdomen",
      date: "8:31",
      type: "Abdomen",
      icon: <Activity className="h-6 w-6" />,
      color: "bg-yellow-50 border-yellow-200",
      physician: "Dr. Anderson",
      category: "general",
    },
    {
      id: "3",
      title: "ECG",
      date: "17:31",
      type: "Cardiology",
      icon: <Zap className="h-6 w-6" />,
      color: "bg-orange-50 border-orange-200",
      physician: "Dr. Johnson",
      category: "cardiology",
    },
    {
      id: "4",
      title: "Hospitalization: Cardiology",
      date: "2:03",
      type: "Cardiology",
      icon: <Activity className="h-6 w-6" />,
      color: "bg-red-50 border-red-200",
      physician: "Dr. Garcia",
      category: "cardiology",
    },
    {
      id: "5",
      title: "Prothrombin Time",
      date: "04:32",
      type: "Lab",
      icon: <FileText className="h-6 w-6" />,
      color: "bg-blue-50 border-blue-200",
      physician: "Dr. Peterson",
      category: "lab",
    },
    {
      id: "6",
      title: "Office Visit: Cardiology",
      date: "8:32",
      type: "Cardiology",
      icon: <Activity className="h-6 w-6" />,
      color: "bg-green-50 border-green-200",
      physician: "Dr. Anderson",
      category: "cardiology",
    },
  ]

  const filteredDocs = filterCategory === "all" ? documents : documents.filter((doc) => doc.category === filterCategory)

  const categories = [
    { id: "all", label: "All Documents" },
    { id: "neurology", label: "Neurology" },
    { id: "cardiology", label: "Cardiology" },
    { id: "lab", label: "Lab" },
    { id: "general", label: "General" },
  ]

  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200 h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-foreground">Documents</h2>
        <div className="text-xs text-gray-500">{filteredDocs.length} documents</div>
      </div>

      {/* Category filters */}
      <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setFilterCategory(cat.id)}
            className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
              filterCategory === cat.id ? "bg-[#00BFA5] text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Documents grid */}
      <div className="grid grid-cols-1 gap-3 flex-1 overflow-y-auto">
        {filteredDocs.map((doc) => (
          <div
            key={doc.id}
            onClick={() => setSelectedDoc(selectedDoc === doc.id ? null : doc.id)}
            className={`p-4 rounded-lg border-2 cursor-pointer transition-all hover:shadow-md ${doc.color} ${
              selectedDoc === doc.id ? "ring-2 ring-[#00BFA5]" : ""
            }`}
          >
            <div className="flex items-start gap-3">
              <div className="text-[#00BFA5] mt-1">{doc.icon}</div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm text-foreground truncate">{doc.title}</p>
                <p className="text-xs text-gray-600 mt-1">{doc.type}</p>
                <p className="text-xs text-gray-500 mt-1">👤 {doc.physician}</p>
              </div>
              <div className="text-xs font-semibold text-gray-600 whitespace-nowrap">{doc.date}</div>
            </div>

            {/* Expanded details */}
            {selectedDoc === doc.id && (
              <div className="mt-4 pt-4 border-t-2 border-current border-opacity-20 flex gap-2">
                <Button size="sm" variant="outline" className="flex-1 text-xs bg-transparent">
                  <Eye className="h-3 w-3 mr-1" />
                  View
                </Button>
                <Button size="sm" variant="outline" className="flex-1 text-xs bg-transparent">
                  <Download className="h-3 w-3 mr-1" />
                  Download
                </Button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
