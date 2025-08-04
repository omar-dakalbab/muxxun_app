import { ScrollView, Text, View } from 'react-native';
import React, { Component } from 'react';
import HeaderNavigation from '@/components/HeaderNavigations';
import ToggleInput from '@/components/ToggleInput';

export class Privacy extends Component {
  render() {
    return (
      <View className='flex-1 bg-white'>
        <HeaderNavigation />
        <Text className='text-4xl mt-5 mx-6 mb-3 font-bold'>Privacy</Text>

        <ScrollView>
          <View className='mx-4'>
            <Text className='text-h5 mt-6 mb-3 text-gray600'>Marketing</Text>

            <ToggleInput
              isUp={true}
              image={require('@/assets/email.png')}
              title='Personalised emails'
              description={`I am happy to receive emails about\nMUXXUS products, services, and\noffers that may interest me.`}
              className='bg-gray100 flex-row justify-between  p-5 rounded-2xl border border-gray100 mb-4'
              textClassName='text-primary text-[15px] font-bold'
              descriptionClass='text-gray700 text-footnote mt-1 leading-6 '
            />

            <ToggleInput
              isUp={true}
              image={require('@/assets/bellicon.png')}
              title='Personalised push'
              description={`I am happy to receive push\nnotifications about MUXXUS\nproducts, services, and offers that \nmay interest me.`}
              textClassName='text-primary text-[15px] font-bold'
              descriptionClass='text-gray700 text-footnote mt-1 leading-6 '
            />

            <ToggleInput
              isUp={true}
              image={require('@/assets/heart.png')}
              title='Social media & advertising platforms'
              description={`I am happy to receive push \nnotifications about MUXXUS \nproducts, services, and offers that \nmay interest me.`}
              textClassName='text-primary text-[15px] font-bold'
              descriptionClass='text-gray700 text-footnote mt-1 leading-6 '
            />

            <Text className='text-h5 mt-4 mb-3 text-gray600'>Promotions</Text>

            <ToggleInput
              isUp={true}
              image={require('@/assets/gift.png')}
              title='Rewards pushes'
              description={`I am happy to receive emails about \nMUXXUS products, services, and \noffers that may interest me.`}
              textClassName='text-primary text-[15px] font-bold'
              descriptionClass='text-gray700 text-footnote mt-1 leading-6 '
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Privacy;
