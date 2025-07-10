import { Redirect } from "expo-router";
import React from "react";

// This is the main entry point, redirecting to onboarding by default
export default function Index() {
  // You could add logic here to check if user is authenticated
  // and redirect to the appropriate screen
  return <Redirect href="/(app)" />;
}
