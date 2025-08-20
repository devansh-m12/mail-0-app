import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

interface AttachmentCardProps {
  attachment: {
    name: string;
    icon: string;
    color: string;
  };
}

export default function AttachmentCard({ attachment }: AttachmentCardProps) {
  const getFileSize = (fileName: string) => {
    return fileName.includes('.pptx') ? '2 MB' : '1.5 MB';
  };

  return (
    <View style={styles.attachmentCard}>
      <View style={[styles.attachmentIcon, { backgroundColor: attachment.color }]}>
        {attachment.icon.startsWith('data:') ? (
          <Image source={{ uri: attachment.icon }} style={styles.attachmentImageIcon} />
        ) : (
          <Text style={styles.attachmentIconText}>{attachment.icon}</Text>
        )}
      </View>
      <Text style={styles.attachmentName} numberOfLines={1}>
        {attachment.name}
      </Text>
      <Text style={styles.attachmentSize}>
        {getFileSize(attachment.name)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  attachmentCard: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  attachmentIcon: {
    width: 40,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  attachmentImageIcon: {
    width: 24,
    height: 24,
  },
  attachmentIconText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  attachmentName: {
    fontSize: 12,
    fontWeight: '500',
    color: '#374151',
    textAlign: 'center',
    marginBottom: 4,
  },
  attachmentSize: {
    fontSize: 11,
    color: '#6B7280',
  },
});
