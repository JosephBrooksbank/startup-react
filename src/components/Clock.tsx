import {useState} from "react"

export const Clock = () => {
    const [timeOfDay, setTimeOfDay] = useState("morning")

    const getTime = () => {
        const time = new Date();
        const hours = time.getHours()
        if (hours < 12) {
            setTimeOfDay("morning")
        } else if (hours < 18) {
            setTimeOfDay("afternoon")
        } else {
            setTimeOfDay("evening")
        }

        let minutes: string | number = time.getMinutes()
        if (minutes < 10) {
            minutes = "0" + minutes
        }
        return `${hours}:${minutes}`
    }
    const [time, setTime] = useState(getTime)

    setInterval(() => {
        setTime(getTime())
    }, 1000)
    return (
        <div className={"text-2xl m-2"}>
            <span>It is </span>
            <span className={"relative m-2 has-[:hover]:animate-pulse"}>
                <span className={"block absolute -inset-1 bg-gradient-to-r -skew-y-6 from-indigo-500 via-purple-500 to-pink-500"} aria-hidden={"true"}></span>
                <span className={"relative font-bold font-sans"}>{time}</span>
            </span>
            <span> in the {timeOfDay}</span>
        </div>
    )
}