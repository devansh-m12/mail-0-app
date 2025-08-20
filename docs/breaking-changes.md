# Breaking Changes & Migration Guide

*Expo SDK 54 Beta - August 19, 2025*

## 🚨 Critical Breaking Changes

### 1. First-party JSC Support Removed

**What Changed:**
React Native 0.81 no longer provides built-in JavaScriptCore (JSC) support.

**Impact:**
- Apps using JSC will need to migrate to an alternative
- Native projects may require manual modification

**Migration Options:**

#### Option A: Use Community JSC (Recommended)
```bash
npm install @react-native-community/javascriptcore
```

**Note:** This community library doesn't yet provide a config plugin, so you'll need to:
1. Write your own config plugin, or
2. Modify your native projects directly

#### Option B: Switch to Hermes (Recommended)
```json
{
  "expo": {
    "jsEngine": "hermes"
  }
}
```

**Benefits:**
- Better performance
- Smaller bundle size
- Official React Native recommendation

### 2. Reanimated v4 - New Architecture Only

**What Changed:**
- Reanimated v4 introduces `react-native-worklets`
- Only supports the New Architecture
- Requires migration from v3

**Migration Steps:**

#### Step 1: Update Dependencies
```bash
npx expo install react-native-reanimated@~4.0.2 react-native-worklets@~0.4.1
```

#### Step 2: Enable New Architecture
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

#### Step 3: Update Babel Configuration
**Note:** `babel-preset-expo` handles this automatically in SDK 54.

#### Step 4: Update Imports
```typescript
// Old (v3)
import { runOnJS } from 'react-native-reanimated';

// New (v4)
import { runOnJS } from 'react-native-worklets';
```

**If You Can't Migrate Yet:**
- Continue using Reanimated v3
- Set `newArchEnabled: false` in your build properties
- Note: Nativewind requires v3 for now

### 3. Metro Internal Imports Changed

**What Changed:**
- `metro@0.83` requires `metro/private/..` instead of `metro/src/..`
- Internal imports are no longer covered by semver

**Impact:**
- Libraries importing Metro internals may break
- Most app developers unaffected

**Migration:**
1. Update libraries to latest versions
2. Report issues to library maintainers if problems persist

### 4. expo-file-system API Changes

**What Changed:**
- Legacy API moved to `expo-file-system/legacy`
- New API is now the default export
- Former `expo-file-system/next` is now `expo-file-system`

**Migration Path:**

#### Quick Migration (Same Behavior)
```typescript
// Old
import * as FileSystem from 'expo-file-system';

// New
import * as FileSystem from 'expo-file-system/legacy';
```

#### Gradual Migration to New API
```typescript
// New API (recommended)
import * as FileSystem from 'expo-file-system';
```

**New API Benefits:**
- Better TypeScript support
- Improved error handling
- More consistent API design

### 5. expo-notifications Deprecated Exports

**What Changed:**
- Deprecated function exports removed
- Updated API required

**Migration:**
```typescript
// Old (deprecated)
import { getBadgeCountAsync } from 'expo-notifications';

// New
import * as Notifications from 'expo-notifications';
const badgeCount = await Notifications.getBadgeCountAsync();
```

## ⚠️ Deprecations

### 1. expo-build-properties Field Rename

**What Changed:**
```json
// Old (deprecated)
{
  "expo": {
    "plugins": [
      [
        "expo-build-properties",
        {
          "android": {
            "enableProguardInReleaseBuilds": true
          }
        }
      ]
    ]
  }
}

// New
{
  "expo": {
    "plugins": [
      [
        "expo-build-properties",
        {
          "android": {
            "enableMinifyInReleaseBuilds": true
          }
        }
      ]
    ]
  }
}
```

### 2. React Native SafeAreaView

**What Changed:**
- `<SafeAreaView>` from React Native is deprecated
- Use `react-native-safe-area-context` instead

**Migration:**
```typescript
// Old (deprecated)
import { SafeAreaView } from 'react-native';

// New
import { SafeAreaView } from 'react-native-safe-area-context';
```

### 3. Notification Configuration

**What Changed:**
- `notification` field in app.json deprecated
- Use `expo-notifications` config plugin instead

**Migration:**
```json
// Old (deprecated)
{
  "expo": {
    "notification": {
      "icon": "./assets/notification-icon.png"
    }
  }
}

// New
{
  "expo": {
    "plugins": [
      [
        "expo-notifications",
        {
          "icon": "./assets/notification-icon.png"
        }
      ]
    ]
  }
}
```

## 🔧 Migration Checklist

### Before Upgrading
- [ ] Backup your project
- [ ] Check current React Native version
- [ ] Review all native dependencies
- [ ] Test on both iOS and Android

### During Upgrade
- [ ] Run `npx expo install expo@next --fix`
- [ ] Update `app.json` configuration
- [ ] Test build process
- [ ] Check for deprecation warnings

### After Upgrade
- [ ] Test all app functionality
- [ ] Verify performance
- [ ] Check for new errors in console
- [ ] Test on physical devices

## 🛠️ Tool Requirements

### Xcode
- **Minimum**: 16.1
- **For iOS 26 features**: Xcode 26 beta
- **EAS Build**: Use `macos-sequoia-15.5-xcode-26.0`

### Node.js
- **Minimum**: 20.19.x
- **Recommended**: Latest LTS

### Android Studio
- **API 36** targeting support
- **Edge-to-edge** enabled by default

## 🐛 Common Issues & Solutions

### Issue: Build Fails After Upgrade
**Solution:**
```bash
npx expo prebuild --clean
rm -rf node_modules
npm install
```

### Issue: Reanimated Animations Not Working
**Solution:**
1. Ensure New Architecture is enabled
2. Check worklet imports
3. Verify babel configuration

### Issue: Metro Import Errors
**Solution:**
1. Update all dependencies
2. Clear Metro cache: `npx expo start --clear`
3. Report issues to library maintainers

### Issue: iOS Build Times Still Slow
**Solution:**
```json
{
  "expo": {
    "plugins": [
      [
        "expo-build-properties",
        {
          "ios": {
            "buildReactNativeFromSource": false
          }
        }
      ]
    ]
  }
}
```

## 📞 Getting Help

### Resources
- [Expo Discord](https://discord.gg/expo) - Real-time support
- [GitHub Issues](https://github.com/expo/expo/issues) - Bug reports
- [Migration Helper](https://docs.expo.dev/guides/migrating-to-sdk-54/) - Official guide

### Reporting Issues
- Include SDK 54 beta tag
- Provide minimal reproducible example
- Share error logs and stack traces
- Mention your development environment

---

*This migration guide will be updated as the beta progresses and new issues are discovered.*
