import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { Portal } from "@gorhom/portal";
import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
} from "react";
import { StyleSheet } from "react-native";

// Define the props for our component
export type BottomSheetControllerProps = {
  content: React.ReactNode;
  snapPoints?: string[];
  onChange?: (index: number) => void;
};

// Define the ref methods that will be exposed
export type BottomSheetControllerHandle = {
  open: () => void;
  close: () => void;
};

// Create the forwardRef component
const BottomSheetController = forwardRef<
  BottomSheetControllerHandle,
  BottomSheetControllerProps
>(({ content, snapPoints = ["50%", "90%"], onChange }, ref) => {
  // Reference to the bottom sheet
  const bottomSheetRef = useRef<BottomSheet>(null);

  // Memoize the snap points
  const snapPointsArray = useMemo(() => snapPoints, [snapPoints]);

  // Expose methods to parent component through ref
  useImperativeHandle(ref, () => ({
    open: () => {
      bottomSheetRef.current?.expand();
    },
    close: () => {
      bottomSheetRef.current?.close();
    },
  }));

  // Backdrop component
  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
      />
    ),
    []
  );

  // Handle sheet changes
  const handleSheetChanges = useCallback(
    (index: number) => {
      if (onChange) {
        onChange(index);
      }
    },
    [onChange]
  );

  return (
    <Portal name="modal">
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPointsArray}
        enablePanDownToClose={true}
        backdropComponent={renderBackdrop}
        handleIndicatorStyle={styles.indicator}
        backgroundStyle={styles.sheetBackground}
        onChange={handleSheetChanges}
      >
        <BottomSheetView style={styles.contentContainer}>
          {content}
        </BottomSheetView>
      </BottomSheet>
    </Portal>
  );
});

const styles = StyleSheet.create({
  indicator: {
    width: 40,
    height: 4,
    backgroundColor: "#ddd",
  },
  sheetBackground: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    margin: 8,
    marginBottom: 10,
  },
  contentContainer: {
    flex: 1,
    padding: 16,
  },
});

export default BottomSheetController;
