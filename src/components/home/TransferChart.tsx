import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop, Line, Circle } from 'react-native-svg';
import { Calendar } from 'lucide-react-native';
import { Button } from '../ui/Button';
import CurrencyConvertInput from './CurrencyConvertInput';



const { width } = Dimensions.get('window');
const chartWidth = width - 64; // subtract outer margin (16*2) and inner padding (16*2)
const chartHeight = 200;

// Create smooth cubic bezier path
function createSmoothPath(points: number[], w: number, h: number) {
    const len = points.length;
    const stepX = w / (len - 1);
    let d = `M 0,${h - points[0] * h}`;
    for (let i = 1; i < len; i++) {
        const x = i * stepX;
        const y = h - points[i] * h;
        const prevX = (i - 1) * stepX;
        const prevY = h - points[i - 1] * h;
        const cpx = prevX + stepX / 2;
        d += ` C ${cpx},${prevY} ${cpx},${y} ${x},${y}`;
    }
    return d;
}

export default function TransferSimulator() {
    const raw = [5000, 9000, 10000, 5555, 11000, 9500, 10200];
    const max = Math.max(...raw);
    const points = raw.map(v => v / max);
    const labels = ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const selectedIndex = 3;
    const stepX = chartWidth / (points.length - 1);

    const d = createSmoothPath(points, chartWidth, chartHeight);
    const selectedX = selectedIndex * stepX;
    const selectedY = chartHeight - points[selectedIndex] * chartHeight;
    const augX = stepX;

    return (
        <View className="m-4 bg-gray-100 rounded-2xl p-4">
            {/* Header */}
            <View className="flex-row items-center justify-between mb-2">
                <Text className="text-lg font-semibold text-gray-900">Simulateur de transfert</Text>
                <TouchableOpacity className="p-2 bg-white rounded-xl shadow-sm">
                    <Calendar size={20} color="#374151" />
                </TouchableOpacity>
            </View>

            {/* Chart Area */}
            <View className="relative" style={{ width: chartWidth, height: chartHeight + 20 }}>
                {/* SVG Chart */}
                <Svg width={chartWidth} height={chartHeight}>
                    <Defs>
                        <LinearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                            <Stop offset="0%" stopColor="#A78BFA" stopOpacity={0.4} />
                            <Stop offset="100%" stopColor="#FFFFFF" stopOpacity={0} />
                        </LinearGradient>
                    </Defs>
                    {/* Grid Lines */}
                    <Line x1={0} y1={0} x2={0} y2={chartHeight} stroke="#D1D5DB" strokeWidth={1} />
                    <Line x1={0} y1={chartHeight} x2={chartWidth} y2={chartHeight} stroke="#D1D5DB" strokeWidth={1} />
                    <Line x1={augX} y1={0} x2={augX} y2={chartHeight} stroke="#E5E7EB" strokeWidth={1} />

                    {/* Filled Area */}
                    <Path d={`${d} L ${chartWidth},${chartHeight} L 0,${chartHeight} Z`} fill="url(#grad)" />
                    {/* Curve Stroke */}
                    <Path d={d} fill="none" stroke="#8B5CF6" strokeWidth={2} />

                    {/* Vertical Indicator */}
                    <Line x1={selectedX} y1={0} x2={selectedX} y2={chartHeight} stroke="#8B5CF6" strokeWidth={1} />

                    {/* Data Point Marker */}
                    <Circle cx={selectedX} cy={selectedY} r={6} fill="#FFFFFF" stroke="#8B5CF6" strokeWidth={2} />
                </Svg>

                {/* Tooltip */}
                <View
                    className="absolute bg-purple-600 px-3 py-1 rounded-full"
                    style={{ left: selectedX - 40, top: selectedY - 44 }}
                >
                    <Text className="text-white text-sm">↑ ${raw[selectedIndex].toLocaleString()}</Text>
                </View>
            </View>

            {/* X-axis labels */}
            <View className="flex-row justify-between mt-2 px-1">
                {labels.map((label, i) => (
                    <Text key={i} className="text-xs text-gray-600">
                        {label}
                    </Text>
                ))}
            </View>

            {/* Y-axis labels */}
            <View className="absolute top-[40px] left-0">
                {[0, max / 2, max].map((val, i) => (
                    <Text
                        key={i}
                        className="text-xs text-gray-600"
                        style={{ top: chartHeight - (i * chartHeight) / 2 - 6, left: -40 }}
                    >
                        ${i === 0 ? 0 : i === 1 ? (max / 2).toLocaleString() : max.toLocaleString()}
                    </Text>
                ))}
            </View>


            <View className='mt-8'>
                <CurrencyConvertInput />
            </View>

            <View className='mt-4'>
                <Button>
                    <Text className="text-white font-semibold">Envoyer</Text>
                </Button>
            </View>


        </View>
    );
}
