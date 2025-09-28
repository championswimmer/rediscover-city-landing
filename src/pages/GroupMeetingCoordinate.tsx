import { SEOLayout } from "@/components/SEOLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const GroupMeetingCoordinate = () => {
  const seoData = {
    title: "Coordinate Meetup Groups & Events - Smart Location Planning | Rediscover.city",
    description: "Effortlessly coordinate meetup groups and events with AI-powered location suggestions. Discover venues with rich histories perfect for recurring meetups and large gatherings.",
    keywords: "coordinate meetup groups, meetup event planning, group coordination, recurring meetup locations, event venue finder, meetup organizer tools, community event spaces",
    ogTitle: "Coordinate Meetup Groups & Events - Smart Planning Tools",
    ogDescription: "Streamline meetup coordination with AI-powered venue discovery and rich local stories for engaging community events.",
    ogImage: "https://rediscover.city/og-meetup-coordinate.jpg",
    canonicalUrl: "https://rediscover.city/group-meeting-coordinate",
  };

  return (
    <SEOLayout {...seoData}>
      {/* Hero Section */}
      <header className="bg-gradient-to-br from-primary via-primary-glow to-primary/80 text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display">
            Coordinate Amazing Meetup Groups & Community Events
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Smart planning tools with captivating local stories for thriving community organizations
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16">
        <div className="container mx-auto px-4 space-y-16">
          
          {/* Revolutionize Coordination */}
          <section className="bg-card rounded-xl p-8 shadow-elegant">
            <h2 className="text-3xl font-bold text-foreground mb-6 border-b-2 border-primary pb-3">
              Revolutionize Meetup Group Coordination
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                Successful meetup groups require more than just finding a place to gather. They need inspiring locations that foster connection, engagement, and memorable experiences. Our AI-powered coordination platform helps meetup organizers discover venues with rich histories and fascinating stories that transform ordinary gatherings into extraordinary community experiences.
              </p>
              <p>
                From tech meetups to hiking groups, book clubs to photography walks, the right location can make or break your community event. Our intelligent system considers member demographics, accessibility needs, recurring schedule requirements, and the cultural significance of each venue to ensure your meetup group thrives.
              </p>
            </div>
          </section>

          {/* Advanced Features */}
          <section className="bg-card rounded-xl p-8 shadow-elegant">
            <h2 className="text-3xl font-bold text-foreground mb-8 border-b-2 border-primary pb-3">
              Advanced Coordination Features
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-secondary/30 rounded-lg p-6 border-l-4 border-primary">
                <h4 className="text-xl font-semibold text-foreground mb-3">Multi-Event Planning</h4>
                <p className="text-muted-foreground">
                  Coordinate entire series of meetups with varied locations, each offering unique stories and experiences to keep members engaged and excited.
                </p>
              </div>
              <div className="bg-secondary/30 rounded-lg p-6 border-l-4 border-primary">
                <h4 className="text-xl font-semibold text-foreground mb-3">Member-Centric Selection</h4>
                <p className="text-muted-foreground">
                  Analyze member locations and preferences to find venues that maximize attendance and minimize travel barriers for your community.
                </p>
              </div>
              <div className="bg-secondary/30 rounded-lg p-6 border-l-4 border-primary">
                <h4 className="text-xl font-semibold text-foreground mb-3">Scalability Planning</h4>
                <p className="text-muted-foreground">
                  Identify venues that can accommodate growing groups, with backup options and expansion capabilities for successful meetups.
                </p>
              </div>
            </div>
          </section>

          {/* Meetup Types */}
          <section className="bg-card rounded-xl p-8 shadow-elegant">
            <h2 className="text-3xl font-bold text-foreground mb-8 border-b-2 border-primary pb-3">
              Perfect for Every Type of Meetup Group
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">Tech & Professional Meetups</h3>
                <p className="text-muted-foreground">
                  Find modern venues with excellent connectivity and presentation capabilities, enhanced with stories about your city's innovation history and tech industry pioneers.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">Creative & Artistic Communities</h3>
                <p className="text-muted-foreground">
                  Discover inspiring spaces in arts districts and creative hubs, complete with tales of local artists, gallery histories, and cultural movements that shaped your city's creative scene.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">Outdoor & Adventure Groups</h3>
                <p className="text-muted-foreground">
                  Locate perfect starting points for outdoor activities, enriched with natural history, geological formations, and adventure stories from your region's explorers and outdoor enthusiasts.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">Learning & Educational Meetups</h3>
                <p className="text-muted-foreground">
                  Identify conducive environments for workshops and learning sessions, featuring educational histories, famous scholars, and intellectual traditions of each location.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">Social & Networking Groups</h3>
                <p className="text-muted-foreground">
                  Find vibrant social spaces that encourage mingling and conversation, with stories about community gatherings, local traditions, and social movements in your area.
                </p>
              </div>
            </div>
          </section>

          {/* Coordination Tools */}
          <section className="bg-card rounded-xl p-8 shadow-elegant">
            <h2 className="text-3xl font-bold text-foreground mb-8 border-b-2 border-primary pb-3">
              Comprehensive Meetup Coordination Tools
            </h2>
            <p className="text-muted-foreground mb-8">
              Our platform provides everything meetup organizers need for successful community building:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-secondary/30 rounded-lg p-6 border-l-4 border-primary">
                <h4 className="text-xl font-semibold text-foreground mb-3">Recurring Event Support</h4>
                <p className="text-muted-foreground">
                  Plan series of events with location variety to maintain interest while ensuring consistency in quality and accessibility.
                </p>
              </div>
              <div className="bg-secondary/30 rounded-lg p-6 border-l-4 border-primary">
                <h4 className="text-xl font-semibold text-foreground mb-3">Seasonal Adaptations</h4>
                <p className="text-muted-foreground">
                  Automatic suggestions for weather-appropriate venues, from cozy indoor spaces in winter to beautiful outdoor locations in summer.
                </p>
              </div>
              <div className="bg-secondary/30 rounded-lg p-6 border-l-4 border-primary">
                <h4 className="text-xl font-semibold text-foreground mb-3">Community Integration</h4>
                <p className="text-muted-foreground">
                  Discover venues that support local businesses and community initiatives, creating positive impact through your meetup activities.
                </p>
              </div>
              <div className="bg-secondary/30 rounded-lg p-6 border-l-4 border-primary">
                <h4 className="text-xl font-semibold text-foreground mb-3">Growth Management</h4>
                <p className="text-muted-foreground">
                  Track attendance patterns and venue feedback to optimize future location selections and improve member satisfaction.
                </p>
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="bg-card rounded-xl p-8 shadow-elegant">
            <h2 className="text-3xl font-bold text-foreground mb-6 border-b-2 border-primary pb-3">
              Benefits for Meetup Organizers
            </h2>
            <p className="text-muted-foreground mb-6">
              Organizing successful meetups requires balancing multiple factors while keeping members engaged. Our AI-powered coordination system helps by:
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="font-semibold text-foreground mr-2">Reducing planning time:</span>
                Automated venue suggestions based on group needs and preferences
              </li>
              <li className="flex items-start">
                <span className="font-semibold text-foreground mr-2">Increasing engagement:</span>
                Historical stories and cultural context that spark conversations
              </li>
              <li className="flex items-start">
                <span className="font-semibold text-foreground mr-2">Improving accessibility:</span>
                Comprehensive accessibility information for inclusive meetups
              </li>
              <li className="flex items-start">
                <span className="font-semibold text-foreground mr-2">Supporting growth:</span>
                Scalable venue options that grow with your community
              </li>
              <li className="flex items-start">
                <span className="font-semibold text-foreground mr-2">Building loyalty:</span>
                Memorable experiences that keep members coming back
              </li>
              <li className="flex items-start">
                <span className="font-semibold text-foreground mr-2">Creating connections:</span>
                Venues that naturally facilitate networking and relationship building
              </li>
            </ul>
          </section>

          {/* Success Stories */}
          <section className="bg-card rounded-xl p-8 shadow-elegant">
            <h2 className="text-3xl font-bold text-foreground mb-6 border-b-2 border-primary pb-3">
              Success Stories from Meetup Coordinators
            </h2>
            <p className="text-muted-foreground mb-4">
              Meetup organizers using our platform report significant improvements in member satisfaction, attendance rates, and community engagement. By incorporating local stories and historical context, meetups become educational experiences that members look forward to attending.
            </p>
            <p className="text-muted-foreground">
              The combination of practical venue features and cultural enrichment creates a unique value proposition that sets your meetup group apart from others in your area, leading to stronger community bonds and more sustainable growth.
            </p>
          </section>
        </div>
      </main>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary via-primary-glow to-primary/80 text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Build Thriving Meetup Communities</h2>
          <p className="text-xl mb-8 opacity-90">
            Transform your meetup coordination with smart venue discovery and engaging local stories that bring communities together
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/#waitlist">Join the Waitlist</Link>
          </Button>
        </div>
      </section>
    </SEOLayout>
  );
};

export default GroupMeetingCoordinate;