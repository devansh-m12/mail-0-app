import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Alert, Platform } from 'react-native';
import { ThemedText } from '@/components/themed-text';

export const NativeTabsDemo: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [currentTab, setCurrentTab] = useState('home');

  const enableNativeTabs = () => {
    setIsEnabled(true);
    Alert.alert(
      'Native Tabs Enabled',
      'Native tabs are now enabled! This provides:\n\n• Liquid glass effects on iOS 26\n• Native animations and transitions\n• Automatic scrolling on tab press\n• Better performance\n\nNote: This is an unstable API and may change during the beta.'
    );
  };

  const simulateTabPress = (tabName: string) => {
    setCurrentTab(tabName);
    Alert.alert(
      'Tab Pressed',
      `${tabName.charAt(0).toUpperCase() + tabName.slice(1)} tab pressed!\n\nWith native tabs, you get:\n• Smooth native animations\n• Automatic scrolling behavior\n• Liquid glass effects (iOS 26)\n• Better performance`
    );
  };

  return (
    <View style={styles.container}>
      {/* Native Tabs Overview */}
      <View style={styles.section}>
        <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>
          🧭 Native Tabs Overview
        </ThemedText>
        
        <View style={styles.overviewCard}>
          <ThemedText style={styles.overviewText}>
            Native tabs provide a true native implementation with better performance, 
            animations, and platform-specific features like Liquid Glass effects on iOS 26.
          </ThemedText>
        </View>

        <TouchableOpacity 
          style={[
            styles.enableButton,
            isEnabled && styles.enabledButton
          ]} 
          onPress={enableNativeTabs}
          disabled={isEnabled}
        >
          <ThemedText style={styles.enableButtonText}>
            {isEnabled ? 'Native Tabs Enabled' : 'Enable Native Tabs (Beta)'}
          </ThemedText>
        </TouchableOpacity>
      </View>

      {/* Tab Bar Simulation */}
      <View style={styles.section}>
        <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>
          📱 Tab Bar Simulation
        </ThemedText>
        
        <View style={styles.tabBarContainer}>
          <View style={styles.tabBar}>
            {[
              { name: 'home', icon: '🏠', label: 'Home' },
              { name: 'explore', icon: '🔍', label: 'Explore' },
              { name: 'profile', icon: '👤', label: 'Profile' },
              { name: 'settings', icon: '⚙️', label: 'Settings' },
            ].map((tab) => (
              <TouchableOpacity
                key={tab.name}
                style={[
                  styles.tabItem,
                  currentTab === tab.name && styles.activeTabItem
                ]}
                onPress={() => simulateTabPress(tab.name)}
              >
                <ThemedText style={styles.tabIcon}>{tab.icon}</ThemedText>
                <ThemedText style={[
                  styles.tabLabel,
                  currentTab === tab.name && styles.activeTabLabel
                ]}>
                  {tab.label}
                </ThemedText>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.tabContent}>
          <ThemedText type="defaultSemiBold" style={styles.contentTitle}>
            {currentTab.charAt(0).toUpperCase() + currentTab.slice(1)} Tab Content
          </ThemedText>
          <ThemedText style={styles.contentText}>
            This simulates the content that would appear when the {currentTab} tab is selected.
            With native tabs, transitions between tabs are smooth and native.
          </ThemedText>
        </View>
      </View>

      {/* Features Comparison */}
      <View style={styles.section}>
        <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>
          ⚡ Features Comparison
        </ThemedText>
        
        <View style={styles.comparisonContainer}>
          <View style={styles.comparisonColumn}>
            <ThemedText type="defaultSemiBold" style={styles.comparisonTitle}>
              JavaScript Tabs
            </ThemedText>
            <View style={styles.featureList}>
              <View style={styles.featureItem}>
                <ThemedText style={styles.featureIcon}>❌</ThemedText>
                <ThemedText style={styles.featureText}>Limited animations</ThemedText>
              </View>
              <View style={styles.featureItem}>
                <ThemedText style={styles.featureIcon}>❌</ThemedText>
                <ThemedText style={styles.featureText}>No Liquid Glass</ThemedText>
              </View>
              <View style={styles.featureItem}>
                <ThemedText style={styles.featureIcon}>❌</ThemedText>
                <ThemedText style={styles.featureText}>Manual scrolling</ThemedText>
              </View>
              <View style={styles.featureItem}>
                <ThemedText style={styles.featureIcon}>❌</ThemedText>
                <ThemedText style={styles.featureText}>JS bridge overhead</ThemedText>
              </View>
            </View>
          </View>
          
          <View style={styles.comparisonColumn}>
            <ThemedText type="defaultSemiBold" style={styles.comparisonTitle}>
              Native Tabs
            </ThemedText>
            <View style={styles.featureList}>
              <View style={styles.featureItem}>
                <ThemedText style={styles.featureIcon}>✅</ThemedText>
                <ThemedText style={styles.featureText}>Smooth animations</ThemedText>
              </View>
              <View style={styles.featureItem}>
                <ThemedText style={styles.featureIcon}>✅</ThemedText>
                <ThemedText style={styles.featureText}>Liquid Glass effects</ThemedText>
              </View>
              <View style={styles.featureItem}>
                <ThemedText style={styles.featureIcon}>✅</ThemedText>
                <ThemedText style={styles.featureText}>Auto scrolling</ThemedText>
              </View>
              <View style={styles.featureItem}>
                <ThemedText style={styles.featureIcon}>✅</ThemedText>
                <ThemedText style={styles.featureText}>Native performance</ThemedText>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* Implementation Guide */}
      <View style={styles.section}>
        <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>
          💻 Implementation Guide
        </ThemedText>
        
        <View style={styles.codeContainer}>
          <ThemedText style={styles.codeTitle}>Enable Native Tabs</ThemedText>
          <View style={styles.codeBlock}>
            <ThemedText style={styles.codeText}>
              {`import { unstable_enableNativeTabs } from 'expo-router';

// Enable native tabs (unstable API)
unstable_enableNativeTabs();

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="explore" />
    </Tabs>
  );
}`}
            </ThemedText>
          </View>
        </View>

        <View style={styles.codeContainer}>
          <ThemedText style={styles.codeTitle}>Configuration</ThemedText>
          <View style={styles.codeBlock}>
            <ThemedText style={styles.codeText}>
              {`// app/(tabs)/_layout.tsx
<Tabs
  screenOptions={{
    // Native tabs will automatically use Liquid Glass on iOS 26
    tabBarStyle: {
      // Custom styling if needed
    }
  }}
>`}
            </ThemedText>
          </View>
        </View>
      </View>

      {/* Platform-Specific Features */}
      <View style={styles.section}>
        <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>
          📱 Platform Features
        </ThemedText>
        
        <View style={styles.platformFeatures}>
          <View style={styles.platformFeature}>
            <ThemedText style={styles.platformIcon}>🍎</ThemedText>
            <View style={styles.platformContent}>
              <ThemedText type="defaultSemiBold">iOS 26+</ThemedText>
              <ThemedText style={styles.platformDesc}>
                • Liquid Glass tab bar effects
              </ThemedText>
              <ThemedText style={styles.platformDesc}>
                • Native iOS tab animations
              </ThemedText>
              <ThemedText style={styles.platformDesc}>
                • Automatic scrolling behavior
              </ThemedText>
            </View>
          </View>
          
          <View style={styles.platformFeature}>
            <ThemedText style={styles.platformIcon}>🤖</ThemedText>
            <View style={styles.platformContent}>
              <ThemedText type="defaultSemiBold">Android</ThemedText>
              <ThemedText style={styles.platformDesc}>
                • Material Design tab bar
              </ThemedText>
              <ThemedText style={styles.platformDesc}>
                • Native Android animations
              </ThemedText>
              <ThemedText style={styles.platformDesc}>
                • Edge-to-edge integration
              </ThemedText>
            </View>
          </View>
        </View>
      </View>

      {/* Best Practices */}
      <View style={styles.section}>
        <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>
          💡 Best Practices
        </ThemedText>
        
        <View style={styles.practicesContainer}>
          <ThemedText style={styles.practiceText}>
            • Use native tabs for better performance and user experience
          </ThemedText>
          <ThemedText style={styles.practiceText}>
            • Test on iOS 26+ devices for Liquid Glass effects
          </ThemedText>
          <ThemedText style={styles.practiceText}>
            • Be aware that the API is unstable and may change
          </ThemedText>
          <ThemedText style={styles.practiceText}>
            • Provide fallbacks for older iOS versions
          </ThemedText>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 24,
  },
  section: {
    gap: 16,
  },
  sectionTitle: {
    fontSize: 16,
    marginBottom: 8,
  },
  overviewCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  overviewText: {
    fontSize: 14,
    lineHeight: 20,
    opacity: 0.9,
  },
  enableButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  enabledButton: {
    backgroundColor: 'rgba(0, 255, 0, 0.2)',
    borderWidth: 1,
    borderColor: 'rgba(0, 255, 0, 0.3)',
  },
  enableButtonText: {
    fontWeight: '600',
  },
  tabBarContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    padding: 8,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 8,
    padding: 4,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 4,
    borderRadius: 6,
  },
  activeTabItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  tabIcon: {
    fontSize: 20,
    marginBottom: 4,
  },
  tabLabel: {
    fontSize: 10,
    opacity: 0.7,
  },
  activeTabLabel: {
    opacity: 1,
    fontWeight: '600',
  },
  tabContent: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    padding: 16,
    borderRadius: 8,
  },
  contentTitle: {
    marginBottom: 8,
  },
  contentText: {
    fontSize: 14,
    opacity: 0.8,
    lineHeight: 20,
  },
  comparisonContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  comparisonColumn: {
    flex: 1,
  },
  comparisonTitle: {
    fontSize: 14,
    marginBottom: 12,
    textAlign: 'center',
  },
  featureList: {
    gap: 8,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    padding: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 6,
  },
  featureIcon: {
    fontSize: 16,
  },
  featureText: {
    fontSize: 12,
    flex: 1,
  },
  codeContainer: {
    marginBottom: 16,
  },
  codeTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
  },
  codeBlock: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  codeText: {
    fontSize: 12,
    fontFamily: 'monospace',
    color: '#00FF00',
  },
  platformFeatures: {
    gap: 16,
  },
  platformFeature: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    padding: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  platformIcon: {
    fontSize: 24,
  },
  platformContent: {
    flex: 1,
  },
  platformDesc: {
    fontSize: 12,
    opacity: 0.8,
    marginTop: 2,
  },
  practicesContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    padding: 16,
    borderRadius: 8,
    gap: 8,
  },
  practiceText: {
    fontSize: 14,
    opacity: 0.9,
  },
});
