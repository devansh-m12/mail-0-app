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

  const getFileIcon = (fileName: string) => {
    if (fileName.includes('.pptx')) {
      return 'P';
    } else if (fileName.includes('.docx') || fileName.includes('.doc')) {
      return 'W';
    } else if (fileName.includes('.xlsx')) {
      return 'X';
    }
    return 'F';
  };

  const getFileColor = (fileName: string) => {
    if (fileName.includes('.pptx')) {
      return '#DC2626';
    } else if (fileName.includes('.docx') || fileName.includes('.doc')) {
      return '#2563EB';
    } else if (fileName.includes('.xlsx')) {
      return '#059669';
    }
    return '#6B7280';
  };

  return (
    <View style={styles.attachmentCard}>
      <View style={[styles.attachmentIcon, { backgroundColor: 'transparent' }]}>
        {attachment.icon && attachment.icon.startsWith('data:') ? (
          <Image source={{ uri: attachment.icon }} style={styles.attachmentImageIcon} />
        ) : (
          <Text style={styles.attachmentIconText}>{getFileIcon(attachment.name)}</Text>
        )}
      </View>
      <View style={styles.attachmentContent}>
        <Text style={styles.attachmentName} numberOfLines={1}>
          {attachment.name}
        </Text>
        <Text style={styles.attachmentSize}>
          {getFileSize(attachment.name)}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  attachmentCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
    width: 200,
  },
  attachmentIcon: {
    width: 32,
    height: 32,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  attachmentImageIcon: {
    width: 30,
    height: 30,
  },
  attachmentIconText: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  attachmentContent: {
    flex: 1,
  },
  attachmentName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#111827',
    marginBottom: 2,
  },
  attachmentSize: {
    fontSize: 12,
    color: '#6B7280',
  },
});
