import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Car,
  TreePine,
  Mountain,
  Send
} from 'lucide-react'

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: 'Location',
      details: [
        'Lake Waldensia',
        'Millstone Mountain Road',
        'Rockwood, TN 37854',
        'Upper Cumberland Region'
      ]
    },
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: 'Contact',
      details: [
        'Phone: (423) 555-TGLFF',
        'Email: info@tglff.org',
        'Emergency: (423) 555-HELP'
      ]
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: 'Visiting Hours',
      details: [
        'Day Visits: Dawn to Dusk',
        'Office Hours: 9 AM - 5 PM',
        'Overnight Stays: By Reservation',
        'Emergency Contact: 24/7'
      ]
    }
  ]

  const directions = [
    {
      icon: <Car className="w-5 h-5 text-primary" />,
      title: 'From Crossville',
      description: 'Take US-70 West for 15 miles, turn right on Millstone Mountain Road'
    },
    {
      icon: <Car className="w-5 h-5 text-primary" />,
      title: 'From Knoxville',
      description: 'Take I-40 West to Exit 347, follow signs to Rockwood, then Millstone Mountain Road'
    },
    {
      icon: <Mountain className="w-5 h-5 text-primary" />,
      title: 'Nearby Landmarks',
      description: 'Adjacent to Luper Mountain and Catoosa Wildlife Management areas'
    }
  ]

  const inquiryTypes = [
    'General Information',
    'Guest Program Inquiry',
    'Volunteer Application',
    'Partnership Opportunities',
    'Trail of Trees Donation',
    'Business Directory Listing',
    'Media & Press Inquiries',
    'Other'
  ]

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Connect With Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Whether you're planning a visit, seeking information about our programs, or interested in 
            partnership opportunities, we're here to help you begin your journey with TGLFF.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">Get in Touch</h3>
            
            {/* Contact Cards */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">
                          {info.title}
                        </h4>
                        <div className="space-y-1">
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-muted-foreground">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Directions */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-xl text-foreground flex items-center space-x-2">
                  <MapPin className="w-5 h-5" />
                  <span>Directions to Lake Waldensia</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {directions.map((direction, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      {direction.icon}
                      <div>
                        <h5 className="font-medium text-foreground">{direction.title}</h5>
                        <p className="text-sm text-muted-foreground">{direction.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Note:</strong> Lake Waldensia is located on private property. 
                    Please contact us before visiting to ensure proper access and to receive 
                    current directions and any special instructions.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Send Us a Message</CardTitle>
                <p className="text-muted-foreground">
                  We'll respond to your inquiry within 24-48 hours during business days.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      First Name *
                    </label>
                    <Input placeholder="Your first name" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Last Name *
                    </label>
                    <Input placeholder="Your last name" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email Address *
                  </label>
                  <Input type="email" placeholder="your.email@example.com" />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Phone Number
                  </label>
                  <Input type="tel" placeholder="(optional)" />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Inquiry Type
                  </label>
                  <select className="w-full p-2 border border-border rounded-md bg-background text-foreground">
                    {inquiryTypes.map((type, index) => (
                      <option key={index} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Message *
                  </label>
                  <Textarea 
                    placeholder="Please share your questions, interests, or how we can help you connect with TGLFF..."
                    rows={6}
                  />
                </div>

                <div className="bg-muted/50 rounded-lg p-4">
                  <h5 className="font-medium text-foreground mb-2">Before You Visit</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Contact us to schedule your visit and receive current directions</li>
                    <li>• Bring valid government-issued identification</li>
                    <li>• Be prepared to sign a hold harmless agreement for overnight stays</li>
                    <li>• Consider your accommodation preferences and activity interests</li>
                  </ul>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Send className="mr-2 w-4 h-4" />
                  Send Message
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to our privacy policy and consent to being contacted 
                  by TGLFF regarding your inquiry.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-xl text-foreground flex items-center space-x-2">
                <TreePine className="w-5 h-5" />
                <span>Planning Your Visit</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong>First-time visitors:</strong> We recommend starting with a day visit to 
                  experience our community and learn about our programs before considering overnight stays.
                </p>
                <p>
                  <strong>What to bring:</strong> Comfortable walking shoes, weather-appropriate clothing, 
                  water bottle, and an open mind ready for new experiences.
                </p>
                <p>
                  <strong>Accessibility:</strong> Please let us know about any accessibility needs so we 
                  can ensure your visit is comfortable and accommodating.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-xl text-foreground flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>Stay Connected</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Follow our journey and stay updated on community events, program availability, 
                  and Trail of Trees progress.
                </p>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    <Mail className="mr-2 w-4 h-4" />
                    Subscribe to Newsletter
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Phone className="mr-2 w-4 h-4" />
                    Follow @will.tritt on TikTok
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  Will Tritt, our founder and executive director, shares insights and updates 
                  as "Owlsley" on social media platforms.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Contact

