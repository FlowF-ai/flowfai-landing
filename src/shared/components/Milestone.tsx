import { CheckCircle } from 'lucide-react'
import React from 'react'

export interface MilestoneProps {
  quarter: string
  title: string
  items: string[]
}

export function Milestone({ quarter, title, items }: MilestoneProps) {
  return (
    <div className="bg-background p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-semibold mb-2 text-primary">{quarter}</h3>
      <h4 className="text-xl font-medium mb-4 gradient-text">{title}</h4>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle className="text-primary mr-2 mt-1 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

