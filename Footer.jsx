import { Heart, TreePine, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Community', href: '#community' },
    { name: 'Trail of Trees', href: '#trail-of-trees' },
    { name: 'Contact', href: '#contact' }
  ]

  const programs = [
    { name: 'Guest Program', href: '#programs' },
    { name: 'Volunteer Program', href: '#programs' },
    { name: 'Resident Partner', href: '#programs' },
    { name: '1% Partner', href: '#programs' }
  ]

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Heart className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">TGLFF</h3>
                <p className="text-xs text-muted-foreground">Grateful Life Family Foundation</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Changing the world, one mind at a time through collective consciousness elevation 
              and community wisdom at Lake Waldensia.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Ozone, Tennessee</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>(423) 555-TGLFF</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@tglff.org</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Programs</h4>
            <ul className="space-y-2">
              {programs.map((program, index) => (
                <li key={index}>
                  <a 
                    href={program.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {program.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Trail of Trees */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center space-x-2">
              <TreePine className="w-5 h-5 text-primary" />
              <span>Trail of Trees</span>
            </h4>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Honoring those who walked the Trail of Tears through native tree planting 
              and environmental restoration.
            </p>
            <a 
              href="#trail-of-trees"
              className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              <TreePine className="w-4 h-4 mr-1" />
              Plant a Tree
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              <p>© {currentYear} The Grateful Life Family Foundation. All rights reserved.</p>
              <p className="mt-1">
                501(c)(3) Nonprofit Organization | IRS Ruling Year 2020 | Tennessee Charity
              </p>
            </div>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
          
          {/* Mission Statement */}
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground italic">
              "We believe collective consciousness serves as our source and supply, 
              providing for all needs through community wisdom and harmonious coexistence."
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

