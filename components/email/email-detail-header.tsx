import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { Email } from '../../docs/mock-data';

interface EmailDetailHeaderProps {
  email: Email;
  onBackPress?: () => void;
  onPreviousPress?: () => void;
  onNextPress?: () => void;
}

export default function EmailDetailHeader({ 
  email, 
  onBackPress, 
  onPreviousPress, 
  onNextPress 
}: EmailDetailHeaderProps) {
  return (
    <View style={styles.headerContainer}>
      {/* Navigation Bar */}
      <View style={styles.navigationBar}>
        <TouchableOpacity onPress={onBackPress} style={styles.navButton}>
          <Feather name="chevron-left" size={20} color="#6B7280" />
        </TouchableOpacity>
        
        <View style={styles.rightSection}>
          <Text style={styles.navigationTitle}>1 from 14,171</Text>
          <View style={styles.navButtons}>
            <TouchableOpacity onPress={onPreviousPress} style={styles.navButton}>
              <Feather name="chevron-left" size={16} color="#6B7280" />
            </TouchableOpacity>
            <TouchableOpacity onPress={onNextPress} style={styles.navButton}>
              <Feather name="chevron-right" size={16} color="#6B7280" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  navigationBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 5,
  },
  navButton: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  navigationTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6B7280',
    textAlign: 'right',
  },
  navButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});
