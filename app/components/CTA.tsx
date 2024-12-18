import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { getImagePath } from '@/lib/utils'

export default function CTA() {
  return (
    <section id="cta" className="py-20  gradient-text">
      <div className="container  mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
          <h2 className="text-3xl font-bold mb-6 gradient-text">Ready to Revolutionize Blockchain?</h2>
          <p className="text-xl mb-8 gradient-text">
            Join FlowFai today and be part of the future of decentralized applications.
          </p>
          <Button  size="lg" variant='ghost'>Get Started Now</Button>
        </div>
        <div className="lg:w-1/2 lg:pl-12">
          <Image
            src={getImagePath('/prefoot.webp')}
            alt="Join FlowFai"
            width={400}
            height={300}    
            className="rounded-lg shadow-lg mx-auto"
          />
        </div>
      </div>
    </section>
  )
}

