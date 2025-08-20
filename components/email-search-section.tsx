import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { aiBanner } from '../docs/mock-data';

interface EmailSearchSectionProps {
  onSearchFocus?: () => void;
  onFilterPress?: () => void;
  onTryAIPress?: () => void;
}

export default function EmailSearchSection({
  onSearchFocus,
  onFilterPress,
  onTryAIPress
}: EmailSearchSectionProps) {
  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Search mail0...."
            placeholderTextColor="#9CA3AF"
            onFocus={onSearchFocus}
          />
          <TouchableOpacity onPress={onFilterPress} style={styles.filterButton}>
            <Text style={styles.filterIcon}>☰</Text>
            <Text style={styles.filterCircle}>○</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* AI Upgrade Banner */}
      <View style={styles.aiBanner}>
        <View style={styles.aiBannerBackground}>
          <Text style={styles.aiBackgroundIcon}>🏙️</Text>
          <Text style={styles.aiBackgroundFoliage}>🌿</Text>
        </View>
        <View style={styles.aiBannerContent}>
          <View style={styles.aiBannerText}>
            <Text style={styles.aiBannerTitle}>{aiBanner.title}</Text>
            <Text style={styles.aiBannerSubtitle}>{aiBanner.subtitle}</Text>
          </View>
          <TouchableOpacity
            onPress={onTryAIPress}
            style={styles.aiBannerButton}
          >
            <Text style={styles.aiBannerButtonText}>{aiBanner.ctaText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  searchContainer: {
    marginBottom: 16,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  searchIcon: {
    fontSize: 18,
    color: '#6B7280',
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333333',
    paddingVertical: 0,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 12,
  },
  filterIcon: {
    fontSize: 16,
    color: '#6B7280',
    marginRight: 4,
  },
  filterCircle: {
    fontSize: 8,
    color: '#6B7280',
    position: 'absolute',
    top: -2,
    right: -2,
  },
  aiBanner: {
    position: 'relative',
    backgroundColor: '#F0F9FF',
    borderRadius: 16,
    overflow: 'hidden',
    minHeight: 120,
    marginBottom: 8,
  },
  aiBannerBackground: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.1,
  },
  aiBackgroundIcon: {
    fontSize: 80,
  },
  aiBackgroundFoliage: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    fontSize: 40,
  },
  aiBannerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  aiBannerText: {
    flex: 1,
  },
  aiBannerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 4,
  },
  aiBannerSubtitle: {
    fontSize: 16,
    color: '#6B7280',
  },
  aiBannerButton: {
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
    marginLeft: 16,
  },
  aiBannerButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
  },
});
