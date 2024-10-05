import {
  Button,
  Card,
  Divider,
  Group,
  Radio,
  Select,
  Space,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useState } from "react";

export function CardsPaymentMethod() {
  const [paymentMethod, setPaymentMethod] = useState("card");

  return (
    <Card shadow="sm" padding="lg">
      <Title order={3}>Payment Method</Title>
      <Text c="dimmed" size="sm">
        Add a new payment method to your account.
      </Text>
      <Space my="sm" />

      <Stack gap="md">
        <Radio.Group value={paymentMethod} onChange={setPaymentMethod}>
          <Group wrap="nowrap">
            <Radio.Card
              value="card"
              checked={paymentMethod === "card"}
              onClick={() => setPaymentMethod("card")}
              style={{
                borderColor:
                  paymentMethod === "card"
                    ? "var(--mantine-primary-color-filled)"
                    : "",
              }}
              py={"xs"}
            >
              <Stack align="center" gap={0}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  style={{
                    marginBottom: "8px",
                    height: "24px",
                    width: "24px",
                  }}
                >
                  <rect width="20" height="14" x="2" y="5" rx="2" />
                  <path d="M2 10h20" />
                </svg>
                <Text size="sm">Card</Text>
              </Stack>
            </Radio.Card>

            <Radio.Card
              value="paypal"
              checked={paymentMethod === "paypal"}
              onClick={() => setPaymentMethod("paypal")}
              style={{
                borderColor:
                  paymentMethod === "paypal"
                    ? "var(--mantine-primary-color-filled)"
                    : "",
              }}
              py={"xs"}
            >
              <Stack align="center" gap={0}>
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  style={{
                    marginBottom: "8px",
                    height: "24px",
                    width: "24px",
                  }}
                >
                  <path
                    d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z"
                    fill="currentColor"
                  />
                </svg>
                <Text size="sm">Paypal</Text>
              </Stack>
            </Radio.Card>

            <Radio.Card
              value="apple"
              checked={paymentMethod === "apple"}
              onClick={() => setPaymentMethod("apple")}
              style={{
                borderColor:
                  paymentMethod === "apple"
                    ? "var(--mantine-primary-color-filled)"
                    : "",
              }}
              py={"xs"}
            >
              <Stack align="center" gap={0}>
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  style={{
                    marginBottom: "8px",
                    height: "24px",
                    width: "24px",
                  }}
                >
                  <path
                    d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
                    fill="currentColor"
                  />
                </svg>
                <Text size="sm">Apple</Text>
              </Stack>
            </Radio.Card>
          </Group>
        </Radio.Group>

        <TextInput label="Name" placeholder="First Last" />
        <TextInput label="City" placeholder="" />
        <TextInput label="Card number" placeholder="" />

        <Group grow>
          <Select
            label="Expires"
            placeholder="Month"
            data={[
              { value: "1", label: "January" },
              { value: "2", label: "February" },
              { value: "3", label: "March" },
              { value: "4", label: "April" },
              { value: "5", label: "May" },
              { value: "6", label: "June" },
              { value: "7", label: "July" },
              { value: "8", label: "August" },
              { value: "9", label: "September" },
              { value: "10", label: "October" },
              { value: "11", label: "November" },
              { value: "12", label: "December" },
            ]}
          />
          <Select
            label="Year"
            placeholder="Year"
            data={Array.from({ length: 10 }, (_, i) => ({
              value: `${new Date().getFullYear() + i}`,
              label: `${new Date().getFullYear() + i}`,
            }))}
          />
          <TextInput label="CVC" placeholder="CVC" />
        </Group>
      </Stack>

      <Space my="sm" />
      <Button fullWidth>Continue</Button>
    </Card>
  );
}
