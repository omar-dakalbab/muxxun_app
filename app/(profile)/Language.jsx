import HeaderNavigation from '@/components/HeaderNavigations';
import SelectModal from '@/components/ui/SelectModal'
import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class Language extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: "",
    };
  }

  setCountry = (country) => {
    this.setState({ country });
  };
  render() {

    return (
      <View className='flex-1 bg-white'>
        <HeaderNavigation title='Select Language' />
        <View className='mx-5 mt-8'>
          <SelectModal
            subTitle='Select Language'
            value={this.state.country}
            onChange={(value) => this.setCountry(value)}
            options={[
              { label: "🇺🇸 English (US)", value: "en_us" },
              { label: "🇬🇧 English (UK)", value: "en_uk" },
              { label: "🇨🇦 English (Canada)", value: "en_ca" },
              { label: "🇫🇷 Français (France)", value: "fr" },
              { label: "🇩🇪 Deutsch (Germany)", value: "de" },
              { label: "🇪🇸 Español (Spain)", value: "es" },
              { label: "🇮🇹 Italiano (Italy)", value: "it" },
              { label: "🇯🇵 日本語 (Japan)", value: "ja" },
              { label: "🇨🇳 中文 (China)", value: "zh" },
              { label: "🇷🇺 Русский (Russia)", value: "ru" }, { label: "🇺🇸 English (US)", value: "en_us" },
              { label: "🇬🇧 English (UK)", value: "en_uk" },
              { label: "🇨🇦 English (Canada)", value: "en_ca" },
              { label: "🇫🇷 Français (France)", value: "fr" },
              { label: "🇩🇪 Deutsch (Germany)", value: "de" },
              { label: "🇪🇸 Español (Spain)", value: "es" },
              { label: "🇮🇹 Italiano (Italy)", value: "it" },
              { label: "🇯🇵 日本語 (Japan)", value: "ja" },
              { label: "🇨🇳 中文 (China)", value: "zh" },
              { label: "🇷🇺 Русский (Russia)", value: "ru" },
            ]}
          />
        </View>
      </View>
    )
  }
}

export default Language
