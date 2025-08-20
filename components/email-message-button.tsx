import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import Feather from '@expo/vector-icons/Feather';

interface EmailMessageButtonProps {
  onPress?: () => void;
  recipientName?: string;
}

export default function EmailMessageButton({ onPress, recipientName = "Rico" }: EmailMessageButtonProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPress}
        style={styles.messageButton}
        activeOpacity={0.8}
      >
        <Feather name="mail" size={16} color="#FFF" />
        <Text style={styles.messageButtonText}>Message {recipientName}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // This component can be positioned by its parent
  },
  messageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000000',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 20,
    gap: 8,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 6,
  },
  messageButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
  },
});
