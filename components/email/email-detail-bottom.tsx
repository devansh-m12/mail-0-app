import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

interface EmailDetailBottomProps {
  onActionPress?: (action: string) => void;
  variant?: 'light' | 'dark';
}

export default function EmailDetailBottom({ 
  onActionPress, 
  variant = 'light' 
}: EmailDetailBottomProps) {
  const isLightVariant = variant === 'light';
  
  return (
    <View style={styles.bottomContainer}>
      <View style={[
        styles.actionButtons,
        isLightVariant ? styles.lightActionButtons : styles.darkActionButtons
      ]}>
        {isLightVariant ? (
          // Light variant: 6 action buttons with white background and black icons
          <>
            <TouchableOpacity 
              style={styles.actionButton} 
              onPress={() => onActionPress?.('star')}
            >
              <Ionicons name="sparkles-outline" size={19} color="#6B7280" />
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.actionButton} 
              onPress={() => onActionPress?.('archive')}
            >
              <Feather name="archive" size={18} color="#6B7280" />
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.actionButton} 
              onPress={() => onActionPress?.('trash')}
            >
              <Feather name="trash-2" size={18} color="#6B7280" />
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.actionButton} 
              onPress={() => onActionPress?.('folder')}
            >
              <AntDesign name="folderopen" size={18} color="#6B7280" />
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.actionButton} 
              onPress={() => onActionPress?.('star')}
            >
              <Feather name="star" size={18} color="#6B7280" />
            </TouchableOpacity>
          </>
        ) : (
          // Dark variant: 4 action buttons with black background and white icons
          <>
            <TouchableOpacity 
              style={styles.actionButton} 
              onPress={() => onActionPress?.('lightning')}
            >
              <Feather name="zap" size={18} color="#FFFFFF" />
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.actionButton} 
              onPress={() => onActionPress?.('folder')}
            >
              <Feather name="folder" size={18} color="#FFFFFF" />
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.actionButton} 
              onPress={() => onActionPress?.('trash')}
            >
              <Feather name="trash-2" size={18} color="#FFFFFF" />
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.actionButton} 
              onPress={() => onActionPress?.('star')}
            >
              <Feather name="star" size={18} color="#FFFFFF" />
            </TouchableOpacity>
          </>
        )}
      </View>
      <View style={styles.messageButtonContainer}>
        <TouchableOpacity 
            style={[
            styles.messageButton,
            isLightVariant ? styles.lightMessageButton : styles.darkMessageButton
            ]} 
            onPress={() => onActionPress?.('message')}
            activeOpacity={0.8}
        >
            <MaterialCommunityIcons name="email-edit" size={18} color="#ffffff" />
            <Text style={[
            styles.messageButtonText,
            isLightVariant ? styles.lightMessageButtonText : styles.darkMessageButtonText
            ]}>
            Message Dazzy
            </Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 40,
  },

  actionButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 0,
    borderRadius: 20,
    marginRight: 2,
    marginLeft: 25,
    flex: 1,
    maxHeight: 35,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },

  actionButton: {
    flex: 1,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 22,
    marginHorizontal: 5,
  },

  lightActionButtons: {
    backgroundColor: '#ffffff',
  },

  darkActionButtons: {
    backgroundColor: '#000000',
  },

  messageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 24,
    gap: 8,
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
  },

  lightMessageButton: {
    backgroundColor: '#000000',
  },

  darkMessageButton: {
    backgroundColor: '#ffffff',
  },

  messageButtonText: {
    fontSize: 14,
    letterSpacing: 0.2,
    fontWeight: '500',
    fontFamily: 'Inter',
  },

  lightMessageButtonText: {
    color: '#FFFFFF',
  },

  darkMessageButtonText: {
    color: '#000000',
    fontWeight: '600',
    letterSpacing: 0.2,
  },

  messageButtonContainer: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 20,
    marginLeft: 5,
    flex: 1,
  },
});
