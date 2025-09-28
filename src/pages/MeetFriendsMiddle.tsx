import { SEOLayout } from "@/components/SEOLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const MeetFriendsMiddle = () => {
  const seoData = {
    title: "Meet Friends in the Middle - Find Perfect Midpoint Locations | Rediscover.city",
    description: "Find the perfect meeting spot halfway between you and your friends. Our AI-powered app suggests ideal midpoint locations with fascinating stories and local attractions.",
    keywords: "meet friends middle, halfway meeting point, midpoint calculator, friend meetup locations, convenient meeting spots, equidistant meeting places",
    ogTitle: "Meet Friends in the Middle - Perfect Midpoint Locations",
    ogDescription: "Discover amazing meeting spots halfway between you and your friends with AI-powered location suggestions and local stories.",
    ogImage: "https://rediscover.city/og-meet-friends-middle.jpg",
    canonicalUrl: "https://rediscover.city/meet-friends-middle",
  };

  return (
    <SEOLayout {...seoData}>
      {/* Hero Section */}
      <header className="bg-gradient-to-br from-primary via-primary-glow to-primary/80 text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display">
            Meet Your Friends at the Perfect Middle Point
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Discover amazing halfway meeting spots with fascinating stories that bring friends together
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16">
        <div className="container mx-auto px-4 space-y-16">
          
          {/* Why Choose Midpoint */}
          <section className="bg-card rounded-xl p-8 shadow-elegant">
            <h2 className="text-3xl font-bold text-foreground mb-6 border-b-2 border-primary pb-3">
              Why Choose Midpoint Meeting Locations?
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                Finding the perfect spot to meet friends can be challenging, especially when everyone is coming from different directions. Our AI-powered location finder solves this problem by identifying ideal midpoint locations that are convenient for everyone while offering rich historical and cultural experiences.
              </p>
              <p>
                Whether you're planning a casual coffee meetup, a dinner date, or a weekend adventure, choosing a midpoint location ensures fairness and convenience for all participants. Plus, you'll discover hidden gems and fascinating stories about your city that you never knew existed.
              </p>
            </div>
          </section>

          {/* How It Works */}
          <section className="bg-card rounded-xl p-8 shadow-elegant">
            <h2 className="text-3xl font-bold text-foreground mb-8 border-b-2 border-primary pb-3">
              How Midpoint Meeting Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-secondary/30 rounded-lg p-6 border-l-4 border-primary">
                <h4 className="text-xl font-semibold text-foreground mb-3">Smart Location Analysis</h4>
                <p className="text-muted-foreground">
                  Our AI analyzes distances, travel times, and transportation options to find truly convenient meeting points for all parties.
                </p>
              </div>
              <div className="bg-secondary/30 rounded-lg p-6 border-l-4 border-primary">
                <h4 className="text-xl font-semibold text-foreground mb-3">Story-Rich Destinations</h4>
                <p className="text-muted-foreground">
                  Every suggested location comes with captivating historical stories, local legends, and cultural insights that make your meetup memorable.
                </p>
              </div>
              <div className="bg-secondary/30 rounded-lg p-6 border-l-4 border-primary">
                <h4 className="text-xl font-semibold text-foreground mb-3">Personalized Recommendations</h4>
                <p className="text-muted-foreground">
                  Get customized suggestions based on your interests, preferred activities, and the type of gathering you're planning.
                </p>
              </div>
            </div>
          </section>

          {/* Meeting Types */}
          <section className="bg-card rounded-xl p-8 shadow-elegant">
            <h2 className="text-3xl font-bold text-foreground mb-8 border-b-2 border-primary pb-3">
              Perfect for Every Type of Friend Meetup
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">Casual Coffee Dates</h3>
                <p className="text-muted-foreground">
                  Find charming cafes and coffee shops located perfectly between you and your friends, complete with stories about the neighborhood's coffee culture and local history.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">Dinner and Drinks</h3>
                <p className="text-muted-foreground">
                  Discover restaurants and bars at convenient midpoints, learning about the culinary traditions and social history of each location as you plan your evening.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">Outdoor Adventures</h3>
                <p className="text-muted-foreground">
                  Explore parks, walking trails, and outdoor spaces that serve as perfect meeting points, enhanced with tales of the area's natural history and significance.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">Cultural Experiences</h3>
                <p className="text-muted-foreground">
                  Meet at museums, galleries, or cultural landmarks positioned conveniently for all friends, enriched with fascinating stories about local arts and heritage.
                </p>
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="bg-card rounded-xl p-8 shadow-elegant">
            <h2 className="text-3xl font-bold text-foreground mb-6 border-b-2 border-primary pb-3">
              Benefits of Using AI-Powered Midpoint Selection
            </h2>
            <p className="text-muted-foreground mb-6">
              Traditional methods of finding meeting spots often result in inconvenience for some friends or boring, generic locations. Our AI-powered approach considers multiple factors:
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="font-semibold text-foreground mr-2">Equal travel time:</span>
                Ensures fairness for all participants
              </li>
              <li className="flex items-start">
                <span className="font-semibold text-foreground mr-2">Transportation options:</span>
                Considers public transit, walking, and driving routes
              </li>
              <li className="flex items-start">
                <span className="font-semibold text-foreground mr-2">Location quality:</span>
                Suggests venues with good reviews and interesting features
              </li>
              <li className="flex items-start">
                <span className="font-semibold text-foreground mr-2">Historical significance:</span>
                Adds educational and entertainment value to your meetup
              </li>
              <li className="flex items-start">
                <span className="font-semibold text-foreground mr-2">Safety and accessibility:</span>
                Prioritizes well-lit, accessible locations
              </li>
            </ul>
          </section>
        </div>
      </main>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary via-primary-glow to-primary/80 text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Meet Friends in Amazing Places?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of users discovering perfect midpoint meeting locations with captivating stories
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/#waitlist">Join the Waitlist</Link>
          </Button>
        </div>
      </section>
    </SEOLayout>
  );
};

export default MeetFriendsMiddle;