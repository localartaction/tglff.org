import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Users, 
  Heart, 
  Tent, 
  Home, 
  Hammer, 
  Calendar,
  DollarSign,
  Clock,
  MapPin,
  Utensils,
  Wifi,
  Bath
} from 'lucide-react'

const Programs = () => {
  const programs = [
    {
      id: 'guest',
      title: 'Guest Program',
      subtitle: 'Your Gateway to Community',
      icon: <Users className="w-8 h-8 text-primary" />,
      description: 'An accessible entry point into TGLFF\'s community and mission, welcoming guests as extended family.',
      price: '$11 initial contribution',
      duration: 'Day visits to extended stays',
      features: [
        'Membership to Friends of Lake Waldensia & TGLFF',
        'Access to 372-acre property for hiking',
        'Lakeshore and creek exploration',
        'Catch and release sport fishing ($10/day equipment)',
        'Kayak/canoe rental ($15/3 hours)',
        'Community kitchen and bathroom access'
      ],
      accommodations: [
        {
          name: 'Clarity Vista Apartment',
          price: '$555/night',
          capacity: 'Up to 5 people',
          features: ['Reservation only', 'Private space', 'Full amenities']
        },
        {
          name: 'Zen Space Den',
          price: '$55/night per bed',
          capacity: 'Shared space',
          features: ['Communal food included', 'Bathroom/shower facilities', 'Community atmosphere']
        },
        {
          name: 'Primitive Camping',
          price: '$22/night donation',
          capacity: 'Individual/family',
          features: ['Community kitchen access', 'Bathroom/shower access', 'Nature immersion']
        }
      ],
      requirements: [
        'Valid government-issued identification',
        'Signed hold harmless agreement for overnight stays'
      ]
    },
    {
      id: 'volunteer',
      title: 'Volunteer Program',
      subtitle: 'Develop Consciousness & Skills',
      icon: <Heart className="w-8 h-8 text-primary" />,
      description: 'A path to personal development and community contribution through meaningful service and learning.',
      price: 'Service-based',
      duration: 'Flexible commitment',
      features: [
        '24/7 support structure for growth',
        'Group classes in Art, Music, Yoga',
        'Quantum energy work & breath work',
        'Homeopathy & wilderness survival',
        'Building construction projects',
        'Water systems & power generation',
        'Agriculture & livestock care',
        'Greenhouse & micro-green production'
      ],
      dailyRhythm: [
        'Breakfast & community gathering',
        'Mindfulness/quantum gathering',
        'Daily devotional service',
        'Self-serve lunch',
        'Afternoon devotional service',
        'Dinner & community time'
      ],
      projects: [
        'Building construction',
        'Water & power systems',
        'Foraging & agriculture',
        'Livestock care',
        'Housekeeping',
        'Food preservation',
        'Administrative tasks'
      ]
    },
    {
      id: 'resident-partner',
      title: 'Resident Partner Program',
      subtitle: 'Higher Involvement & Responsibility',
      icon: <Home className="w-8 h-8 text-primary" />,
      description: 'For individuals demonstrating moral alignment with the "rise of the New Earth" seeking deeper community engagement.',
      price: 'Annual membership + 30% workshop income',
      duration: 'Long-term commitment',
      features: [
        'Host up to 6 annual workshop weeks',
        'Choose permanent campsites in themed areas',
        'Freedom to improve campsites',
        'Maintenance responsibility for area',
        'Progression toward 1% Partner status',
        'Personal space development opportunities'
      ],
      responsibilities: [
        'Workshop hosting and facilitation',
        'Campsite maintenance and improvement',
        'Community leadership and guidance',
        'Environmental stewardship'
      ]
    },
    {
      id: 'one-percent-partner',
      title: '1% Partner Program',
      subtitle: 'Forever Community for Wise Wizards',
      icon: <Hammer className="w-8 h-8 text-primary" />,
      description: 'Designed for "wise wizards" grounded in the "universal cause" seeking a forever community.',
      price: '$20,000 investment',
      duration: 'Permanent partnership',
      features: [
        'Become Camp Host in themed area',
        'Create lasting impact on history',
        'Historical site restoration',
        'Teaching based on chosen paths',
        'Assist nomads in finding direction',
        'Guardian of historical sites',
        'Bi-annual maintenance responsibilities'
      ],
      benefits: [
        'Permanent residency rights',
        'Leadership role in community',
        'Historical site guardianship',
        'Access to 900,000+ acres of adjacent public lands',
        'Legacy creation opportunities'
      ]
    }
  ]

  const alternativePrograms = [
    {
      title: 'Sweat Equity Association Program',
      description: 'Earn your way to 1% Partner status through dedicated service',
      requirements: [
        'Successfully complete "Trial of Fire" (8 weeks as volunteer and resident program host)',
        'Demonstrate selflessness and wisdom',
        '990 hours of service at $20/hour rate on communal projects',
        'Complete within one year (extensions possible)',
        'Limited to 12 participants'
      ],
      outcome: 'Permanent residency and guardianship of one acre'
    },
    {
      title: 'Annual Camping and Day Use Membership',
      description: 'Flexible access for individuals and families',
      price: '$222 yearly (tax-deductible)',
      benefits: [
        'Full-time day use access',
        '10% discounts on camping, events, workshops, and seminars',
        'Priority reservations for specific campsites',
        'Group camping area access'
      ]
    }
  ]

  return (
    <section id="programs" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Programs & Membership
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover diverse pathways for engagement, from day visits to permanent community membership. 
            Each program offers unique opportunities for growth, service, and connection.
          </p>
        </div>

        {/* Main Programs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {programs.map((program) => (
            <Card key={program.id} className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  {program.icon}
                  <div>
                    <CardTitle className="text-xl text-foreground">{program.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{program.subtitle}</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">{program.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary" className="flex items-center space-x-1">
                    <DollarSign className="w-3 h-3" />
                    <span>{program.price}</span>
                  </Badge>
                  <Badge variant="outline" className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{program.duration}</span>
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {program.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Accommodations for Guest Program */}
                {program.accommodations && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Accommodation Options</h4>
                    <div className="space-y-3">
                      {program.accommodations.map((acc, index) => (
                        <div key={index} className="bg-muted/50 rounded-lg p-3">
                          <div className="flex justify-between items-start mb-2">
                            <h5 className="font-medium text-foreground">{acc.name}</h5>
                            <Badge variant="outline">{acc.price}</Badge>
                          </div>
                          <p className="text-xs text-muted-foreground mb-2">{acc.capacity}</p>
                          <div className="flex flex-wrap gap-1">
                            {acc.features.map((feature, fIndex) => (
                              <Badge key={fIndex} variant="secondary" className="text-xs">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Daily Rhythm for Volunteer Program */}
                {program.dailyRhythm && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Daily Rhythm</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {program.dailyRhythm.map((activity, index) => (
                        <div key={index} className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Calendar className="w-3 h-3 text-primary" />
                          <span>{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Requirements */}
                {program.requirements && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Requirements</h4>
                    <ul className="space-y-1">
                      {program.requirements.map((req, index) => (
                        <li key={index} className="flex items-start space-x-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Learn More About {program.title}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Alternative Programs */}
        <div className="bg-muted/30 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Alternative Pathways
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {alternativePrograms.map((program, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">{program.title}</CardTitle>
                  <p className="text-muted-foreground">{program.description}</p>
                  {program.price && (
                    <Badge variant="secondary" className="w-fit">
                      {program.price}
                    </Badge>
                  )}
                </CardHeader>
                <CardContent>
                  {program.requirements && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-foreground mb-3">Requirements</h4>
                      <ul className="space-y-2">
                        {program.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start space-x-2 text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {program.benefits && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-foreground mb-3">Benefits</h4>
                      <ul className="space-y-2">
                        {program.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start space-x-2 text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {program.outcome && (
                    <div className="bg-primary/10 rounded-lg p-3 mt-4">
                      <p className="text-sm font-medium text-foreground">Outcome: {program.outcome}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Begin Your Journey?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you're seeking a day of tranquility or a lifetime of community engagement, 
            we have a pathway that's right for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Contact Us Today
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-accent text-accent-foreground">
              Schedule a Visit
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Programs

