'use client';

import React from 'react';
import Image from 'next/image';
import {
  Workflow,
  Code2,
  Bot,
  ArrowRight,
  Layers,
  Terminal,
  Zap,
  GitBranch,
  FileCode,
  PlayCircle,
  BookOpen,
  GraduationCap,
  Lightbulb,
  Users,
  FolderGit,
  Mail,
  Send
} from 'lucide-react';
import styles from './page.module.css';

import Hero from '../../public/Hero.png';

const AlgoFlowLanding = () => {
  const [contactForm, setContactForm] = React.useState({ name: '', message: '' });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const { name, message } = contactForm;
    const subject = `AlgoFlow Inquiry from ${name}`;
    const body = `Name: ${name}\n\n${message}\n\n---\nSent via AlgoFlow Contact Form`;
    const mailtoLink = `mailto:ananthu.narashimman@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
    
    setTimeout(() => {
      setContactForm({ name: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        
        {/* Navigation */}
        <nav className={styles.navbar}>
          <div className={styles.logo}>
            <Workflow size={32} strokeWidth={2.5} />
            <span>ALGOFLOW</span>
          </div>

          <div className={styles.navLinks}>
            <a href="#home" className={`${styles.navItem} ${styles.navItemActive}`}>Home</a>
            <a href="#how-it-works" className={styles.navItem}>How it works</a>
            <a href="#capabilities" className={styles.navItem}>Capabilities</a>
            <a href="#contact" className={styles.navItem}>Contact</a>
          </div>

          <button className={styles.btnCta} onClick={() => window.location.href = '#contact'}>
            GET IN TOUCH
          </button>
        </nav>

        {/* Hero Section */}
        <section id="home" className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>
              Transform algorithms into{' '}
              <span className={`${styles.highlightPill} ${styles.pillPurple}`}>visual workflows</span>
              <br />
              with <span className={`${styles.highlightPill} ${styles.pillBlue}`}>AI-powered insights</span>
            </h1>

            <p className={styles.heroDesc}>
              An intelligent platform designed for developers and learners to visualize, 
              debug, and optimize algorithms. Experience seamless code-to-flowchart conversion 
              with real-time AI assistance in a focused, distraction-free workspace.
            </p>

            <button className={`${styles.btnCta} ${styles.btnPrimary}`} onClick={() => setShowModal(true)}>
              REQUEST EARLY ACCESS
            </button>
          </div>

          {/* Right Side - Hero Image */}
          <div className={styles.heroVisual}>
            <div className={styles.heroImageContainer}>
              <Image 
                src={Hero} 
                alt="AlgoFlow Platform Preview" 
                className={styles.heroImage}
                priority
              />
            </div>
          </div>
        </section>

        {/* Core Features */}
        <div className={styles.featuresDock}>
          
          {/* Card 1: Code Editor */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.iconBox}>
                <Code2 size={24} color="#ffb703" />
              </div>
              <div className={styles.cardTitle}>
                ADVANCED CODE EDITOR <ArrowRight size={16} />
              </div>
            </div>
            <p className={styles.cardDesc}>
              Professional Monaco-based editor with syntax highlighting, auto-completion, 
              and instant execution for Python and JavaScript with comprehensive test case support.
            </p>
          </div>

          {/* Card 2: AI Assistant */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.iconBox}>
                <Bot size={24} color="#8338ec" />
              </div>
              <div className={styles.cardTitle}>
                INTELLIGENT AI ASSISTANT <ArrowRight size={16} />
              </div>
            </div>
            <p className={styles.cardDesc}>
              Real-time debugging assistance, algorithmic optimization suggestions, 
              and complexity analysis powered by advanced AI to accelerate your learning.
            </p>
          </div>

          {/* Card 3: Visual Designer */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.iconBox}>
                <Layers size={24} color="#3a86ff" />
              </div>
              <div className={styles.cardTitle}>
                INTERACTIVE FLOWCHARTS <ArrowRight size={16} />
              </div>
            </div>
            <p className={styles.cardDesc}>
              Intuitive drag-and-drop flowchart designer with bidirectional code synchronization, 
              step-by-step execution visualization, and real-time logic validation.
            </p>
          </div>

        </div>

        {/* How It Works Section */}
        <section id="how-it-works" className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              <Terminal size={28} className={styles.sectionIcon} />
              HOW IT WORKS
            </h2>
            <div className={styles.sectionUnderline}></div>
          </div>

          <div className={styles.stepsGrid}>
            {/* Step 1 */}
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>01</div>
              <div className={styles.stepIconBox}>
                <FileCode size={32} />
              </div>
              <h3 className={styles.stepTitle}>DEVELOP YOUR ALGORITHM</h3>
              <p className={styles.stepDesc}>
                Begin by implementing your algorithm in Python or JavaScript using our 
                professional-grade editor. Leverage intelligent code completion, syntax validation, 
                and create comprehensive test cases to verify your solution.
              </p>
            </div>

            {/* Step 2 */}
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>02</div>
              <div className={styles.stepIconBox}>
                <GitBranch size={32} />
              </div>
              <h3 className={styles.stepTitle}>VISUALIZE & DESIGN</h3>
              <p className={styles.stepDesc}>
                Instantly transform your code into interactive flowcharts or design your logic 
                visually first. Our bidirectional sync ensures your code and diagrams remain 
                perfectly aligned as you iterate.
              </p>
            </div>

            {/* Step 3 */}
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>03</div>
              <div className={styles.stepIconBox}>
                <Bot size={32} />
              </div>
              <h3 className={styles.stepTitle}>LEVERAGE AI INSIGHTS</h3>
              <p className={styles.stepDesc}>
                Engage with our AI assistant for intelligent debugging, optimization recommendations, 
                and complexity analysis. Receive contextual guidance tailored to your specific code 
                and algorithmic challenges.
              </p>
            </div>

            {/* Step 4 */}
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>04</div>
              <div className={styles.stepIconBox}>
                <Zap size={32} />
              </div>
              <h3 className={styles.stepTitle}>REFINE & EXPORT</h3>
              <p className={styles.stepDesc}>
                Analyze performance metrics, optimize your implementation, and export your 
                flowcharts in multiple formats. Build a comprehensive knowledge base of 
                well-documented solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section id="capabilities" className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              <Layers size={28} className={styles.sectionIcon} />
              CAPABILITIES
            </h2>
            <div className={styles.sectionUnderline}></div>
          </div>

          <div className={styles.capabilitiesGrid}>
            {/* Capability 1 */}
            <div className={styles.capabilityCard}>
              <div className={styles.capIconBox}>
                <PlayCircle size={28} />
              </div>
              <h3 className={styles.capTitle}>REAL-TIME CODE EXECUTION</h3>
              <p className={styles.capDesc}>
                Execute Python and JavaScript code instantly with our Judge0 integration. 
                Run comprehensive test suites and receive immediate, detailed feedback 
                on performance and correctness.
              </p>
            </div>

            {/* Capability 2 */}
            <div className={styles.capabilityCard}>
              <div className={styles.capIconBox}>
                <GitBranch size={28} />
              </div>
              <h3 className={styles.capTitle}>BIDIRECTIONAL SYNCHRONIZATION</h3>
              <p className={styles.capDesc}>
                Experience seamless conversion between code and flowcharts. Modifications 
                in either representation automatically propagate, ensuring your design 
                and implementation remain perfectly aligned.
              </p>
            </div>

            {/* Capability 3 */}
            <div className={styles.capabilityCard}>
              <div className={styles.capIconBox}>
                <Terminal size={28} />
              </div>
              <h3 className={styles.capTitle}>ADVANCED COMPLEXITY ANALYSIS</h3>
              <p className={styles.capDesc}>
                Gain deep insights into time and space complexity. Identify performance 
                bottlenecks, compare algorithmic approaches, and optimize solutions with 
                data-driven recommendations.
              </p>
            </div>

            {/* Capability 4 */}
            <div className={styles.capabilityCard}>
              <div className={styles.capIconBox}>
                <Bot size={28} />
              </div>
              <h3 className={styles.capTitle}>INTELLIGENT AI GUIDANCE</h3>
              <p className={styles.capDesc}>
                Access context-aware AI assistance for debugging, optimization strategies, 
                and conceptual explanations. Receive personalized guidance that adapts 
                to your coding patterns and learning needs.
              </p>
            </div>

            {/* Capability 5 */}
            <div className={styles.capabilityCard}>
              <div className={styles.capIconBox}>
                <FileCode size={28} />
              </div>
              <h3 className={styles.capTitle}>FLEXIBLE EXPORT OPTIONS</h3>
              <p className={styles.capDesc}>
                Export flowcharts as high-resolution images, SVG, or structured pseudocode. 
                Share solutions with collaborators, integrate into documentation, or build 
                a personal algorithm reference library.
              </p>
            </div>

            {/* Capability 6 */}
            <div className={styles.capabilityCard}>
              <div className={styles.capIconBox}>
                <Zap size={28} />
              </div>
              <h3 className={styles.capTitle}>INTERACTIVE DEBUGGING</h3>
              <p className={styles.capDesc}>
                Step through algorithm execution with visual feedback. Track variable states, 
                observe data flow in real-time, and identify logical errors before they 
                manifest as runtime issues.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              <Mail size={28} className={styles.sectionIcon} />
              GET IN TOUCH
            </h2>
            <div className={styles.sectionUnderline}></div>
          </div>

          <div className={styles.contactContainer}>
            <div className={styles.contactIntro}>
              <p className={styles.contactDesc}>
                Have questions about AlgoFlow or interested in early access? We're here to help. 
                Reach out to our team and we'll respond within 24 hours.
              </p>
            </div>
            
            <form className={styles.contactForm} onSubmit={handleContactSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.formLabel}>
                  FULL NAME *
                </label>
                <input
                  type="text"
                  id="name"
                  className={styles.formInput}
                  placeholder="John Doe"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                  required
                  minLength={2}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.formLabel}>
                  YOUR MESSAGE *
                </label>
                <textarea
                  id="message"
                  className={styles.formTextarea}
                  placeholder="Tell us about your inquiry, feedback, or how you plan to use AlgoFlow..."
                  rows="6"
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  required
                  minLength={10}
                />
              </div>

              <button 
                type="submit" 
                className={styles.contactSubmitBtn}
                disabled={isSubmitting}
              >
                <Send size={18} />
                {isSubmitting ? 'OPENING EMAIL CLIENT...' : 'SEND MESSAGE'}
              </button>
            </form>
          </div>
        </section>

        {/* Modal */}
        {showModal && (
          <div className={styles.modalOverlay} onClick={() => setShowModal(false)}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <div className={styles.modalHeader}>
                <h3>Under Development</h3>
                <button className={styles.modalClose} onClick={() => setShowModal(false)}>
                  ×
                </button>
              </div>
              <div className={styles.modalBody}>
                <p>AlgoFlow is currently under active development.</p>
                <p>We're working hard to bring you the best algorithm visualization and debugging experience.</p>
                <p>Stay tuned for updates!</p>
              </div>
              <div className={styles.modalFooter}>
                <button className={styles.modalButton} onClick={() => setShowModal(false)}>
                  Got it
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default AlgoFlowLanding;