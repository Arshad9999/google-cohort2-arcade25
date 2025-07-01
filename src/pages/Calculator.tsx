
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200/50 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <a href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Home className="w-4 h-4 text-white" />
                </div>
                <span className="font-semibold text-gray-900">Arcade Points</span>
              </a>
              <a href="/" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors font-medium">
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Home</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Calculator Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Calculator</h1>
            <p className="text-gray-600">Simple and elegant calculator for your needs</p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
            {/* Display */}
            <div className="bg-gray-900 p-8">
              <div className="text-right">
                <div className="text-4xl font-light text-white break-all">
                  {display}
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="p-4">
              <div className="grid grid-cols-4 gap-2">
                {/* Row 1 */}
                <button
                  onClick={clear}
                  className="col-span-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-6 rounded-2xl transition-colors text-xl"
                >
                  Clear
                </button>
                <button
                  onClick={() => performOperation('÷')}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-6 rounded-2xl transition-colors text-xl"
                >
                  ÷
                </button>
                <button
                  onClick={() => performOperation('×')}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-6 rounded-2xl transition-colors text-xl"
                >
                  ×
                </button>

                {/* Row 2 */}
                <button
                  onClick={() => inputNumber('7')}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-6 rounded-2xl transition-colors text-xl"
                >
                  7
                </button>
                <button
                  onClick={() => inputNumber('8')}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-6 rounded-2xl transition-colors text-xl"
                >
                  8
                </button>
                <button
                  onClick={() => inputNumber('9')}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-6 rounded-2xl transition-colors text-xl"
                >
                  9
                </button>
                <button
                  onClick={() => performOperation('-')}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-6 rounded-2xl transition-colors text-xl"
                >
                  -
                </button>

                {/* Row 3 */}
                <button
                  onClick={() => inputNumber('4')}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-6 rounded-2xl transition-colors text-xl"
                >
                  4
                </button>
                <button
                  onClick={() => inputNumber('5')}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-6 rounded-2xl transition-colors text-xl"
                >
                  5
                </button>
                <button
                  onClick={() => inputNumber('6')}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-6 rounded-2xl transition-colors text-xl"
                >
                  6
                </button>
                <button
                  onClick={() => performOperation('+')}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-6 rounded-2xl transition-colors text-xl"
                >
                  +
                </button>

                {/* Row 4 */}
                <button
                  onClick={() => inputNumber('1')}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-6 rounded-2xl transition-colors text-xl"
                >
                  1
                </button>
                <button
                  onClick={() => inputNumber('2')}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-6 rounded-2xl transition-colors text-xl"
                >
                  2
                </button>
                <button
                  onClick={() => inputNumber('3')}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-6 rounded-2xl transition-colors text-xl"
                >
                  3
                </button>
                <button
                  onClick={handleEquals}
                  className="row-span-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-2xl transition-colors text-xl"
                >
                  =
                </button>

                {/* Row 5 */}
                <button
                  onClick={() => inputNumber('0')}
                  className="col-span-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-6 rounded-2xl transition-colors text-xl"
                >
                  0
                </button>
                <button
                  onClick={inputDecimal}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-6 rounded-2xl transition-colors text-xl"
                >
                  .
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Calculator;
