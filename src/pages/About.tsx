import React from "react";
import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";

interface TeamMember {
  name: string;
  role: string;
  realImage: string;
  cyberImage: string;
  github?: string;
  linkedin?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Ali",
    role: "Full Stack Developer",
    realImage: "/images/Ali.jpg",
    cyberImage: "/images/ali-cyber.jpeg",
    github: "https://github.com/ali",
    linkedin: "https://linkedin.com/in/ali",
  },
  {
    name: "Zain",
    role: "AI Engineer",
    realImage: "/images/zain.jpeg",
    cyberImage: "/images/zain-cyber.jpeg",
    github: "https://github.com/zain",
    linkedin: "https://linkedin.com/in/zain",
  },
  {
    name: "Khaled",
    role: "UI/UX Designer",
    realImage: "/images/Khaled.jpeg",
    cyberImage: "/images/Khaled-cyber.jpeg",
    github: "https://github.com/khaled",
    linkedin: "https://linkedin.com/in/khaled",
  },
  {
    name: "Manal",
    role: "AI Researcher",
    realImage: "/images/manal.jpeg",
    cyberImage: "/images/manal-cyber.jpeg",
    github: "https://github.com/manal",
    linkedin: "https://linkedin.com/in/manal",
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <NavigationBar />
      <main>
        <section className="min-h-[70vh] flex items-center justify-center relative overflow-hidden">
          <div className="content-grid text-center relative z-10">
            <div className="animate-in space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-sm font-medium mb-4">
                About Responsible AI
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight neon-text">
                Our Mission & Vision
              </h1>
              <div className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto space-y-6">
                <p>
                  We're dedicated to educating the next generation about AI
                  ethics and responsible use of artificial intelligence
                  technologies.
                </p>
                <p>
                  Through interactive experiences and comprehensive resources,
                  we empower users to understand and navigate the complex
                  landscape of AI in modern media.
                </p>
                <p>
                  Our platform combines cutting-edge technology with ethical
                  principles to create engaging learning experiences that make a
                  real difference in how people understand and interact with AI.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 relative overflow-hidden">
          <div className="content-grid relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight neon-text mb-4">
                Meet Our Team
              </h2>
              <p className="text-lg text-muted-foreground">
                The creative minds behind our AI education initiative
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="group relative"
                  style={
                    {
                      "--enter-delay": `${index * 100}ms`,
                    } as React.CSSProperties
                  }
                >
                  <div className="relative aspect-square overflow-hidden rounded-xl">
                    {/* Real Image */}
                    <img
                      src={member.realImage}
                      alt={`${member.name} - Real`}
                      className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                    />
                    {/* Cyber Image */}
                    <img
                      src={member.cyberImage}
                      alt={`${member.name} - Cyber`}
                      className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  </div>

                  <div className="mt-4 text-center">
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-muted-foreground">{member.role}</p>

                    {/* Social Links */}
                    <div className="mt-2 flex justify-center gap-4">
                      {member.github && (
                        <a
                          href={member.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          GitHub
                        </a>
                      )}
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          LinkedIn
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
