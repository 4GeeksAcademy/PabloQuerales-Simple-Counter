//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

//import your own components
import SecondsCounter from "./component/SecondsCounter.jsx";

let num1 = 0;
let num2 = 0;
let num3 = 0;
let num4 = 0;
let num5 = 0;
let num6 = 0;

setInterval(() => {
	if (num1 < 9) {
		num1++;
		ReactDOM.createRoot(document.getElementById("app")).render(<SecondsCounter n1={num1} n2={num2} n3={num3} n4={num4} n5={num5} n6={num6} />);
	} else if (num1 == 9) {
		num1 = 0;
	}
}, 1000);
setInterval(() => {
	if (num2 < 9) {
		num2++;
		ReactDOM.createRoot(document.getElementById("app")).render(<SecondsCounter n1={num1} n2={num2} n3={num3} n4={num4} n5={num5} n6={num6} />);
	} else if (num2 == 9) {
		num2 = 0;
	}
}, 10000);
setInterval(() => {
	if (num3 < 9) {
		num3++;
		ReactDOM.createRoot(document.getElementById("app")).render(<SecondsCounter n1={num1} n2={num2} n3={num3} n4={num4} n5={num5} n6={num6} />);
	} else if (num3 == 9) {
		num3 = 0;
	}
}, 100000);
setInterval(() => {
	if (num4 < 9) {
		num4++;
		ReactDOM.createRoot(document.getElementById("app")).render(<SecondsCounter n1={num1} n2={num2} n3={num3} n4={num4} n5={num5} n6={num6} />);
	} else if (num4 == 9) {
		num4 = 0;
	}
}, 1000000);
setInterval(() => {
	if (num5 < 9) {
		num5++;
		ReactDOM.createRoot(document.getElementById("app")).render(<SecondsCounter n1={num1} n2={num2} n3={num3} n4={num4} n5={num5} n6={num6} />);
	} else if (num5 == 9) {
		num5 = 0;
	}
}, 10000000);
setInterval(() => {
	if (num6 < 9) {
		num6++;
		ReactDOM.createRoot(document.getElementById("app")).render(<SecondsCounter n1={num1} n2={num2} n3={num3} n4={num4} n5={num5} n6={num6} />);
	} else if (num6 == 9) {
		num6 = 0;
	}
}, 100000000);
