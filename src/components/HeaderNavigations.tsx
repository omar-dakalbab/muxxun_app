import React, { useLayoutEffect } from "react";
import { Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeft, X } from "lucide-react-native";
import { router } from "expo-router";

type HeaderNavigationProps = {
  title?: string;
  icon?: React.ReactNode;
  headerShown?: boolean;
  onLeftIconPress?: () => void;
  rightIcon?: React.ReactNode;
  onRightIconPress?: () => void;
};

const HeaderNavigation = ({
  title = "",
  icon = <ArrowLeft size={24} color="black" />,
  headerShown = true,
  onLeftIconPress,
  rightIcon = <Image />,
  onRightIconPress,
}: HeaderNavigationProps) => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown,
      headerTitle: title,
      headerBackVisible: false,
      headerShadowVisible: false,
      headerStyle: {
        backgroundColor: "white",
      },
      headerLeft: () => (
        <Pressable
          onPress={() => {
            if (onLeftIconPress) {
              onLeftIconPress();
            } else {
              router.back();
            }
          }}
          style={{
            height: 40,
            width: 40,
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: 0,
          }}
        >
          {icon}
        </Pressable>
      ),
      headerRight: () =>
        rightIcon ? (
          <Pressable
            onPress={() => {
              if (onRightIconPress) {
                onRightIconPress();
              }
            }}
            style={{
              height: 40,
              width: 40,
              alignItems: "center",
              justifyContent: "center",
              paddingRight: 0,
            }}
          >
            {rightIcon}
          </Pressable>
        ) : null,
    });
  }, [navigation, title, headerShown, onLeftIconPress, rightIcon, onRightIconPress]);

  return null;
};

export default HeaderNavigation;
