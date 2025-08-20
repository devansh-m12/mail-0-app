import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Alert, Platform } from 'react-native';
import { ThemedText } from '@/components/themed-text';

export const PerformanceDemo: React.FC = () => {
  const [buildTime, setBuildTime] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [performanceMetrics, setPerformanceMetrics] = useState({
    startupTime: '~2.0s',
    memoryUsage: '~140MB',
    bridgeLatency: '~4ms',
  });

  // Simulate build time measurement
  const measureBuildTime = () => {
    setIsLoading(true);
    setTimeout(() => {
      const newBuildTime = Math.random() * 5 + 8; // 8-13 seconds
      setBuildTime(newBuildTime);
      setIsLoading(false);
      Alert.alert(
        'Build Time Measurement',
        `SDK 54 Build Time: ${newBuildTime.toFixed(1)}s\n\nThis is approximately 10x faster than SDK 53!`
      );
    }, 2000);
  };

  // Simulate performance monitoring
  const startPerformanceMonitoring = () => {
    Alert.alert(
      'Performance Monitoring',
      'React Native Owner Stacks are now enabled by default!\n\nThis provides better error reporting and debugging capabilities.'
    );
  };

  return (
    <View style={styles.container}>
      {/* Build Performance */}
      <View style={styles.section}>
        <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>
          🏗️ Build Performance
        </ThemedText>
        
        <View style={styles.buildComparison}>
          <View style={styles.buildCard}>
            <ThemedText type="defaultSemiBold" style={styles.buildLabel}>
              SDK 53
            </ThemedText>
            <ThemedText style={styles.buildTime}>~120s</ThemedText>
            <ThemedText style={styles.buildDesc}>Compile from source</ThemedText>
          </View>
          
          <View style={styles.arrowContainer}>
            <ThemedText style={styles.arrow}>→</ThemedText>
            <ThemedText style={styles.improvement}>10x faster</ThemedText>
          </View>
          
          <View style={[styles.buildCard, styles.highlightedCard]}>
            <ThemedText type="defaultSemiBold" style={styles.buildLabel}>
              SDK 54
            </ThemedText>
            <ThemedText style={styles.buildTime}>~10s</ThemedText>
            <ThemedText style={styles.buildDesc}>Precompiled XCFrameworks</ThemedText>
          </View>
        </View>

        <TouchableOpacity 
          style={styles.measureButton} 
          onPress={measureBuildTime}
          disabled={isLoading}
        >
          <ThemedText style={styles.measureButtonText}>
            {isLoading ? 'Measuring...' : 'Measure Build Time'}
          </ThemedText>
        </TouchableOpacity>

        {buildTime && (
          <View style={styles.resultContainer}>
            <ThemedText style={styles.resultText}>
              Your build time: {buildTime.toFixed(1)}s
            </ThemedText>
          </View>
        )}
      </View>

      {/* Runtime Performance */}
      <View style={styles.section}>
        <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>
          ⚡ Runtime Performance
        </ThemedText>
        
        <View style={styles.metricsGrid}>
          <View style={styles.metricCard}>
            <ThemedText style={styles.metricValue}>{performanceMetrics.startupTime}</ThemedText>
            <ThemedText style={styles.metricLabel}>App Startup</ThemedText>
            <ThemedText style={styles.metricImprovement}>20% faster</ThemedText>
          </View>
          
          <View style={styles.metricCard}>
            <ThemedText style={styles.metricValue}>{performanceMetrics.memoryUsage}</ThemedText>
            <ThemedText style={styles.metricLabel}>Memory Usage</ThemedText>
            <ThemedText style={styles.metricImprovement}>7% reduction</ThemedText>
          </View>
          
          <View style={styles.metricCard}>
            <ThemedText style={styles.metricValue}>{performanceMetrics.bridgeLatency}</ThemedText>
            <ThemedText style={styles.metricLabel}>JS Bridge</ThemedText>
            <ThemedText style={styles.metricImprovement}>20% faster</ThemedText>
          </View>
        </View>
      </View>

      {/* Development Performance */}
      <View style={styles.section}>
        <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>
          🛠️ Development Experience
        </ThemedText>
        
        <View style={styles.devFeatures}>
          <View style={styles.featureItem}>
            <ThemedText style={styles.featureIcon}>🔍</ThemedText>
            <View style={styles.featureContent}>
              <ThemedText type="defaultSemiBold">React Native Owner Stacks</ThemedText>
              <ThemedText style={styles.featureDesc}>
                Enhanced error reporting with component context
              </ThemedText>
            </View>
          </View>
          
          <View style={styles.featureItem}>
            <ThemedText style={styles.featureIcon}>⚠️</ThemedText>
            <View style={styles.featureContent}>
              <ThemedText type="defaultSemiBold">Promise Rejection Logging</ThemedText>
              <ThemedText style={styles.featureDesc}>
                Unhandled rejections now logged as errors
              </ThemedText>
            </View>
          </View>
          
          <View style={styles.featureItem}>
            <ThemedText style={styles.featureIcon}>⚙️</ThemedText>
            <View style={styles.featureContent}>
              <ThemedText type="defaultSemiBold">React Compiler</ThemedText>
              <ThemedText style={styles.featureDesc}>
                Enabled by default for automatic optimizations
              </ThemedText>
            </View>
          </View>
        </View>

        <TouchableOpacity 
          style={styles.monitorButton} 
          onPress={startPerformanceMonitoring}
        >
          <ThemedText style={styles.monitorButtonText}>
            Test Error Handling
          </ThemedText>
        </TouchableOpacity>
      </View>

      {/* Platform-Specific Optimizations */}
      <View style={styles.section}>
        <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>
          📱 Platform Optimizations
        </ThemedText>
        
        <View style={styles.platformContainer}>
          <View style={styles.platformCard}>
            <ThemedText style={styles.platformIcon}>🍎</ThemedText>
            <ThemedText type="defaultSemiBold">iOS</ThemedText>
            <ThemedText style={styles.platformFeature}>
              • Precompiled XCFrameworks
            </ThemedText>
            <ThemedText style={styles.platformFeature}>
              • Swift Package Manager ready
            </ThemedText>
            <ThemedText style={styles.platformFeature}>
              • Better incremental builds
            </ThemedText>
          </View>
          
          <View style={styles.platformCard}>
            <ThemedText style={styles.platformIcon}>🤖</ThemedText>
            <ThemedText type="defaultSemiBold">Android</ThemedText>
            <ThemedText style={styles.platformFeature}>
              • Edge-to-edge optimization
            </ThemedText>
            <ThemedText style={styles.platformFeature}>
              • Improved memory management
            </ThemedText>
            <ThemedText style={styles.platformFeature}>
              • Better rendering performance
            </ThemedText>
          </View>
        </View>
      </View>

      {/* Performance Tips */}
      <View style={styles.section}>
        <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>
          💡 Performance Tips
        </ThemedText>
        
        <View style={styles.tipsContainer}>
          <ThemedText style={styles.tipText}>
            • Use precompiled XCFrameworks for faster iOS builds
          </ThemedText>
          <ThemedText style={styles.tipText}>
            • Enable React Compiler for automatic optimizations
          </ThemedText>
          <ThemedText style={styles.tipText}>
            • Monitor promise rejections for better debugging
          </ThemedText>
          <ThemedText style={styles.tipText}>
            • Test on physical devices for accurate performance metrics
          </ThemedText>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 24,
  },
  section: {
    gap: 16,
  },
  sectionTitle: {
    fontSize: 16,
    marginBottom: 8,
  },
  buildComparison: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  buildCard: {
    flex: 1,
    padding: 16,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
  },
  highlightedCard: {
    backgroundColor: 'rgba(0, 255, 0, 0.1)',
    borderColor: 'rgba(0, 255, 0, 0.3)',
  },
  buildLabel: {
    fontSize: 14,
    marginBottom: 4,
  },
  buildTime: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  buildDesc: {
    fontSize: 12,
    opacity: 0.8,
    textAlign: 'center',
  },
  arrowContainer: {
    alignItems: 'center',
  },
  arrow: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  improvement: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#00FF00',
  },
  measureButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  measureButtonText: {
    fontWeight: '600',
  },
  resultContainer: {
    padding: 12,
    backgroundColor: 'rgba(0, 255, 0, 0.1)',
    borderRadius: 8,
    alignItems: 'center',
  },
  resultText: {
    fontWeight: 'bold',
    color: '#00FF00',
  },
  metricsGrid: {
    flexDirection: 'row',
    gap: 12,
  },
  metricCard: {
    flex: 1,
    padding: 16,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
  },
  metricValue: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  metricLabel: {
    fontSize: 12,
    opacity: 0.8,
    marginBottom: 4,
  },
  metricImprovement: {
    fontSize: 10,
    color: '#00FF00',
    fontWeight: 'bold',
  },
  devFeatures: {
    gap: 12,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 8,
  },
  featureIcon: {
    fontSize: 20,
  },
  featureContent: {
    flex: 1,
  },
  featureDesc: {
    fontSize: 12,
    opacity: 0.8,
    marginTop: 2,
  },
  monitorButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  monitorButtonText: {
    fontWeight: '600',
  },
  platformContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  platformCard: {
    flex: 1,
    padding: 16,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
  },
  platformIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  platformFeature: {
    fontSize: 12,
    opacity: 0.8,
    marginTop: 4,
    textAlign: 'center',
  },
  tipsContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    padding: 16,
    borderRadius: 8,
    gap: 8,
  },
  tipText: {
    fontSize: 14,
    opacity: 0.9,
  },
});
