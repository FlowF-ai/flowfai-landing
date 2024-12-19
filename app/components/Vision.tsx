import { getImagePath } from '@/lib/utils'
import ImageWithFallback from './ImageWithFallback'

export default function Vision() {
  return (
    <section className="py-12 ">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 flex items-center justify-center mb-10 lg:mb-0">
            <ImageWithFallback
              src={getImagePath('/vision.webp')}
              alt="FlowFai Vision"
              width={400}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-12 space-y-6">
            <div className="h-[60px] flex items-center">
              <h2 className="text-2xl lg:text-3xl font-bold gradient-text">
                Our Vision
              </h2>
            </div>
            <div className="h-[200px] flex items-center">
              <p className="text-lg lg:text-xl gradient-text">
                FlowFai aims to revolutionize how decentralized applications are built, executed, and monetized. 
                By merging low-code development, AI integration, and decentralized execution, FlowFai empowers users 
                to create innovative solutions that drive blockchain adoption and foster an inclusive ecosystem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

