import React from "react";
import { View, Text, Image, Pressable } from "react-native";

const AccountCard = ({
  icon,
  title,
  description,
  onClick,
  isCardActive = false,
  buttonLabel,
  alignTopIcon = false,
  whiteBg = false,
  hideAction = false,
  fullHeightIcon = false,
  
}: {
  icon: any;
  title: string;
  description?: string;
  onClick: () => void;
  isCardActive?: boolean;
  buttonLabel?: string;
  alignTopIcon?: boolean;
  whiteBg?: boolean;
  hideAction?: boolean;
  fullHeightIcon?: boolean;
}) => (
  <View
    className={`flex-row items-center mt-2 p-6 rounded-2xl ${whiteBg ? "bg-white border border-gray100" : "bg-gray100"
      }`}
    style={{
      borderWidth: isCardActive ? 1 : undefined,
      borderColor: isCardActive ? "#22C55E" : undefined,
    }}
  >
    <Image
  className="mr-3"
  source={icon}
  style={{
    resizeMode:"contain",
    height: fullHeightIcon ? "100%" : 20,
    width: fullHeightIcon ? 40 : 20, // 20px ≈ h-5
    alignSelf: alignTopIcon ? "flex-start" : "center",
  }}
/>

    <View
      className="flex-1 mr-3"
      style={{
        justifyContent: description ? "flex-start" : "center",
      }}
    >
      <Text className="text-h5 font-inter-bold font-semibold">{title}</Text>
      {description ? (
        <Text
          className="text-footnote text-gray700 leading-[20px]"
          style={{
            marginTop: alignTopIcon ? 4 : 0,
          }}
        >
          {description}
        </Text>
      ) : null}
    </View>

    {!hideAction && (
      <Pressable
        onPress={onClick}
        className={`h-10 bg-white items-center justify-center shadow-sm flex-row ${buttonLabel ? "rounded-2xl px-5" : "rounded-lg w-10"
          }`}
      >
        {buttonLabel ? (
          <Text className="text-h5 font-semibold">{buttonLabel}</Text>
        ) : (
          <Image source={require("@/assets/arrow.png")} />
        )}
      </Pressable>
    )}
  </View>
);

export default AccountCard;