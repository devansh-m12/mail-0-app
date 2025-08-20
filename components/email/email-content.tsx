import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Email } from '../../docs/mock-emails';
import ProfilePicture from './profile-picture';
import AttachmentCard from './attachment-card';

interface EmailContentProps {
  email: Email;
  isCurrentEmail?: boolean;
}

export default function EmailContent({ email, isCurrentEmail = true }: EmailContentProps) {

  const renderAttachments = () => {
    if (!email.attachments || email.attachments.length === 0) {
      return null;
    }

    return (
      <View style={styles.attachmentsSection}>
        <View style={styles.attachmentsHeader}>
          <Text style={styles.attachmentsTitle}>Attachment</Text>
          <View style={styles.secureBadge}>
            <MaterialIcons name="security" size={16} color="#059669" />
            <Text style={styles.secureText}>Secure by data.ai</Text>
          </View>
        </View>
        
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.attachmentsGrid}
        >
          {email.attachments.map((attachment, index) => (
            <AttachmentCard key={`attachment-${index}`} attachment={attachment} />
          ))}
        </ScrollView>
      </View>
    );
  };

  return (
    <View style={[
      styles.emailContentContainer,
      email.isReply && styles.replyContainer
    ]}>
      {/* Sender Info */}
      <View style={styles.senderSection}>
        <ProfilePicture 
          profilePicture={email.sender.profilePicture} 
          size={35}
        />
        <View style={styles.senderInfo}>
          <View style={styles.senderRow}>
            <Text style={[
              styles.senderName,
              email.isReply && styles.replySenderName
            ]}>
              {email.sender.name}
            </Text>
            {email.sender.verified && (
              <MaterialIcons name="verified" size={email.isReply ? 16 : 20} color="#1DA1F2" />
            )}
          </View>
          <Text style={[
            styles.senderEmail,
            email.isReply && styles.replySenderEmail
          ]}>
            From: {email.sender.email}
          </Text>
        </View>
      </View>

      {/* Subject */}
      <Text style={[
        styles.subjectText,
        email.isReply && styles.replySubjectText
      ]}>
        {email.subject}
      </Text>

      {/* Email Body */}
      <View style={styles.emailBody}>
        <Text style={[
          styles.emailBodyText,
          email.isReply && styles.replyBodyText
        ]}>
          {email.isReply ? email.preview : `Hi Team,${'\n\n'}We're refining our product and need your insights on our user experience (UX) design. Please share any additional comments or suggestions. Your feedback is crucial in helping us exceed user expectations.${'\n\n'}Best regards,${'\n'}Dazzy`}
        </Text>
      </View>

      {/* Attachments */}
      {renderAttachments()}
    </View>
  );
}

const styles = StyleSheet.create({
  emailContentContainer: {
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  replyContainer: {
    paddingTop: 16,
    paddingBottom: 8,
    backgroundColor: '#F9FAFB',
    marginHorizontal: 8,
    borderRadius: 8,
  },
  senderSection: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  senderInfo: {
    flex: 1,
  },
  senderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  senderName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginRight: 8,
  },
  replySenderName: {
    fontSize: 16,
    fontWeight: '500',
  },
  senderEmail: {
    fontSize: 14,
    color: '#6B7280',
  },
  replySenderEmail: {
    fontSize: 12,
  },
  subjectText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 24,
    lineHeight: 28,
  },
  replySubjectText: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 16,
    lineHeight: 22,
  },
  emailBody: {
    marginBottom: 32,
  },
  emailBodyText: {
    fontSize: 15,
    color: '#374151',
    lineHeight: 24,
  },
  replyBodyText: {
    fontSize: 14,
    lineHeight: 20,
  },
  attachmentsSection: {
    marginBottom: 24,
  },
  attachmentsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  attachmentsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
  },
  secureBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  secureText: {
    fontSize: 12,
    color: '#059669',
    fontWeight: '500',
  },
  attachmentsGrid: {
    flexDirection: 'row',
    gap: 12,
    paddingHorizontal: 24,
  },
});
