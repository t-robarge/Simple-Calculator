# Scientific Calculator

A modern, React-based scientific calculator with a clean interface and advanced mathematical functions. Built with Vite and React.

## Features

- Basic arithmetic operations (+, -, ×, ÷)
- Scientific functions:
  - Trigonometric functions (sin, cos, tan)
  - Logarithm (base 10)
  - Mathematical constant (π)
- Switchable angle modes (RAD/DEG)
- Clear (C) and All Clear (AC) functionality
- Scientific notation for large numbers (>1e12) and small numbers (<1e-9)
- Responsive design with hover effects
- Color-coded buttons for different operations

## Dependencies

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.4",
    "vite": "^6.2.5"
  }
}
```

## Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:t-robarge/Simple-Calculator.git
   cd Simple-Calculator
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal)

## Usage

- **Basic Operations**: Click numbers and operators to perform calculations
- **Scientific Functions**:
  - Toggle between RAD/DEG mode using the green mode button
  - Use sin, cos, tan for trigonometric calculations
  - Use log for base-10 logarithms
  - π button inputs the mathematical constant pi
- **Clear Functions**:
  - C (Clear): Clears the current input
  - AC (All Clear): Resets the entire calculator
- **Large Numbers**: Automatically converts to scientific notation when needed

## Project Structure

```
src/
├── components/
│   ├── Calculator.jsx    # Main calculator logic
│   ├── Calculator.css
│   ├── Display.jsx      # Display component
│   ├── Display.css
│   ├── Keypad.jsx       # Keypad component
│   └── Keypad.css
├── App.jsx              # Root component
├── App.css
└── main.jsx            # Entry point
```

## Features in Detail

### Scientific Mode
- Trigonometric functions work in both radians and degrees
- Mode indicator shows current angle unit (RAD/DEG)
- Scientific notation automatically handles very large/small numbers

### User Interface
- Color-coded buttons for better UX:
  - Orange: Arithmetic operations
  - Purple: Mathematical constants (π)
  - Green: Mode toggle
  - Red: Clear functions
  - Blue: Scientific functions
  - Grey: Numbers

## Development

Built with:
- React 18 for UI components
- Vite for fast development and building
- CSS3 for styling and animations

## License

MIT License - feel free to use and modify for your own projects! 