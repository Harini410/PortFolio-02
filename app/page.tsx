import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, MapPin, Calendar, GraduationCap, Award, Target, TrendingUp, Phone, FileText, Briefcase  } from "lucide-react"


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
        <a href="https://drive.google.com/file/d/1XrVqkvT1YqdDxdQ10ElTDo9Sr2bUhC4J/view?usp=sharing" className="flex items-center gap-1 hover:underline">
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
      Software Engineer with <strong>9 months of professional experience at Dell Technologies</strong>,
      specializing in <strong>C#/.NET development, Windows recovery solutions,
      automation, and AI-assisted software development</strong>. Experienced in
      building and debugging software systems while applying modern development
      practices to solve real-world engineering problems.
    </p>

    <div className="flex items-center justify-center gap-6 mb-10 flex-wrap">

      <div className="flex items-center gap-2 text-muted-foreground bg-card/50 px-4 py-2 rounded-full">
        <Briefcase className="h-4 w-4" />
        <span>Dell Technologies | Software Engineer</span>
      </div>

      <div className="flex items-center gap-2 text-muted-foreground bg-card/50 px-4 py-2 rounded-full">
        <GraduationCap className="h-4 w-4" />
        <span>M.Tech CSE (IT) – UVCE | CGPA: 8.70</span>
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

      <Button
        size="lg"
        variant="outline"
        asChild
        className="px-8 bg-transparent"
      >
        <a href="#contact">Let's Connect</a>
      </Button>
    </div>

  </div>
</section>

{/* About Section */}
<section id="about" className="py-20 px-4">
  <div className="container mx-auto max-w-6xl">

    <div className="text-center mb-16">
      <h3 className="text-4xl font-bold font-serif mb-4">
        About Me
      </h3>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Software engineering across systems, AI, and full-stack development
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-12">

      {/* Left Side: Professional Profile */}
      <div className="space-y-8 flex flex-col justify-center">

        {/* Professional Profile */}
        <div>
          <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" />
            Professional Profile
          </h4>

          <p className="text-muted-foreground leading-relaxed">
            Software Engineer with <strong>9 months of professional
            experience at Dell Technologies</strong>, developing
            <strong> C#/.NET applications</strong> and contributing to
            <strong> Windows OS Recovery Image engineering</strong>.
            Experienced in <strong>WinPE, WinRE, WIM, DISM, PowerShell,
            Windows internals, debugging, automation, and recovery
            workflows</strong>.
          </p>
        </div>

        {/* Engineering Focus */}
        <div>
          <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            Engineering Focus
          </h4>

          <p className="text-muted-foreground leading-relaxed">
            Focused on building reliable software while applying
            <strong> AI-assisted engineering practices</strong>. Experienced
            with <strong>Claude Code, LLM-based coding agents, and
            Spec-Driven Development (SDD)</strong> for codebase exploration,
            implementation, debugging, refactoring, and test generation.
            Hands-on projects span <strong>Agentic AI, cybersecurity,
            NLP, and full-stack development</strong>.
          </p>
        </div>

        {/* Education */}
        <div>
          <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-primary" />
            Education
          </h4>

          <p className="text-muted-foreground leading-relaxed">
            M.Tech in <strong>Computer Science & Engineering (Information
            Technology)</strong> from <strong>UVCE, Bengaluru</strong> with
            a <strong>CGPA of 8.70/10</strong>, building on a Bachelor's
            background in Information Science & Engineering.
          </p>
        </div>

      </div>

      {/* Right Side: Core Competencies */}
      <div className="flex flex-col justify-center">

        <h4 className="text-xl font-semibold mb-6">
          Core Competencies
        </h4>

        <div className="space-y-4">

          {/* AI & AI-Assisted Engineering */}
          <div>
            <p className="text-sm font-medium mb-3 text-primary">
              AI & AI-Assisted Engineering
            </p>

            <div className="flex flex-wrap gap-2">
              {[
                "Claude Code",
                "Agentic AI",
                "LLM-Based Coding Agents",
                "Spec-Driven Development",
                "Prompt Engineering",
                "AI-Assisted Code Generation",
                "Debugging & Test Generation"
              ].map((skill) => (
                <Badge key={skill} variant="secondary" className="text-xs">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Systems & .NET */}
          <div>
            <p className="text-sm font-medium mb-3 text-primary">
              Systems & .NET
            </p>

            <div className="flex flex-wrap gap-2">
              {[
                "C#",
                ".NET Core",
                "WPF",
                "XAML",
                "MVC",
                "MVVM",
                "Windows Internals",
                "BIOS/UEFI",
                "WinPE",
                "WinRE"
              ].map((skill) => (
                <Badge key={skill} variant="secondary" className="text-xs">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Automation */}
          <div>
            <p className="text-sm font-medium mb-3 text-primary">
              Automation & DevOps
            </p>

            <div className="flex flex-wrap gap-2">
              {[
                "PowerShell",
                "Batch Scripting",
                "DISM",
                "Git",
                "GitHub",
                "CI/CD",
                "Build & Deployment Pipelines"
              ].map((skill) => (
                <Badge key={skill} variant="secondary" className="text-xs">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Full Stack */}
          <div>
            <p className="text-sm font-medium mb-3 text-primary">
              Full-Stack Development
            </p>

            <div className="flex flex-wrap gap-2">
              {[
                "Java",
                "Spring Boot",
                "Spring Security",
                "Hibernate",
                "React.js",
                "Node.js",
                "Express.js",
                "REST APIs",
                "MySQL",
                "MongoDB"
              ].map((skill) => (
                <Badge key={skill} variant="secondary" className="text-xs">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* AI / ML */}
          <div>
            <p className="text-sm font-medium mb-3 text-primary">
              AI / Machine Learning
            </p>

            <div className="flex flex-wrap gap-2">
              {[
                "Python",
                "NLP",
                "RoBERTa",
                "Federated Learning",
                "PyTorch",
                "Hugging Face"
              ].map((skill) => (
                <Badge key={skill} variant="secondary" className="text-xs">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Engineering Practices */}
          <div>
            <p className="text-sm font-medium mb-3 text-primary">
              Engineering Practices
            </p>

            <div className="flex flex-wrap gap-2">
              {[
                "OOP",
                "DSA",
                "Agile/Scrum",
                "Jira",
                "Maven",
                "npm",
                "Problem Solving",
                "Cross-Functional Collaboration"
              ].map((skill) => (
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

{/* Experience Section */}
<section id="experience" className="py-20 px-4">
  <div className="container mx-auto max-w-5xl">
    <div className="text-center mb-16">
      <h3 className="text-4xl font-bold font-serif mb-4">
        Professional Experience
      </h3>
      <p className="text-lg text-muted-foreground">
        Building software solutions across enterprise, research, and full-stack development
      </p>
    </div>

    <div className="space-y-8">

      {/* Dell Technologies */}
      <Card className="border-0 shadow-lg">
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <CardTitle className="font-serif text-xl mb-2">
                Dell Technologies
              </CardTitle>

              <CardDescription className="text-primary font-semibold text-base mb-2">
                Software Engineer
              </CardDescription>

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  Nov 2025 – Sep 2026
                </div>

                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  Bengaluru, India
                </div>
              </div>
            </div>

            <Badge
              variant="secondary"
              className="bg-blue-100 text-blue-800"
            >
              Software Engineering
            </Badge>
          </div>
        </CardHeader>

        <CardContent>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2">

            <li>
              Contributed to <b>OS Recovery Image (OSRI)</b> builds for
              Windows 11 ARM64, integrating drivers, language packs,
              inbox applications, Windows components, and Dell content.
            </li>

            <li>
              Used <b>WIM, WinPE, WinRE, DISM, PowerShell, and Batch
              scripting</b> for image customization, automation, recovery,
              and ISO generation.
            </li>

            <li>
              Developed <b>C#/.NET Windows recovery applications</b>
              supporting Hardware Scan, Repair, Reset, Backup, and Disk
              Cloning workflows.
            </li>

            <li>
              Implemented bug fixes and new requirements across recovery
              workflows and features, including <b>issue reproduction,
              snapshot-based debugging, and root cause analysis</b> using
              snapshots and logs.
            </li>

            <li>
              Used <b>GitHub and Jira</b> for source control, development,
              collaboration, and issue tracking.
            </li>

            <li>
              Leveraged <b>Claude Code</b> as an AI coding agent for
              codebase exploration, implementation, debugging, refactoring,
              and test generation. Applied <b>Spec-Driven Development
              (SDD)</b> to structure requirements, guide AI-assisted
              development, and validate implementations through testing
              and code review.
            </li>

          </ul>

          <div className="flex flex-wrap gap-2 mt-5">
            {[
              "C#",
              ".NET",
              "Windows Recovery",
              "WinPE",
              "WinRE",
              "DISM",
              "PowerShell",
              "GitHub",
              "Jira",
              "Claude Code",
              "SDD",
            ].map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="text-xs"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

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

            <Badge
              variant="secondary"
              className="bg-blue-100 text-blue-800"
            >
              Cross-Cultural Training
            </Badge>
          </div>
        </CardHeader>

        <CardContent>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2">
            <li>
              Participated in a 1-month cross-cultural training program
              alongside Japanese engineers, covering <b>PMBOK Project
              Management</b>, <b>Software Engineering</b>, <b>AI</b>,
              <b>Agile Methodology</b>, and <b>Requirement Analysis &
              Estimation</b>.
            </li>

            <li>
              Engaged in interactive case studies and collaborative
              sessions, enhancing technical skills, communication, and
              global teamwork experience.
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

            <Badge
              variant="secondary"
              className="bg-green-100 text-green-800"
            >
              Defense Research
            </Badge>
          </div>
        </CardHeader>

        <CardContent>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2">
            <li>
              Designed user-centric interfaces for an{" "}
              <b>AI-based performance evaluation system</b>, tailored to
              institutional workflows.
            </li>

            <li>
              Collaborated on <b>interactive prototypes</b> with focus on
              usability, accessibility, and future full-stack integration.
            </li>
          </ul>
        </CardContent>
      </Card>

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

     {/* Agentic AI Hackathon - Winner */}
<Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
  <CardHeader className="pb-4">
    <CardTitle className="font-serif text-xl mb-2 flex items-center gap-2">
      AI-Powered Ransomware Recovery Prioritizer
      <Badge variant="secondary" className="text-xs">
        Winner
      </Badge>
    </CardTitle>

    <CardDescription className="text-sm flex items-center gap-2">
      <Calendar className="h-4 w-4" /> Jan 2026
    </CardDescription>

    <div className="flex items-center gap-4 mt-2">
      <a
        href="https://drive.google.com/file/d/1Rh1eQYfv5-wvQTLrUSsV5FH_1h11KYXa/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-primary hover:underline"
      >
        Certificate
      </a>
    </div>
  </CardHeader>

  <CardContent>
    <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-5">
      <li>
        Designed and prototyped an <strong>AI-driven ransomware recovery
        decision-support system</strong> combining <strong>Agentic AI</strong>
        with graph-based network analysis to prioritize recovery of critical
        enterprise assets.
      </li>

      <li>
        Built an interactive <strong>attack-surface/network graph using
        NetworkX</strong> to visualize infection paths, asset dependencies,
        connectivity, and potential blast radius.
      </li>

      <li>
        Developed a dynamic <strong>risk-scoring and recovery prioritization
        algorithm</strong> incorporating business criticality, infection
        status, and network connectivity to identify the highest-impact
        assets for remediation.
      </li>

      <li>
        Integrated <strong>Llama 3.1 via Ollama</strong> to power an
        autonomous recovery agent capable of generating context-aware
        remediation plans such as <strong>isolation, reimaging, and backup
        restoration</strong>.
      </li>

      <li>
        Implemented a <strong>Python-based application and interactive
        dashboard</strong> providing ransomware impact analysis, infection
        trends, prioritized recovery queues, vulnerability reporting, and
        AI-generated action plans.
      </li>
    </ul>

    <div className="flex flex-wrap gap-2">
      {[
        "Python",
        "Agentic AI",
        "Llama 3.1",
        "Ollama",
        "NetworkX",
        "Graph-Based Network Analysis",
        "Risk Scoring",
        "Cybersecurity",
      ].map((tech) => (
        <Badge key={tech} variant="outline" className="text-xs">
          {tech}
        </Badge>
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
            <Calendar className="h-4 w-4" /> Sept 2026
          </CardDescription>

          <div className="flex items-center gap-4 mt-2">
            <a
              href="https://v0-ai-resume-screener-smoky.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline"
            >
              Live Demo
            </a>

            <a
              href="https://github.com/Harini410/AI-Resume-Screener"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline"
            >
              GitHub
            </a>
          </div>
        </CardHeader>

        <CardContent>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Built an <strong>AI-powered web application</strong> for automated
            resume analysis and candidate-to-job matching. Developed modular{" "}
            <strong>Node.js backend workflows</strong> and{" "}
            <strong>REST APIs</strong> to support resume processing and
            automated matching.
          </p>

          <div className="flex flex-wrap gap-2">
            {[
              "Node.js",
              "REST APIs",
              "AI",
              "Resume Analysis",
              "Candidate Matching",
            ].map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
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
            <Calendar className="h-4 w-4" /> Sept 2026
          </CardDescription>

          <div className="flex items-center gap-4 mt-2">
            <a
              href="https://github.com/Harini410/Fullstack-complaint-portal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline"
            >
              GitHub
            </a>
          </div>
        </CardHeader>

        <CardContent>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Developed a full-stack <strong>complaint management portal</strong>{" "}
            using <strong>Java, Spring Boot, Hibernate, MySQL, and React.js</strong>.
            Implemented <strong>role-based authentication</strong> with Spring
            Security, complaint tracking, status management, and REST API
            integration.
          </p>

          <div className="flex flex-wrap gap-2">
            {[
              "Java",
              "Spring Boot",
              "Hibernate",
              "Spring Security",
              "React.js",
              "MySQL",
              "REST APIs",
            ].map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Cyberbullying Detection */}
      <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
        <CardHeader className="pb-4">
          <CardTitle className="font-serif text-xl mb-2">
            Cyberbullying Detection in Social Media
          </CardTitle>

          <CardDescription className="text-sm flex items-center gap-2">
            <Calendar className="h-4 w-4" /> Jan 2026
          </CardDescription>

          <div className="flex items-center gap-4 mt-2">
            <a
              href="https://cyberbullying-detection-eta.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline"
            >
              Live Demo
            </a>

            <a
              href="https://github.com/Harini410/Cyberbullying-detection"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline"
            >
              GitHub
            </a>
          </div>
        </CardHeader>

        <CardContent>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Engineered a privacy-preserving{" "}
            <strong>federated RoBERTa model</strong> integrating{" "}
            <strong>emotion-based and contextual embeddings</strong> for{" "}
            <strong>95% accuracy</strong>. Led end-to-end development from data
            preprocessing to evaluation, ensuring compliance with data
            protection standards.
          </p>

          <div className="flex flex-wrap gap-2">
            {[
              "Python",
              "RoBERTa",
              "Federated Learning",
              "NLP",
              "PyTorch",
            ].map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
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
            <Calendar className="h-4 w-4" /> Jun 2025
          </CardDescription>

          <div className="flex items-center gap-4 mt-2">
            <a
              href="https://github.com/Harini410/E-commerce-application-using-Spring-Boot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline"
            >
              GitHub
            </a>
          </div>
        </CardHeader>

        <CardContent>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Built a fully-functional,{" "}
            <strong>scalable e-commerce application</strong> with optimized{" "}
            <strong>RESTful APIs and database queries</strong>. Implemented key
            features such as product catalog, shopping cart, order tracking,
            and secure checkout.
          </p>

          <div className="flex flex-wrap gap-2">
            {[
              "Spring Boot",
              "REST API",
              "MySQL",
              "Performance Optimization",
              "Scalability",
            ].map((tech) => (
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


      


{/* Achievements & Certifications Section */}
<section id="achievements" className="py-20 px-4 bg-muted/30">
  <div className="container mx-auto max-w-5xl">
    <div className="text-center mb-16">
      <h3 className="text-4xl font-bold font-serif mb-4">
        Achievements & Certifications
      </h3>
      <p className="text-lg text-muted-foreground">
        Continuous learning, professional development, and recognition
      </p>
    </div>

    {/* Grid of main achievements */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

     {/* Agentic AI Hackathon */}
<Card className="text-center border-0 shadow-md h-full">
  <CardHeader>
    <Award className="h-12 w-12 text-primary mx-auto mb-4" />
    <CardTitle className="text-lg">
      Agentic AI Hackathon – Winner
    </CardTitle>
  </CardHeader>
  <CardContent>
    <p className="text-sm text-muted-foreground mb-2">
      <a
        href="https://drive.google.com/file/d/1Rh1eQYfv5-wvQTLrUSsV5FH_1h11KYXa/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline text-primary"
      >
        Winner of the <strong>Agentic AI Hackathon</strong> at Dell
        Technologies, led by the <strong>India Innovation Forum and AI
        Academy</strong> (Jan 2026)
      </a>
    </p>
  </CardContent>
</Card>

      {/* DRDO Internship */}
      <Card className="text-center border-0 shadow-md h-full">
        <CardHeader>
          <Award className="h-12 w-12 text-primary mx-auto mb-4" />
          <CardTitle className="text-lg">
            DRDO CAIR Internship
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-2">
            <a
              href="https://drive.google.com/file/d/1I_B8fyGlng8WRsnosvQomWHWBlW5_pzX/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-primary"
            >
              Completed internship at Defence Research and Development
              Organisation (DRDO) – Centre for Artificial Intelligence and
              Robotics (Jan 2025 – Jun 2025)
            </a>
          </p>
        </CardContent>
      </Card>

      {/* IEEE Conference */}
      <Card className="text-center border-0 shadow-md h-full">
        <CardHeader>
          <Award className="h-12 w-12 text-primary mx-auto mb-4" />
          <CardTitle className="text-lg">
            IEEE Conference Presentation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-2">
            <a
              href="https://drive.google.com/file/d/1awP9khfIb3BWgK2ALano5ieLvKHNS8mf/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-primary"
            >
              Presented “Deep Learning-Based Cyberbullying Detection” at IEEE
              Conference, Presidency University, Bengaluru, Jul 2025
            </a>
          </p>
        </CardContent>
      </Card>

      {/* PMBOK Certification */}
      <Card className="text-center border-0 shadow-md h-full">
        <CardHeader>
          <Award className="h-12 w-12 text-primary mx-auto mb-4" />
          <CardTitle className="text-lg">
            PMBOK Certification
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-2">
            <a
              href="https://drive.google.com/file/d/12-qbiWk395zQNifNbny0t0CEr5ti0Thk/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-primary"
            >
              Certified in PMBOK-based Software Project Management –
              Toshiba Software (Jun 2025 – Jul 2025)
            </a>
          </p>
        </CardContent>
      </Card>

      {/* Software Testing */}
      <Card className="text-center border-0 shadow-md h-full">
        <CardHeader>
          <Award className="h-12 w-12 text-primary mx-auto mb-4" />
          <CardTitle className="text-lg">
            Software Testing
          </CardTitle>
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
          <CardTitle className="text-lg">
            Full Stack Development
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-2">
            <a
              href="https://drive.google.com/file/d/1RTtCGOrI2vyXH6j_xHPgi3w3-1oqNjTv/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-primary"
            >
              Certified in Full Stack Java Development – JSpiders Training
              Center (Apr 2022 – Mar 2023)
            </a>
          </p>
        </CardContent>
      </Card>

      {/* Associate Data Scientist */}
      <Card className="text-center border-0 shadow-md h-full">
        <CardHeader>
          <Award className="h-12 w-12 text-primary mx-auto mb-4" />
          <CardTitle className="text-lg">
            Data Science Internship
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-2">
            <a
              href="https://drive.google.com/file/d/1HUf5xs7Rev2AaUFj64330AUcTSptBSh9/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-primary"
            >
              Completed Associate Data Scientist internship – Gloify
              (Sep 2021 – Nov 2021)
            </a>
          </p>
        </CardContent>
      </Card>



    {/* Other Certificates centered */}
    
      <Card className="text-center border-0 shadow-md h-full">
        <CardHeader>
          <Award className="h-12 w-12 text-primary mx-auto mb-4" />
          <CardTitle className="text-lg">
            Other Certificates
          </CardTitle>
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
        href="https://drive.google.com/file/d/1zZZpjD0_6yI9UFXIUXMvwMffgxWjcCzJ/view?usp=sharing"
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
