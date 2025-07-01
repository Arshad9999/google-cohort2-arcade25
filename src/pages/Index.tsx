
import { useState } from 'react';
import { Home, Calculator, ChevronDown, ExternalLink, Users, MessageCircle, Mail } from 'lucide-react';

const Index = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const programHighlights = [
    {
      title: "Facilitator Program",
      description: "Guide and mentor others while earning rewards for enrolling 100+ people. Stay active on LinkedIn, YouTube, and collaborate to build a community.",
      points: "Bonus Points + Community Impact"
    },
    {
      title: "Individual Journey", 
      description: "Enroll under a facilitator and earn swags and experience through labs and arcade points in the July-December 2025 cohort.",
      points: "Arcade Points + Swags"
    },
    {
      title: "Points System",
      description: "Coming soon for Cohort 2! Earn Arcade + Bonus Points through games, trivia, and skill badges to redeem for Google Cloud goodies.",
      points: "Redeem Prizes"
    }
  ];

  const faqs = [
    {
      question: "How can I become an Arcade Facilitator?",
      answer: "The Google Cloud Arcade Facilitator program is a closed program. We open facilitator enrollment multiple times during the year. Fill out our interest form, and if shortlisted, we'll reach out with an invitation."
    },
    {
      question: "Can I participate in Cohort 2 if I was in Cohort 1?",
      answer: "Unfortunately, you CANNOT participate in the same year using the same email address. You'll need to use a new email address, and only badge completions after Cohort 2's start date will count."
    },
    {
      question: "What are the eligibility criteria?",
      answer: "You need: working internet & laptop with Chrome browser, be 18+ years old, be referred by a Facilitator, and be in countries supported by Google Cloud Skills Boost Terms of Service."
    },
    {
      question: "How does the Points System work?",
      answer: "Game badges = 1 point each, Trivia badges = 1 point each, Every 2 Skill badges = 1 point, Monthly special games = 2 points. Bonus points are awarded for milestone completions."
    },
    {
      question: "Are Facilitator Milestones different from Player achievements?",
      answer: "Yes! Facilitator milestones earn 'Bonus' points, while 'Arcade' points follow the Skills Boost system. You accumulate both to reach player achievements and receive swags."
    },
    {
      question: "How many labs can I complete in 24 hours?",
      answer: "You can complete 15 labs per 24 hours. After this limit, you receive 1 new lab attempt every 2 hours. The 24-hour cycle starts from your first lab attempt."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200/50 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Home className="w-4 h-4 text-white" />
                </div>
                <span className="font-semibold text-gray-900">Arcade Points</span>
              </div>
              <div className="hidden md:flex space-x-6">
                <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium flex items-center space-x-1">
                  <Calculator className="w-4 h-4" />
                  <span>Calculator</span>
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">About</a>
                <a href="#faqs" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">FAQs</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6">
            Google Cloud Arcade
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join the ultimate cloud learning journey. Earn points, unlock achievements, and become part of an amazing community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Get Started
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-blue-500 hover:text-blue-600 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Program Highlights</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose your path and start earning points while building valuable cloud skills
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {programHighlights.map((highlight, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{highlight.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{highlight.description}</p>
                  <div className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                    {highlight.points}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Referral Code Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">My Referral Code</h2>
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-12 border border-gray-200">
            <div className="mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Referral System</h3>
              <p className="text-gray-600 mb-8">Share your journey and help others join the program</p>
            </div>
            <button className="bg-gradient-to-r from-gray-400 to-gray-500 text-white px-8 py-4 rounded-full font-semibold cursor-not-allowed opacity-75">
              Coming Soon
            </button>
          </div>
        </div>
      </section>

      {/* Registration Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Join Our Community</h2>
            <p className="text-xl text-gray-600">Connect with fellow learners and stay updated</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Registration Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Registration</h3>
                <p className="text-gray-600 mb-6">Sign up for the program and start your cloud journey</p>
                <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                  Register Now
                </button>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Join WhatsApp</h3>
                <p className="text-gray-600 mb-6">Get instant updates and connect with the community</p>
                <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>Join Group</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Telegram Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Telegram</h3>
                <p className="text-gray-600 mb-6">Stay connected and get real-time notifications</p>
                <button className="w-full bg-gradient-to-r from-blue-400 to-blue-500 text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>Join Channel</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about the program</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${expandedFaq === index ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${expandedFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-8 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Home className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Arcade Points</span>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                Join the Google Cloud Arcade Facilitator program and embark on an amazing cloud learning journey with a vibrant community.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                    <span className="text-xs font-bold">in</span>
                  </div>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">YouTube</span>
                  <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                    <span className="text-xs font-bold">YT</span>
                  </div>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Email</span>
                  <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Calculator</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#faqs" className="text-gray-400 hover:text-white transition-colors">FAQs</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="https://go.cloudskillsboost.google/arcade" className="text-gray-400 hover:text-white transition-colors">Skills Boost Arcade</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Program Guidelines</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a></li>
                <li><a href="mailto:arcade-facilitator@google.com" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2025 Google Cloud Arcade Facilitator Program. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Google Cloud ToS</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
