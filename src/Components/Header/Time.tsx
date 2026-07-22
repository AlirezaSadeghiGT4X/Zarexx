/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/set-state-in-effect */
import { format } from "date-fns-jalali";
import { useEffect, useState } from "react";
import { FaNumbers } from "../PublicComponents/FaNumbers";

export default function Time() {
	let time = new Date();
	const [dayOfTheWeek, setDayOfTheWeek] = useState<string>("");
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
	setInterval(() => {
		setHour(FaNumbers(Nicing("hour")));
		setMinute(FaNumbers(Nicing("minute")));
		setSecond(FaNumbers(Nicing("second")));
	}, 100);
	const shamsiDate: string = format(time, "yyyy/MM/dd");
	//*Get day of the week and translate to persian
	useEffect(() => {
		const day: number = time.getDay();
		if (day == 0) {
			setDayOfTheWeek("یکشنبه");
		}
		if (day == 1) {
			setDayOfTheWeek("دوشنبه");
		}
		if (day == 2) {
			setDayOfTheWeek("سه‌شنبه");
		}
		if (day == 3) {
			setDayOfTheWeek("چهارشنبه");
		}
		if (day == 4) {
			setDayOfTheWeek("پنجشنبه");
		}
		if (day == 5) {
			setDayOfTheWeek("جمعه");
		}
		if (day == 6) {
			setDayOfTheWeek("شنبه");
		}
	}, [time.getDay()]);
	return (
		<div className="flex flex-col text-zinc-900 dark:text-zinc-200 text-xs lg:text-sm md:flex-row gap-0.5 md:gap-2 items-center justify-center">
			<span>{FaNumbers(shamsiDate)}</span>
			<span>{dayOfTheWeek}</span>
			<span className="hidden md:block">●</span>
			<span>
				{hour} : {minute} : {second}
			</span>
		</div>
	);
}
