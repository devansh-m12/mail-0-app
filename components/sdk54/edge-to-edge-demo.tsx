import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Alert, Platform } from 'react-native';
import { ThemedText } from '@/components/themed-text';

export const EdgeToEdgeDemo: React.FC = () => {
  const [isEdgeToEdge, setIsEdgeToEdge] = useState(true);
  const [predictiveBackEnabled, setPredictiveBackEnabled] = useState(false);

  const toggleEdgeToEdge = () => {
    if (Platform.OS === 'android') {
      setIsEdgeToEdge(!isEdgeToEdge);
      Alert.alert(
        'Edge-to-Edge Design',
        `Edge-to-edge is now ${isEdgeToEdge ? 'disabled' : 'enabled'}!\n\nNote: In SDK 54, edge-to-edge is always enabled and cannot be disabled. This is just a demo simulation.`
      );
    } else {
      Alert.alert(
        'Platform Notice',
        'Edge-to-edge design is an Android 16+ feature. This demo shows how it would work on Android devices.'
      );
    }
  };

  const togglePredictiveBack = () => {
    setPredictiveBackEnabled(!predictiveBackEnabled);
    Alert.alert(
      'Predictive Back Gesture',
      `Predictive back gesture is now ${predictiveBackEnabled ? 'disabled' : 'enabled'}!\n\nThis provides visual feedback when users start the back gesture, showing them what screen they'll return to.`
    );
  };

  const simulateBackGesture = () => {
    Alert.alert(
      'Back Gesture Simulation',
      'This simulates the predictive back gesture on Android 16+.\n\nIn a real app, you would see:\n• Visual feedback during the gesture\n• Preview of the destination screen\n• Smooth animations and transitions'
    );
  };

  return (
    <View style={styles.container}>
      {/* Edge-to-Edge Overview */}
      <View style={styles.section}>
        <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>
          📱 Edge-to-Edge Design
        </ThemedText>
        
        <View style={styles.overviewCard}>
          <ThemedText style={styles.overviewText}>
            Edge-to-edge design extends your app content to the edges of the screen, 
            providing a more immersive experience. In SDK 54, this is always enabled on Android.
          </ThemedText>
        </View>

        <View style={styles.platformNotice}>
          <ThemedText style={styles.platformIcon}>
            {Platform.OS === 'android' ? '🤖' : '🍎'}
          </ThemedText>
          <ThemedText style={styles.platformText}>
            {Platform.OS === 'android' 
              ? 'Android 16+ - Edge-to-edge always enabled'
              : 'iOS - Uses safe area insets for edge handling'
            }
          </ThemedText>
        </View>
      </View>

      {/* Edge-to-Edge Simulation */}
      <View style={styles.section}>
        <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>
          🎨 Edge-to-Edge Simulation
        </ThemedText>
        
        <View style={styles.simulationContainer}>
          <View style={styles.phoneFrame}>
            <View style={styles.statusBar}>
              <ThemedText style={styles.statusBarText}>9:41</ThemedText>
              <View style={styles.statusBarIcons}>
                <ThemedText style={styles.statusBarIcon}>📶</ThemedText>
                <ThemedText style={styles.statusBarIcon}>📶</ThemedText>
                <ThemedText style={styles.statusBarIcon}>🔋</ThemedText>
              </View>
            </View>
            
            <View style={[
              styles.contentArea,
              isEdgeToEdge && styles.edgeToEdgeContent
            ]}>
              <View style={styles.contentCard}>
                <ThemedText type="defaultSemiBold">App Content</ThemedText>
                <ThemedText style={styles.contentText}>
                  This content extends to the edges of the screen when edge-to-edge is enabled.
                </ThemedText>
              </View>
            </View>
            
            <View style={styles.navigationBar}>
              <View style={styles.navBarContent}>
                <ThemedText style={styles.navBarText}>Navigation Bar</ThemedText>
              </View>
            </View>
          </View>
        </View>

        <TouchableOpacity 
          style={styles.toggleButton} 
          onPress={toggleEdgeToEdge}
        >
          <ThemedText style={styles.toggleButtonText}>
            {isEdgeToEdge ? 'Disable' : 'Enable'} Edge-to-Edge (Demo)
          </ThemedText>
        </TouchableOpacity>
      </View>

      {/* Predictive Back Gesture */}
      <View style={styles.section}>
        <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>
          🔄 Predictive Back Gesture
        </ThemedText>
        
        <View style={styles.gestureContainer}>
          <View style={styles.gestureDemo}>
            <View style={styles.gestureArea}>
              <ThemedText style={styles.gestureIcon}>👆</ThemedText>
              <ThemedText style={styles.gestureText}>Swipe from edge</ThemedText>
            </View>
            <ThemedText style={styles.gestureArrow}>→</ThemedText>
            <View style={styles.gesturePreview}>
              <ThemedText style={styles.previewText}>Preview</ThemedText>
            </View>
          </View>
        </View>

        <View style={styles.gestureControls}>
          <TouchableOpacity 
            style={[
              styles.gestureButton,
              predictiveBackEnabled && styles.enabledGestureButton
            ]} 
            onPress={togglePredictiveBack}
          >
            <ThemedText style={styles.gestureButtonText}>
              {predictiveBackEnabled ? 'Disable' : 'Enable'} Predictive Back
            </ThemedText>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.simulateButton} 
            onPress={simulateBackGesture}
          >
            <ThemedText style={styles.simulateButtonText}>
              Simulate Back Gesture
            </ThemedText>
          </TouchableOpacity>
        </View>
      </View>

      {/* Platform Comparison */}
      <View style={styles.section}>
        <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>
          📊 Platform Comparison
        </ThemedText>
        
        <View style={styles.comparisonContainer}>
          <View style={styles.comparisonColumn}>
            <ThemedText type="defaultSemiBold" style={styles.comparisonTitle}>
              Android 16+
            </ThemedText>
            <View style={styles.featureList}>
              <View style={styles.featureItem}>
                <ThemedText style={styles.featureIcon}>✅</ThemedText>
                <ThemedText style={styles.featureText}>Edge-to-edge always enabled</ThemedText>
              </View>
              <View style={styles.featureItem}>
                <ThemedText style={styles.featureIcon}>✅</ThemedText>
                <ThemedText style={styles.featureText}>Predictive back gesture</ThemedText>
              </View>
              <View style={styles.featureItem}>
                <ThemedText style={styles.featureIcon}>✅</ThemedText>
                <ThemedText style={styles.featureText}>Material You integration</ThemedText>
              </View>
              <View style={styles.featureItem}>
                <ThemedText style={styles.featureIcon}>✅</ThemedText>
                <ThemedText style={styles.featureText}>Enhanced navigation bar</ThemedText>
              </View>
            </View>
          </View>
          
          <View style={styles.comparisonColumn}>
            <ThemedText type="defaultSemiBold" style={styles.comparisonTitle}>
              iOS
            </ThemedText>
            <View style={styles.featureList}>
              <View style={styles.featureItem}>
                <ThemedText style={styles.featureIcon}>✅</ThemedText>
                <ThemedText style={styles.featureText}>Safe area handling</ThemedText>
              </View>
              <View style={styles.featureItem}>
                <ThemedText style={styles.featureIcon}>✅</ThemedText>
                <ThemedText style={styles.featureText}>Liquid Glass effects</ThemedText>
              </View>
              <View style={styles.featureItem}>
                <ThemedText style={styles.featureIcon}>✅</ThemedText>
                <ThemedText style={styles.featureText}>Native tab animations</ThemedText>
              </View>
              <View style={styles.featureItem}>
                <ThemedText style={styles.featureIcon}>✅</ThemedText>
                <ThemedText style={styles.featureText}>Status bar integration</ThemedText>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* Implementation Guide */}
      <View style={styles.section}>
        <ThemedText type="defaultSemiBold" style={styles.sectionTitle}>
          💻 Implementation Guide
        </ThemedText>
        
        <View style={styles.codeContainer}>
          <ThemedText style={styles.codeTitle}>Safe Area Handling</ThemedText>
          <View style={styles.codeBlock}>
            <ThemedText style={styles.codeText}>
              {`import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function MyScreen() {
  const insets = useSafeAreaInsets();
  
  return (
    <View style={{
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right,
    }}>
      {/* Your content */}
    </View>
  );
}`}
            </ThemedText>
          </View>
        </View>

        <View style={styles.codeContainer}>
          <ThemedText style={styles.codeTitle}>Android Configuration</ThemedText>
          <View style={styles.codeBlock}>
            <ThemedText style={styles.codeText}>
              {`{
  "expo": {
    "android": {
      "predictiveBackGestureEnabled": true
    },
    "androidNavigationBar": {
      "enforceContrast": true
    }
  }
}`}
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
            • Use SafeAreaView for content that shouldn't extend to edges
          </ThemedText>
          <ThemedText style={styles.practiceText}>
            • Test on different screen sizes and orientations
          </ThemedText>
          <ThemedText style={styles.practiceText}>
            • Consider system UI when designing layouts
          </ThemedText>
          <ThemedText style={styles.practiceText}>
            • Provide visual feedback for interactive elements
          </ThemedText>
          <ThemedText style={styles.practiceText}>
            • Test predictive back gesture on Android 16+
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
  overviewCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  overviewText: {
    fontSize: 14,
    lineHeight: 20,
    opacity: 0.9,
  },
  platformNotice: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    padding: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 8,
  },
  platformIcon: {
    fontSize: 20,
  },
  platformText: {
    fontSize: 14,
    opacity: 0.8,
  },
  simulationContainer: {
    alignItems: 'center',
  },
  phoneFrame: {
    width: 200,
    height: 400,
    backgroundColor: '#000',
    borderRadius: 20,
    padding: 2,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
  },
  statusBarText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
  },
  statusBarIcons: {
    flexDirection: 'row',
    gap: 4,
  },
  statusBarIcon: {
    fontSize: 10,
  },
  contentArea: {
    flex: 1,
    padding: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  edgeToEdgeContent: {
    padding: 0,
  },
  contentCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  contentText: {
    fontSize: 12,
    opacity: 0.8,
    marginTop: 8,
  },
  navigationBar: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    padding: 8,
  },
  navBarContent: {
    alignItems: 'center',
  },
  navBarText: {
    color: 'white',
    fontSize: 10,
    opacity: 0.8,
  },
  toggleButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  toggleButtonText: {
    fontWeight: '600',
  },
  gestureContainer: {
    alignItems: 'center',
  },
  gestureDemo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  gestureArea: {
    alignItems: 'center',
    gap: 8,
  },
  gestureIcon: {
    fontSize: 24,
  },
  gestureText: {
    fontSize: 12,
    opacity: 0.8,
  },
  gestureArrow: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  gesturePreview: {
    width: 60,
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  previewText: {
    fontSize: 10,
    opacity: 0.8,
  },
  gestureControls: {
    gap: 12,
  },
  gestureButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  enabledGestureButton: {
    backgroundColor: 'rgba(0, 255, 0, 0.2)',
    borderWidth: 1,
    borderColor: 'rgba(0, 255, 0, 0.3)',
  },
  gestureButtonText: {
    fontWeight: '600',
  },
  simulateButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  simulateButtonText: {
    fontWeight: '600',
  },
  comparisonContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  comparisonColumn: {
    flex: 1,
  },
  comparisonTitle: {
    fontSize: 14,
    marginBottom: 12,
    textAlign: 'center',
  },
  featureList: {
    gap: 8,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    padding: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 6,
  },
  featureIcon: {
    fontSize: 16,
  },
  featureText: {
    fontSize: 12,
    flex: 1,
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
