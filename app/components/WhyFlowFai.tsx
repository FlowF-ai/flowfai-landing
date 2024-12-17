/* eslint-disable react/no-unescaped-entities */
import { CheckCircle } from 'lucide-react'
import Image from 'next/image'

const reasons = [
  "New VM for efficient execution",
  "Incentivized node marketplace",
  "Seamless workflow design tools",
  "Ideal destination for developers and enterprises",
  "Contribution to the blockchain ecosystem"
]

export default function WhyFlowFai() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Why FlowFai?</h2>
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <Image
              src="/why.webp"
              alt="Why FlowFai"
              width={400}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-12">
            <p className="text-xl mb-8 gradient-text">
              FlowFai is more than a platform—it's a decentralized economy.
            </p>
            <ul className="space-y-4">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="gradient-text mr-4 flex-shrink-0" />
                  <span className='gradient-text'>{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

