import { Button } from "./style";

export function ButtonComponent({
  children,
  status,
  type,
  onClick,
}: {
  children: string;
  status: "primary" | "secondary" | "danger";
  type: "button" | "submit" | "reset";
  onClick?: () => void;
}) {
  return (
    <Button status={status} type={type} onClick={onClick}>
      {children}
    </Button>
  );
}
