import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Building2, 
  MapPin, 
  Phone, 
  Globe, 
  Stethoscope,
  GraduationCap,
  Car,
  Utensils,
  Wifi,
  Zap,
  Quote
} from 'lucide-react'

const Community = () => {
  const businessCategories = [
    {
      title: 'Healthcare Providers',
      icon: <Stethoscope className="w-6 h-6 text-primary" />,
      description: 'Medical facilities and healthcare services in the Upper Cumberland region'
    },
    {
      title: 'Educational Institutions',
      icon: <GraduationCap className="w-6 h-6 text-primary" />,
      description: 'Schools, colleges, and educational resources'
    },
    {
      title: 'Transportation Services',
      icon: <Car className="w-6 h-6 text-primary" />,
      description: 'Local transportation and logistics providers'
    },
    {
      title: 'Dining & Hospitality',
      icon: <Utensils className="w-6 h-6 text-primary" />,
      description: 'Restaurants, cafes, and hospitality services'
    },
    {
      title: 'Communications',
      icon: <Wifi className="w-6 h-6 text-primary" />,
      description: 'Internet, phone, and communication service providers'
    },
    {
      title: 'Utilities & Services',
      icon: <Zap className="w-6 h-6 text-primary" />,
      description: 'Essential utilities and municipal services'
    }
  ]

  const philosophicalInsights = [
    {
      quote: "Even the most different people are only about 3% genetically distinct from one another.",
      author: "Will Tritt, Founder & Executive Director",
      context: "A foundation for understanding shared humanity and underlying unity among all individuals."
    },
    {
      quote: "Collective consciousness serves as our source and supply, providing for all needs through community wisdom.",
      author: "TGLFF Core Beliefs",
      context: "Our approach to decision-making and resource sharing within the community."
    },
    {
      quote: "We trust that harmonious coexistence with each other and the earth creates positive transformation.",
      author: "TGLFF Mission Statement",
      context: "The philosophical foundation of our environmental and community stewardship."
    }
  ]

  return (
    <section id="community" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Community Engagement
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            TGLFF is deeply committed to regional development and community support, 
            fostering connections that strengthen the entire Upper Cumberland region.
          </p>
        </div>

        {/* Upper Cumberland Business Directory */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Upper Cumberland Business Directory
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Supporting local businesses, vendors, and residents through comprehensive listings 
              that strengthen our regional economy and community connections.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {businessCategories.map((category, index) => (
              <Card key={index} className="border-border hover:shadow-md transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-2">
                    {category.icon}
                    <CardTitle className="text-lg text-foreground">{category.title}</CardTitle>
                  </div>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    View Listings
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-card rounded-lg p-8 shadow-sm">
            <h4 className="text-xl font-semibold text-foreground mb-4 text-center">
              Directory Mission
            </h4>
            <p className="text-muted-foreground text-center leading-relaxed mb-6">
              Our business directory serves as both a practical resource and an expression of community care. 
              By supporting local businesses, we contribute to regional resilience and sustainability while 
              demonstrating our commitment to collective consciousness elevation through tangible community benefit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Submit Your Business
              </Button>
              <Button variant="outline">
                Browse Full Directory
              </Button>
            </div>
          </div>
        </div>

        {/* Pie in the Sky Trail */}
        <div className="mb-16">
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground text-center">
                Pie in the Sky Trail in Middle Tennessee
              </CardTitle>
              <p className="text-muted-foreground text-center leading-relaxed">
                An example of TGLFF's commitment to regional development and community connection, 
                demonstrating our broader vision for collaborative community development.
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4">Regional Impact</h4>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    This initiative represents our commitment to working with existing community organizations 
                    and supporting broader regional development goals that align with our mission of 
                    consciousness elevation and positive transformation.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Through collaborative partnerships, we demonstrate how local and regional engagement 
                    supports our broader goals for community development and environmental stewardship.
                  </p>
                </div>
                <div className="bg-muted/50 rounded-lg p-6">
                  <h5 className="font-semibold text-foreground mb-3">Partnership Benefits</h5>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Enhanced regional connectivity</li>
                    <li>• Collaborative resource sharing</li>
                    <li>• Expanded community impact</li>
                    <li>• Sustainable development practices</li>
                    <li>• Cultural preservation efforts</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Philosophical Insights */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Community Wisdom & Philosophical Insights
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Guiding principles and insights that shape our approach to community development 
              and collective consciousness elevation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {philosophicalInsights.map((insight, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6">
                  <Quote className="w-8 h-8 text-primary mb-4" />
                  <blockquote className="text-foreground font-medium mb-4 leading-relaxed">
                    "{insight.quote}"
                  </blockquote>
                  <div className="border-t border-border pt-4">
                    <p className="text-sm font-semibold text-foreground mb-1">
                      — {insight.author}
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {insight.context}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Friends of Lake Waldensia Partnership */}
        <div className="bg-card rounded-lg p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Friends of Lake Waldensia Partnership
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Our partnership with "Friends of Lake Waldensia" enhances our ability to serve 
                diverse community needs and support various programs and initiatives. This 
                collaboration demonstrates our commitment to working with existing organizations 
                to maximize positive impact.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Through this partnership structure, we leverage different strengths and resources 
                to create a model for collaborative community development that benefits the entire 
                Upper Cumberland region.
              </p>
              <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                Learn About Partnership Opportunities
              </Button>
            </div>
            <div className="bg-muted/50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-foreground mb-4">Partnership Benefits</h4>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <Building2 className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Enhanced Program Capacity</p>
                    <p className="text-sm text-muted-foreground">Expanded ability to serve diverse community needs</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Globe className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Broader Regional Impact</p>
                    <p className="text-sm text-muted-foreground">Increased reach and community engagement</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Local Resource Integration</p>
                    <p className="text-sm text-muted-foreground">Better utilization of community assets and knowledge</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Community Engagement Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Join Our Regional Community Network
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Whether you're a local business, community organization, or individual interested in 
            regional development, we invite you to connect with our growing network of partners 
            and collaborators.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Partner With Us
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-accent text-accent-foreground">
              Explore Collaboration Opportunities
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Community

