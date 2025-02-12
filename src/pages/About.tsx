import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <NavigationBar />
      <main>
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
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
      </main>
      <Footer />
    </div>
  );
};

export default About;
