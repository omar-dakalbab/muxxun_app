import React, { memo } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { KeyboardAvoidingView, Platform, TextInput, View } from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";

const PageLayout = ({
  title,
  description,
  children,
  footer,
  keyboardVerticalOffset = 30,
}: {
  title?: string;
  description?: string;
  keyboardVerticalOffset?: number;
  children?: React.ReactNode;
  footer?: React.ReactNode;
}) => {
  const insets = useSafeAreaInsets();

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <SafeAreaView className="flex w-full flex-1 bg-white">
          <View style={styles.container}>
            {/* Main content area */}
            <View className="ios:mt-5 mt-4 flex-1">
              {title && <Text style={styles.title}>{title}</Text>}

              {description && (
                <View className="mt-2" style={styles.descriptionContainer}>
                  <Text style={styles.description}>{description}</Text>
                </View>
              )}

              <View className="flex-1" style={styles.childrenContainer}>
                {children}
              </View>
            </View>

            {footer && (
              <View
                className="bg-white"
                style={[
                  {
                    marginBottom:
                      insets.bottom + (Platform.OS === "ios" ? -40 : 0),
                  },
                ]}
              >
                {footer}
              </View>
            )}
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </>
  );
};

export default memo(PageLayout);

const styles = StyleSheet.create({
  keyboardAvoidContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 20,
  },
  inner: {
    flex: 1,
    paddingBottom: 80, // Add bottom padding to account for footer
  },
  descriptionContainer: {
    maxWidth: "90%",
  },
  description: {
    fontSize: 18,
    fontWeight: "300",
    color: "#606060",
  },
  childrenContainer: {
    marginTop: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#000",
    marginBottom: 8,
  },
});
