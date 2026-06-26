# ✨ Interactive Multi-Step Form

A highly polished, responsive **Multi-Step Form** built with **React, TypeScript, Tailwind CSS**, and **Framer Motion**. This project demonstrates advanced form state management, real-time validation, and smooth page transitions.

## 📖 Overview

This project provides an excellent, production-ready example of how to build a complex, multi-stage data collection flow (like a checkout or onboarding process) in a modern React application. It handles dynamic pricing calculations, billing cycles (monthly/yearly), and seamless state retention across different views.

### 🎯 Core Features
- **Step-by-step form flow:** Seamlessly navigate between 4 distinct steps (Personal Info, Plan Selection, Add-ons, Summary).
- **Form Validation:** Real-time error handling for required fields and correct email formatting.
- **Dynamic State Management:** Automatically calculates total prices based on selected plans, billing cycles, and optional add-ons.
- **Responsive Architecture:** Optimized layouts ensuring a flawless experience on both mobile devices and large desktop screens.
- **Smooth Animations:** Fluid, spring-based page transitions and micro-interactions powered by Framer Motion.
- **Modern UI/UX:** Clean, accessible, and interactive design with custom SVG patterns and premium Apple-style aesthetics.

## 🛠️ Tech Stack

- **[React 19](https://react.dev/)** - Component-based UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Static typing for robust code
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS framework for rapid UI styling
- **[Framer Motion](https://www.framer.com/motion/)** - Production-ready animation library for React
- **[Lucide React](https://lucide.dev/)** - Beautiful & consistent icon toolkit
- **[Vite](https://vitejs.dev/)** - Next-generation, lightning-fast frontend tooling

## 🚀 Quick Start (Local Development)

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/multi-step-form.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd multi-step-form
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

## 💡 Key Learnings & Architecture

- **State Management:** Utilized a centralized `FormState` object to keep track of user data, selected plans, and add-ons, passing it down to modular components.
- **Animation Orchestration:** Implemented `AnimatePresence` for smooth exit and enter animations depending on the navigation direction (Next vs. Back).
- **Responsive Layout Strategy:** Shifted from a stacked absolute mobile layout to a side-by-side grid flex layout on desktop using Tailwind's `md:` breakpoints, perfectly matching the design spec.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/your-username/multi-step-form/issues).
