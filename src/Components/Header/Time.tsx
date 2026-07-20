import { format } from "date-fns-jalali";
import { useState } from "react";

export default function Time() {
	let time = new Date();
	const [hour, setHour] = useState<string>(FaNumbers(Nicing("hour")));
	const [minute, setMinute] = useState<string>(FaNumbers(Nicing("minute")));
	const [second, setSecond] = useState<string>(FaNumbers(Nicing("second")));
	function Nicing(partOfTime: string): string {
		time = new Date();
		let value: string = "";
		if (partOfTime == "hour") {
			value = time.getHours().toString();
			if (value.length < 2) {
				return "0" + value;
			}
		}
		if (partOfTime == "minute") {
			value = time.getMinutes().toString();
			if (value.length < 2) {
				return "0" + value;
			}
		}
		if (partOfTime == "second") {
			value = time.getSeconds().toString();
			if (value.length < 2) {
				return "0" + value;
			}
		}
		return value;
	}
	function FaNumbers(number: string): string {
		let farsiNumber: string = "";
		for (let i: number = 0; i <= number.length; i++) {
			if (number[i] == "0") {
				farsiNumber += "۰";
			}
			else if (number[i] == "1") {
				farsiNumber += "۱";
			}
			else if (number[i] == "2") {
				farsiNumber += "۲";
			}
			else if (number[i] == "3") {
				farsiNumber += "۳";
			}
			else if (number[i] == "4") {
				farsiNumber += "۴";
			}
			else if (number[i] == "5") {
				farsiNumber += "۵";
			}
			else if (number[i] == "6") {
				farsiNumber += "۶";
			}
			else if (number[i] == "7") {
				farsiNumber += "۷";
			}
			else if (number[i] == "8") {
				farsiNumber += "۸";
			}
			else if (number[i] == "9") {
				farsiNumber += "۹";
			} else if(number[i] == "/") {
				farsiNumber += number[i];
			}
		}
		return farsiNumber;
	}
	setInterval(() => {
		setHour(FaNumbers(Nicing("hour")));
		setMinute(FaNumbers(Nicing("minute")));
		setSecond(FaNumbers(Nicing("second")));
	}, 100);
	const shamsiDate: string = format(time, "yyyy/MM/dd");
	return (
		<div className="flex flex-col text-zinc-900 dark:text-zinc-200 text-xs lg:text-sm md:flex-row gap-0.5 md:gap-2 items-center justify-center">
			<span>{FaNumbers(shamsiDate)}</span>
			<span className="hidden md:block">●</span>
			<span>
				{hour} : {minute} : {second}
			</span>
		</div>
	);
}
