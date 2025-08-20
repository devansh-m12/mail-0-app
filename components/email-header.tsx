import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, ViewStyle, TextStyle, ImageStyle } from 'react-native';
import { userAccount } from '../docs/mock-data';
import Feather from '@expo/vector-icons/Feather';

interface EmailHeaderProps {
  onTabPress?: (tabId: string) => void;
  onMenuPress?: () => void;
}

// Tab data defined directly in component
const tabItems = [
  {
    id: 'inbox',
    label: 'Inbox',
    icon: 'inbox' as const,
    count: 14171,
    isActive: true,
  },
  {
    id: 'sent',
    label: 'Sent items',
    icon: 'send' as const,
    isActive: false,
  },
  {
    id: 'drafts',
    label: 'Drafts',
    icon: 'file-text' as const,
    isActive: false,
  },
  {
    id: 'favorites',
    label: 'Favorites',
    icon: 'star' as const,
    isActive: false,
  },
];

export default function EmailHeader({ onTabPress, onMenuPress }: EmailHeaderProps) {
  return (
    <View style={styles.container}>
      {/* Account Info */}
      <View style={styles.accountSection}>
        <View style={styles.accountLeft}>
          <View style={styles.appIconContainer}>
            <Image source={require('../assets/images/wicon.png')} style={styles.appIcon} />
          </View>

          <View style={styles.separator} />

          <View style={styles.profilePicture}>
            <Image source={require('../assets/images/user.jpg')} style={styles.profileIcon} />
          </View>

          <View style={styles.userInfo}>
            <Text style={styles.userName}>Dazzy</Text>
            {userAccount.isPro && (
              <View style={styles.proBadge}>
                <Text style={styles.proBadgeText}>PRO</Text>
              </View>
            )}
          </View>
        </View>
        <TouchableOpacity onPress={onMenuPress} style={styles.menuButton}>
          <Feather name="menu" size={22} color="#999999" />
        </TouchableOpacity>
      </View>

      {/* Tab Navigation */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.tabSection}
        contentContainerStyle={styles.tabContentContainer}
      >
        {tabItems.map((tab) => (
          <TouchableOpacity
            key={tab.id}
            onPress={() => onTabPress?.(tab.id)}
            style={styles.tabItem}
          >
            <View style={styles.tabContent}>
              <Feather 
                name={tab.icon} 
                size={18} 
                color={tab.isActive ? '#000000' : '#6B7280'} 
              />
              <Text style={[styles.tabLabel, tab.isActive && styles.activeTabLabel]}>
                {tab.label}
              </Text>
              {tab.count && (
                <Text style={styles.tabCount}>({tab.count.toLocaleString()})</Text>
              )}
            </View>
            {tab.isActive && <View style={styles.activeTabIndicator} />}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
  } as ViewStyle,
  accountSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
  } as ViewStyle,
  accountLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  } as ViewStyle,
  appIconContainer: {
    width: 32,
    height: 32,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
  appIcon: {
    width: 25,
    height: 25,
  } as ImageStyle,
  profilePicture: {
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: userAccount.profilePicture.backgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
  profileIcon: {
    width: 27,
    height: 27,
    borderRadius: 20,
  } as ImageStyle,
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  } as ViewStyle,
  userName: {
    fontSize: 20,
    fontWeight: '500',
    color: '#000000',
  } as TextStyle,
  proBadge: {
    backgroundColor: '#E0F6FF',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  } as ViewStyle,
  proBadgeText: {
    color: '#3B82F6',
    fontSize: 12,
  } as TextStyle,
  menuButton: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
  tabSection: {
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  } as ViewStyle,
  tabContentContainer: {
    paddingHorizontal: 16,
    paddingBottom: 0,
  } as ViewStyle,
  tabItem: {
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 8,
    position: 'relative',
    minWidth: 80,
  } as ViewStyle,
  tabContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  } as ViewStyle,
  tabLabel: {
    fontSize: 15,
    color: '#6B7280',
    fontWeight: '400',
    marginLeft: 4,
  } as TextStyle,
  activeTabLabel: {
    color: '#000000',
    fontWeight: '500',
  } as TextStyle,
  tabCount: {
    fontSize: 12,
    color: '#6B7280',
    marginLeft: 6,
  } as TextStyle,
  activeTabIndicator: {
    position: 'absolute',
    bottom: -1,
    left: 8,
    right: 8,
    height: 2,
    backgroundColor: '#000000',
  } as ViewStyle,
  separator: {
    width: 1.3,
    height: 20,
    backgroundColor: '#D1D5DB',
    marginHorizontal: 6,
    transform: [{ rotate: '25deg' }],
  } as ViewStyle,
});
