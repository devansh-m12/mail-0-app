# Android 16 (API 36) Support

*Expo SDK 54 Beta - Android 16 Targeting*

## 🎯 Overview

Expo SDK 54 now targets **Android 16 (API 36)** as the minimum supported version. This brings significant improvements in performance, security, and user experience, with edge-to-edge design becoming the default behavior.

## 📱 Edge-to-Edge Design

### Always Enabled

Edge-to-edge design is now **always enabled** in SDK 54 and cannot be disabled. This provides a more immersive experience by extending your app content to the edges of the screen.

#### What Changed
- **Cannot be disabled** - Edge-to-edge is now mandatory
- **react-native-edge-to-edge** is no longer a dependency
- **Built into React Native** by Mathieu Acthernoene
- **Automatic handling** of system UI areas

#### Benefits
- **More screen real estate** for your content
- **Modern Android design** compliance
- **Better user experience** with immersive interfaces
- **Reduced configuration** overhead

### Configuration Options

While edge-to-edge cannot be disabled, you can still configure specific behaviors:

```json
{
  "expo": {
    "android": {
      "navigationBar": {
        "enforceContrast": true
      }
    }
  }
}
```

#### Navigation Bar Contrast

```json
{
  "expo": {
    "androidNavigationBar": {
      "enforceContrast": true
    }
  }
}
```

This replaces the previous `react-native-edge-to-edge` plugin configuration and requires no additional dependencies.

### Manual Configuration (If Needed)

If you were previously using `react-native-edge-to-edge` for custom configuration:

1. **Install as direct dependency**:
   ```bash
   npx expo install react-native-edge-to-edge
   ```

2. **Use config plugin** for advanced configuration:
   ```json
   {
     "expo": {
       "plugins": [
         [
           "react-native-edge-to-edge",
           {
             "enforceNavigationBarContrast": true
           }
         ]
       ]
     }
   }
   ```

## 🔄 Predictive Back Gesture

### Default Behavior

- **New projects**: Predictive back gesture enabled by default
- **Existing projects**: Predictive back gesture disabled by default
- **Future**: Will be enabled by default in SDK 55

### Configuration

```json
{
  "expo": {
    "android": {
      "predictiveBackGestureEnabled": true
    }
  }
}
```

### What is Predictive Back Gesture?

Predictive back gesture provides visual feedback when users start the back gesture, showing them what screen they'll return to. This improves navigation UX and reduces accidental back actions.

#### Benefits
- **Visual feedback** during back gesture
- **Reduced accidental navigation**
- **Better user experience**
- **Modern Android behavior**

## 🎨 Material You Integration

### Dynamic Color Support

Android 16 brings enhanced Material You support with dynamic colors that adapt to the user's wallpaper.

#### Implementation

```typescript
import { useColorScheme } from 'react-native';

export default function MyComponent() {
  const colorScheme = useColorScheme();
  
  return (
    <View style={{
      backgroundColor: colorScheme === 'dark' ? '#1a1a1a' : '#ffffff',
      // Material You colors will be automatically applied
    }}>
      {/* Your content */}
    </View>
  );
}
```

### Adaptive Icons

Enhanced adaptive icon support with better shape adaptation:

```json
{
  "expo": {
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff",
        "monochromeImage": "./assets/monochrome-icon.png"
      }
    }
  }
}
```

## 🔒 Security Enhancements

### Enhanced Permissions

Android 16 introduces stricter permission handling and better security models.

#### Permission Best Practices

```typescript
import { PermissionsAndroid } from 'react-native';

const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: "Camera Permission",
        message: "This app needs access to your camera",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK"
      }
    );
    
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("Camera permission granted");
    } else {
      console.log("Camera permission denied");
    }
  } catch (err) {
    console.warn(err);
  }
};
```

### Network Security

Enhanced network security with stricter TLS requirements and certificate pinning support.

## ⚡ Performance Improvements

### Runtime Optimizations

- **Faster app startup** times
- **Improved memory management**
- **Better battery optimization**
- **Enhanced GPU utilization**

### Build Optimizations

```json
{
  "expo": {
    "plugins": [
      [
        "expo-build-properties",
        {
          "android": {
            "enableMinifyInReleaseBuilds": true,
            "enableProguardInReleaseBuilds": true
          }
        }
      ]
    ]
  }
}
```

## 🧭 Navigation Enhancements

### Enhanced Navigation Bar

- **Better contrast** handling
- **Improved accessibility**
- **Dynamic color support**
- **Gesture navigation** improvements

### Status Bar Integration

```typescript
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      {/* Your app content */}
    </>
  );
}
```

## 📱 Device Compatibility

### Minimum Requirements

- **Android 16 (API 36)** minimum
- **Recommended**: Android 17+ for best experience
- **Fallback**: Automatic handling for older devices

### Testing Matrix

| Android Version | API Level | Support Level |
|----------------|-----------|---------------|
| Android 16 | API 36 | ✅ Full support |
| Android 17 | API 37 | ✅ Full support + enhancements |
| Android 18+ | API 38+ | ✅ Full support + latest features |

## 🔧 Development Setup

### Android Studio Requirements

- **Android Studio Hedgehog** or later
- **Android SDK 36** minimum
- **Build Tools 36.0.0** or later

### Gradle Configuration

```gradle
android {
    compileSdkVersion 36
    defaultConfig {
        minSdkVersion 36
        targetSdkVersion 36
    }
}
```

### EAS Build Configuration

```json
{
  "build": {
    "development": {
      "android": {
        "buildType": "apk"
      }
    },
    "production": {
      "android": {
        "buildType": "app-bundle"
      }
    }
  }
}
```

## 🐛 Known Issues & Workarounds

### Edge-to-Edge Layout Issues

If you experience layout issues with edge-to-edge:

```typescript
import { useSafeAreaInsets } from 'react-native-safe-area-context';

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
}
```

### Navigation Bar Contrast Issues

If you need to enforce navigation bar contrast:

```json
{
  "expo": {
    "androidNavigationBar": {
      "enforceContrast": true
    }
  }
}
```

## 📊 Migration Checklist

### Before Upgrading
- [ ] Test current app on Android 16+ devices
- [ ] Review edge-to-edge layout compatibility
- [ ] Check navigation bar contrast requirements
- [ ] Verify permission handling

### During Upgrade
- [ ] Update `app.json` configuration
- [ ] Test edge-to-edge behavior
- [ ] Verify predictive back gesture
- [ ] Check Material You integration

### After Upgrade
- [ ] Test on Android 16+ devices
- [ ] Verify edge-to-edge layout
- [ ] Test navigation gestures
- [ ] Check performance metrics

## 🎯 Best Practices

### Edge-to-Edge Design

1. **Use SafeAreaView** for content that shouldn't extend to edges
2. **Test on different devices** with various screen sizes
3. **Consider system UI** when designing layouts
4. **Provide visual feedback** for interactive elements

### Performance

1. **Optimize images** for different densities
2. **Use efficient animations** and transitions
3. **Minimize memory usage** with proper cleanup
4. **Test on lower-end devices**

### Accessibility

1. **Ensure proper contrast** ratios
2. **Test with screen readers**
3. **Provide alternative navigation** methods
4. **Support different text sizes**

## 📚 Additional Resources

- [Android 16 Developer Guide](https://developer.android.com/about/versions/16)
- [Material You Design](https://m3.material.io/)
- [Edge-to-Edge Design](https://developer.android.com/develop/ui/views/layout/edge-to-edge)
- [Android Navigation](https://developer.android.com/guide/navigation)

---

*This documentation covers Android 16 support in Expo SDK 54 Beta. Features and APIs may evolve during the beta period.*
