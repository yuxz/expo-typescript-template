import { View, Text, Pressable, type PressableProps } from "react-native";

interface ButtonProps extends PressableProps {
  title: string;
  variant?: "primary" | "secondary" | "danger";
}

export function Button({ title, variant = "primary", ...props }: ButtonProps) {
  const variantStyles = {
    primary: "bg-blue-600 active:bg-blue-700",
    secondary: "bg-gray-600 active:bg-gray-700",
    danger: "bg-red-600 active:bg-red-700",
  };

  return (
    <Pressable
      className={`rounded-xl py-4 px-6 ${variantStyles[variant]}`}
      {...props}
    >
      <Text className="text-white text-center font-semibold text-base">
        {title}
      </Text>
    </Pressable>
  );
}
