import Image from 'next/image'
import { getImagePath } from '@/lib/utils'

export default function Vision() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <Image
              src={getImagePath('/vision.webp')}
              alt="FlowFai Vision"
              width={400}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-12">
            <h2 className="text-3xl font-bold mb-6 gradient-text">Our Vision</h2>
            <p className="text-xl gradient-text">
              FlowFai aims to revolutionize how decentralized applications are built, executed, and monetized. 
              By merging low-code development, AI integration, and decentralized execution, FlowFai empowers users 
              to create innovative solutions that drive blockchain adoption and foster an inclusive ecosystem.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

