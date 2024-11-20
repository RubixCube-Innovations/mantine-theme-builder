import { useState } from "react";
import { Card } from "@mantine/core";
import { DatePicker } from "@mantine/dates";

export function CardsCalendar() {
  const [value, setValue] = useState<[Date | null, Date | null]>([new Date(2023, 5, 5), new Date(2023, 5, 13)]);

  return (
    <Card p="md">
      <DatePicker
        size="sm"
        type="range"
        value={value}
        onChange={(dates) => {
          if (dates[0] && dates[1]) {
            setValue(dates as [Date, Date]);
          }
        }}
        firstDayOfWeek={0}
        defaultDate={new Date(2023, 5)}
        withCellSpacing={false}
      />
    </Card>
  );
}
