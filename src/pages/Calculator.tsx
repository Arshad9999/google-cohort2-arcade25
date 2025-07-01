
import { useState } from 'react';
import { Home, ArrowLeft } from 'lucide-react';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const inputNumber = (num: string) => {
    if (waitingForOperand) {
      setDisplay(String(num));
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? String(num) : display + num);
    }
  };

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.');
    }
  };

  const clear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  };

  const performOperation = (nextOperation: string) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const currentValue = previousValue || 0;
      const newValue = calculate(currentValue, inputValue, operation);

      setDisplay(String(newValue));
      setPreviousValue(newValue);
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
  };

  const calculate = (firstValue: number, secondValue: number, operation: string): number => {
    switch (operation) {
      case '+':
        return firstValue + secondValue;
      case '-':
        return firstValue - secondValue;
      case '×':
        return firstValue * secondValue;
      case '÷':
        return firstValue / secondValue;
      case '=':
        return secondValue;
      default:
        return secondValue;
    }
  };

  const handleEquals = () => {
    const inputValue = parseFloat(display);

    if (previousValue !== null && operation) {
      const newValue = calculate(previousValue, inputValue, operation);
      setDisplay(String(newValue));
      setPreviousValue(null);
      setOperation(null);
      setWaitingForOperand(true);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <a href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Home className="w-4 h-4 text-white" />
                </div>
                <span className="font-semibold text-gray-900">Arcade Points</span>
              </a>
            </div>
            <div className="flex items-center space-x-8">
              <a href="/calculator" className="text-gray-900 hover:text-blue-600 transition-colors font-medium">
                Calculator
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                About
              </a>
              <a href="#faqs" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                FAQs
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Arcade Points
            <span className="block text-4xl sm:text-5xl text-blue-600 mt-2">Calculator</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Calculate your Google Cloud Skills Boost Arcade points and track your progress towards earning amazing prizes and swag.
          </p>
          <a 
            href="/" 
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </a>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            {/* Display */}
            <div className="bg-gray-900 p-8">
              <div className="text-right">
                <div className="text-4xl font-light text-white break-all min-h-[3rem] flex items-center justify-end">
                  {display}
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="p-4">
              <div className="grid grid-cols-4 gap-3">
                {/* Row 1 */}
                <button
                  onClick={clear}
                  className="col-span-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-4 rounded-xl transition-all duration-200 text-lg active:scale-95"
                >
                  Clear
                </button>
                <button
                  onClick={() => performOperation('÷')}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-4 rounded-xl transition-all duration-200 text-lg active:scale-95"
                >
                  ÷
                </button>
                <button
                  onClick={() => performOperation('×')}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-4 rounded-xl transition-all duration-200 text-lg active:scale-95"
                >
                  ×
                </button>

                {/* Row 2 */}
                <button
                  onClick={() => inputNumber('7')}
                  className="bg-gray-50 hover:bg-gray-100 text-gray-800 font-medium py-4 rounded-xl transition-all duration-200 text-lg active:scale-95"
                >
                  7
                </button>
                <button
                  onClick={() => inputNumber('8')}
                  className="bg-gray-50 hover:bg-gray-100 text-gray-800 font-medium py-4 rounded-xl transition-all duration-200 text-lg active:scale-95"
                >
                  8
                </button>
                <button
                  onClick={() => inputNumber('9')}
                  className="bg-gray-50 hover:bg-gray-100 text-gray-800 font-medium py-4 rounded-xl transition-all duration-200 text-lg active:scale-95"
                >
                  9
                </button>
                <button
                  onClick={() => performOperation('-')}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-4 rounded-xl transition-all duration-200 text-lg active:scale-95"
                >
                  -
                </button>

                {/* Row 3 */}
                <button
                  onClick={() => inputNumber('4')}
                  className="bg-gray-50 hover:bg-gray-100 text-gray-800 font-medium py-4 rounded-xl transition-all duration-200 text-lg active:scale-95"
                >
                  4
                </button>
                <button
                  onClick={() => inputNumber('5')}
                  className="bg-gray-50 hover:bg-gray-100 text-gray-800 font-medium py-4 rounded-xl transition-all duration-200 text-lg active:scale-95"
                >
                  5
                </button>
                <button
                  onClick={() => inputNumber('6')}
                  className="bg-gray-50 hover:bg-gray-100 text-gray-800 font-medium py-4 rounded-xl transition-all duration-200 text-lg active:scale-95"
                >
                  6
                </button>
                <button
                  onClick={() => performOperation('+')}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-4 rounded-xl transition-all duration-200 text-lg active:scale-95"
                >
                  +
                </button>

                {/* Row 4 */}
                <button
                  onClick={() => inputNumber('1')}
                  className="bg-gray-50 hover:bg-gray-100 text-gray-800 font-medium py-4 rounded-xl transition-all duration-200 text-lg active:scale-95"
                >
                  1
                </button>
                <button
                  onClick={() => inputNumber('2')}
                  className="bg-gray-50 hover:bg-gray-100 text-gray-800 font-medium py-4 rounded-xl transition-all duration-200 text-lg active:scale-95"
                >
                  2
                </button>
                <button
                  onClick={() => inputNumber('3')}
                  className="bg-gray-50 hover:bg-gray-100 text-gray-800 font-medium py-4 rounded-xl transition-all duration-200 text-lg active:scale-95"
                >
                  3
                </button>
                <button
                  onClick={handleEquals}
                  className="row-span-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-xl transition-all duration-200 text-lg active:scale-95"
                >
                  =
                </button>

                {/* Row 5 */}
                <button
                  onClick={() => inputNumber('0')}
                  className="col-span-2 bg-gray-50 hover:bg-gray-100 text-gray-800 font-medium py-4 rounded-xl transition-all duration-200 text-lg active:scale-95"
                >
                  0
                </button>
                <button
                  onClick={inputDecimal}
                  className="bg-gray-50 hover:bg-gray-100 text-gray-800 font-medium py-4 rounded-xl transition-all duration-200 text-lg active:scale-95"
                >
                  .
                </button>
              </div>
            </div>
          </div>

          {/* Points Guide */}
          <div className="mt-12 bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">How to Calculate Your Points</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium mt-0.5">
                  1
                </div>
                <div>
                  <p className="font-medium text-gray-900">Game Badges</p>
                  <p className="text-gray-600">1 point per game badge (2 points for monthly special)</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium mt-0.5">
                  2
                </div>
                <div>
                  <p className="font-medium text-gray-900">Trivia Badges</p>
                  <p className="text-gray-600">1 point per trivia badge</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium mt-0.5">
                  3
                </div>
                <div>
                  <p className="font-medium text-gray-900">Skill Badges</p>
                  <p className="text-gray-600">1 point per 2 skill badges completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Calculator;
