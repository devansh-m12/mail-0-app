import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import { mockEmails, Email } from '../docs/mock-data';

interface EmailCardProps {
  email: Email;
  onPress?: (email: Email) => void;
}

function EmailCard({ email, onPress }: EmailCardProps) {
  const renderProfilePicture = () => {
    const { profilePicture } = email.sender;

    return (
      <View
        style={[
          styles.profilePicture,
          { backgroundColor: profilePicture.backgroundColor },
        ]}
      >
        {profilePicture.icon ? (
          <Text style={styles.profileIcon}>{profilePicture.icon}</Text>
        ) : profilePicture.text ? (
          <Text style={styles.profileText}>{profilePicture.text}</Text>
        ) : null}
      </View>
    );
  };

  const renderAttachments = () => {
    if (!email.attachments || email.attachments.length === 0) {
      return null;
    }

    return (
      <View style={styles.attachmentsContainer}>
        {email.attachments.map((attachment, index) => (
          <View
            key={index}
            style={[
              styles.attachmentPill,
              { backgroundColor: `${attachment.color}20` },
            ]}
          >
            <Text style={styles.attachmentIcon}>{attachment.icon}</Text>
            <Text
              style={[styles.attachmentName, { color: attachment.color }]}
              numberOfLines={1}
            >
              {attachment.name}
            </Text>
          </View>
        ))}
      </View>
    );
  };

  return (
    <TouchableOpacity
      onPress={() => onPress?.(email)}
      style={styles.emailCard}
    >
      <View style={styles.emailCardContent}>
        <View style={styles.emailHeader}>
          {renderProfilePicture()}
          <View style={styles.emailInfo}>
            <View style={styles.senderRow}>
              <Text style={styles.senderName}>{email.sender.name}</Text>
              {email.sender.verified && (
                <Text style={styles.verifiedIcon}>✓</Text>
              )}
              <Text style={styles.timestamp}>{email.timestamp}</Text>
            </View>
            <Text style={styles.subject} numberOfLines={2}>
              {email.subject}
            </Text>
            <Text style={styles.preview} numberOfLines={2}>
              {email.preview}
            </Text>
            {renderAttachments()}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

interface EmailListSectionProps {
  emails?: Email[];
  onEmailPress?: (email: Email) => void;
  onRefresh?: () => void;
}

export default function EmailListSection({
  emails = mockEmails,
  onEmailPress,
  onRefresh,
}: EmailListSectionProps) {
  const renderEmail = ({ item }: { item: Email }) => (
    <EmailCard email={item} onPress={onEmailPress} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={emails}
        renderItem={renderEmail}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        onRefresh={onRefresh}
        refreshing={false}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 16,
  },
  listContainer: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 100, // Space for compose button
  },
  emailCard: {
    backgroundColor: '#FFFFFF',
  },
  emailCardContent: {
    paddingVertical: 12,
  },
  emailHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  profilePicture: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  profileIcon: {
    fontSize: 20,
    color: '#FFFFFF',
  },
  profileText: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  emailInfo: {
    flex: 1,
  },
  senderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  senderName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginRight: 4,
  },
  verifiedIcon: {
    fontSize: 14,
    color: '#3B82F6',
    marginRight: 8,
  },
  timestamp: {
    fontSize: 14,
    color: '#9CA3AF',
    marginLeft: 'auto',
  },
  subject: {
    fontSize: 15,
    fontWeight: '500',
    color: '#1F2937',
    lineHeight: 20,
    marginBottom: 4,
  },
  preview: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 18,
    marginBottom: 8,
  },
  attachmentsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  attachmentPill: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    gap: 6,
  },
  attachmentIcon: {
    fontSize: 14,
  },
  attachmentName: {
    fontSize: 12,
    fontWeight: '500',
    maxWidth: 120,
  },
  separator: {
    height: 1,
    backgroundColor: '#F3F4F6',
    marginVertical: 8,
  },
});
