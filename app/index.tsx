import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import EmailHeader from '../components/email-header';
import EmailSearchSection from '../components/email-search-section';
import EmailListSection from '../components/email-list-section';
import EmailComposeButton from '../components/email-compose-button';
import EmailDetail from './email-detail';
import { mockEmails, Email } from '../docs/mock-data';

export default function EmailClientMock() {
  const insets = useSafeAreaInsets();
  const [selectedEmailId, setSelectedEmailId] = useState<string | null>(null);

  const handleTabPress = (tabId: string) => {
    console.log('Tab pressed:', tabId);
    // Handle tab navigation
  };

  const handleMenuPress = () => {
    console.log('Menu pressed');
    // Handle menu opening
  };

  const handleSearchFocus = () => {
    console.log('Search focused');
    // Handle search focus
  };

  const handleFilterPress = () => {
    console.log('Filter pressed');
    // Handle filter press
  };

  const handleTryAIPress = () => {
    console.log('Try AI pressed');
    // Handle AI upgrade
  };

  const handleEmailPress = (email: Email) => {
    console.log('Email pressed:', email.id);
    setSelectedEmailId(email.id);
  };

  const handleComposePress = () => {
    console.log('Compose pressed');
    // Handle compose new email
  };

  const handleBackPress = () => {
    setSelectedEmailId(null);
  };

  const handleActionPress = (action: string) => {
    console.log('Action pressed:', action);
    // Handle different actions
  };

  const handleRefresh = () => {
    console.log('Refreshing emails');
    // Handle pull-to-refresh
  };

  // Show email detail if an email is selected
  if (selectedEmailId) {
    return (
      <EmailDetail
        emailId={selectedEmailId}
        onBackPress={handleBackPress}
        onActionPress={handleActionPress}
      />
    );
  }

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.content}>
        {/* Header Section */}
        <EmailHeader
          onTabPress={handleTabPress}
          onMenuPress={handleMenuPress}
        />

        {/* Search Section */}
        <EmailSearchSection
          onSearchFocus={handleSearchFocus}
          onFilterPress={handleFilterPress}
          onTryAIPress={handleTryAIPress}
        />

        {/* Email List Section - Now handles its own scrolling */}
        <EmailListSection
          emails={mockEmails}
          onEmailPress={handleEmailPress}
          onRefresh={handleRefresh}
        />

        {/* Fixed Compose Button */}
        <EmailComposeButton onPress={handleComposePress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    position: 'relative',
  },
});
