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
	if (num1 < 10) {
		num1++;
		if (num1 > 9) {
			num2++;
			num1 = 0;
			if (num2 > 9) {
				num3++;
				num2 = 0;
				if (num3 > 9) {
					num4++;
					num3 = 0;
					if (num4 > 9) {
						num5++;
						num4 = 0;
						if (num5 > 9) {
							num6++;
							num5 = 0;
							if (num6 > 9) {
								num6 = 0;
							}
						}
					}
				}
			}
		}
		ReactDOM.createRoot(document.getElementById("app")).render(<SecondsCounter n1={num1} n2={num2} n3={num3} n4={num4} n5={num5} n6={num6} />);
	}
}, 1000);
