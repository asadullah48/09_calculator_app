"use client"; // Enables client-side rendering for this component

// Import necessary hooks from React
import { useState, ChangeEvent } from "react";

// Import custom UI components from the UI directory
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Default export of the TipCalculatorComponent function
export default function TipCalculatorComponent() {
  // State hooks for managing the bill amount, tip percentage, tip amount, and total amount
  const [billAmount, setBillAmount] = useState<number | null>(null);
  const [tipPercentage, setTipPercentage] = useState<number | null>(null);
  const [tipAmount, setTipAmount] = useState<number>(0);
  const [totalAmount, setTotalAmount] = useState<number>(0);

  // Handler for updating bill amount state on input change
  const handleBillAmountChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setBillAmount(parseFloat(e.target.value));
  };

  // Handler for updating tip percentage state on input change
  const handleTipPercentageChange = (
    e: ChangeEvent<HTMLInputElement>
  ): void => {
    setTipPercentage(parseFloat(e.target.value));
  };

  // Function to calculate the tip and total amounts
  const calculateTip = (): void => {
    if (billAmount !== null && tipPercentage !== null) {
      const tip = billAmount * (tipPercentage / 100); // Calculate the tip amount
      setTipAmount(tip); // Set the tip amount state
      setTotalAmount(billAmount + tip); // Set the total amount state
    }
  };

  // JSX return statement rendering the tip calculator UI
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white">
      {/* Center the tip calculator card within the screen */}
      <Card className="w-full max-w-md p-6 bg-white text-gray-900 shadow-xl rounded-xl transform hover:scale-105 transition-all duration-300 ease-in-out">
        <CardHeader>
          {/* Header with title and description */}
          <CardTitle className="text-3xl font-bold text-center">
  <span className="text-blue-500">Tip</span> 
  <span className="text-purple-600"> Calculator</span> 
</CardTitle>

          <CardDescription className="text-gray-600 text-center">
            Enter the bill amount and tip percentage to calculate the tip and
            total.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Input for bill amount */}
          <div className="grid gap-2">
            <Label htmlFor="bill-amount" className="text-lg font-semibold">
              Bill Amount
            </Label>
            <Input
              id="bill-amount"
              type="number"
              placeholder="Enter bill amount"
              value={billAmount !== null ? billAmount : ""}
              onChange={handleBillAmountChange}
              className="rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Input for tip percentage */}
          <div className="grid gap-2">
            <Label htmlFor="tip-percentage" className="text-lg font-semibold">
              Tip Percentage
            </Label>
            <Input
              id="tip-percentage"
              type="number"
              placeholder="Enter tip percentage"
              value={tipPercentage !== null ? tipPercentage : ""}
              onChange={handleTipPercentageChange}
              className="rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Button to calculate tip */}
          <Button
            onClick={calculateTip}
            className="w-full py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-lg transition duration-300"
          >
            Calculate Tip 💰
          </Button>
        </CardContent>
        <CardFooter className="grid gap-4 mt-6">
          {/* Display the calculated tip amount */}
          <div className="flex items-center justify-between">
            <span className="text-xl font-semibold">Tip Amount:</span>
            <span className="text-2xl font-bold text-blue-600">
              ${tipAmount.toFixed(2)}
            </span>
          </div>
          {/* Display the calculated total amount */}
          <div className="flex items-center justify-between">
            <span className="text-xl font-semibold">Total Amount:</span>
            <span className="text-2xl font-bold text-blue-600">
              ${totalAmount.toFixed(2)}
            </span>
          </div>
        </CardFooter>
      </Card>
      <div className="mt-6 text-center text-white font-semibold">
         by Ismail Ahmed Shah
      </div>
    </div>
  );
}