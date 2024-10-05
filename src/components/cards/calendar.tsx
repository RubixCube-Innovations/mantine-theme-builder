import { useState } from "react";

import { Card } from "@mantine/core";
import { DatePicker } from "@mantine/dates";

export function CardsCalendar() {
    
    const [value, setValue] = useState<[Date | null, Date | null]>([new Date(2023, 4, 5), new Date(2023, 4, 13)]);
    
    return (
        <Card p="sm">
            <DatePicker
               size="sm"
               type="range" 
               defaultValue={value}
               value={value} 
               onChange={setValue}
               firstDayOfWeek={0} />
        </Card>
    )
}