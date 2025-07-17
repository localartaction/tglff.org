import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  TreePine, 
  Heart, 
  Globe, 
  Leaf, 
  MapPin, 
  CreditCard,
  Smartphone,
  DollarSign,
  Target,
  Users,
  Calendar
} from 'lucide-react'

const TrailOfTrees = () => {
  const nativeTrees = [
    {
      name: 'Red Cedar',
      significance: 'Sacred to many Native American tribes, excellent for wildlife habitat',
      benefits: ['Carbon sequestration', 'Erosion control', 'Wildlife shelter', 'Cultural significance']
    },
    {
      name: 'White Oak',
      significance: 'Symbol of strength and endurance, crucial for ecosystem health',
      benefits: ['Long-term carbon storage', 'Acorn production for wildlife', 'Soil stabilization', 'Historical importance']
    },
    {
      name: 'Dogwood',
      significance: 'Beautiful flowering tree with deep cultural connections',
      benefits: ['Pollinator support', 'Understory habitat', 'Seasonal beauty', 'Traditional medicine']
    },
    {
      name: 'Persimmon',
      significance: 'Traditional food source with ecological and cultural value',
      benefits: ['Wildlife food source', 'Soil improvement', 'Cultural heritage', 'Biodiversity support']
    }
  ]

  const donationLevels = [
    {
      amount: '$25',
      impact: 'Plants 1 native tree sapling',
      description: 'Begin your contribution to healing and remembrance'
    },
    {
      amount: '$100',
      impact: 'Plants 4 trees along historical paths',
      description: 'Create a meaningful grove of remembrance'
    },
    {
      amount: '$250',
      impact: 'Sponsors a memorial grove section',
      description: 'Establish a dedicated area for reflection and healing'
    },
    {
      amount: '$500',
      impact: 'Funds habitat restoration project',
      description: 'Support comprehensive ecosystem restoration'
    },
    {
      amount: '$1,000',
      impact: 'Sponsors educational signage and interpretation',
      description: 'Help visitors understand the historical and ecological significance'
    }
  ]

  const paymentMethods = [
    { name: 'Credit Cards', icon: <CreditCard className="w-5 h-5" />, description: 'Visa, MasterCard, American Express' },
    { name: 'Venmo', icon: <Smartphone className="w-5 h-5" />, description: '@tglff-donations' },
    { name: 'PayPal', icon: <Globe className="w-5 h-5" />, description: 'Secure online payments' },
    { name: 'CashApp', icon: <DollarSign className="w-5 h-5" />, description: '$TGLFFDonations' }
  ]

  return (
    <section id="trail-of-trees" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <TreePine className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">Trail of Trees Initiative</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Rooted in Remembrance
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            The Trail of Trees honors those who walked the Trail of Tears by planting a living legacy 
            across the lands they once crossed, beginning in Ozone, Tennessee, at The Grateful Life Family Foundation.
          </p>
          <div className="bg-card rounded-lg p-8 shadow-sm max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Every tree tells a story. Every step revives a memory. Every donation plants a future.
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Our saplings serve as symbols of healing, unity, and life, turning pain into purpose through 
              cultural remembrance and climate regeneration.
            </p>
          </div>
        </div>

        {/* Three-Fold Purpose */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">
            Our Three-Fold Purpose
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-border text-center">
              <CardHeader>
                <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl text-foreground">Turning Pain into Purpose</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Transforming historical trauma into positive action that honors the past 
                  while creating hope for the future through meaningful environmental restoration.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border text-center">
              <CardHeader>
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl text-foreground">Cultural Remembrance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Honoring the memory and legacy of those who suffered during the Trail of Tears 
                  through respectful commemoration and educational awareness.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border text-center">
              <CardHeader>
                <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl text-foreground">Climate Regeneration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Supporting carbon offset, habitat restoration, and public healing through 
                  strategic native tree planting along historically accurate migration paths.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Native Trees Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">
            Native Trees: Ecological & Historical Significance
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {nativeTrees.map((tree, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <Leaf className="w-6 h-6 text-primary" />
                    <CardTitle className="text-lg text-foreground">{tree.name}</CardTitle>
                  </div>
                  <p className="text-sm text-muted-foreground">{tree.significance}</p>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-foreground mb-3">Environmental Benefits</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {tree.benefits.map((benefit, benefitIndex) => (
                      <Badge key={benefitIndex} variant="secondary" className="text-xs">
                        {benefit}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Donation Levels */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">
            Make Your Impact
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {donationLevels.map((level, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{level.amount}</div>
                  <CardTitle className="text-lg text-foreground">{level.impact}</CardTitle>
                  <p className="text-sm text-muted-foreground">{level.description}</p>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Donate {level.amount}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Multiple Ways to Donate
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {paymentMethods.map((method, index) => (
              <Card key={index} className="border-border text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-3">
                    {method.icon}
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{method.name}</h4>
                  <p className="text-sm text-muted-foreground">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Historical Context */}
        <div className="bg-muted/30 rounded-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Historical Context & Respectful Commemoration
          </h3>
          <div className="max-w-4xl mx-auto">
            <p className="text-muted-foreground mb-6 leading-relaxed">
              The Trail of Tears represents one of the most tragic chapters in American history, 
              when thousands of Native Americans were forcibly removed from their ancestral lands. 
              Our initiative honors this history with deep respect and cultural sensitivity.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We plant native trees along historically accurate migration paths, creating living 
              memorials that serve multiple purposes: honoring those who suffered, educating future 
              generations, and healing the land through environmental restoration.
            </p>
            <div className="bg-card rounded-lg p-6">
              <h4 className="text-lg font-semibold text-foreground mb-4 text-center">
                Our Commitment to Respectful Remembrance
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Honoring the gravity and tragedy of historical events</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Avoiding appropriation or oversimplification of complex cultural issues</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Focusing on healing, remembrance, and positive transformation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Supporting education and awareness about historical truth</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Plant a Tree, Plant Hope
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Join us in creating a living legacy that honors the past, heals the present, 
            and nurtures hope for future generations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3">
              <TreePine className="mr-2 w-5 h-5" />
              Donate Now
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-primary text-primary px-8 py-3">
              Learn More About the Initiative
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            All donations are tax-deductible. TGLFF is a registered 501(c)(3) nonprofit organization.
          </p>
        </div>
      </div>
    </section>
  )
}

export default TrailOfTrees

