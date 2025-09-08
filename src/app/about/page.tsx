"use client";

import Header from "../components/Header";
import ProfileCard from "../components/ProfileCard";
import InstagramButton from "../components/InstagramButton";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-600 via-red-700 to-red-800">
      <Header />
      
      {/* About Section with Profile Card */}
      <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
              ABOUT
            </h2>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Welcome to the digital realm of creativity and innovation. Discover the story behind the brand.
            </p>
          </div>
          
          <div className="flex justify-center">
            <ProfileCard
              name="Mayuresh"
              title="Digital Creator & Innovator"
              handle="truetickman"
              status="Available for Projects"
              contactText="Let's Connect"
              avatarUrl="/images/profile-avatar.png"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => {
                // Handle contact click - could open email, social media, etc.
                console.log('Contact clicked!');
                window.open('mailto:contact@truetickman.com', '_blank');
              }}
            />
          </div>
          
          {/* Social Media Section */}
          <div className="text-center mt-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-wide">
              CONNECT WITH ME
            </h3>
            <div className="flex justify-center">
              <InstagramButton link="https://www.instagram.com/being_mayu3esh?igsh=MW50Ym5oNHR5NjJmcA==" />
            </div>
          </div>
        </div>
      </section>

      {/* Additional About Content */}
      <section className="py-10 md:py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 text-white">
            {/* Vision */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 hover:bg-white/15 transition-all duration-300">
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 tracking-wide">VISION</h3>
              <p className="text-gray-200 text-sm leading-relaxed">
                Creating innovative digital experiences that push the boundaries of creativity and technology.
              </p>
            </div>
            
            {/* Mission */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 hover:bg-white/15 transition-all duration-300">
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 tracking-wide">MISSION</h3>
              <p className="text-gray-200 text-sm leading-relaxed">
                Delivering exceptional results through cutting-edge solutions and passionate craftsmanship.
              </p>
            </div>
            
            {/* Values */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 hover:bg-white/15 transition-all duration-300 md:col-span-2 lg:col-span-1">
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 tracking-wide">VALUES</h3>
              <p className="text-gray-200 text-sm leading-relaxed">
                Innovation, excellence, and authentic connection drive every project and collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}