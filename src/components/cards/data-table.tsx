import {
  Box,
  Button,
  Card,
  Checkbox,
  Group,
  Menu,
  Select,
  Stack,
  Table,
  Text,
  TextInput,
  Title
} from "@mantine/core";
import {
  IconChevronDown,
  IconDots,
  IconSortAscending,
} from "@tabler/icons-react";
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table";
import * as React from "react";

const data: Payment[] = [
  {
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    email: "ken99@yahoo.com",
  },
  {
    id: "3u1reuv4",
    amount: 242,
    status: "success",
    email: "Abe45@gmail.com",
  },
  {
    id: "derv1ws0",
    amount: 837,
    status: "processing",
    email: "Monserrat44@gmail.com",
  },
  {
    id: "5kma53ae",
    amount: 874,
    status: "success",
    email: "Silas22@gmail.com",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    email: "carmella@hotmail.com",
  },
];

export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onChange={(e) =>
          table.toggleAllPageRowsSelected(e.currentTarget.checked)
        }
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onChange={(e) => row.toggleSelected(e.currentTarget.checked)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <Text>{(row.getValue("status") as string).toUpperCase()}</Text>
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="subtle"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          c={"inherit"}
        >
          Email
          <IconSortAscending size={16} />
        </Button>
      );
    },
    cell: ({ row }) => (
      <Text>{(row.getValue("email") as string).toLowerCase()}</Text>
    ),
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);
      return <Text ta="right">{formatted}</Text>;
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;
      return (
        <Menu>
          <Menu.Target>
            <Button variant="subtle" size="xs" c={"gray"}>
              <IconDots size={16} />
            </Button>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </Menu.Item>
            <Menu.Item>View customer</Menu.Item>
            <Menu.Item>View payment details</Menu.Item>
          </Menu.Dropdown>
        </Menu>
      );
    },
  },
];

export function CardsDataTable() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <Card shadow="sm" padding="lg">
      <Stack gap="sm">
        <Box>
          <Title order={5}>Payments</Title>
          <Text size="sm" c="dimmed">
            Manage your payments.
          </Text>
        </Box>

        <Group justify="space-between" mt="md">
          <TextInput
            placeholder="Filter emails..."
            value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("email")?.setFilterValue(event.target.value)
            }
            style={{ maxWidth: 300, flexGrow: 1 }}
          />
          <Select
            data={table.getAllColumns().slice(1,4).map((col) => col.id.charAt(0).toUpperCase() + col.id.slice(1))}
            placeholder="Columns"
            rightSection={<IconChevronDown size={16} />}
            onChange={(value) => {
              const col = table.getColumn(value!);
              col?.toggleVisibility(!col.getIsVisible());
            }}
          />
        </Group>

        <Table verticalSpacing="sm" highlightOnHover withTableBorder>
          <Table.Thead c={"gray"}>
            {table.getHeaderGroups().map((headerGroup) => (
              <Table.Tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <Table.Th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </Table.Th>
                ))}
              </Table.Tr>
            ))}
          </Table.Thead>
          <Table.Tbody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <Table.Tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <Table.Td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </Table.Td>
                  ))}
                </Table.Tr>
              ))
            ) : (
              <Table.Tr>
                <Table.Td colSpan={columns.length}>
                  <Text ta="center">No results.</Text>
                </Table.Td>
              </Table.Tr>
            )}
          </Table.Tbody>
        </Table>

        <Group justify="space-between">
          <Text size="sm">
            {table.getFilteredSelectedRowModel().rows.length} of{" "}
            {table.getFilteredRowModel().rows.length} row(s) selected.
          </Text>

          <Group>
            <Button
              variant="outline"
              // disabled={!table.getCanPreviousPage()}
              onClick={table.previousPage}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              // disabled={!table.getCanNextPage()}
              onClick={table.nextPage}
            >
              Next
            </Button>
          </Group>
        </Group>
      </Stack>
    </Card>
  );
}
