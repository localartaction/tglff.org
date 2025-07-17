import { Card, CardContent } from '@/components/ui/card'
import { Heart, Users, Leaf, Mountain } from 'lucide-react'

const About = () => {
  const coreBeliefs = [
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "We are 'One'",
      description: "Our actions affect others, and every person has esteemed value with assumptions of good intentions."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Reconciliation Through Forgiveness",
      description: "We seek reconciliation through forgiveness and address conflict in person, co-creating love and inclusivity."
    },
    {
      icon: <Leaf className="w-8 h-8 text-primary" />,
      title: "Universal Truths",
      description: "All situations and people are part of universal truths, emphasizing proactive sharing of thoughts and feelings."
    },
    {
      icon: <Mountain className="w-8 h-8 text-primary" />,
      title: "Collective Wisdom",
      description: "Leaders gather collective wisdom and make decisions aligned with guiding documents and shared values."
    }
  ]

  const spiritualPrinciples = [
    "Oneness and Interdependence",
    "Recognition of Consciousness Impact",
    "Commitment to Inclusivity",
    "Yielding Ego to Collective Wisdom",
    "Recognition of Consciousness Levels",
    "Embodying Love",
    "Giving Freely",
    "Being Present in the Moment",
    "Serving the Greater Good"
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Statement */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Our Mission & Philosophy
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              To help humans be better people by changing the world, one mind at a time. We achieve this mission 
              through providing tools and methodologies that raise awareness of others' needs and elevate the 
              planet's collective consciousness.
            </p>
            <div className="bg-card rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-4">Our Approach</h3>
              <p className="text-muted-foreground leading-relaxed">
                We combine spiritual development with practical community living, environmental stewardship, 
                and regional engagement. Our approach recognizes that personal transformation and collective 
                consciousness elevation happen through authentic community experiences, meaningful service, 
                and deep connection with the natural world.
              </p>
            </div>
          </div>
        </div>

        {/* Core Beliefs */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">Core Beliefs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreBeliefs.map((belief, index) => (
              <Card key={index} className="border-border hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {belief.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {belief.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {belief.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Spiritual Development Principles */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">
            Nine Spiritual Development Principles
          </h3>
          <div className="max-w-4xl mx-auto">
            <p className="text-muted-foreground text-center mb-8 leading-relaxed">
              These principles guide our daily life, community practices, and personal growth opportunities, 
              helping individuals understand and apply spiritual concepts regardless of their level of development.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {spiritualPrinciples.map((principle, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-lg p-4 text-center border border-border hover:border-primary/50 transition-colors"
                >
                  <span className="text-sm font-medium text-foreground">{principle}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Lake Waldensia Description */}
        <div className="bg-card rounded-lg p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Lake Waldensia: Our Sacred Sanctuary
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Our 372-acre wooded property serves as a nomadic haven and a place for tranquility, adventure, 
                and connection. Located on Millstone Mountain Road in Rockwood, TN, Lake Waldensia provides 
                opportunities for spiritual development, environmental stewardship, and community building.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Visitors can explore local history and culture while engaging with the natural environment. 
                The property features the lake, wooded areas, trails, and facilities that support our mission 
                and provide unique opportunities for personal transformation.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Adjacent to over 900,000 acres of Luper Mountain and Catoosa Wildlife Management areas, 
                our location offers unparalleled access to pristine natural environments for exploration 
                and environmental stewardship activities.
              </p>
            </div>
            <div className="bg-muted/50 rounded-lg p-6 text-center">
              <h4 className="text-lg font-semibold text-foreground mb-4">Property Features</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• 372 acres of wooded sanctuary</li>
                <li>• Private lake for reflection and recreation</li>
                <li>• Multiple hiking trails and nature paths</li>
                <li>• Community gathering spaces</li>
                <li>• Organic gardens and greenhouse facilities</li>
                <li>• Workshop and learning spaces</li>
                <li>• Various accommodation options</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Foundation History */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-6">Our Foundation</h3>
          <div className="max-w-3xl mx-auto bg-card rounded-lg p-8 shadow-sm">
            <p className="text-muted-foreground mb-4 leading-relaxed">
              The Grateful Life Family Foundation operates as a registered Tennessee charity (IRS CODE 501(c)(3)) 
              with IRS ruling year 2020. Founded by Will Tritt, who serves as our executive director and 
              "Evolutionary Agent Homus Nexus," the foundation has grown into a vibrant community dedicated 
              to consciousness elevation and positive transformation.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Through our partnership with "Friends of Lake Waldensia," we enhance our ability to serve 
              diverse community needs and support various programs and initiatives that align with our 
              mission of helping humans be better people.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

