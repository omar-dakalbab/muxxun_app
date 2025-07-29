import { StatusBar } from "expo-status-bar";
import { useVideoPlayer, VideoView } from "expo-video";
import * as React from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

import { Button } from "@/components/ui/Button";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("screen");

const slides = [
  {
    title: "Ready to change the way you manage your money?",
    description: "Join MUXXUS today and start saving effortlessly.",
    source: require("@/assets/videos/slide-1.mp4"),
    textColor: "text-white",
    buttonBackgroundColor: "bg-white",
    progressBarColor: "bg-white",
    buttonTextColor: "text-black",
    secondaryButtonBackgroundColor: "bg-black",
    secondaryButtonTextColor: "text-white",
  },
  {
    title: "Easy to pay, at home and abroad",
    description:
      "Multiple payment methods, including card, bank transfer, and mobile money.",
    source: require("@/assets/videos/slide-2.mp4"),
    textColor: "text-black",
    buttonBackgroundColor: "bg-black",
    buttonTextColor: "text-white",
    progressBarColor: "bg-white",
    secondaryButtonBackgroundColor: "bg-white",
    secondaryButtonTextColor: "text-black",
  },
  {
    title: "Send near, far, wherever you are",
    description:
      "Send money to your friends and family, or to your bank account.",
    source: require("@/assets/videos/slide-3.mp4"),
    textColor: "text-white",
    buttonBackgroundColor: "bg-blue-500",
    buttonTextColor: "text-black",
    progressBarColor: "bg-white",
    secondaryButtonBackgroundColor: "bg-black",
    secondaryButtonTextColor: "text-white",
  },
  {
    title: "Safe and secure",
    description:
      "Your money is safe with us. We use the latest security measures to protect your money.",
    source: require("@/assets/videos/slide-4.mp4"),
    textColor: "text-white",
    buttonBackgroundColor: "bg-white",
    buttonTextColor: "text-black",
    progressBarColor: "bg-white",
    secondaryButtonBackgroundColor: "bg-black",
    secondaryButtonTextColor: "text-white",
  },
  {
    title: "Get help from real people",
    description:
      "Our support team is here to help you with any questions or issues you may have.",
    source: require("@/assets/videos/slide-5.mp4"),
    textColor: "text-white",
    buttonBackgroundColor: "bg-white",
    buttonTextColor: "text-black",
    progressBarColor: "bg-white",
    secondaryButtonBackgroundColor: "bg-black",
    secondaryButtonTextColor: "text-white",
  },
];

type ProgressBarProps = {
  index: number;
  activeIndex: number;
  duration: number;
};

function ProgressBar({ index, activeIndex, duration }: ProgressBarProps) {
  const progress = useSharedValue(0);

  React.useEffect(() => {
    if (index === activeIndex) {
      progress.value = withTiming(1, {
        duration,
        easing: Easing.linear,
      });
    } else if (index < activeIndex) {
      progress.value = 1;
    } else {
      progress.value = 0;
    }
  }, [activeIndex, index, duration]);

  const animatedStyle = useAnimatedStyle(() => ({
    width: `${progress.value * 100}%`,
  }));

  const backgroundColor = slides[activeIndex].buttonBackgroundColor;

  return (
    <View
      className={`mx-1 h-1 flex-1 overflow-hidden rounded-full ${backgroundColor}/30`}
    >
      <Animated.View
        className={`h-full ${backgroundColor}`}
        style={animatedStyle}
      />
    </View>
  );
}

export default function WelcomeScreen() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const flatListRef = React.useRef<Animated.FlatList<(typeof slides)[0]>>(null);
  const autoplayTimer = React.useRef<NodeJS.Timeout | null>(null);
  const translateX = useSharedValue(0);
  const [currentStory, setCurrentStory] = React.useState(0);
  const totalStories = slides.length;

  // Create video players for each slide
  const player1 = useVideoPlayer(slides[0].source);
  const player2 = useVideoPlayer(slides[1].source);
  const player3 = useVideoPlayer(slides[2].source);
  const player4 = useVideoPlayer(slides[3].source);
  const player5 = useVideoPlayer(slides[4].source);

  const videoPlayers = [player1, player2, player3, player4, player5];

  // Handle video playback when slide changes
  React.useEffect(() => {
    async function playCurrent() {
      // Pause all
      await Promise.all(videoPlayers.map((player) => player.pause()));
      // Play current video
      const currentPlayer = videoPlayers[activeIndex];
      if (currentPlayer) {
        try {
          currentPlayer.loop = true;
          currentPlayer.muted = true;
          currentPlayer.play();
        } catch (e) {
          console.error("Video failed to play:", e);
        }
      }
    }
    playCurrent();
  }, [activeIndex]);

  // Cleanup videos when component unmounts
  React.useEffect(() => {
    return () => {
      videoPlayers.forEach((player) => {
        player.pause();
      });
      if (autoplayTimer.current) {
        clearInterval(autoplayTimer.current);
      }
    };
  }, []);

  const startAutoplay = React.useCallback(() => {
    autoplayTimer.current = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % slides.length;
        flatListRef.current?.scrollToIndex({
          index: nextIndex,
          animated: true,
        });
        return nextIndex;
      });
    }, 3000);
  }, []);

  React.useEffect(() => {
    startAutoplay();
    return () => {
      if (autoplayTimer.current) {
        clearInterval(autoplayTimer.current);
      }
    };
  }, [startAutoplay]);

  const handleTap = React.useCallback(
    (direction: "left" | "right") => {
      if (direction === "right") {
        if (activeIndex === slides.length - 1) {
          // If last item, move to next story
          if (currentStory < totalStories - 1) {
            setCurrentStory((prev) => prev + 1);
            setActiveIndex(0);
            flatListRef.current?.scrollToIndex({
              index: 0,
              animated: true,
            });
          }
        } else {
          setActiveIndex((prev) => prev + 1);
          flatListRef.current?.scrollToIndex({
            index: activeIndex + 1,
            animated: true,
          });
        }
      } else {
        if (activeIndex === 0) {
          // If first item, move to previous story
          if (currentStory > 0) {
            setCurrentStory((prev) => prev - 1);
            setActiveIndex(slides.length - 1);
            flatListRef.current?.scrollToIndex({
              index: slides.length - 1,
              animated: true,
            });
          }
        } else {
          setActiveIndex((prev) => prev - 1);
          flatListRef.current?.scrollToIndex({
            index: activeIndex - 1,
            animated: true,
          });
        }
      }
    },
    [activeIndex, currentStory]
  );

  const panGesture = Gesture.Pan()
    .onUpdate((event) => {
      translateX.value = event.translationX;
    })
    .onEnd((event) => {
      if (Math.abs(event.velocityX) > 500) {
        if (event.velocityX > 0) {
          // Swipe right - previous story
          if (currentStory > 0) {
            setCurrentStory((prev) => prev - 1);
            setActiveIndex(slides.length - 1);
            flatListRef.current?.scrollToIndex({
              index: slides.length - 1,
              animated: true,
            });
          }
        } else {
          // Swipe left - next story
          if (currentStory < totalStories - 1) {
            setCurrentStory((prev) => prev + 1);
            setActiveIndex(0);
            flatListRef.current?.scrollToIndex({
              index: 0,
              animated: true,
            });
          }
        }
      }
      translateX.value = withSpring(0);
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const navigation = useNavigation();

  return (
    <>
      {/* <Stack.Screen options={{ headerShown: false }} /> */}
      <View className="absolute inset-0 flex-1 bg-black">
        <StatusBar hidden translucent backgroundColor="transparent" />
        {/* Heading Section - absolutely positioned over the video */}
        <View className="absolute inset-x-0 top-0 z-10 mt-5 px-6 pb-6 pt-16">
          <Text
            className={`mb-2 text-lg font-bold tracking-wide ${slides[activeIndex].textColor}`}
          >
            Welcome to MUXXUS
          </Text>
          <Text
            className={`mb-2 text-3xl font-extrabold uppercase leading-tight ${slides[activeIndex].textColor}`}
          >
            {slides[activeIndex].title}
          </Text>
          <Text
            className={`text-md mb-2 font-semibold ${slides[activeIndex].textColor}`}
          >
            {slides[activeIndex].description}
          </Text>
        </View>
        <GestureDetector gesture={panGesture}>
          <Animated.View style={[{ flex: 1 }, animatedStyle]}>
            <Animated.FlatList
              ref={flatListRef}
              data={slides}
              horizontal
              pagingEnabled
              keyExtractor={(item) => item.source.toString()}
              showsHorizontalScrollIndicator={false}
              onMomentumScrollEnd={(event) => {
                const newIndex = Math.round(
                  event.nativeEvent.contentOffset.x / width
                );
                setActiveIndex(newIndex);
              }}
              renderItem={({ index }) => (
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => handleTap("right")}
                  onLongPress={() => handleTap("left")}
                  className="h-screen w-screen"
                >
                  <VideoView
                    style={{ width: "100%", height: "100%" }}
                    player={videoPlayers[index]}
                    allowsFullscreen
                    nativeControls={false}
                    contentFit="cover"
                  />
                </TouchableOpacity>
              )}
            />
          </Animated.View>
        </GestureDetector>
        <View className="absolute inset-x-5 top-[50px] flex-row justify-between">
          {slides.map((_, index) => (
            <ProgressBar
              key={index}
              index={index}
              activeIndex={activeIndex}
              duration={3000}
            />
          ))}
        </View>
        <View className="absolute inset-x-5 bottom-[50px]">
          <Button
            onPress={() => {
              console.log('Create account')
              navigation.navigate("PhoneNumber_1")
            }}
            className={`w-full ${slides[activeIndex].buttonTextColor} ${slides[activeIndex].buttonBackgroundColor}`}
            size="lg"
            label="Create Account"
            textClassName={`${slides[activeIndex].buttonTextColor}`}
          />
          <Button
            onPress={() => navigation.navigate("Login")}
            variant="secondary"
            className={`w-full ${slides[activeIndex].secondaryButtonTextColor} ${slides[activeIndex].secondaryButtonBackgroundColor}`}
            size="lg"
            label="Login"
            textClassName={`${slides[activeIndex].secondaryButtonTextColor}`}
          />
        </View>
      </View>
    </>
  );
}
