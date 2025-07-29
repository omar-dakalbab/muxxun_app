// DotsIndicator.js
import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Animated } from "react-native";

interface DotsIndicatorProps {
    count: number;
    activeIndex: number;
    dotSize?: number;
    dotSpacing?: number;
    activeColor?: string;
    inactiveColor?: string;
}

export default function DotsIndicator({
    count,
    activeIndex,
    dotSize = 8,
    dotSpacing = 8,
    activeColor = "#000",
    inactiveColor = "#E1E1E1",
}: DotsIndicatorProps) {
    // create animated values for each dot
    const animValues = useRef(
        Array.from({ length: count }, () => new Animated.Value(0))
    ).current;

    useEffect(() => {
        animValues.forEach((anim, index) => {
            Animated.timing(anim, {
                toValue: index === activeIndex ? 1 : 0,
                duration: 300,
                useNativeDriver: false,
            }).start();
        });
    }, [activeIndex, animValues]);

    return (
        <View style={styles.container}>
            {animValues.map((anim, index) => {
                const width = anim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [dotSize, dotSize + 12],
                });
                const opacity = anim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.3, 1],
                });
                const backgroundColor = anim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [inactiveColor, activeColor],
                });
                return (
                    <Animated.View
                        key={index}
                        style={[
                            styles.dot,
                            {
                                width,
                                height: dotSize,
                                marginHorizontal: dotSpacing / 2,
                                opacity,
                                backgroundColor,
                                borderRadius: dotSize / 2,
                            },
                        ]}
                    />
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 8,
    },
});