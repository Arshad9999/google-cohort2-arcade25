
import { useState } from 'react';
import { Home, Calculator, ChevronDown, ExternalLink, Users, MessageCircle, Mail, Share, Send, Youtube, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [profileUrl, setProfileUrl] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const handleCalculate = async () => {
    if (!profileUrl.trim()) {
      alert('Please enter a valid Google Cloud Skills Boost public profile URL');
      return;
    }
    
    setIsCalculating(true);
    setTimeout(() => {
      setIsCalculating(false);
      alert('This feature is currently under development. Please check back later!');
    }, 2000);
  };

  const programHighlights = [
    "No cost gaming campaign",
    "Learn cloud skills", 
    "Earn digital badges & points",
    "Claim swag prizes and Google Cloud goodies"
  ];

  const topFaqs = [
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
    },
    {
      question: "What programming languages are covered?",
      answer: "The program covers various Google Cloud technologies including Python, Java, Go, and JavaScript, focusing on cloud-native development and DevOps practices."
    },
    {
      question: "Is there a certification pathway?",
      answer: "Yes! Completing arcade challenges can help prepare you for Google Cloud Professional certifications and provide hands-on experience with real-world scenarios."
    },
    {
      question: "How long does each challenge take?",
      answer: "Challenge duration varies from 30 minutes for basic labs to 2-3 hours for comprehensive skill badges, depending on your experience level."
    },
    {
      question: "Can I work in teams?",
      answer: "While individual progress is tracked, you can collaborate with fellow participants through our community channels for learning and support."
    }
  ];

  const remainingFaqs = [
    {
      question: "What happens if I miss a monthly challenge?",
      answer: "Monthly challenges have specific deadlines, but you can still complete other available challenges. Focus on skill badges and trivia to maintain your progress."
    },
    {
      question: "Are there prerequisites for advanced labs?",
      answer: "Some advanced labs require completion of foundational skill badges. The platform will guide you through the recommended learning path."
    },
    {
      question: "How do I troubleshoot lab environment issues?",
      answer: "Use the built-in help system in Google Cloud Skills Boost, check our community forums, or contact support through the official channels."
    },
    {
      question: "Can I pause and resume labs?",
      answer: "Yes, most labs can be paused and resumed within the allocated time window. However, some timed challenges must be completed in one session."
    },
    {
      question: "What's the difference between skill badges and game badges?",
      answer: "Skill badges demonstrate proficiency in specific Google Cloud technologies, while game badges are earned through completing arcade-style challenges and activities."
    }
  ];

  const shareLinks = [
    { icon: MessageCircle, label: 'WhatsApp', url: 'https://chat.whatsapp.com/G2eYopB7F9i8uRtFhPPNOQ' },
    { icon: Send, label: 'Telegram', url: 'https://t.me/+Ic455yX_OmM3YjVl' },
    { icon: Youtube, label: 'YouTube', url: 'https://www.youtube.com/@Arcade2025FacilitatorCohort2' },
    { icon: Linkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/mohd-arshad-siddiqui-284048225/' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-indigo-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-cyan-100/20 to-blue-100/20 rounded-full blur-3xl"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl border-b border-gray-200/50 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <a href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                  <Home className="w-4 h-4 text-white" />
                </div>
                <span className="font-bold text-gray-900 text-lg">Arcade Points</span>
              </a>
              <div className="hidden md:flex space-x-6">
                <a href="#calculator" className="text-gray-700 hover:text-blue-600 transition-colors font-semibold flex items-center space-x-1">
                  <Calculator className="w-4 h-4" />
                  <span>Calculator</span>
                </a>
                <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-semibold">About</a>
                <a href="#faqs" className="text-gray-700 hover:text-blue-600 transition-colors font-semibold">FAQs</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6 tracking-tight">
            Google Cloud<br />
            <span className="italic font-light">Arcade</span> 2025
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
            Join the <em className="text-blue-600 font-semibold">ultimate</em> cloud learning journey. Earn points, unlock achievements, and become part of an <strong>amazing community</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://go.cloudskillsboost.google/arcade" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 inline-block text-lg"
            >
              Get Started
            </a>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-2xl font-bold hover:border-blue-500 hover:text-blue-600 transition-all duration-300 text-lg">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/30 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 tracking-tight">Program <em className="text-blue-600 font-light italic">Highlights</em></h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {programHighlights.map((highlight, index) => (
                <Card key={index} className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border-0 group hover:-translate-y-2">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform shadow-lg">
                      <span className="text-white font-bold text-2xl">✓</span>
                    </div>
                    <p className="text-gray-700 font-bold text-center text-lg">{highlight}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-gradient-to-r from-white/60 to-blue-50/60 backdrop-blur-sm rounded-3xl p-12 border border-white/50 mb-8 shadow-2xl">
              <h3 className="text-4xl font-black text-gray-900 mb-6 tracking-tight">Registration <span className="italic font-light text-blue-600">Opening Soon</span></h3>
              
              <div className="grid grid-cols-4 gap-4 max-w-md mx-auto mb-8">
                <div className="text-center">
                  <div className="text-5xl font-black text-blue-600 mb-2">0</div>
                  <div className="text-sm text-gray-600 font-bold uppercase tracking-wider">Days</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-black text-blue-600 mb-2">0</div>
                  <div className="text-sm text-gray-600 font-bold uppercase tracking-wider">Hrs</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-black text-blue-600 mb-2">0</div>
                  <div className="text-sm text-gray-600 font-bold uppercase tracking-wider">Min</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-black text-blue-600 mb-2">0</div>
                  <div className="text-sm text-gray-600 font-bold uppercase tracking-wider">Sec</div>
                </div>
              </div>
              
              <p className="text-2xl text-gray-700 mb-6 font-medium">
                Please wait for <strong className="text-blue-600">Cohort 2</strong> of the program in <em>August/September '25</em>
              </p>
              
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-2xl font-bold hover:shadow-xl transition-all duration-300 text-lg">
                Learn more about the program
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Arcade Points Calculator */}
      <section id="calculator" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <Calculator className="w-16 h-16 text-blue-600 mr-4" />
              <h2 className="text-5xl font-black text-gray-900 tracking-tight">
                Arcade Points <span className="italic font-light text-blue-600">Calculator</span>
              </h2>
            </div>
            <p className="text-2xl text-gray-600 mb-4 font-medium">
              Your <strong>ultimate companion</strong> for Google Cloud Arcade Journey! <span className="text-3xl">⚡</span>
            </p>
            <p className="text-sm text-gray-500 mb-8 font-mono">
              Last Updated: {new Date().toLocaleString('en-GB', { 
                day: '2-digit', 
                month: '2-digit', 
                year: 'numeric', 
                hour: '2-digit', 
                minute: '2-digit', 
                second: '2-digit' 
              })}
            </p>
          </div>

          <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden">
            <CardHeader className="text-center pb-6 bg-gradient-to-r from-blue-50/50 to-purple-50/50">
              <CardTitle className="text-3xl font-black text-gray-900">Calculate Your <em className="font-light italic text-blue-600">Arcade Points</em></CardTitle>
              <CardDescription className="text-gray-600 text-lg font-medium">
                Enter your Google Cloud Skills Boost public profile URL to calculate your points
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 p-8">
              <div className="space-y-2">
                <label htmlFor="profile-url" className="text-lg font-bold text-gray-700">
                  Paste <span className="text-blue-600">Public-Profile-URL</span> here
                </label>
                <Input
                  id="profile-url"
                  type="url"
                  placeholder="https://www.cloudskillsboost.google/public_profiles/..."
                  value={profileUrl}
                  onChange={(e) => setProfileUrl(e.target.value)}
                  className="h-14 text-lg rounded-2xl border-2 border-gray-200 focus:border-blue-500 transition-colors"
                />
              </div>

              <div className="flex items-center justify-between">
                <a href="#help" className="text-blue-600 hover:text-blue-700 text-lg font-bold transition-colors">
                  Get help
                </a>
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="text-lg text-gray-700 font-medium">Remember me</span>
                </label>
              </div>

              <Button
                onClick={handleCalculate}
                disabled={isCalculating}
                className="w-full h-14 text-xl font-black bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200 rounded-2xl shadow-lg hover:shadow-xl"
              >
                {isCalculating ? 'Calculating...' : 'Calculate'}
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Top 10 FAQs Carousel */}
      <section id="faqs" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/30 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-4 tracking-tight">Top <span className="text-blue-600 italic font-light">10</span> FAQs</h2>
            <p className="text-2xl text-gray-600 font-medium">Most asked questions about the program</p>
          </div>
          
          <div className="relative overflow-hidden mb-16">
            <div className="flex animate-scroll space-x-6" style={{
              animation: 'scroll 60s linear infinite',
              width: 'calc(400px * 20)'
            }}>
              {[...topFaqs, ...topFaqs].map((faq, index) => (
                <Card key={index} className="flex-shrink-0 w-96 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border-0 overflow-hidden group hover:shadow-2xl transition-all duration-300">
                  <CardHeader className="bg-gradient-to-r from-blue-50/50 to-purple-50/50 p-6">
                    <CardTitle className="text-xl font-bold text-gray-900 leading-tight">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-gray-600 leading-relaxed font-medium">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <style jsx>{`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}</style>

          <div className="text-center mb-12">
            <h3 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">More <span className="italic font-light text-blue-600">Questions?</span></h3>
            <p className="text-xl text-gray-600 font-medium">Additional frequently asked questions</p>
          </div>
          
          <div className="space-y-4 max-w-4xl mx-auto">
            {remainingFaqs.map((faq, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm rounded-3xl border-0 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-white/50 transition-colors"
                >
                  <span className="text-xl font-bold text-gray-900 pr-4">{faq.question}</span>
                  <ChevronDown className={`w-6 h-6 text-gray-500 transition-transform duration-300 ${expandedFaq === index ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${expandedFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-8 pb-6">
                    <p className="text-gray-600 leading-relaxed font-medium text-lg">{faq.answer}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Community Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-4 tracking-tight">Join Our <span className="italic font-light text-blue-600">Community</span></h2>
            <p className="text-2xl text-gray-600 font-medium">Connect with fellow learners and stay updated</p>
          </div>
          
          {/* First Row - WhatsApp and YouTube */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-0 group">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <MessageCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-black text-gray-900 mb-4">Join <span className="text-green-600">WhatsApp</span></h3>
                <p className="text-gray-600 mb-6 text-lg font-medium">Get instant updates and connect with the community</p>
                <a href="https://chat.whatsapp.com/G2eYopB7F9i8uRtFhPPNOQ" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-2xl font-bold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 text-lg">
                    <span>Join Group</span>
                    <ExternalLink className="w-5 h-5" />
                  </Button>
                </a>
              </div>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-0 group">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-red-600 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <Youtube className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-black text-gray-900 mb-4">Subscribe <span className="text-red-600">YouTube</span></h3>
                <p className="text-gray-600 mb-6 text-lg font-medium">Watch tutorials and program updates</p>
                <a href="https://www.youtube.com/@Arcade2025FacilitatorCohort2" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-4 rounded-2xl font-bold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 text-lg">
                    <span>Subscribe</span>
                    <ExternalLink className="w-5 h-5" />
                  </Button>
                </a>
              </div>
            </Card>
          </div>

          {/* Second Row - Telegram and LinkedIn */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-0 group">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <Send className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-black text-gray-900 mb-4">Join <span className="text-blue-500">Telegram</span></h3>
                <p className="text-gray-600 mb-6 text-lg font-medium">Stay connected and get real-time notifications</p>
                <a href="https://t.me/+Ic455yX_OmM3YjVl" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-gradient-to-r from-blue-400 to-blue-500 text-white py-4 rounded-2xl font-bold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 text-lg">
                    <span>Join Channel</span>
                    <ExternalLink className="w-5 h-5" />
                  </Button>
                </a>
              </div>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-0 group">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <Linkedin className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-black text-gray-900 mb-4">Connect <span className="text-blue-600">LinkedIn</span></h3>
                <p className="text-gray-600 mb-6 text-lg font-medium">Network with professionals and mentors</p>
                <a href="https://www.linkedin.com/in/mohd-arshad-siddiqui-284048225/" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-2xl font-bold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 text-lg">
                    <span>Connect</span>
                    <ExternalLink className="w-5 h-5" />
                  </Button>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Share Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/30 backdrop-blur-sm relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black text-gray-900 mb-8 tracking-tight">Share This <span className="italic font-light text-blue-600">Tool</span></h2>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {shareLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-white/90 hover:bg-white border border-gray-200 rounded-2xl px-6 py-4 transition-all duration-200 hover:shadow-lg group font-bold"
              >
                <social.icon className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
                <span className="text-gray-700 group-hover:text-blue-600 transition-colors text-lg">
                  Share on {social.label}
                </span>
              </a>
            ))}
          </div>
          <Button
            onClick={() => navigator.clipboard.writeText(window.location.href)}
            variant="outline"
            className="bg-white/90 hover:bg-white border-2 border-gray-200 hover:border-blue-300 transition-all duration-200 rounded-2xl px-8 py-4 font-bold text-lg"
          >
            <Share className="w-5 h-5 mr-3" />
            Copy Link
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Home className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-black">Arcade Points</span>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md text-lg font-medium">
                Join the <strong>Google Cloud Arcade Facilitator</strong> program and embark on an <em>amazing cloud learning journey</em> with a vibrant community.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/mohd-arshad-siddiqui-284048225/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </div>
                </a>
                <a href="https://www.youtube.com/@Arcade2025FacilitatorCohort2" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">YouTube</span>
                  <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                    <Youtube className="w-5 h-5" />
                  </div>
                </a>
                <a href="mailto:arcade-facilitator@google.com" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Email</span>
                  <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-black mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-400 hover:text-white transition-colors font-medium">Home</a></li>
                <li><a href="#calculator" className="text-gray-400 hover:text-white transition-colors font-medium">Calculator</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors font-medium">About</a></li>
                <li><a href="#faqs" className="text-gray-400 hover:text-white transition-colors font-medium">FAQs</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-black mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="https://go.cloudskillsboost.google/arcade" className="text-gray-400 hover:text-white transition-colors font-medium">Skills Boost Arcade</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-medium">Program Guidelines</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-medium">Support</a></li>
                <li><a href="mailto:arcade-facilitator@google.com" className="text-gray-400 hover:text-white transition-colors font-medium">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0 font-medium">
                © 2025 <strong>Google Cloud Arcade Facilitator Program</strong>. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors font-medium">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors font-medium">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors font-medium">Google Cloud ToS</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
