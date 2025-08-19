import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  MapPin,
  Calendar,
  GraduationCap,
  Award,
  Target,
  TrendingUp,
} from "lucide-react"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <h1 className="text-2xl font-bold font-serif text-primary">Harini L</h1>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" asChild>
                <a href="#about">About</a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="#projects">Projects</a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="#experience">Experience</a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="#achievements">Achievements</a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="#contact">Contact</a>
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="mb-6">
            <Badge variant="secondary" className="mb-4 text-sm font-medium">
              Available for Full-Time Opportunities
            </Badge>
          </div>
          <h2 className="text-6xl font-bold font-serif mb-6 text-foreground leading-tight">
            Software Engineer &<br />
            <span className="text-primary">AI/ML Specialist</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Passionate Master's student in Computer Science Engineering with proven expertise in Machine Learning,
            Full-Stack Development, and building intelligent systems. Committed to leveraging cutting-edge technology to
            solve complex real-world challenges and drive innovation.
          </p>
          <div className="flex items-center justify-center gap-6 mb-10 flex-wrap">
            <div className="flex items-center gap-2 text-muted-foreground bg-card/50 px-4 py-2 rounded-full">
              <MapPin className="h-4 w-4" />
              <span>Bengaluru, India</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground bg-card/50 px-4 py-2 rounded-full">
              <GraduationCap className="h-4 w-4" />
              <span>M.Tech CSE (IT) - CGPA: 8.39</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground bg-card/50 px-4 py-2 rounded-full">
              <Award className="h-4 w-4" />
              <span>95% ML Model Accuracy</span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4">
            <Button size="lg" asChild className="px-8">
              <a href="#projects">Explore My Work</a>
            </Button>
            <Button size="lg" variant="outline" asChild className="px-8 bg-transparent">
              <a href="#contact">Let's Connect</a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold font-serif mb-4">About Me</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Driven by innovation and excellence in software engineering
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Professional Mission
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  As an aspiring software engineer with a strong foundation in AI/ML and full-stack development, I am
                  committed to building innovative solutions that make a meaningful impact. My journey from achieving a
                  7.2 CGPA in my Bachelor's to maintaining an 8.39 CGPA in my Master's reflects my dedication to
                  continuous learning and excellence.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Career Aspirations
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  I aspire to contribute to cutting-edge technology companies where I can apply my expertise in machine
                  learning and software development to solve complex challenges. My experience with prestigious
                  organizations like DRDO and Toshiba has prepared me to excel in collaborative, high-impact
                  environments and drive technological innovation.
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-6">Core Competencies</h4>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium mb-3 text-primary">Programming & Development</p>
                  <div className="flex flex-wrap gap-2">
                    {["Java", "Python", "JavaScript", "C++", "SQL"].map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium mb-3 text-primary">Frameworks & Technologies</p>
                  <div className="flex flex-wrap gap-2">
                    {["Spring Boot", "React.js", "Hibernate", "Git", "MySQL"].map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium mb-3 text-primary">AI/ML Expertise</p>
                  <div className="flex flex-wrap gap-2">
                    {["BERT", "RoBERTa", "Federated Learning", "Hugging Face", "NLP", "PyTorch"].map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold font-serif mb-4">Featured Projects</h3>
            <p className="text-lg text-muted-foreground">
              Showcasing technical excellence and innovative problem-solving
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="font-serif text-xl mb-2">Cyberbullying Detection System</CardTitle>
                    <CardDescription className="text-sm flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      Feb 2025 - Jun 2025
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost" asChild>
                      <a href="#" className="text-primary hover:text-primary/80">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button size="sm" variant="ghost" asChild>
                      <a href="#" className="text-primary hover:text-primary/80">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-3">
                  <Badge variant="default" className="bg-green-100 text-green-800 border-green-200">
                    95% Accuracy
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Privacy-Preserving
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Engineered a cutting-edge federated RoBERTa model for cyberbullying detection across social platforms.
                  Enhanced model performance through innovative emotion-based and contextual embeddings, ensuring
                  compliance with data protection standards while achieving industry-leading accuracy.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Python", "RoBERTa", "Federated Learning", "NLP", "PyTorch", "Privacy Tech"].map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="font-serif text-xl mb-2">Fake News Detection with BERT</CardTitle>
                    <CardDescription className="text-sm flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      Jun 2024 - Nov 2024
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost" asChild>
                      <a href="#" className="text-primary hover:text-primary/80">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button size="sm" variant="ghost" asChild>
                      <a href="#" className="text-primary hover:text-primary/80">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-3">
                  <Badge variant="default" className="bg-blue-100 text-blue-800 border-blue-200">
                    92% Accuracy
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Production Ready
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Developed and fine-tuned a sophisticated BERT-based classifier for fake news identification.
                  Implemented advanced contextual embedding techniques to improve generalization on short and misleading
                  content, with automated training pipeline for efficient experimentation.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Python", "BERT", "Transformers", "Hugging Face", "NLP", "MLOps"].map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="font-serif text-xl mb-2">Smart Complaint Management Portal</CardTitle>
                    <CardDescription className="text-sm flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      Jan 2024 - Mar 2024
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost" asChild>
                      <a href="#" className="text-primary hover:text-primary/80">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button size="sm" variant="ghost" asChild>
                      <a href="#" className="text-primary hover:text-primary/80">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-3">
                  <Badge variant="default" className="bg-purple-100 text-purple-800 border-purple-200">
                    30% Faster Resolution
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Full-Stack
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Architected and deployed a comprehensive full-stack portal using modern technologies. Implemented
                  secure authentication and centralized tracking system, significantly improving operational efficiency
                  and user experience through streamlined workflows.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Spring Boot", "React.js", "Hibernate", "MySQL", "REST API", "Security"].map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="font-serif text-xl mb-2">Scalable E-commerce Platform</CardTitle>
                    <CardDescription className="text-sm flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      Apr 2024 - Jun 2024
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost" asChild>
                      <a href="#" className="text-primary hover:text-primary/80">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button size="sm" variant="ghost" asChild>
                      <a href="#" className="text-primary hover:text-primary/80">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-3">
                  <Badge variant="default" className="bg-orange-100 text-orange-800 border-orange-200">
                    50% Faster Response
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Enterprise Grade
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Built a fully-functional, scalable e-commerce application with responsive design and robust backend
                  architecture. Optimized RESTful APIs and database queries for superior performance, implementing
                  comprehensive features including product catalog, cart management, and secure payment processing.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Spring Boot", "REST API", "MySQL", "Performance Optimization", "Scalability"].map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold font-serif mb-4">Professional Experience</h3>
            <p className="text-lg text-muted-foreground">
              Building expertise through prestigious internships and training programs
            </p>
          </div>
          <div className="space-y-8">
            <Card className="border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="font-serif text-xl mb-2">Japanese Trainee Program</CardTitle>
                    <CardDescription className="text-primary font-semibold text-base mb-2">
                      Toshiba Software India Pvt. Ltd.
                    </CardDescription>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        Jun 2025 - Jul 2025
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        Bengaluru, India
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    Cross-Cultural Training
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Selected for an intensive cross-cultural training program alongside Japanese engineers, covering
                  advanced topics in PMBOK Project Management, Software Engineering, AI, Agile Methodology, and
                  Requirement Analysis & Estimation. Enhanced technical expertise while developing crucial international
                  collaboration and communication skills.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Project Management", "Software Engineering", "AI", "Agile", "Cross-Cultural Collaboration"].map(
                    (skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ),
                  )}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="font-serif text-xl mb-2">Student Intern Trainee</CardTitle>
                    <CardDescription className="text-primary font-semibold text-base mb-2">
                      DRDO - Centre for Artificial Intelligence and Robotics (CAIR)
                    </CardDescription>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        Jan 2025 - Jun 2025
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        Bengaluru, India
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    Defense Research
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Contributed to cutting-edge defense research by designing user-centric interfaces for AI-based
                  performance evaluation systems. Collaborated with senior researchers on interactive prototypes,
                  focusing on usability, accessibility, and scalable full-stack integration for institutional workflows.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["UI/UX Design", "AI Systems", "Prototyping", "Accessibility", "Defense Technology"].map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="achievements" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold font-serif mb-4">Achievements & Certifications</h3>
            <p className="text-lg text-muted-foreground">Continuous learning and professional development</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="text-center border-0 shadow-md">
              <CardHeader>
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-lg">Academic Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary mb-2">8.39 CGPA</p>
                <p className="text-sm text-muted-foreground">M.Tech Computer Science & Engineering</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-md">
              <CardHeader>
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-lg">PMBOK Certification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">Toshiba Software India</p>
                <p className="text-xs text-muted-foreground">Jun 2025 - Jul 2025</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-md">
              <CardHeader>
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-lg">Software Testing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">NPTEL Certification</p>
                <p className="text-xs text-muted-foreground">Jul 2024 - Oct 2024</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-md">
              <CardHeader>
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-lg">Full Stack Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">JSPIDERS Training Center</p>
                <p className="text-xs text-muted-foreground">Apr 2022 - Mar 2023</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-md">
              <CardHeader>
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-lg">Research Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary mb-2">95%</p>
                <p className="text-sm text-muted-foreground">ML Model Accuracy Achievement</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-md">
              <CardHeader>
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-lg">Performance Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary mb-2">50%</p>
                <p className="text-sm text-muted-foreground">API Response Time Improvement</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h3 className="text-4xl font-bold font-serif mb-6">Let's Build Something Amazing Together</h3>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            I'm actively seeking full-time opportunities where I can contribute my technical expertise and passion for
            innovation. Whether you're looking for a dedicated software engineer, AI/ML specialist, or a collaborative
            team member, I'd love to discuss how we can create impactful solutions together.
          </p>
          <div className="flex items-center justify-center gap-6 mb-8">
            <Button size="lg" asChild className="px-8">
              <a href="mailto:harini.lts8@gmail.com" className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Email Me
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="px-8 bg-transparent">
              <a href="https://www.linkedin.com/in/harini-lakshmanan-04/" className="flex items-center gap-2">
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="px-8 bg-transparent">
              <a href="https://github.com/Harini410" className="flex items-center gap-2">
                <Github className="h-5 w-5" />
                GitHub
              </a>
            </Button>
          </div>
          <div className="bg-card/50 rounded-lg p-6 inline-block">
            <p className="text-muted-foreground mb-2">📱 +91 8884916059</p>
            <p className="text-muted-foreground">📍 Available for opportunities in Bengaluru and remote positions</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-4 bg-card/50">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-muted-foreground">© 2025 Harini L. Crafted with passion using Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}
