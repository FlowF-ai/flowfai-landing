import { CheckCircle } from 'lucide-react'

export interface TimelineItemProps {
  quarter: string
  title: string
  items: string[]
  isLeft: boolean
}

function TimelineItem({ quarter, title, items, isLeft }: TimelineItemProps) {
  return (
    <div className={`flex ${isLeft ? 'flex-row' : 'flex-row-reverse'} items-center w-full mb-8`}>
      <div className={`w-5/12 ${isLeft ? 'text-right pr-8' : 'text-left pl-8'}`}>
        <h3 className="text-2xl font-semibold mb-2 gradient-text">{quarter}</h3>
        <h4 className="text-xl font-medium mb-4 gradient-text">{title}</h4>
      </div>
      <div className="w-2/12 flex justify-center">
        <div className="w-1 bg-primary h-full relative">
          <div className="absolute  w-6 h-6 rounded-full bg-purple-600 -left-2.5 top-1/2 transform -translate-y-1/2" />
        </div>
      </div>
      <div className={`w-5/12 ${isLeft ? 'text-left pl-8' : 'text-right pr-8'}`}>
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="gradient-text mr-2 mt-1 flex-shrink-0" />
              <span className='gradient-text'>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export interface TimelineProps {
  items: Array<Omit<TimelineItemProps, 'isLeft'>>
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {items.map((item, index) => (
        <TimelineItem key={index} {...item} isLeft={index % 2 === 0} />
      ))}
    </div>
  )
}

