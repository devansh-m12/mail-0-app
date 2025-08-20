import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

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
        <Text style={styles.composeIcon}>✉️</Text>
        <Text style={styles.plusIcon}>+</Text>
        <View style={styles.composeTextContainer}>
          <Text style={styles.composeText}>Compose</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    zIndex: 1000,
  },
  composeButton: {
    backgroundColor: '#000000',
    borderRadius: 28,
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
    minWidth: 140,
  },
  composeIcon: {
    fontSize: 20,
    marginRight: 8,
  },
  plusIcon: {
    position: 'absolute',
    top: -2,
    right: -2,
    backgroundColor: '#000000',
    borderRadius: 10,
    width: 20,
    height: 20,
    textAlign: 'center',
    lineHeight: 20,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  composeTextContainer: {
    marginLeft: 4,
  },
  composeText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
