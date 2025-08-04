import { ScrollView, Text, View } from 'react-native';
import React, { useState } from 'react';
import HeaderNavigation from '@/components/HeaderNavigations';
import SelectModal from '@/components/ui/SelectModal';

const TermsAndConditions = () => {
    const [issueCountry, setIssueCountry] = useState("");

    return (
        <View className='flex-1 bg-white'>
            <ScrollView>
                <HeaderNavigation />
                <Text className='text-3xl mt-5 mx-5 font-bold'>Terms and conditions</Text>
                <Text className='text-h5 mt-3 mx-5 font-semibold text-gray500'>
                    Download as .pdf here. To view our{'\n'}previous terms download it here.
                </Text>

                <View className='mx-4 mt-5'>

                    <SelectModal
                        subTitle="Country"
                        value={issueCountry}
                        onChange={(value) => setIssueCountry(value)}
                        options={[
                            { label: "United States", value: "US" },
                            { label: "Canada", value: "CA" },
                            { label: "United Kingdom", value: "UK" },
                        ]}
                    />
                </View>

                <Text className='mx-5 my-3 text-h5 text-gray600'>Effective date: 30 june 2021</Text>

                <Text className='text-2xl mt-4 mx-5 font-bold'>The basics</Text>

                <Text className='mx-5 my-3 text-h5 text-gray500 leading-6'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Imperdiet sed euismod nisi porta lorem.
                    {'\n'}
                    {'\n'}
                    Maecenas sed enim ut sem viverra aliquet. Duis convallis convallis tellus id. Ultrices tincidunt arcu non sodales neque sodales ut. Non blandit massa enim nec dui. Iaculis urna id volutpat lacus. Convallis aenean et tortor at risus viverra. Sagittis purus sit amet volutpat. Posuere sollicitudin aliquam ultrices sagittis orci. Amet volutpat consequat mauris nunc. In aliquam sem fringilla ut morbi tincidunt augue. Faucibus nisl tincidunt eget nullam non nisi est. Pharetra diam sit amet nisl. Cras sed felis eget velit aliquet sagittis. Ut eu sem integer vitae. Ornare arcu dui vivamus arcu felis bibendum ut tristique. Faucibus turpis in eu mi bibendum neque egestas congue.
                </Text>
            </ScrollView>
        </View>
    );
};

export default TermsAndConditions;
