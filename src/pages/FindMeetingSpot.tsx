import { SEOLayout } from "@/components/SEOLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FindMeetingSpot = () => {
  const seoData = {
    title: "Find Perfect Meeting Spots for Groups - AI-Powered Location Finder | Rediscover.city",
    description: "Discover ideal meeting locations for any group size. Our AI suggests perfect venues with rich histories and stories, making every group gathering memorable and convenient.",
    keywords: "group meeting spots, find meeting location, group meetup venues, team meeting places, large group locations, accessible meeting spots, group-friendly restaurants",
    ogTitle: "Find Perfect Meeting Spots for Groups - AI Location Finder",
    ogDescription: "Discover amazing meeting locations for groups of any size with AI-powered suggestions and fascinating local stories.",
    ogImage: "https://rediscover.city/og-meeting-spot.jpg",
    canonicalUrl: "https://rediscover.city/find-meeting-spot",
  };

  return (
    <SEOLayout {...seoData}>
      {/* Hero Section */}
      <header className="bg-gradient-to-br from-primary via-primary-glow to-primary/80 text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display">
            Find the Perfect Meeting Spot for Any Group
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            AI-powered location discovery with captivating stories for memorable group gatherings
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16">
        <div className="container mx-auto px-4 space-y-16">
          
          {/* Streamline Planning */}
          <section className="bg-card rounded-xl p-8 shadow-elegant">
            <h2 className="text-3xl font-bold text-foreground mb-6 border-b-2 border-primary pb-3">
              Streamline Group Meeting Planning
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                Organizing meetings for groups can be overwhelming - from considering everyone's location to finding venues that accommodate your group size and needs. Our intelligent meeting spot finder takes the stress out of group coordination by suggesting perfect locations enriched with fascinating local stories.
              </p>
              <p>
                Whether you're planning a business team meeting, family reunion, book club gathering, or social meetup, finding the right venue sets the tone for success. Our AI considers accessibility, capacity, amenities, and the rich cultural context of each location to ensure your group has an unforgettable experience.
              </p>
            </div>
          </section>

          {/* Smart Solutions */}
          <section className="bg-card rounded-xl p-8 shadow-elegant">
            <h2 className="text-3xl font-bold text-foreground mb-8 border-b-2 border-primary pb-3">
              Smart Group Meeting Solutions
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-secondary/30 rounded-lg p-6 border-l-4 border-primary">
                <h4 className="text-xl font-semibold text-foreground mb-3">Capacity-Aware Matching</h4>
                <p className="text-muted-foreground">
                  Find venues that perfectly accommodate your group size, from intimate gatherings to large corporate events, with detailed space information.
                </p>
              </div>
              <div className="bg-secondary/30 rounded-lg p-6 border-l-4 border-primary">
                <h4 className="text-xl font-semibold text-foreground mb-3">Accessibility First</h4>
                <p className="text-muted-foreground">
                  Every suggestion prioritizes accessibility, ensuring all group members can participate comfortably with proper facilities and transportation access.
                </p>
              </div>
              <div className="bg-secondary/30 rounded-lg p-6 border-l-4 border-primary">
                <h4 className="text-xl font-semibold text-foreground mb-3">Rich Historical Context</h4>
                <p className="text-muted-foreground">
                  Transform ordinary meetings into engaging experiences with fascinating stories about each venue's history and cultural significance.
                </p>
              </div>
            </div>
          </section>

          {/* Group Types */}
          <section className="bg-card rounded-xl p-8 shadow-elegant">
            <h2 className="text-3xl font-bold text-foreground mb-8 border-b-2 border-primary pb-3">
              Meeting Spots for Every Group Type
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">Corporate Teams & Business Meetings</h3>
                <p className="text-muted-foreground">
                  Discover professional venues with excellent facilities, reliable WiFi, and inspiring histories. Learn about the business district's evolution and notable companies that shaped your city's commercial landscape.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">Social Groups & Friend Gatherings</h3>
                <p className="text-muted-foreground">
                  Find vibrant locations perfect for socializing, from trendy restaurants to historic pubs, each with stories about local social culture and community traditions that spark great conversations.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">Educational & Book Clubs</h3>
                <p className="text-muted-foreground">
                  Locate quiet, inspiring spaces ideal for learning and discussion, enhanced with tales of local literary history, famous authors, or educational milestones in your area.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">Family Reunions & Celebrations</h3>
                <p className="text-muted-foreground">
                  Identify spacious, family-friendly venues with parking and amenities, complete with heartwarming stories about community celebrations and family traditions in the neighborhood.
                </p>
              </div>
            </div>
          </section>

          {/* Key Features */}
          <section className="bg-card rounded-xl p-8 shadow-elegant">
            <h2 className="text-3xl font-bold text-foreground mb-8 border-b-2 border-primary pb-3">
              Key Features for Group Organizers
            </h2>
            <p className="text-muted-foreground mb-8">
              Our platform goes beyond simple location suggestions to provide comprehensive group meeting solutions:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-secondary/30 rounded-lg p-6 border-l-4 border-primary">
                <h4 className="text-xl font-semibold text-foreground mb-3">Multi-Location Analysis</h4>
                <p className="text-muted-foreground">
                  Consider all group members' locations to find centrally convenient spots that minimize travel time for everyone.
                </p>
              </div>
              <div className="bg-secondary/30 rounded-lg p-6 border-l-4 border-primary">
                <h4 className="text-xl font-semibold text-foreground mb-3">Venue Specifications</h4>
                <p className="text-muted-foreground">
                  Detailed information about seating capacity, parking availability, public transport access, and special accommodations.
                </p>
              </div>
              <div className="bg-secondary/30 rounded-lg p-6 border-l-4 border-primary">
                <h4 className="text-xl font-semibold text-foreground mb-3">Budget Considerations</h4>
                <p className="text-muted-foreground">
                  Filter suggestions based on budget requirements, from free public spaces to premium private venues.
                </p>
              </div>
              <div className="bg-secondary/30 rounded-lg p-6 border-l-4 border-primary">
                <h4 className="text-xl font-semibold text-foreground mb-3">Timing Optimization</h4>
                <p className="text-muted-foreground">
                  Recommendations consider peak hours, availability, and the best times to visit each location for optimal group experiences.
                </p>
              </div>
            </div>
          </section>

          {/* Why Choose AI */}
          <section className="bg-card rounded-xl p-8 shadow-elegant">
            <h2 className="text-3xl font-bold text-foreground mb-6 border-b-2 border-primary pb-3">
              Why Choose AI-Powered Meeting Spot Discovery?
            </h2>
            <p className="text-muted-foreground mb-6">
              Traditional location hunting often leads to generic, crowded, or inappropriate venues for group needs. Our AI technology revolutionizes group meeting planning by:
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="font-semibold text-foreground mr-2">Analyzing group dynamics:</span>
                Considers group size, member preferences, and meeting purpose
              </li>
              <li className="flex items-start">
                <span className="font-semibold text-foreground mr-2">Real-time availability:</span>
                Checks current capacity and booking status
              </li>
              <li className="flex items-start">
                <span className="font-semibold text-foreground mr-2">Cultural enrichment:</span>
                Adds educational value through local history and stories
              </li>
              <li className="flex items-start">
                <span className="font-semibold text-foreground mr-2">Accessibility compliance:</span>
                Ensures venues meet ADA requirements and accessibility standards
              </li>
              <li className="flex items-start">
                <span className="font-semibold text-foreground mr-2">Weather contingencies:</span>
                Provides indoor alternatives and seasonal recommendations
              </li>
            </ul>
          </section>
        </div>
      </main>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary via-primary-glow to-primary/80 text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Make Every Group Meeting Extraordinary</h2>
          <p className="text-xl mb-8 opacity-90">
            Transform your group gatherings with perfect locations and fascinating stories that bring people together
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/#waitlist">Join the Waitlist</Link>
          </Button>
        </div>
      </section>
    </SEOLayout>
  );
};

export default FindMeetingSpot;