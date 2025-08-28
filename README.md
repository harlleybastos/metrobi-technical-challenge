# JavaScript Interview Challenge Solutions

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

A comprehensive collection of solutions to a technical interview challenge, showcasing proficiency in algorithms, data structures, React development, and mathematical problem-solving.

## 📋 Challenge Overview

This repository contains solutions to 7 technical questions covering:

- **Algorithm Design** - Efficient problem-solving approaches
- **Asynchronous Programming** - Advanced timing and Promise handling
- **React Development** - Component design and layout implementation
- **Data Structures** - Stack-based algorithms and validation
- **Dynamic Programming** - Optimization problems
- **Mathematical Visualization** - Interactive animations
- **Optimization Problems** - Classic computer science challenges

## 🚀 Solutions Summary

### 1. **Find Duplicate Items** [`duplicate-items.js`]

- **Problem**: Identify duplicate items in any given array
- **Solution**: Set-based O(n) algorithm with multiple implementation approaches
- **Key Features**: Handles various data types, efficient time/space complexity

### 2. **Async Exponential Delays** [`seconds-apart.js`]

- **Problem**: Print array items with exponential delays (1, 2, 4, 8... seconds)
- **Solution**: Promise-based async/await implementation with setTimeout
- **Key Features**: Proper async handling, multiple implementation patterns

### 3. **React Flexbox Layout** [`layout-flex.jsx`]

- **Problem**: Recreate a complex layout using React and Flexbox
- **Solution**: Responsive flex-based component with color-matched design
- **Key Features**: Nested flex containers, proper proportions, modern CSS

### 4. **Bracket Validation** [`brackets.js`]

- **Problem**: Validate proper opening/closing of brackets `()[]{}`
- **Solution**: Stack-based algorithm with comprehensive edge case handling
- **Key Features**: O(n) time complexity, multiple bracket types, robust error handling

### 5. **Two Egg Problem** [`two-egg.js`]

- **Problem**: Find highest safe floor with minimum drops (worst-case optimization)
- **Solution**: Dynamic programming with mathematical optimization
- **Key Features**: 14-drop optimal solution, strategy generation, simulation mode

### 6. **Zeno's Paradox Animation** [`zeno-paradox.jsx`]

- **Problem**: Visualize the mathematical paradox of Achilles and the Tortoise
- **Solution**: Interactive React animation with step-by-step mathematical analysis
- **Key Features**: Real-time visualization, educational explanations, interactive controls

### 7. **Knapsack Problem (Carrot Optimization)** [`knapsack.js`]

- **Problem**: Maximize value in limited-weight bag with unlimited items per type
- **Solution**: Unbounded knapsack algorithm with dynamic programming
- **Key Features**: Optimal value calculation, solution reconstruction

## 🛠️ Technology Stack

- **Frontend**: React 18+, CSS3, HTML5
- **Styling**: Tailwind CSS, Flexbox
- **JavaScript**: ES6+, Async/Await, Promises
- **Algorithms**: Dynamic Programming, Stack-based Processing
- **Animation**: CSS Transitions, React State Management

## 📁 Project Structure

```
├── duplicate-items.js              # Array duplicate detection
├── seconds-apart.js            # Exponential delay async function
├── layout-flex.jsx           # Flexbox layout component
├── brackets.js      # Bracket matching algorithm
├── two-egg.js         # DP optimization solution
├── zeno-paradox.jsx          # Interactive paradox animation
├── knapsack.js                # Knapsack optimization problem
└── README.md                     # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn
- Modern web browser

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/harlleybastos/interview-challenge-solutions.git
   cd interview-challenge-solutions
   ```

2. **Install dependencies** (for React components)

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run JavaScript solutions**

   ```bash
   node q1_duplicates.js
   node q2_async_delays.js
   node q4_bracket_validation.js
   node q5_two_egg_problem.js
   node q7_knapsack.js
   ```

4. **Run React components**
   ```bash
   npm start
   # Navigate to components in your React app
   ```

## 💡 Key Highlights

### Algorithmic Excellence

- **Time Optimization**: All solutions prioritize optimal time complexity
- **Space Efficiency**: Memory-conscious implementations where applicable
- **Edge Cases**: Comprehensive error handling and boundary conditions

### React Best Practices

- **Component Architecture**: Clean, reusable component design
- **State Management**: Efficient useState and useEffect usage
- **Responsive Design**: Mobile-friendly layouts with modern CSS

### Problem-Solving Approach

- **Multiple Solutions**: Alternative implementations for key problems
- **Educational Value**: Detailed comments and explanations
- **Real-world Application**: Practical, production-ready code

## 🧪 Testing & Examples

Each solution includes:

- **Test Cases**: Comprehensive examples with expected outputs
- **Edge Cases**: Boundary condition testing
- **Performance Metrics**: Time/space complexity analysis
- **Usage Examples**: Clear demonstration of functionality

## 📊 Performance Metrics

| Problem            | Time Complexity | Space Complexity | Optimal Solution |
| ------------------ | --------------- | ---------------- | ---------------- |
| Find Duplicates    | O(n)            | O(n)             | ✅               |
| Bracket Validation | O(n)            | O(n)             | ✅               |
| Two Egg Problem    | O(n²)           | O(n²)            | ✅ (14 drops)    |
| Knapsack Problem   | O(n×W)          | O(W)             | ✅               |

## 🎯 Problem-Solving Philosophy

This challenge demonstrates:

1. **Algorithmic Thinking** - Breaking complex problems into manageable components
2. **Optimization Mindset** - Always considering time/space trade-offs
3. **Code Quality** - Clean, readable, maintainable implementations
4. **User Experience** - Interactive and educational interfaces
5. **Mathematical Understanding** - Applying CS theory to practical problems

## 🤝 Connect & Discuss

These solutions represent a comprehensive approach to technical problem-solving, combining theoretical knowledge with practical implementation skills. Each solution is production-ready and demonstrates best practices in software development.

---

**Built with ❤️ for technical excellence**

_Feel free to explore each solution and reach out with any questions about the implementation approaches or optimizations used._
