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
          <Feather name="arrow-left" size={20} color="#000" />
        </TouchableOpacity>
        
        <Text style={styles.navigationTitle}>1 from 14,171</Text>
        
        <View style={styles.navButtons}>
          <TouchableOpacity onPress={onPreviousPress} style={styles.navButton}>
            <Feather name="arrow-left" size={16} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity onPress={onNextPress} style={styles.navButton}>
            <Feather name="arrow-right" size={16} color="#000" />
          </TouchableOpacity>
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
  navigationTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
  },
  navButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});
