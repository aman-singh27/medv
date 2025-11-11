"use client"

import type React from "react"

import { useState } from "react"
import { Heart, Bug as Lung, Brain, Zap } from "lucide-react"

interface BodySystem {
  id: string
  name: string
  icon: React.ReactNode
  color: string
  bgColor: string
  description: string
  status: "normal" | "warning" | "critical"
}

export function AnatomicalModel() {
  const [selectedSystem, setSelectedSystem] = useState<string>("circulatory")

  const systems: BodySystem[] = [
    {
      id: "circulatory",
      name: "Circulatory",
      icon: <Heart className="h-6 w-6" />,
      color: "text-red-600",
      bgColor: "bg-red-100",
      description: "Heart rate: 72 bpm, BP: 120/80 mmHg",
      status: "normal",
    },
    {
      id: "respiratory",
      name: "Respiratory",
      icon: <Lung className="h-6 w-6" />,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      description: "Oxygen saturation: 98%, RR: 16",
      status: "normal",
    },
    {
      id: "nervous",
      name: "Nervous",
      icon: <Brain className="h-6 w-6" />,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      description: "Neurological exam: Normal",
      status: "normal",
    },
    {
      id: "endocrine",
      name: "Endocrine",
      icon: <Zap className="h-6 w-6" />,
      color: "text-yellow-600",
      bgColor: "bg-yellow-100",
      description: "Glucose: 110 mg/dL",
      status: "warning",
    },
  ]

  const selectedData = systems.find((s) => s.id === selectedSystem)

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "critical":
        return "bg-red-500 text-white"
      case "warning":
        return "bg-yellow-500 text-white"
      default:
        return "bg-green-500 text-white"
    }
  }

  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200 flex flex-col items-center justify-center h-full gap-6">
      {/* Main visualization area */}
      <div className="w-full max-w-xs">
        <div
          className={`aspect-square ${selectedData?.bgColor} rounded-lg flex items-center justify-center border-2 ${selectedData?.color} border-opacity-30 transition-all`}
        >
          <div className="text-center">
            <div className={`flex justify-center mb-4 ${selectedData?.color}`}>{selectedData?.icon}</div>
            <p className="text-sm font-semibold text-gray-800">{selectedData?.name} System</p>
            <p className="text-xs text-gray-600 mt-2">{selectedData?.description}</p>
            <div
              className={`mt-3 inline-block px-3 py-1 rounded-full text-xs font-semibold ${getStatusBadge(selectedData?.status || "normal")}`}
            >
              {selectedData?.status === "normal"
                ? "Normal"
                : selectedData?.status === "warning"
                  ? "Warning"
                  : "Critical"}
            </div>
          </div>
        </div>
      </div>

      {/* System selector buttons */}
      <div className="grid grid-cols-2 gap-2 w-full">
        {systems.map((system) => (
          <button
            key={system.id}
            onClick={() => setSelectedSystem(system.id)}
            className={`p-3 rounded-lg border-2 transition-all ${
              selectedSystem === system.id
                ? `${system.bgColor} ${system.color} border-current`
                : "bg-gray-50 border-gray-200 text-gray-600 hover:border-gray-300"
            }`}
          >
            <div className="flex flex-col items-center gap-1">
              <div>{system.icon}</div>
              <p className="text-xs font-semibold">{system.name}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
