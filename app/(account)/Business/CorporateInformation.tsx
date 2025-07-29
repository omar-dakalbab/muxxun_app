import React from "react";
import { View, ScrollView, Text } from "react-native";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/Button";
import ScreenHeader from "@/components/ui/ScreenHeader";
import Input from "@/components/ui/Input";
import HeaderNavigation from "@/components/HeaderNavigations";

export default function CorporateInformation({ navigation }) {
  const [state, setState] = React.useState({
    date: "",
    companyNumber: "",
    sicCode: "",
    country: "",
    addressLine2: "",
    businessLicense: "",
    websiteLink: "",
    remittanceCountries: "",
    businessDescription: "",
  });

  return (
    <View className="bg-white flex-1 ">
      <HeaderNavigation />
      <Layout footer={<Button label="Continue" size="lg" onPress={() => {}} />}>
        <ScreenHeader
          title="Corporate information"
          description="Please provide the following information about your company."
        />
        <View className="flex-1">
          <ScrollView className="mt-4">
            <Input
              label="Date of incorporation"
              value={state.date}
              onChangeText={(text) => setState({ ...state, date: text })}
              type="date"
            />
            <Input
              label="Company number"
              value={state.companyNumber}
              type="text"
              onChangeText={(text) =>
                setState({ ...state, companyNumber: text })
              }
            />
            <Input
              label="SIC code"
              type="text"
              value={state.sicCode}
              onChangeText={(text) => setState({ ...state, sicCode: text })}
            />
            <Input
              label="Country of registration"
              type="text"
              value={state.country}
              onChangeText={(text) => setState({ ...state, country: text })}
            />
            <Input
              label="Address line 2"
              type="text"
              value={state.addressLine2}
              onChangeText={(text) =>
                setState({ ...state, addressLine2: text })
              }
            />
            <Text className="text-gray-500 text-sm mb-2">Add one more SIC</Text>
            <Input
              label="Business license"
              type="text"
              value={state.businessLicense}
              onChangeText={(text) =>
                setState({ ...state, businessLicense: text })
              }
            />
            <Input
              label="Website link"
              type="text"
              value={state.websiteLink}
              onChangeText={(text) => setState({ ...state, websiteLink: text })}
            />
            <Input
              label="Remittance countries"
              type="text"
              value={state.remittanceCountries}
              onChangeText={(text) =>
                setState({ ...state, remittanceCountries: text })
              }
            />
            <Text className="text-gray-500 text-sm mb-2">Add one more</Text>

            <Input
              label="Business description"
              type="text"
              value={state.businessDescription}
              onChangeText={(text) =>
                setState({ ...state, businessDescription: text })
              }
            />
          </ScrollView>
        </View>
      </Layout>
    </View>
  );
}
