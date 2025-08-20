import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { mockEmails, Email } from '../docs/mock-data';

interface EmailCardProps {
  email: Email;
  onPress?: (email: Email) => void;
}

function EmailCard({ email, onPress }: EmailCardProps) {
  const renderProfilePicture = () => {
    const { profilePicture } = email.sender;

    // If there's a picture link, render the image
    if (profilePicture.pictureLink) {
      return (
        <Image
          source={{ uri: profilePicture.pictureLink }}
          style={styles.profilePicture}
          resizeMode="cover"
        />
      );
    }

    // Otherwise, render the fallback with background color and text/icon
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
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.attachmentsScrollContainer}
          nestedScrollEnabled={true}
          scrollEnabled={true}
          onTouchStart={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
          onTouchEnd={(e) => e.stopPropagation()}
        >
          {email.attachments.map((attachment, index) => (
            <View
              key={`attachment-${index}`}
              style={[
                styles.attachmentPill,
                { backgroundColor: '#FBF9FE' },
              ]}
            >
              {attachment.icon.startsWith('data:') ? (
                <Image source={{ uri: attachment.icon }} style={styles.attachmentImageIcon} />
              ) : (
                <Text style={styles.attachmentIcon}>{attachment.icon}</Text>
              )}
              <Text
                style={[styles.attachmentName, { color: '#567860' }]}
                numberOfLines={1}
              >
                {attachment.name}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  };

  return (
    <TouchableOpacity
      onPress={() => onPress?.(email)}
      style={styles.emailCard}
      activeOpacity={0.7}
      delayPressIn={100}
    >
      <View style={styles.emailCardContent}>
        <View style={styles.emailHeader}>
          {renderProfilePicture()}
          <View style={styles.emailInfo}>
            <View style={styles.senderRow}>
              <Text style={styles.senderName}>{email.sender.name}</Text>
              {email.sender.verified && (
                <MaterialIcons name="verified" size={19} color="#1DA1F2" />
              )}
              <Text style={styles.timestamp}>{email.timestamp}</Text>
            </View>
            <Text style={styles.preview} numberOfLines={2}>
              {email.preview}
            </Text>
            <View style={styles.attachmentsWrapper}>
              {renderAttachments()}
            </View>
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
      <LinearGradient
        colors={['rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0.4)', 'rgba(255, 255, 255, 0.6)', 'rgba(255, 255, 255, 0.8)', 'rgba(255, 255, 255, 1)']}
        style={styles.bottomGradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 0,
    position: 'relative',
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
    paddingVertical: 8,
  },
  emailHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  profilePicture: {
    width: 38,
    height: 38,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    marginTop: 6
  },
  profileIcon: {
    fontSize: 18,
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

  timestamp: {
    fontSize: 14,
    color: '#9CA3AF',
    marginLeft: 'auto',
  },
  preview: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
    marginBottom: 8,
  },
  attachmentsContainer: {
    marginTop: 4,
  },
  attachmentsWrapper: {
    flex: 1,
  },
  attachmentsScrollContainer: {
    paddingRight: 16,
  },
  attachmentPill: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    gap: 6,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  attachmentIcon: {
    fontSize: 14,
  },
  attachmentImageIcon: {
    width: 18,
    height: 18,
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
  bottomGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 150,
    pointerEvents: 'none',
  },
});
