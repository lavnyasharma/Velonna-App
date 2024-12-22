import BackBtn from '@/shared/components/backBtn';
import useDarkMode from '@/shared/hooks/useDarkMode';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import { styless } from './styles';




const TermsAndConditions = () => {
    const navigation = useNavigation();
    const { isDarkMode } = useDarkMode();

    const styles = styless(isDarkMode);
    
  return (
    <ScrollView style={styles.container}>
        
         <TouchableOpacity style={styles.btnBack} onPress={() => navigation.goBack()}>
              <BackBtn />
            </TouchableOpacity>

         
    
      <View style={styles.section}>
        <Text style={styles.heading}>VELONNA - Terms of Service</Text>
        <Text style={styles.paragraph}>
          By visiting our site and/ or purchasing something from us, you engage in our “Service” and agree to be bound by the following terms and conditions (“Terms of Service,” “Terms”), including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of Service apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/ or contributors of content. Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services. If these Terms of Service are considered an offer, acceptance is expressly limited to these Terms of Service. Any new features or tools that are added to the current store shall also be subject to the Terms of Service. You can review the most current version of the Terms of Service at any time on this page. We reserve the right to update, change, or replace any part of these Terms of Service by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Section 1 - Online Store Terms</Text>
        <Text style={styles.paragraph}>
          To use our website, you must be at least [age]. If you're younger than [age], you need permission from your legal guardian.
          You can't use our products for anything illegal or harmful. This includes things like:
        </Text>
        <Text style={styles.listItem}>● Pirating copyrighted material</Text>
        <Text style={styles.listItem}>● Sending spam or unsolicited emails</Text>
        <Text style={styles.listItem}>● Hacking our website or other systems</Text>
        <Text style={styles.paragraph}>
          Don't try to damage our website or other systems with viruses or other harmful code. If you break any of these rules, we'll take action, which could include:
        </Text>
        <Text style={styles.listItem}>● Terminating your account</Text>
        <Text style={styles.listItem}>● Reporting you to law enforcement</Text>
        <Text style={styles.paragraph}>
          By using our website, you agree to follow these rules.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Section 2 - General Conditions</Text>
        <Text style={styles.paragraph}>
          We reserve the right to refuse service to any individual or entity for any reason, at our sole discretion.
        </Text>
        <Text style={styles.paragraph}>
          You acknowledge that your data (excluding credit card information) may be transmitted unencrypted, potentially involving transmission over various networks and adaptation to technical requirements of connecting networks or devices. Credit card information is always encrypted during transmission.
        </Text>
        <Text style={styles.paragraph}>
          You agree not to reproduce, duplicate, copy, sell, resell, or exploit any portion of the Service, use of the Service, or access to the Service or any contact on the website through which the Service is provided, without our express written permission.
        </Text>
        <Text style={styles.paragraph}>
          The headings used in this agreement are included for reference only and will not limit or otherwise affect these Terms.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Section 3 - Accuracy, Completeness, and Timeliness of Information</Text>
        <Text style={styles.paragraph}>
          We are not responsible for the accuracy, completeness, or timeliness of the information provided on this website. The content is intended for general information purposes only and should not be relied upon as the sole basis for making decisions without consulting primary sources.
        </Text>
        <Text style={styles.paragraph}>
          Any reliance on the material on this website is at your own risk. This website may contain historical information, which is provided for reference only and may not be current. We reserve the right to modify the content of this website at any time, but we are under no obligation to update any information. You agree that it is your responsibility to monitor changes to our website.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Section 4 - Modifications to the Service and Prices</Text>
        <Text style={styles.paragraph}>
          We reserve the right to modify or discontinue the Service, or any part or content thereof, at any time without notice. This includes the right to change prices for our products.
        </Text>
        <Text style={styles.paragraph}>
          We shall not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Service.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>SECTION 5 - PRODUCTS OR SERVICES</Text>
        <Text style={styles.paragraph}>
          Certain products or services may be available exclusively online through the website. These products or services may have limited quantities and are subject to return or exchange only according to our Return Policy. We have made every effort to display as accurately as possible the colors and images of our products that appear at the store. We cannot guarantee that your computer monitor's display of any color will be accurate.
        </Text>
        <Text style={styles.paragraph}>
          We reserve the right, but are not obligated, to limit the sales of our products or Services to any person, geographic region, or jurisdiction. We may exercise this right on a case-by-case basis. We reserve the right to limit the quantities of any products or services that we offer. All descriptions of products or product pricing are subject to change at anytime without notice, at the sole discretion of us. We reserve the right to discontinue any product at any time. Any offer for any product or service made on this site is void where prohibited. We do not warrant that the quality of any products, services, information, or other material purchased or obtained by you will meet your expectations, or that any errors in the Service will be corrected.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Section 6 - Accuracy of Billing and Account Information</Text>
        <Text style={styles.paragraph}>
          We reserve the right to refuse or limit any order, including those placed by or under the same customer account, the same credit card, or the same billing and/or shipping address. In the event that we make a change to or cancel an order, we will make our best attempt to notify you by contacting the email address or billing address/phone number provided at the time of the order.
        </Text>
        <Text style={styles.paragraph}>
          You agree to provide current, complete, and accurate purchase and account information for all purchases made at our store. You agree to promptly update your account and other information, including your email address, credit card numbers, and expiration dates, to ensure we can complete your transactions and contact you as needed.
        </Text>
      </View>

      {/* Add more sections as required, following the same pattern */}

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  
});

export default TermsAndConditions;
