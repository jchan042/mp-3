import { useState } from "react";

export type Operation = "+" | "-" | "*" | "/" | "**";

export function useCalculator() {
    const [input1, setInput1] = useState<string>("");
    const [input2, setInput2] = useState<string>("");
    const [result, setResult] = useState<number | null>(null);

    function calculate(op: Operation) {
        const a = Number(input1);
        const b = Number(input2);
        let output: number;

        if (op === "+") {
            output = a + b;
        } else if (op === "-") {
            output = a - b;
        } else if (op === "*") {
            output = a * b;
        } else if (op === "/") {
            output = a / b;
        } else {
            // Power using for loop
            output = 1;
            for (let i = 0; i < b; i++) {
                output *= a;
            }
        }

        setResult(output);
    }

    function clearAll() {
        setInput1("");
        setInput2("");
        setResult(null);
    }

    return { input1, setInput1, input2, setInput2, result, calculate, clearAll };
}