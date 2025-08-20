import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { mockEmails, Email } from '../docs/mock-emails';
import { EmailDetailHeader, EmailContent, EmailDetailBottom } from '../components/email';

interface EmailDetailProps {
  emailId?: string;
  onBackPress?: () => void;
  onActionPress?: (action: string) => void;
}

export default function EmailDetail({ 
  emailId = '1', 
  onBackPress, 
  onActionPress 
}: EmailDetailProps) {
  // Find the email by ID, default to first email
  const email = mockEmails.find(e => e.id === emailId) || mockEmails[0];

  // Get conversation thread if this email has a conversationId
  const getConversationThread = () => {
    if (email.conversationId) {
      return mockEmails
        .filter(e => e.conversationId === email.conversationId)
        .sort((a, b) => {
          // Sort by timestamp, newest first
          const timeA = new Date(`2024-01-01 ${a.timestamp}`).getTime();
          const timeB = new Date(`2024-01-01 ${b.timestamp}`).getTime();
          return timeB - timeA;
        });
    }
    return [email];
  };

  const conversationThread = getConversationThread();

  const handlePreviousPress = () => {
    console.log('Previous email');
  };

  const handleNextPress = () => {
    console.log('Next email');
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.content}>
        {/* Header Section */}
        <EmailDetailHeader
          email={email}
          onBackPress={onBackPress}
          onPreviousPress={handlePreviousPress}
          onNextPress={handleNextPress}
        />

        {/* Email Content Section - Chat-like format */}
        <View style={styles.scrollWrapper}>
          <ScrollView 
            style={styles.scrollContainer}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
          >
            {conversationThread.map((conversationEmail, index) => (
              <View key={conversationEmail.id} style={styles.emailWrapper}>
                <EmailContent 
                  email={conversationEmail} 
                  isCurrentEmail={conversationEmail.id === email.id}
                />
                {index < conversationThread.length - 1 && (
                  <View style={styles.emailDivider} />
                )}
              </View>
            ))}
          </ScrollView>
          <LinearGradient
            colors={['rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0.4)', 'rgba(255, 255, 255, 0.6)', 'rgba(255, 255, 255, 0.8)']}
            style={styles.bottomGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
          />
        </View>

        {/* Bottom Action Section */}
        <EmailDetailBottom onActionPress={onActionPress} />
      </View>
    </SafeAreaView>
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
  scrollWrapper: {
    flex: 1,
    position: 'relative',
  },
  scrollContainer: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20, // Reduced space for bottom actions
  },
  emailWrapper: {
    marginBottom: 8,
  },
  emailDivider: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginHorizontal: 24,
    marginVertical: 16,
  },
  bottomGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 150,
    pointerEvents: 'none',
  },
});
