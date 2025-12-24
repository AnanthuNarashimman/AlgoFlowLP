<img width="100%" height="325" alt="ascii-art-text" src="https://github.com/user-attachments/assets/9c302224-af8d-45bc-893c-0be426ba8edf" />

# AlgoFlow

**Your AI-powered companion for mastering algorithms with flowcharts**

AlgoFlow is a web-based coding playground designed to make algorithmic problem-solving intuitive and fun. Combining a LeetCode-style code editor, an AI chatbot, and a unique flowchart tool, it helps you visualize, code, and debug algorithms like never before. Whether you're a student, interview prepper, or coding enthusiast, AlgoFlow is here to guide you through the logic maze!

## Repository Structure
This repository contains the **landing page and marketing website** for AlgoFlow, built with Next.js. The core application (code playground, AI chatbot, flowchart tool) is being developed separately as a **Vite + React application** and will be linked once ready.

## Part of the Idea Series
This project is part of my **Idea Series**, a collection of repos where I turn creative sparks into reality. AlgoFlow is currently in the **idea phase**, meaning it’s a work-in-progress being built live. Follow along as I transform this vision into a fully functional tool—expect updates, experiments, and maybe a few "aha!" moments!

## Why AlgoFlow?
Struggling with algorithmic problems? AlgoFlow makes learning easier by letting you:
- Write and test code in a distraction-free environment.
- Chat with an AI for real-time debugging, optimization, or complexity analysis.
- Design flowcharts to plan solutions, simulate logic, and catch errors early.
- Seamlessly convert between code, flowcharts, and pseudocode.

Unlike typical coding platforms, AlgoFlow emphasizes *visual thinking* and *guided learning*, making it perfect for beginners and anyone who wants to truly understand algorithms.

## Features (MVP)
- **Code Playground**: Write and run Python or JavaScript code with sample test cases, styled like a LeetCode editor.
- **AI Chatbot**: Get tailored suggestions, debug errors, or analyze time/space complexity (e.g., "Why is this O(n²)?").
- **Flowchart Tool**: Drag-and-drop interface to create algorithms, simulate execution, and generate pseudocode.
- **Code-Flowchart Sync**: Convert code to flowcharts or flowcharts to starter code, with basic complexity highlights.

## Future Ideas
- Curated problem library (e.g., Two Sum, Binary Search).
- Export flowcharts as images for sharing or study notes.
- Interactive tutorials for common algorithms with pre-built flowcharts.
- Dark mode and offline support for a smoother experience.

## Tech Stack

### Landing Page (This Repo)
- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

### Core Application (Separate Vite + React Repo - In Development)
- **Frontend**: React with Vite, Monaco Editor (code), React Flow (flowcharts)
- **Backend**: Node.js/Express
- **AI**: Hugging Face API or xAI Grok API (details TBD)
- **Execution**: Judge0 API or WebAssembly for safe code running
- **Deployment**: Vercel (free for live demo)

## Progress

### Landing Page (This Repo)
- [x] Initialize Next.js project structure
- [ ] Design homepage with hero section
- [ ] Create features showcase section
- [ ] Add waitlist/newsletter signup
- [ ] Deploy landing page to Vercel

### Core Application (Separate Repo)
- [ ] Initialize Vite + React project structure
- [ ] Set up Monaco Editor for code playground
- [ ] Integrate AI chatbot with initial prompts
- [ ] Build drag-and-drop flowchart interface
- [ ] Enable code-to-flowchart and flowchart-to-code conversion
- [ ] Deploy a live demo

*Last updated: December 24, 2025*

## How to Run

### Landing Page (This Repo)
```bash
cd algo-flow
npm install
npm run dev
```
Visit `http://localhost:3000` to view the landing page.

### Core Application
Coming soon! The core application is under active development in a separate repository.

## Why I’m Building This
I love the challenge of algorithms and want to make them accessible to everyone. AlgoFlow is my chance to blend AI, visualization, and coding into a tool that’s both practical and a standout in my portfolio. As part of my Idea Series, this repo will evolve live—watch it grow from a spark to a fully functional app!

## Contribute
Got ideas, feedback, or want to join the fun? Open an issue, submit a PR, or drop a comment. I’m excited to build this with the community!

---

*Part of the Idea Series: Turning dreams into code, one repo at a time.*
