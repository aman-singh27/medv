"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"

interface TimelineEvent {
  year: number
  diagnosis: string
  severity: "mild" | "moderate" | "severe"
  details: string
}

export function DiagnosisTimeline() {
  const [expandedYear, setExpandedYear] = useState<number | null>(2025)

  const events: TimelineEvent[] = [
    {
      year: 2025,
      diagnosis: "Hypertension Management",
      severity: "moderate",
      details: "Ongoing blood pressure monitoring and medication adjustment",
    },
    {
      year: 2024,
      diagnosis: "Type 2 Diabetes",
      severity: "moderate",
      details: "Initial diagnosis with lifestyle modifications",
    },
    {
      year: 2023,
      diagnosis: "Elevated Cholesterol",
      severity: "mild",
      details: "Statin therapy initiated",
    },
    {
      year: 2022,
      diagnosis: "Seasonal Allergies",
      severity: "mild",
      details: "Managed with antihistamines",
    },
    {
      year: 2021,
      diagnosis: "Routine Checkup",
      severity: "mild",
      details: "Annual physical examination - all normal",
    },
  ]

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "severe":
        return "bg-red-50 border-red-200 text-red-700"
      case "moderate":
        return "bg-yellow-50 border-yellow-200 text-yellow-700"
      default:
        return "bg-green-50 border-green-200 text-green-700"
    }
  }

  const getDotColor = (severity: string) => {
    switch (severity) {
      case "severe":
        return "bg-red-500 border-red-500"
      case "moderate":
        return "bg-yellow-500 border-yellow-500"
      default:
        return "bg-[#00BFA5] border-[#00BFA5]"
    }
  }

  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200 h-full flex flex-col">
      <h2 className="text-lg font-semibold mb-6 text-foreground">Diagnosis Timeline</h2>

      <div className="relative flex-1 overflow-y-auto">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300" />

        {/* Timeline items */}
        <div className="space-y-6">
          {events.map((event, idx) => (
            <div key={event.year} className="relative pl-12">
              {/* Dot */}
              <div
                className={`absolute left-0 w-9 h-9 rounded-full border-4 flex items-center justify-center cursor-pointer transition-all ${getDotColor(
                  event.severity,
                )}`}
                onClick={() => setExpandedYear(expandedYear === event.year ? null : event.year)}
              >
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>

              {/* Year and diagnosis */}
              <div
                className={`p-3 rounded-lg border-2 transition-all cursor-pointer ${getSeverityColor(event.severity)}`}
                onClick={() => setExpandedYear(expandedYear === event.year ? null : event.year)}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold opacity-75">{event.year}</p>
                    <p className="font-semibold text-sm">{event.diagnosis}</p>
                  </div>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${expandedYear === event.year ? "rotate-180" : ""}`}
                  />
                </div>

                {/* Expanded details */}
                {expandedYear === event.year && (
                  <div className="mt-3 pt-3 border-t border-current border-opacity-20">
                    <p className="text-xs leading-relaxed">{event.details}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
