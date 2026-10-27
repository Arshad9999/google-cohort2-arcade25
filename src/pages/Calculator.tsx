import { Home, Calculator as CalculatorIcon, Share, Twitter, Linkedin, MessageCircle, Send, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ArcadePointsCalculator from '@/components/ArcadePointsCalculator';

const Calculator = () => {
  const shareLinks = [
    { icon: Twitter, label: 'Twitter', url: 'https://twitter.com/intent/tweet?text=Check out this amazing Arcade Points Calculator!' },
    { icon: Linkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent(window.location.href) },
    { icon: MessageCircle, label: 'WhatsApp', url: 'https://wa.me/?text=Check out this Arcade Points Calculator: ' + encodeURIComponent(window.location.href) },
    { icon: Send, label: 'Telegram', url: 'https://t.me/share/url?url=' + encodeURIComponent(window.location.href) },
    { icon: Facebook, label: 'Facebook', url: 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(window.location.href) }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <a href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Home className="w-4 h-4 text-white" />
                </div>
                <span className="font-semibold text-gray-900">Arcade Points</span>
              </a>
            </div>
            <div className="flex items-center space-x-8">
              <a href="/calculator" className="text-blue-600 hover:text-blue-700 transition-colors font-medium">
                Calculator
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                About
              </a>
              <a href="#faqs" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                FAQs
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <CalculatorIcon className="w-12 h-12 text-blue-600 mr-4" />
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Arcade Points Calculator
            </h1>
          </div>
          <p className="text-xl text-gray-600 mb-4">
            Your ultimate companion for Google Cloud Arcade Journey! ⚡
          </p>
          <p className="text-sm text-gray-500 mb-8">
            Historical 2025 cohort prototype
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl font-bold text-gray-900">Calculate Your Arcade Points</CardTitle>
              <CardDescription className="text-gray-600">
                Enter badge counts manually to apply the documented historical 2025 point formula.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ArcadePointsCalculator idPrefix="calculator-page" />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Intuitive Interface",
                description: "Clean, user-friendly design that's easy to navigate and understand at a glance."
              },
              {
                title: "Accurate Points",
                description: "Planned: show a points breakdown after profile lookup is implemented."
              },
              {
                title: "Live Tracking",
                description: "Planned: display progress toward cohort milestones."
              },
              {
                title: "Badge Summary",
                description: "Planned: show earned badges and their completion dates."
              },
              {
                title: "Auto Updates",
                description: "Program information on this page describes the historical 2025 cohort."
              },
              {
                title: "Chrome Extension",
                description: "A browser extension is not available in this project."
              }
            ].map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="#" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
              Learn more →
            </a>
          </div>
        </div>
      </section>

      {/* Share Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Share This Tool</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {shareLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-white/90 hover:bg-white border border-gray-200 rounded-xl px-4 py-3 transition-all duration-200 hover:shadow-md group"
              >
                <social.icon className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
                <span className="font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                  Share on {social.label}
                </span>
              </a>
            ))}
          </div>
          <Button
            onClick={() => navigator.clipboard.writeText(window.location.href)}
            variant="outline"
            className="bg-white/90 hover:bg-white border-2 border-gray-200 hover:border-blue-300 transition-all duration-200"
          >
            <Share className="w-4 h-4 mr-2" />
            Copy Link
          </Button>
        </div>
      </section>

      {/* Points Guide */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">How Points Are Calculated</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg bg-white">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <CardTitle className="text-xl">Game Badges</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  1 point per game badge<br />
                  <span className="text-sm">(2 points for monthly special)</span>
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">1</span>
                </div>
                <CardTitle className="text-xl">Trivia Badges</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  1 point per trivia badge
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">½</span>
                </div>
                <CardTitle className="text-xl">Skill Badges</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  1 point per 2 skill badges completed
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Calculator;
