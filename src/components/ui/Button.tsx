import React from "react";
import type { PressableProps } from "react-native";
import { ActivityIndicator, Pressable, Text, View } from "react-native";
import type { VariantProps } from "tailwind-variants";
import { tv } from "tailwind-variants";

const button = tv({
  slots: {
    container: "my-2 flex flex-row items-center justify-center rounded-xl px-4",
    label: "font-inter text-base font-semibold",
    indicator: "h-6 text-white",
  },

  variants: {
    variant: {
      default: {
        container: "bg-black ",
        label: "text-white ",
        indicator: "text-white ",
      },
      secondary: {
        container: "bg-white",
        label: "text-black",
        indicator: "text-black",
      },
      outline: {
        container: "border border-blue",
        label: "text-black ",
        indicator: "text-black ",
      },
      destructive: {
        container: "bg-red-600",
        label: "text-white",
        indicator: "text-white",
      },
      ghost: {
        container: "bg-transparent",
        label: "font-medium text-black  ",
        indicator: "text-black ",
      },
      link: {
        container: "bg-transparent",
        label: "text-black",
        indicator: "text-black",
      },
      outline_white: {
        container: "border border-white",
        label: "text-white",
        indicator: "text-white",
      },
    },
    size: {
      default: {
        container: "h-14 px-4",
        label: "text-base",
      },
      lg: {
        container: "h-14 px-8",
        label: "text-lg",
      },
      md: {
        container: "h-12 px-8",
        label: "text-md",
      },
      sm: {
        container: "h-8 px-3",
        label: "text-sm",
        indicator: "h-2",
      },
      icon: { container: "size-9" },
    },
    disabled: {
      true: {
        container: "bg-neutral-300 ",
        label: "text-neutral-600 text-white ",
        indicator: "text-neutral-400 ",
      },
    },
    fullWidth: {
      true: {
        container: "",
      },
      false: {
        container: "self-center",
      },
    },
  },
  defaultVariants: {
    variant: "default",
    disabled: false,
    fullWidth: true,
    size: "default",
  },
});

type ButtonVariants = VariantProps<typeof button>;
interface Props extends ButtonVariants, Omit<PressableProps, "disabled"> {
  label?: string;
  loading?: boolean;
  className?: string;
  onPress?: () => void;
  textClassName?: string;
  leftIcon?: React.ReactNode;
}

export const Button = React.forwardRef<View, Props>(
  (
    {
      label: text,
      loading = false,
      variant = "default",
      disabled = false,
      size = "default",
      className = "",
      testID,
      textClassName = "",
      onPress,
      leftIcon,
      ...props
    },
    ref
  ) => {
    const styles = React.useMemo(
      () => button({ variant, disabled, size }),
      [variant, disabled, size]
    );

    return (
      <Pressable
        // disabled={disabled || loading}
        className={styles.container({ className })}
        {...props}
        ref={ref}
        testID={testID}
        onPress={onPress}
      >
        {props.children ? (
          props.children
        ) : (
          <>
            {leftIcon && <View className="mr-2">{leftIcon}</View>}
            {loading ? (
              <ActivityIndicator
                size="small"
                className={styles.indicator()}
                testID={testID ? `${testID}-activity-indicator` : undefined}
              />
            ) : (
              <Text
                testID={testID ? `${testID}-label` : undefined}
                className={styles.label({ className: textClassName })}
              >
                {text}
              </Text>
            )}
          </>
        )}
      </Pressable>
    );
  }
);
