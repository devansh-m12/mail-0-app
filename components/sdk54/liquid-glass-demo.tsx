import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/themed-text';

// Zen Glass Card Component
interface ZenGlassCardProps {
  children: React.ReactNode;
  onPress?: () => void;
}

const ZenGlassCard: React.FC<ZenGlassCardProps> = ({ children, onPress }) => {
  const cardStyle = {
    borderRadius: 20,
    padding: 24,
    marginBottom: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 8,
  };

  if (onPress) {
    return (
      <TouchableOpacity style={cardStyle} onPress={onPress}>
        {children}
      </TouchableOpacity>
    );
  }

  return (
    <View style={cardStyle}>
      {children}
    </View>
  );
};

// Zen Glass Button Component
interface ZenGlassButtonProps {
  onPress?: () => void;
  children: React.ReactNode;
}

const ZenGlassButton: React.FC<ZenGlassButtonProps> = ({ onPress, children }) => {
  return (
    <TouchableOpacity
      style={{
        borderRadius: 16,
        paddingHorizontal: 20,
        paddingVertical: 14,
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onPress={onPress}
    >
      <ThemedText style={{
        color: '#000000',
        fontWeight: '600',
        fontSize: 16,
        opacity: 0.9,
      }}>
        {children}
      </ThemedText>
    </TouchableOpacity>
  );
};

export const LiquidGlassDemo: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Serenity Header */}
      <View style={styles.header}>
        <ThemedText type="title" style={styles.title}>
          Liquid Serenity
        </ThemedText>
        <ThemedText style={styles.subtitle}>
          Where glass meets tranquility
        </ThemedText>
      </View>

      {/* Essence Card */}
      <ZenGlassCard>
        <ThemedText type="defaultSemiBold" style={styles.cardTitle}>
          Pure Essence
        </ThemedText>
        <ThemedText style={styles.cardDescription}>
          In this moment, we find clarity. The subtle transparency of glass
          reflects not just light, but our inner peace and understanding.
        </ThemedText>
      </ZenGlassCard>

      {/* Reflection Card */}
      <ZenGlassCard>
        <ThemedText type="defaultSemiBold" style={styles.cardTitle}>
          Inner Reflection
        </ThemedText>
        <ThemedText style={styles.cardDescription}>
          Like a still pond reflecting the moon, the glass surface invites
          contemplation. Here, complexity dissolves into elegant simplicity.
        </ThemedText>
      </ZenGlassCard>

      {/* Simple Action */}
      <View style={styles.buttonContainer}>
        <ZenGlassButton onPress={() => {}}>
          Find Peace
        </ZenGlassButton>
      </View>

      {/* Harmony Card */}
      <ZenGlassCard>
        <ThemedText type="defaultSemiBold" style={styles.cardTitle}>
          Perfect Harmony
        </ThemedText>
        <ThemedText style={styles.cardDescription}>
          When form meets function in perfect balance, we achieve true
          harmony. The glass teaches us that beauty lies in transparency.
        </ThemedText>
      </ZenGlassCard>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 24,
  },
  header: {
    alignItems: 'center',
    marginBottom: 48,
  },
  title: {
    fontSize: 28,
    fontWeight: '300',
    marginBottom: 12,
    textAlign: 'center',
    letterSpacing: 1,
    color: '#000000',
  },
  subtitle: {
    fontSize: 16,
    opacity: 0.7,
    textAlign: 'center',
    fontWeight: '300',
    color: '#333333',
  },
  cardTitle: {
    fontSize: 18,
    marginBottom: 12,
    fontWeight: '400',
    opacity: 0.95,
    color: '#000000',
  },
  cardDescription: {
    fontSize: 15,
    opacity: 0.8,
    lineHeight: 22,
    fontWeight: '300',
    color: '#333333',
  },
  buttonContainer: {
    marginVertical: 24,
    alignItems: 'center',
  },
});
