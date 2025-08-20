import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, MapPin, Calendar, GraduationCap, Award, Target, TrendingUp, Phone, FileText  } from "lucide-react"


export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm">
  <div className="container mx-auto px-4 py-4">
    <nav className="flex flex-col items-center gap-4">
      {/* Centered Name */}
     <h1 className="text-5xl md:text-6xl font-bold font-serif text-primary text-center">
  Harini L
</h1>
      {/* Contact Info with Icons */}
      <div className="flex flex-wrap justify-center gap-6 text-sm text-primary">
        <a href="mailto:harini.lts8@gmail.com" className="flex items-center gap-1 hover:underline">
          <Mail className="h-4 w-4" /> Email
        </a>
        <span className="flex items-center gap-1">
          <Phone className="h-4 w-4" /> +91 8884916059
        </span>
        <a href="https://www.linkedin.com/in/harini-lakshmanan-04/" className="flex items-center gap-1 hover:underline">
          <Linkedin className="h-4 w-4" /> LinkedIn
        </a>
        <a href="https://github.com/Harini410" className="flex items-center gap-1 hover:underline">
          <Github className="h-4 w-4" /> GitHub
        </a>
        <a href="https://drive.google.com/file/d/1FnvOO7hrTPFjUTirG4wpKU2pukDFIf6O/view?usp=sharing" className="flex items-center gap-1 hover:underline">
          <ExternalLink className="h-4 w-4" /> Resume
        </a>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-wrap justify-center gap-4 mt-2">
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
      Software Engineer 
    </h2>
    <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
      Passionate Master's student at <strong>UVCE, Bengaluru</strong> in Computer Science Engineering with proven expertise in Machine Learning,
      Full-Stack Development, and building intelligent systems. Committed to leveraging cutting-edge technology to
      solve complex real-world challenges and drive innovation.
    </p>
    <div className="flex items-center justify-center gap-6 mb-10 flex-wrap">
      <div className="flex items-center gap-2 text-muted-foreground bg-card/50 px-4 py-2 rounded-full">
        <GraduationCap className="h-4 w-4" />
        <span>M.Tech CSE (IT) – UVCE, Bengaluru | CGPA: 8.39</span>
      </div>
      <div className="flex items-center gap-2 text-muted-foreground bg-card/50 px-4 py-2 rounded-full">
        <MapPin className="h-4 w-4" />
        <span>Bengaluru, India</span>
      </div>
    </div>
    <div className="flex items-center justify-center gap-4">
      <Button size="lg" asChild className="px-8">
        <a href="#projects">Explore My Work</a>
      </Button>
            <Button size="lg" variant="secondary" asChild className="px-8 bg-green-500 text-white">
        <a href="https://cyberbullying-detection-eta.vercel.app/" target="_blank" rel="noopener noreferrer">
          Cyberbullying Demo
        </a>
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

    <div className="grid lg:grid-cols-2 gap-12">
      {/* Left Side: About & Career */}
      <div className="space-y-8 flex flex-col justify-center">
        <div>
          <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" />
            Professional Mission
          </h4>
          <p className="text-muted-foreground leading-relaxed">
            As an aspiring software engineer with a strong foundation in AI/ML and full-stack development, I am
            committed to building innovative solutions that make a meaningful impact. My journey from achieving a
            7.2 CGPA in my Bachelor's to maintaining an 8.39 CGPA in my Master's reflects my dedication to
            continuous learning and excellence. I thrive in environments where I can explore emerging technologies,
            implement practical solutions, and collaborate with diverse teams to drive innovation.
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
            environments. I aim to leverage my skills to create scalable, intelligent solutions that make a positive
            difference in people's lives and the technology landscape.
          </p>
        </div>
      </div>

      {/* Right Side: Core Competencies */}
      <div className="flex flex-col justify-center">
        <h4 className="text-xl font-semibold mb-6">Core Competencies</h4>
        <div className="space-y-4">

          {/* Programming Languages */}
          <div>
            <p className="text-sm font-medium mb-3 text-primary">Programming Languages</p>
            <div className="flex flex-wrap gap-2">
              {["Java","Python","C","C++","SQL","JavaScript","HTML","CSS"].map((skill) => (
                <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>
              ))}
            </div>
          </div>

          {/* Frameworks & Tools */}
          <div>
            <p className="text-sm font-medium mb-3 text-primary">Frameworks & Tools</p>
            <div className="flex flex-wrap gap-2">
              {[
                "Spring Framework",
                "Hibernate",
                "ReactJS (Beginner)",
                "WordPress",
                "Elementor",
                "IntelliJ IDEA",
                "Eclipse",
                "Jupyter Notebook",
                "Git",
                "Spring Boot",
                "H2 Database",
                "MySQL"
              ].map((skill) => (
                <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>
              ))}
            </div>
          </div>

          {/* Operating Systems */}
          <div>
            <p className="text-sm font-medium mb-3 text-primary">Operating Systems</p>
            <div className="flex flex-wrap gap-2">
              {["Windows"].map((skill) => (
                <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>
              ))}
            </div>
          </div>

          {/* CS Fundamentals */}
          <div>
            <p className="text-sm font-medium mb-3 text-primary">CS Fundamentals</p>
            <div className="flex flex-wrap gap-2">
              {[
                "DSA",
                "OOP",
                "SDLC",
                "Operating System Fundamentals",
                "DBMS",
                "Project Management",
                "Agile Methodology",
                "Requirement Analysis & Estimation"
              ].map((skill) => (
                <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>
              ))}
            </div>
          </div>

          {/* AI/ML Skills from Projects */}
          <div>
            <p className="text-sm font-medium mb-3 text-primary">AI/ML Skills</p>
            <div className="flex flex-wrap gap-2">
              {[
                "BERT",
                "RoBERTa",
                "Federated Learning",
                "Hugging Face",
                "NLP",
                "PyTorch",
                "Emotion-based Features",
                "Sentiment Analysis"
              ].map((skill) => (
                <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>
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

      {/* Cyberbullying Detection */}
      <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
        <CardHeader className="pb-4">
          <CardTitle className="font-serif text-xl mb-2">
            Cyberbullying Detection in Social Media
          </CardTitle>
          <CardDescription className="text-sm flex items-center gap-2">
            <Calendar className="h-4 w-4" /> Aug 2024 - Jun 2025
          </CardDescription>
          <div className="flex items-center gap-4 mt-2">
            <a href="https://cyberbullying-detection-eta.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
              Live Demo
            </a>
            <a href="https://github.com/Harini410/Cyberbullying-detection" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
              GitHub
            </a>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Engineered a privacy-preserving <strong>federated RoBERTa model</strong> integrating <strong>emotion-based and contextual embeddings</strong> for <strong>95% accuracy</strong>. Led end-to-end development from data preprocessing to evaluation, ensuring compliance with data protection standards.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Python", "RoBERTa", "Federated Learning", "NLP", "PyTorch"].map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* AI Resume Screener */}
      <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
        <CardHeader className="pb-4">
          <CardTitle className="font-serif text-xl mb-2">
            AI Resume Screener Web Application
          </CardTitle>
          <CardDescription className="text-sm flex items-center gap-2">
            <Calendar className="h-4 w-4" /> Apr 2025 - Jul 2025
          </CardDescription>
          <div className="flex items-center gap-4 mt-2">
            <a href="https://v0-ai-resume-screener-smoky.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
              Live Demo
            </a>
            <a href="https://github.com/Harini410/AI-Resume-Screener" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
              GitHub
            </a>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Built a <strong>Next.js 14 web app</strong> that extracts text from resumes and job descriptions and performs <strong>AI-powered semantic analysis</strong>. Calculated <strong>resume-job match scores</strong> (70% semantic + 30% keyword) and visualized results with circular gauges and color-coded skill chips.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Next.js 14", "Tailwind CSS", "TensorFlow.js", "Semantic Analysis", "React"].map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Smart Complaint Portal */}
      <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
        <CardHeader className="pb-4">
          <CardTitle className="font-serif text-xl mb-2">
            Smart Complaint Management Portal
          </CardTitle>
          <CardDescription className="text-sm flex items-center gap-2">
            <Calendar className="h-4 w-4" /> Jan 2024 - Mar 2024
          </CardDescription>
          <div className="flex items-center gap-4 mt-2">
            <a href="https://github.com/Harini410/Fullstack-complaint-portal" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
              GitHub
            </a>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Designed and deployed a full-stack portal using <strong>Spring Boot, Hibernate, React.js, and MySQL</strong> for complaint tracking. Implemented secure authentication and centralized tracking, improving system reliability by <strong>25%</strong>.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Spring Boot", "Hibernate", "React.js", "MySQL", "Full-Stack"].map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* E-commerce Application */}
      <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
        <CardHeader className="pb-4">
          <CardTitle className="font-serif text-xl mb-2">
            E-commerce Application using Spring Boot
          </CardTitle>
          <CardDescription className="text-sm flex items-center gap-2">
            <Calendar className="h-4 w-4" /> Apr 2024 - Jun 2024
          </CardDescription>
          <div className="flex items-center gap-4 mt-2">
            <a href="https://github.com/Harini410/E-commerce-application-using-Spring-Boot" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
              GitHub
            </a>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Built a fully-functional, <strong>scalable e-commerce application</strong> with optimized <strong>RESTful APIs and database queries</strong>. Implemented key features such as product catalog, shopping cart, order tracking, and secure checkout.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Spring Boot", "REST API", "MySQL", "Performance Optimization", "Scalability"].map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
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

      {/* Toshiba Software India */}
      <Card className="border-0 shadow-lg">
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <CardTitle className="font-serif text-xl mb-2">
                <a
                  href="https://drive.google.com/file/d/12-qbiWk395zQNifNbny0t0CEr5ti0Thk/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-primary"
                >
                  Toshiba Software India Pvt. Ltd. – Japanese Trainee Program
                </a>
              </CardTitle>
              <CardDescription className="text-primary font-semibold text-base mb-2">
                Indian Buddy – Student Intern
              </CardDescription>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  Jun 2025 – Jul 2025
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
          <ul className="list-disc pl-5 text-muted-foreground space-y-2">
            <li>
              Participated in a 1-month cross-cultural training program alongside Japanese engineers, covering <b>PMBOK Project Management</b>, <b>Software Engineering</b>, <b>AI</b>, <b>Agile Methodology</b>, and <b>Requirement Analysis & Estimation</b>.
            </li>
            <li>
              Engaged in interactive case studies and collaborative sessions, enhancing technical skills, communication, and global teamwork experience.
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* DRDO – CAIR */}
      <Card className="border-0 shadow-lg">
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <CardTitle className="font-serif text-xl mb-2">
                <a
                  href="https://drive.google.com/file/d/1I_B8fyGlng8WRsnosvQomWHWBlW5_pzX/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-primary"
                >
                  DRDO – Centre for Artificial Intelligence and Robotics (CAIR)
                </a>
              </CardTitle>
              <CardDescription className="text-primary font-semibold text-base mb-2">
                Student Intern Trainee
              </CardDescription>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  Jan 2025 – Jun 2025
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
          <ul className="list-disc pl-5 text-muted-foreground space-y-2">
            <li>
              Designed user-centric interfaces for an <b>AI-based performance evaluation system</b>, tailored to institutional workflows.
            </li>
            <li>
              Collaborated on <b>interactive prototypes</b> with focus on usability, accessibility, and future full-stack integration.
            </li>
          </ul>
        </CardContent>
      </Card>

    </div>
  </div>
</section>


{/* Achievements & Certifications Section */}
<section id="achievements" className="py-20 px-4 bg-muted/30">
  <div className="container mx-auto max-w-5xl">
    <div className="text-center mb-16">
      <h3 className="text-4xl font-bold font-serif mb-4">Achievements & Certifications</h3>
      <p className="text-lg text-muted-foreground">Continuous learning and professional development</p>
    </div>

    {/* Grid of main achievements */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* DRDO Internship */}
      <Card className="text-center border-0 shadow-md h-full">
        <CardHeader>
          <Award className="h-12 w-12 text-primary mx-auto mb-4" />
          <CardTitle className="text-lg">DRDO CAIR Internship</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-2">
            <a 
              href="https://drive.google.com/file/d/1I_B8fyGlng8WRsnosvQomWHWBlW5_pzX/view?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:underline text-primary"
            >
              Completed internship at Defence Research and Development Organisation (DRDO) – Centre for Artificial Intelligence and Robotics (Jan 2025 – Jun 2025)
            </a>
          </p>
        </CardContent>
      </Card>

      {/* IEEE Conference */}
      <Card className="text-center border-0 shadow-md h-full">
        <CardHeader>
          <Award className="h-12 w-12 text-primary mx-auto mb-4" />
          <CardTitle className="text-lg">IEEE Conference Presentation</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-2">
            <a 
              href="https://drive.google.com/file/d/1awP9khfIb3BWgK2ALano5ieLvKHNS8mf/view?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:underline text-primary"
            >
              Presented “Deep Learning-Based Cyberbullying Detection” at IEEE Conference, Presidency University, Bengaluru, Jul 2025
            </a>
          </p>
        </CardContent>
      </Card>

      {/* PMBOK Certification */}
      <Card className="text-center border-0 shadow-md h-full">
        <CardHeader>
          <Award className="h-12 w-12 text-primary mx-auto mb-4" />
          <CardTitle className="text-lg">PMBOK Certification</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-2">
            <a 
              href="https://drive.google.com/file/d/12-qbiWk395zQNifNbny0t0CEr5ti0Thk/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:underline text-primary"
            >
              Certified in PMBOK-based Software Project Management – Toshiba Software (Jun 2025 – Jul 2025)
            </a>
          </p>
        </CardContent>
      </Card>

      {/* Software Testing */}
      <Card className="text-center border-0 shadow-md h-full">
        <CardHeader>
          <Award className="h-12 w-12 text-primary mx-auto mb-4" />
          <CardTitle className="text-lg">Software Testing</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-2">
            <a 
              href="https://drive.google.com/file/d/1TZyZvl5HiDj390lw11bnyDYVS1gplW17/view?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:underline text-primary"
            >
              Certified in Software Testing – NPTEL (Jul 2024 – Oct 2024)
            </a>
          </p>
        </CardContent>
      </Card>

      {/* Full Stack Development */}
      <Card className="text-center border-0 shadow-md h-full">
        <CardHeader>
          <Award className="h-12 w-12 text-primary mx-auto mb-4" />
          <CardTitle className="text-lg">Full Stack Development</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-2">
            <a 
              href="https://drive.google.com/file/d/1RTtCGOrI2vyXH6j_xHPgi3w3-1oqNjTv/view?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:underline text-primary"
            >
              Certified in Full Stack Java Development – JSpiders Training Center (Apr 2022 – Mar 2023)
            </a>
          </p>
        </CardContent>
      </Card>

      {/* Associate Data Scientist */}
      <Card className="text-center border-0 shadow-md h-full">
        <CardHeader>
          <Award className="h-12 w-12 text-primary mx-auto mb-4" />
          <CardTitle className="text-lg">Data Science Internship</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-2">
            <a 
              href="https://drive.google.com/file/d/1HUf5xs7Rev2AaUFj64330AUcTSptBSh9/view?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:underline text-primary"
            >
              Completed Associate Data Scientist internship – Gloify (Sep 2021 – Nov 2021)
            </a>
          </p>
        </CardContent>
      </Card>
    </div>

    {/* Other Certificates centered */}
    <div className="flex justify-center mt-12">
      <Card className="text-center border-0 shadow-md w-full max-w-md">
        <CardHeader>
          <Award className="h-12 w-12 text-primary mx-auto mb-4" />
          <CardTitle className="text-lg">Other Certificates</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-2">
            <a 
              href="https://drive.google.com/drive/folders/1FmX4R-KtWO3z30mpmEgomEKlCCxiFkxl?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:underline text-primary font-semibold"
            >
              View other certificates here
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  </div>
</section>
{/* Contact Section */}
<section id="contact" className="py-20 px-4 bg-muted/30">
  <div className="container mx-auto max-w-3xl text-center">
    <h3 className="text-4xl font-bold font-serif mb-6">Let's Build Something Amazing Together</h3>
    <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
      I'm actively seeking full-time opportunities where I can contribute my technical expertise and passion for
      innovation. Let's create impactful solutions together.
    </p>

    {/* Single Line Contact */}
    <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
      <a
        href="mailto:harini.lts8@gmail.com"
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-100 text-green-800 hover:bg-green-200 transition"
      >
        <Mail className="h-5 w-5" /> Email
      </a>

      <a
        href="https://www.linkedin.com/in/harini-lakshmanan-04/"
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-100 text-green-800 hover:bg-green-200 transition"
      >
        <Linkedin className="h-5 w-5" /> LinkedIn
      </a>

      <a
        href="https://github.com/Harini410"
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-100 text-green-800 hover:bg-green-200 transition"
      >
        <Github className="h-5 w-5" /> GitHub
      </a>

      <a
        href="https://drive.google.com/file/d/1FnvOO7hrTPFjUTirG4wpKU2pukDFIf6O/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-100 text-green-800 hover:bg-green-200 transition"
      >
        <FileText className="h-5 w-5" /> Resume
      </a>

      <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-100 text-green-800">
        <Phone className="h-5 w-5" /> +91 8884916059
      </div>
    </div>
  </div>
</section>





      {/* Footer */}
      <footer className="border-t py-8 px-4 bg-card/50">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-muted-foreground">© 2025 Harini L. </p>
        </div>
      </footer>
    </div>
  )
}
