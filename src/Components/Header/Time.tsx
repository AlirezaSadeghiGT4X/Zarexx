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
        <div className="flex flex-col">
            <span className="text-mauve-800 dark:text-mauve-200">{shamsiDate}</span>
            <span className="text-mauve-800 dark:text-mauve-200">{hour} : {minute} : {second}</span>
        </div>
    )
}