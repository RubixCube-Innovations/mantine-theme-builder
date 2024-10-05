import { useState } from "react";

import { DatePicker } from "@mantine/dates"
import { Card } from "@mantine/core"

export function CardsCalendar() {
    
    const [value, setValue] = useState<[Date | null, Date | null]>([new Date(2023, 4, 5), new Date(2023, 4, 13)]);
    
    return (
        <Card>
            <DatePicker
               type="range" 
               defaultValue={value}
               value={value} 
               onChange={setValue}
               firstDayOfWeek={0} />
        </Card>
    )
}