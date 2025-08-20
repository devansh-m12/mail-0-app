# Migration Guide: Upgrading to Expo SDK 54 Beta

*Step-by-step guide for upgrading your existing Expo project to SDK 54 Beta*

## 🎯 Overview

This guide will help you upgrade your existing Expo project to SDK 54 Beta. The upgrade process involves several breaking changes and new features that require careful migration.

## 📋 Pre-Migration Checklist

### Before You Start

- [ ] **Backup your project** - Create a git commit or backup
- [ ] **Check current SDK version** - Ensure you're upgrading from a supported version
- [ ] **Review dependencies** - Identify any incompatible libraries
- [ ] **Test current functionality** - Document current app behavior
- [ ] **Check platform support** - Verify iOS/Android compatibility

### System Requirements

- **Node.js**: 20.19.x minimum (recommended: latest LTS)
- **Xcode**: 16.1 minimum (Xcode 26 beta for iOS 26 features)
- **Android Studio**: Latest version with API 36 support
- **Expo CLI**: Latest version

## 🚀 Step-by-Step Migration

### Step 1: Update Expo CLI

```bash
# Update Expo CLI to latest version
npm install -g @expo/cli@latest

# Verify installation
expo --version
```

### Step 2: Upgrade Dependencies

```bash
# Upgrade to SDK 54 beta
npx expo install expo@next --fix

# This will automatically update all related dependencies
```

**What this does:**
- Updates `expo` to `54.0.0-preview.4`
- Updates React Native to `0.81.0`
- Updates React to `19.1.0`
- Updates all Expo packages to compatible versions

### Step 3: Update app.json Configuration

#### Basic Configuration Updates

```json
{
  "expo": {
    "name": "Your App Name",
    "slug": "your-app-slug",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.yourcompany.yourapp"
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      },
      "package": "com.yourcompany.yourapp"
    },
    "web": {
      "favicon": "./assets/favicon.png"
    }
  }
}
```

#### iOS 26 Liquid Glass Icons (Optional)

If you want to use Liquid Glass icons:

```json
{
  "expo": {
    "ios": {
      "icon": "./assets/app.icon"
    }
  }
}
```

#### Android 16 Configuration

```json
{
  "expo": {
    "android": {
      "predictiveBackGestureEnabled": true
    },
    "androidNavigationBar": {
      "enforceContrast": true
    }
  }
}
```

### Step 4: Handle Breaking Changes

#### 1. Reanimated v4 Migration

If you're using Reanimated, you need to migrate to v4:

```bash
# Install Reanimated v4 and worklets
npx expo install react-native-reanimated@~4.0.2 react-native-worklets@~0.4.1
```

**Update imports:**
```typescript
// Old (v3)
import { runOnJS } from 'react-native-reanimated';

// New (v4)
import { runOnJS } from 'react-native-worklets';
```

**Enable New Architecture:**
```json
{
  "expo": {
    "plugins": [
      [
        "expo-build-properties",
        {
          "ios": {
            "newArchEnabled": true
          },
          "android": {
            "newArchEnabled": true
          }
        }
      ]
    ]
  }
}
```

#### 2. expo-file-system API Changes

**Quick migration (same behavior):**
```typescript
// Old
import * as FileSystem from 'expo-file-system';

// New
import * as FileSystem from 'expo-file-system/legacy';
```

**Gradual migration to new API:**
```typescript
// New API (recommended)
import * as FileSystem from 'expo-file-system';
```

#### 3. expo-notifications Updates

```typescript
// Old (deprecated)
import { getBadgeCountAsync } from 'expo-notifications';

// New
import * as Notifications from 'expo-notifications';
const badgeCount = await Notifications.getBadgeCountAsync();
```

#### 4. React Native SafeAreaView

```typescript
// Old (deprecated)
import { SafeAreaView } from 'react-native';

// New
import { SafeAreaView } from 'react-native-safe-area-context';
```

### Step 5: Update Build Configuration

#### expo-build-properties Updates

```json
{
  "expo": {
    "plugins": [
      [
        "expo-build-properties",
        {
          "ios": {
            "buildReactNativeFromSource": false,
            "newArchEnabled": true
          },
          "android": {
            "enableMinifyInReleaseBuilds": true,
            "newArchEnabled": true
          }
        }
      ]
    ]
  }
}
```

#### Notification Configuration

```json
{
  "expo": {
    "plugins": [
      [
        "expo-notifications",
        {
          "icon": "./assets/notification-icon.png",
          "color": "#ffffff"
        }
      ]
    ]
  }
}
```

### Step 6: Handle Platform-Specific Changes

#### iOS Edge-to-Edge Layout

Update your layout components to handle edge-to-edge:

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

#### Android Edge-to-Edge

Edge-to-edge is now always enabled. Update your layouts accordingly:

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

### Step 7: Test Your Application

#### Development Testing

```bash
# Clear all caches
npx expo start --clear

# Test on iOS
npx expo run:ios

# Test on Android
npx expo run:android

# Test on web
npx expo start --web
```

#### Production Testing

```bash
# Build for production
npx expo build:ios
npx expo build:android

# Or use EAS Build
eas build --platform ios
eas build --platform android
```

## 🔧 Advanced Migration Scenarios

### Scenario 1: Using Nativewind

If you're using Nativewind, you need to stay on Reanimated v3:

```bash
# Install Reanimated v3
npx expo install react-native-reanimated@~3.0.0

# Disable New Architecture
```

```json
{
  "expo": {
    "plugins": [
      [
        "expo-build-properties",
        {
          "ios": {
            "newArchEnabled": false
          },
          "android": {
            "newArchEnabled": false
          }
        }
      ]
    ]
  }
}
```

### Scenario 2: Custom Metro Configuration

If you have custom Metro configuration, update import paths:

```javascript
// metro.config.js
// Old
const { ... } = require('metro/src/...');

// New
const { ... } = require('metro/private/...');
```

### Scenario 3: Using JSC

If you're using JavaScriptCore, migrate to Hermes:

```json
{
  "expo": {
    "jsEngine": "hermes"
  }
}
```

Or use the community JSC library:

```bash
npm install @react-native-community/javascriptcore
```

## 🐛 Troubleshooting Common Issues

### Build Failures

```bash
# Clear all caches and rebuild
npx expo prebuild --clean
rm -rf node_modules
npm install
npx expo run:ios
```

### TypeScript Errors

```bash
# Update TypeScript configuration
npm install --save-dev typescript@~5.9.2 @types/react@~19.1.0
```

### Metro Cache Issues

```bash
# Clear Metro cache
npx expo start --clear
```

### Reanimated Issues

```bash
# Clear Reanimated cache
npx expo start --clear
# Restart development server
```

## 📊 Post-Migration Checklist

### Functionality Testing

- [ ] **App launches** without crashes
- [ ] **Navigation works** correctly
- [ ] **Animations function** properly
- [ ] **API calls work** as expected
- [ ] **File system operations** work
- [ ] **Notifications** function correctly
- [ ] **Edge-to-edge layout** displays properly
- [ ] **Performance** is acceptable

### Platform-Specific Testing

#### iOS
- [ ] **Liquid Glass effects** work (if implemented)
- [ ] **Safe area** handling is correct
- [ ] **Status bar** integration works
- [ ] **App icons** display properly

#### Android
- [ ] **Edge-to-edge** layout works
- [ ] **Navigation gestures** function
- [ ] **Material You** integration works
- [ ] **Adaptive icons** display correctly

### Performance Verification

- [ ] **Build times** are improved
- [ ] **App startup** is faster
- [ ] **Memory usage** is reasonable
- [ ] **Animations** are smooth

## 🚨 Rollback Plan

If you encounter critical issues, you can rollback:

```bash
# Revert to previous SDK
npx expo install expo@~53.0.0 --fix

# Restore previous configuration
git checkout HEAD~1 app.json

# Clear caches
npx expo start --clear
```

## 📚 Additional Resources

- [Breaking Changes Guide](./breaking-changes.md)
- [Known Issues](./known-issues.md)
- [Performance Guide](./features/performance.md)
- [Expo Discord](https://discord.gg/expo) - Community support
- [GitHub Issues](https://github.com/expo/expo/issues) - Report bugs

## 🎯 Next Steps

After successful migration:

1. **Test thoroughly** on all target devices
2. **Monitor performance** and user feedback
3. **Update documentation** for your team
4. **Plan for stable release** when available
5. **Report any issues** to the Expo team

---

*This migration guide covers the essential steps for upgrading to Expo SDK 54 Beta. For specific issues, refer to the breaking changes and known issues documentation.*
