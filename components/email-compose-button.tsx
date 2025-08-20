import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

interface EmailComposeButtonProps {
  onPress?: () => void;
}

export default function EmailComposeButton({ onPress }: EmailComposeButtonProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPress}
        style={styles.composeButton}
        activeOpacity={0.8}
      >
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name="email-outline" size={24} color="white" />
          <View style={styles.plusIconContainer}>
            <Text style={styles.plusIcon}>+</Text>
          </View>
        </View>
        <Text style={styles.composeText}>Compose</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 35,
    right: 24,
    zIndex: 1000,
  },
  composeButton: {
    backgroundColor: '#000000',
    borderRadius: 28,
    paddingHorizontal: 15,
    paddingVertical: 9,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 6,
    minWidth: 140,
  },
  iconContainer: {
    position: 'relative',
    marginRight: 12,
  },
  composeIcon: {
    fontSize: 18,
    color: '#FFFFFF',
  },
  plusIconContainer: {
    position: 'absolute',
    bottom: -2,
    left: -2,
    backgroundColor: '#000000',
    borderRadius: 8,
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusIcon: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FFFFFF',
    lineHeight: 16,
  },
  composeText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
