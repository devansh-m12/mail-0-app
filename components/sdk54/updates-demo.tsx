import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { ThemedText } from '@/components/themed-text';

export const UpdatesDemo: React.FC = () => {
  const [downloadProgress, setDownloadProgress] = useState<number>(0);
  const [isDownloading, setIsDownloading] = useState(false);
  const [updateHeaders, setUpdateHeaders] = useState({
    channel: 'production',
    environment: 'live',
    version: '1.0.0',
  });

  // Simulate download progress
  const simulateDownload = () => {
    setIsDownloading(true);
    setDownloadProgress(0);
    
    const interval = setInterval(() => {
      setDownloadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsDownloading(false);
          Alert.alert('Update Complete', 'The update has been downloaded and applied successfully!');
          return 100;
        }
        return prev + Math.random() * 10;
      });
    }, 200);
  };

  // Simulate runtime header override
  const overrideHeaders = () => {
    const newHeaders = {
      channel: 'beta',
      environment: 'testing',
      version: '1.1.0-beta',
    };
    setUpdateHeaders(newHeaders);
    Alert.alert(
      'Headers Overridden',
      `Channel: ${newHeaders.channel}\nEnvironment: ${newHeaders.environment}\nVersion: ${newHeaders.version}\n\nHeaders applied immediately without app restart!`
    );
  };

  // Simulate reload with custom screen
  const reloadWithCustomScreen = () => {
    Alert.alert(
      'Custom Reload Screen',
      'This demonstrates the new reloadScreenOptions feature. In a real app, you would see a custom loading screen with your branding.'
    );
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Download Progress Tracking */}
      <View style={styles.section}>
        <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>
          📥 Download Progress Tracking
        </ThemedText>
        
        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View 
              style={[
                styles.progressFill, 
                { width: `${downloadProgress}%` }
              ]} 
            />
          </View>
          <ThemedText style={styles.progressText}>
            {isDownloading ? `${downloadProgress.toFixed(1)}%` : 'Ready to download'}
          </ThemedText>
        </View>

        <TouchableOpacity 
          style={styles.downloadButton} 
          onPress={simulateDownload}
          disabled={isDownloading}
        >
          <ThemedText style={styles.downloadButtonText}>
            {isDownloading ? 'Downloading...' : 'Simulate Update Download'}
          </ThemedText>
        </TouchableOpacity>

        <View style={styles.featureCard}>
          <ThemedText type="defaultSemiBold">useUpdates() Hook Enhancement</ThemedText>
          <ThemedText style={styles.featureDesc}>
            The useUpdates() hook now includes a downloadProgress property for tracking asset downloads.
          </ThemedText>
        </View>
      </View>

      {/* Runtime Header Overrides */}
      <View style={styles.section}>
        <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>
          🔧 Runtime Header Overrides
        </ThemedText>
        
        <View style={styles.headersContainer}>
          <View style={styles.headerItem}>
            <ThemedText style={styles.headerLabel}>Channel:</ThemedText>
            <ThemedText style={styles.headerValue}>{updateHeaders.channel}</ThemedText>
          </View>
          <View style={styles.headerItem}>
            <ThemedText style={styles.headerLabel}>Environment:</ThemedText>
            <ThemedText style={styles.headerValue}>{updateHeaders.environment}</ThemedText>
          </View>
          <View style={styles.headerItem}>
            <ThemedText style={styles.headerLabel}>Version:</ThemedText>
            <ThemedText style={styles.headerValue}>{updateHeaders.version}</ThemedText>
          </View>
        </View>

        <TouchableOpacity 
          style={styles.overrideButton} 
          onPress={overrideHeaders}
        >
          <ThemedText style={styles.overrideButtonText}>
            Override Headers at Runtime
          </ThemedText>
        </TouchableOpacity>

        <View style={styles.featureCard}>
          <ThemedText type="defaultSemiBold">setUpdateRequestHeadersOverride()</ThemedText>
          <ThemedText style={styles.featureDesc}>
            Override update request headers at runtime without app restart. Perfect for A/B testing and employee channels.
          </ThemedText>
        </View>
      </View>

      {/* Reload Screen Options */}
      <View style={styles.section}>
        <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>
          🎨 Custom Reload Screens
        </ThemedText>
        
        <View style={styles.reloadDemo}>
          <View style={styles.reloadPreview}>
            <View style={styles.reloadContent}>
              <ThemedText style={styles.reloadIcon}>🔄</ThemedText>
              <ThemedText type="defaultSemiBold" style={styles.reloadTitle}>
                Updating App
              </ThemedText>
              <ThemedText style={styles.reloadSubtitle}>
                Please wait while we apply the latest changes...
              </ThemedText>
            </View>
          </View>
        </View>

        <TouchableOpacity 
          style={styles.reloadButton} 
          onPress={reloadWithCustomScreen}
        >
          <ThemedText style={styles.reloadButtonText}>
            Demo Custom Reload Screen
          </ThemedText>
        </TouchableOpacity>

        <View style={styles.featureCard}>
          <ThemedText type="defaultSemiBold">reloadScreenOptions</ThemedText>
          <ThemedText style={styles.featureDesc}>
            Customize the reload screen with your branding, images, and animations for a better user experience.
          </ThemedText>
        </View>
      </View>

      {/* EAS Update Features */}
      <View style={styles.section}>
        <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>
          ☁️ EAS Update Enhancements
        </ThemedText>
        
        <View style={styles.easFeatures}>
          <View style={styles.easFeature}>
            <ThemedText style={styles.easIcon}>🚀</ThemedText>
            <View style={styles.easContent}>
              <ThemedText type="defaultSemiBold">Instant Updates</ThemedText>
              <ThemedText style={styles.easDesc}>
                Apply header changes immediately without restart
              </ThemedText>
            </View>
          </View>
          
          <View style={styles.easFeature}>
            <ThemedText style={styles.easIcon}>📊</ThemedText>
            <View style={styles.easContent}>
              <ThemedText type="defaultSemiBold">Progress Tracking</ThemedText>
              <ThemedText style={styles.easDesc}>
                Real-time download progress for better UX
              </ThemedText>
            </View>
          </View>
          
          <View style={styles.easFeature}>
            <ThemedText style={styles.easIcon}>🎯</ThemedText>
            <View style={styles.easContent}>
              <ThemedText type="defaultSemiBold">Targeted Updates</ThemedText>
              <ThemedText style={styles.easDesc}>
                Different channels for employees vs end users
              </ThemedText>
            </View>
          </View>
        </View>
      </View>

      {/* Implementation Examples */}
      <View style={styles.section}>
        <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>
          💻 Implementation Examples
        </ThemedText>
        
        <View style={styles.codeContainer}>
          <ThemedText style={styles.codeTitle}>Download Progress</ThemedText>
          <View style={styles.codeBlock}>
            <ThemedText style={styles.codeText}>
              {`const { downloadProgress } = useUpdates();
              
if (downloadProgress) {
  const progress = downloadProgress.totalBytesDownloaded / 
                   downloadProgress.totalBytesToDownload;
}`}
            </ThemedText>
          </View>
        </View>

        <View style={styles.codeContainer}>
          <ThemedText style={styles.codeTitle}>Header Override</ThemedText>
          <View style={styles.codeBlock}>
            <ThemedText style={styles.codeText}>
              {`Updates.setUpdateRequestHeadersOverride({
  channel: 'beta',
  environment: 'testing'
});`}
            </ThemedText>
          </View>
        </View>

        <View style={styles.codeContainer}>
          <ThemedText style={styles.codeTitle}>Custom Reload</ThemedText>
          <View style={styles.codeBlock}>
            <ThemedText style={styles.codeText}>
              {`Updates.reloadAsync({
  reloadScreenOptions: {
    backgroundColor: '#fa0000',
    image: require('./assets/reload.jpg'),
    fade: true
  }
});`}
            </ThemedText>
          </View>
        </View>
      </View>

      {/* Best Practices */}
      <View style={styles.section}>
        <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>
          💡 Best Practices
        </ThemedText>
        
        <View style={styles.practicesContainer}>
          <ThemedText style={styles.practiceText}>
            • Use progress bars for large updates to improve user experience
          </ThemedText>
          <ThemedText style={styles.practiceText}>
            • Implement header overrides for A/B testing and feature flags
          </ThemedText>
          <ThemedText style={styles.practiceText}>
            • Create branded reload screens to maintain user engagement
          </ThemedText>
          <ThemedText style={styles.practiceText}>
            • Test update flows on different network conditions
          </ThemedText>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    marginBottom: 12,
  },
  progressContainer: {
    marginBottom: 16,
  },
  progressBar: {
    height: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 8,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#007AFF',
    borderRadius: 4,
  },
  progressText: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '600',
  },
  downloadButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  downloadButtonText: {
    fontWeight: '600',
  },
  featureCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    padding: 12,
    borderRadius: 8,
  },
  featureDesc: {
    fontSize: 12,
    opacity: 0.8,
    marginTop: 4,
  },
  headersContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  headerItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  headerLabel: {
    fontSize: 14,
    opacity: 0.8,
  },
  headerValue: {
    fontSize: 14,
    fontWeight: '600',
  },
  overrideButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  overrideButtonText: {
    fontWeight: '600',
  },
  reloadDemo: {
    alignItems: 'center',
    marginBottom: 16,
  },
  reloadPreview: {
    width: 200,
    height: 120,
    backgroundColor: '#fa0000',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  reloadContent: {
    alignItems: 'center',
  },
  reloadIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  reloadTitle: {
    color: 'white',
    marginBottom: 4,
  },
  reloadSubtitle: {
    color: 'white',
    fontSize: 12,
    opacity: 0.8,
    textAlign: 'center',
  },
  reloadButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  reloadButtonText: {
    fontWeight: '600',
  },
  easFeatures: {
    gap: 12,
  },
  easFeature: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 8,
  },
  easIcon: {
    fontSize: 20,
  },
  easContent: {
    flex: 1,
  },
  easDesc: {
    fontSize: 12,
    opacity: 0.8,
    marginTop: 2,
  },
  codeContainer: {
    marginBottom: 16,
  },
  codeTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
  },
  codeBlock: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  codeText: {
    fontSize: 12,
    fontFamily: 'monospace',
    color: '#00FF00',
  },
  practicesContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    padding: 16,
    borderRadius: 8,
    gap: 8,
  },
  practiceText: {
    fontSize: 14,
    opacity: 0.9,
  },
});
