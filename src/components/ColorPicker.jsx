import React from 'react'
import { ScrollView, View, TouchableOpacity } from 'react-native'

const colors = [
  '#FF4C61',
  '#FFBD4A',
  '#4AFFA1',
  '#4AB6FF',
  '#B44AFF',
  '#FF4AF0',
  '#FFD700',
  '#40E0D0',
  '#FFA07A',
  '#8A2BE2'
]

const ColorPicker = ({ onSelectColor }) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 10 }}
    >
      {colors.map((color, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => onSelectColor?.(color)}
          style={{
            width: 48,
            height: 48,
            borderRadius: 24,
            backgroundColor: color,
            marginRight: 12,
            borderWidth: 2,
            borderColor: '#fff',
            elevation: 4,
          }}
        />
      ))}
    </ScrollView>
  )
}

export default ColorPicker;