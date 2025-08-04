import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  View,
  Pressable,
  Text,
  Image,
  ImageSourcePropType,
  Switch,
  TouchableOpacity,
} from 'react-native';

interface CardItemData {
  title: string;
  description?: string;
  image: ImageSourcePropType;
  route?: string;
  showToggle?: boolean;
  toggleValue?: boolean;
  onToggleChange?: (val: boolean) => void;

  // Optional UI controls
  hideAction?: boolean;
  buttonLabel?: string;
  bigImage?: boolean;
  smallerImage?: boolean;
  rightIcon?: ImageSourcePropType;

  alignRightTop?: boolean;
  rightTopImage?: ImageSourcePropType; // NEW
  disableRight?: boolean;              // NEW
}

interface CardGroupProps {
  data: CardItemData[];
  bgWhite?: boolean;
}

const CardGroup: React.FC<CardGroupProps> = ({ data, bgWhite }) => {
  const [toggles, setToggles] = useState(
    data.map((item) => item.toggleValue ?? false)
  );

  const handleToggle = (index: number, newValue: boolean) => {
    const newToggles = [...toggles];
    newToggles[index] = newValue;
    setToggles(newToggles);
    data[index].onToggleChange?.(newValue);
  };

  return (
    <View className={`${bgWhite ? 'bg-white border border-gray200' : 'bg-gray100'} px-5 rounded-2xl mx-5 my-6 py-2`}>
      {data.map((item, index) => (
        <Pressable
          key={index}
          onPress={() => {
            if (item.route) {
              router.push(item.route);
            }
          }}
          className="flex-row my-4"
          style={{
            justifyContent: 'space-between',
            alignItems: item.description ? 'flex-start' : 'center',
          }}
        >
          {/* Left Side */}
          <View className="flex-1 flex-row items-center">
            <Image
              source={item.image}
              className={`mr-4 mt-1 ${item.smallerImage ? 'w-5 h-5' : item.bigImage ? 'w-9 h-9' : 'w-6 h-6'
                }`}
            />
            <View className="flex-1 justify-center mt-1">
              <Text className="font-bold text-h4">{item.title}</Text>
              {item.description ? (
                <Text className="text-gray700 text-footnote mt-1 leading-[20px]">
                  {item.description}
                </Text>
              ) : null}
            </View>
          </View>

          {/* Right Side */}
          {!item.hideAction && !item.disableRight && (
            item.rightTopImage ? (
              <Image
                source={item.rightTopImage}
                className="w-5 h-5 mt-1"
                resizeMode="contain"
              />
            ) : item.showToggle ? (
              <Switch
                value={toggles[index]}
                onValueChange={(val) => handleToggle(index, val)}
                trackColor={{ false: '#ccc', true: '#2563eb' }}
                thumbColor="#fff"
              />
            ) : (
              <TouchableOpacity
                onPress={() => {
                  if (item.route) {
                    router.push(item.route);
                  }
                }}
                className={`bg-white shadow-sm flex-row items-center justify-center 
                  ${item.buttonLabel ? 'rounded-2xl px-5 h-10' : 'rounded-lg w-10 h-10'} 
                  ${item.alignRightTop ? 'mt-1' : ''}`}
              >
                {item.buttonLabel ? (
                  <Text className="text-h5 font-semibold">{item.buttonLabel}</Text>
                ) : (
                  <Image
                    source={item.rightIcon ?? require('@/assets/arrow.png')}
                    className="w-4 h-4"
                    resizeMode="contain"
                  />
                )}
              </TouchableOpacity>
            )
          )}
        </Pressable>
      ))}
    </View>
  );
};

export default CardGroup;
