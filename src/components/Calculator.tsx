import React, { useState } from 'react';
import { Equal, Divide, Minus, Plus, X, Delete, RotateCcw } from 'lucide-react';

export function Calculator() {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');
  const [isNewNumber, setIsNewNumber] = useState(true);

  const handleNumber = (num: string) => {
    if (isNewNumber) {
      setDisplay(num);
      setIsNewNumber(false);
    } else {
      setDisplay(display === '0' ? num : display + num);
    }
  };

  const handleOperator = (op: string) => {
    setEquation(display + ' ' + op + ' ');
    setIsNewNumber(true);
  };

  const calculate = () => {
    try {
      const result = eval(equation + display);
      setDisplay(String(result));
      setEquation('');
      setIsNewNumber(true);
    } catch (error) {
      setDisplay('Error');
      setEquation('');
      setIsNewNumber(true);
    }
  };

  const clear = () => {
    setDisplay('0');
    setEquation('');
    setIsNewNumber(true);
  };

  const deleteLastDigit = () => {
    if (display.length > 1) {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay('0');
      setIsNewNumber(true);
    }
  };

  const Button = ({ children, onClick, className = '' }: any) => (
    <button
      onClick={onClick}
      className={`h-14 flex items-center justify-center rounded-xl text-lg font-medium transition-all duration-200 
      hover:bg-opacity-90 active:scale-95 ${className}`}
    >
      {children}
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-6 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-xs p-6 space-y-4">
        <div className="space-y-2">
          <div className="text-right text-gray-500 text-sm h-6">
            {equation}
          </div>
          <div className="text-right text-3xl font-semibold text-gray-800 h-10 overflow-hidden">
            {display}
          </div>
        </div>
        
        <div className="grid grid-cols-4 gap-3">
          <Button
            onClick={clear}
            className="bg-red-100 text-red-600"
          >
            <RotateCcw size={20} />
          </Button>
          <Button
            onClick={deleteLastDigit}
            className="bg-red-100 text-red-600"
          >
            <Delete size={20} />
          </Button>
          <Button
            onClick={() => handleOperator('%')}
            className="bg-blue-100 text-blue-600"
          >
            %
          </Button>
          <Button
            onClick={() => handleOperator('/')}
            className="bg-blue-100 text-blue-600"
          >
            <Divide size={20} />
          </Button>

          <Button
            onClick={() => handleNumber('7')}
            className="bg-gray-100 text-gray-800"
          >
            7
          </Button>
          <Button
            onClick={() => handleNumber('8')}
            className="bg-gray-100 text-gray-800"
          >
            8
          </Button>
          <Button
            onClick={() => handleNumber('9')}
            className="bg-gray-100 text-gray-800"
          >
            9
          </Button>
          <Button
            onClick={() => handleOperator('*')}
            className="bg-blue-100 text-blue-600"
          >
            <X size={20} />
          </Button>

          <Button
            onClick={() => handleNumber('4')}
            className="bg-gray-100 text-gray-800"
          >
            4
          </Button>
          <Button
            onClick={() => handleNumber('5')}
            className="bg-gray-100 text-gray-800"
          >
            5
          </Button>
          <Button
            onClick={() => handleNumber('6')}
            className="bg-gray-100 text-gray-800"
          >
            6
          </Button>
          <Button
            onClick={() => handleOperator('-')}
            className="bg-blue-100 text-blue-600"
          >
            <Minus size={20} />
          </Button>

          <Button
            onClick={() => handleNumber('1')}
            className="bg-gray-100 text-gray-800"
          >
            1
          </Button>
          <Button
            onClick={() => handleNumber('2')}
            className="bg-gray-100 text-gray-800"
          >
            2
          </Button>
          <Button
            onClick={() => handleNumber('3')}
            className="bg-gray-100 text-gray-800"
          >
            3
          </Button>
          <Button
            onClick={() => handleOperator('+')}
            className="bg-blue-100 text-blue-600"
          >
            <Plus size={20} />
          </Button>

          <Button
            onClick={() => handleNumber('0')}
            className="bg-gray-100 text-gray-800 col-span-2"
          >
            0
          </Button>
          <Button
            onClick={() => handleNumber('.')}
            className="bg-gray-100 text-gray-800"
          >
            .
          </Button>
          <Button
            onClick={calculate}
            className="bg-blue-600 text-white"
          >
            <Equal size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
}