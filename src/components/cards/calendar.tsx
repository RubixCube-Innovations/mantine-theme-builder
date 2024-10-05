import { useState } from "react";

import { Card } from "@mantine/core";
import { DatePicker } from "@mantine/dates";

export function CardsCalendar() {
    
    const [value, setValue] = useState<[Date, Date]>([new Date(2023, 5, 5), new Date(2023, 5, 13)]);
    
    return (
        <Card p="sm">
            <DatePicker
               size="sm"
               type="range" 
               value={value}
               onChange={(dates) => {
                   if (dates.length === 2) {
                       setValue(dates as [Date, Date]);
                   }
               }}
               firstDayOfWeek={0} />
        </Card>
    )
}