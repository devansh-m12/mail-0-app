import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { aiBanner } from '../docs/mock-data';
import Feather from '@expo/vector-icons/Feather';
import Octicons from '@expo/vector-icons/Octicons';

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
      <View style={styles.searchBar}>
        <Feather name="search" size={18} color="#6B7280" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search mail0...."
          placeholderTextColor="#9CA3AF"
          onFocus={onSearchFocus}
        />
        <TouchableOpacity onPress={onFilterPress} style={styles.filterButton}>
          <Octicons name="filter" size={18} color="#6B7280" />
        </TouchableOpacity>
      </View>

      {/* AI Banner */}
      <ImageBackground 
        source={require('../assets/images/bgp.jpeg')} 
        style={styles.aiBanner}
      >
        <LinearGradient
          colors={['transparent', 'rgba(255, 255, 255, 0.5)', 'rgba(255, 255, 255, 0.8)']}
          style={styles.gradientOverlay}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        />
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
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F6F7F6',

    paddingTop: 8,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginHorizontal: 15,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginBottom: 8,
  },
  searchIcon: {
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333333',
    paddingVertical: 0,
  },
  filterButton: {
    marginLeft: 12,
  },
  aiBanner: {
    height: 70,
    overflow: 'hidden',
  },
  aiBannerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    height: '100%',
  },
  aiBannerText: {
    flex: 1,
  },
  aiBannerTitle: {
    fontSize: 20,
    fontWeight: '500',
    color: '#FFFFFF',
    marginBottom: 4,
    lineHeight: 24,
  },
  aiBannerSubtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    lineHeight: 20,
    fontWeight: '300',
  },
  aiBannerButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    paddingHorizontal: 10,
    paddingVertical:0,
    borderRadius: 12,
    marginLeft: 12,
    minHeight: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  aiBannerButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  gradientOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 40,
  },
});
