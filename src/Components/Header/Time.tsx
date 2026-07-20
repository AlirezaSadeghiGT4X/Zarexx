import { format } from "date-fns-jalali";
import { useState } from "react";

export default function Time() {
    let time = new Date;
    const [hour, setHour] = useState<string>(time.getHours().toString())
    const [minute, setMinute] = useState<string>(time.getMinutes().toString())
    const [second, setSecond] = useState<string>(time.getSeconds().toString())
    function Nicing(partOfTime: string): string {
        time = new Date()
        let value: string = ""
        if (partOfTime == "hour") {
            value = time.getHours().toString()
            if (value.length < 2) {
                return "0" + value
            }
        }
        if (partOfTime == "minute") {
            value = time.getMinutes().toString()
            if (value.length < 2) {
                return "0" + value
            }
        }
        if (partOfTime == "second") {
            value = time.getSeconds().toString()
            if (value.length < 2) {
                return "0" + value
            }
        }
        return value
    }
    setInterval(() => {
        setHour(Nicing("hour"))
        setMinute(Nicing("minute"))
        setSecond(Nicing("second"))
    }, 100);
    const shamsiDate: string = format(time, "yyyy/MM/dd");
    return (
        <div className="flex flex-col text-zinc-900 dark:text-zinc-200 text-xs md:text-sm md:flex-row md:gap-2 items-center justify-center">
            <span>{shamsiDate}</span>
            <span className="hidden md:block">●</span>
            <span>{hour} : {minute} : {second}</span>
        </div>
    )
}