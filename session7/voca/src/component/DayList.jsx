import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";


export default function DayList() {
    const days = useFetch("http://127.0.0.1:3001/days");

    if (days.length === 0) {
        return <span>Loading...</span>;
    }

    return (
        <DayList>
            {days.map((day) => (
                <DayItem key={day.id}>
                    <DayLink to={`/day/${day.day}`}>Day {day.day}</DayLink>
                </DayItem>
            ))}
        </DayList>
    );
}
