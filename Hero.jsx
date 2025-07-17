import { Button } from '@/components/ui/button'
import { ArrowRight, MapPin } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/hero-background.jpg')`
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Location Badge */}
          <div className="inline-flex items-center space-x-2 bg-background/90 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Lake Waldensia, Ozone, Tennessee</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Changing the world,{' '}
            <span className="text-accent">one mind at a time</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed">
            Helping humans be better people through collective consciousness elevation 
            and community wisdom at our 372-acre sanctuary in the Upper Cumberland region.
          </p>

          {/* Mission Statement */}
          <div className="bg-background/95 backdrop-blur-sm rounded-lg p-6 mb-8 max-w-3xl mx-auto">
            <p className="text-lg text-foreground leading-relaxed">
              The Grateful Life Family Foundation serves as both a physical sanctuary and a philosophical center 
              for collective consciousness elevation, fostering community wisdom while radiating positive energy 
              outward to the broader community and world.
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
              Explore Our Programs
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-background/90 hover:bg-background text-foreground border-2 border-accent px-8 py-3"
            >
              Join Our Community
            </Button>
          </div>

          {/* Core Values Preview */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-background/90 backdrop-blur-sm rounded-lg p-4 text-center">
              <h3 className="font-semibold text-foreground mb-2">Collective Consciousness</h3>
              <p className="text-sm text-muted-foreground">
                We believe collective consciousness serves as our source and supply
              </p>
            </div>
            <div className="bg-background/90 backdrop-blur-sm rounded-lg p-4 text-center">
              <h3 className="font-semibold text-foreground mb-2">Harmonious Coexistence</h3>
              <p className="text-sm text-muted-foreground">
                Living in harmony with each other and the earth
              </p>
            </div>
            <div className="bg-background/90 backdrop-blur-sm rounded-lg p-4 text-center">
              <h3 className="font-semibold text-foreground mb-2">Community Wisdom</h3>
              <p className="text-sm text-muted-foreground">
                Gathering collective insights for aligned decision-making
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero

