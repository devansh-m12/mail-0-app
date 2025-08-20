# Known Issues & Workarounds

*Expo SDK 54 Beta - Current Known Issues*

## 🐛 Critical Issues

### 1. iOS 18.4+ Simulator Hotkeys

**Issue:** Hotkeys for reloading and opening the dev menu in iOS 18.4+ simulators are not reliably firing.

**Status:** Under investigation by the Expo team

**Workaround:**
- Use the interactive prompt in Expo CLI to perform both actions
- Press `r` in the terminal to reload
- Press `m` in the terminal to open dev menu

**Affected Versions:**
- iOS Simulator 18.4+
- Expo CLI latest

**Temporary Solution:**
```bash
# Instead of using hotkeys, use CLI commands
npx expo start --clear  # Clear cache and restart
```

### 2. Release Build Store Submission

**Issue:** Apps compiled in Release using precompiled XCFrameworks cannot be submitted to the App Store until React Native 0.81.1.

**Status:** Will be resolved in React Native 0.81.1 (week of August 25)

**Workaround:**
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

**Affected Scenarios:**
- TestFlight submissions
- App Store submissions
- Release builds with precompiled XCFrameworks

## ⚠️ High Priority Issues

### 3. Expo CLI Live Bindings

**Issue:** Expo CLI's Live Bindings implementation usually prevents require cycles from failing, but if the entire cycle only consists of default-imports, this will still fail.

**Status:** Fix in progress

**Workaround:**
```typescript
// Instead of default imports in circular dependencies
import MyComponent from './MyComponent';

// Use named imports
import { MyComponent } from './MyComponent';
```

**Example Problematic Code:**
```typescript
// fileA.ts
export default function ComponentA() {
  return <ComponentB />;
}

// fileB.ts
export default function ComponentB() {
  return <ComponentA />;
}
```

**Solution:**
```typescript
// fileA.ts
export function ComponentA() {
  return <ComponentB />;
}

// fileB.ts
export function ComponentB() {
  return <ComponentA />;
}
```

### 4. Icon Composer Validation

**Issue:** Expo CLI and Expo Tools for VSCode will warn when you provide iOS icons generated from the Icon Composer (.icon files).

**Status:** Resolution coming shortly

**Impact:** Non-blocking - functionality works correctly, but warnings appear

**Workaround:** Ignore the warnings for now, as the icons will work properly despite the validation warnings.

## 🔧 Medium Priority Issues

### 5. Reanimated v4 Compatibility

**Issue:** Some third-party libraries may not be compatible with Reanimated v4 and react-native-worklets.

**Status:** Library-dependent

**Known Incompatible Libraries:**
- Nativewind (requires Reanimated v3)
- Some custom animation libraries

**Workaround:**
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

**Alternative:**
```bash
# Downgrade to Reanimated v3
npx expo install react-native-reanimated@~3.0.0
```

### 6. Metro Import Path Changes

**Issue:** Libraries that import Metro internals using `metro/src/..` paths may break due to the new `metro/private/..` requirement.

**Status:** Library-dependent

**Affected Libraries:**
- Custom Metro configurations
- Build tools that import Metro internals
- Some bundler plugins

**Workaround:**
1. Update libraries to latest versions
2. Report issues to library maintainers
3. Use alternative libraries if available

**Example Error:**
```
Error: Cannot find module 'metro/src/...'
```

**Solution:**
```javascript
// Old (broken)
const { ... } = require('metro/src/...');

// New (working)
const { ... } = require('metro/private/...');
```

## 📱 Platform-Specific Issues

### 7. iOS Liquid Glass Effects

**Issue:** Liquid Glass effects may not render correctly on older iOS devices or simulators.

**Status:** Expected behavior

**Affected Devices:**
- iOS < 26
- Older hardware with limited GPU capabilities

**Workaround:**
```typescript
import { Platform } from 'react-native';

const useLiquidGlass = () => {
  const isSupported = Platform.OS === 'ios' && Platform.Version >= 26;
  
  return {
    glassEffect: isSupported ? glassEffect : null,
    buttonVariant: isSupported ? 'glass' : 'default'
  };
};
```

### 8. Android Edge-to-Edge Layout

**Issue:** Some existing apps may experience layout issues when edge-to-edge is automatically enabled.

**Status:** Migration issue

**Common Problems:**
- Content extending under system UI
- Navigation bar contrast issues
- Status bar overlap

**Workaround:**
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

## 🔄 Updates & EAS Issues

### 9. Update Download Progress

**Issue:** The `downloadProgress` property in `useUpdates()` may not update consistently on all devices.

**Status:** Under investigation

**Workaround:**
```typescript
import { useUpdates } from 'expo-updates';

export default function UpdateComponent() {
  const { downloadProgress, isDownloading } = useUpdates();
  
  return (
    <View>
      {isDownloading && (
        <ProgressBar 
          progress={downloadProgress?.totalBytesDownloaded / downloadProgress?.totalBytesToDownload || 0}
          indeterminate={!downloadProgress}
        />
      )}
    </View>
  );
}
```

### 10. EAS Build with Xcode 26

**Issue:** EAS Build may fail when using Xcode 26 beta image if the image is not properly configured.

**Status:** Configuration issue

**Workaround:**
```json
{
  "build": {
    "development": {
      "ios": {
        "image": "macos-sequoia-15.5-xcode-26.0"
      }
    },
    "production": {
      "ios": {
        "image": "macos-sequoia-15.5-xcode-26.0"
      }
    }
  }
}
```

**Alternative:**
```json
{
  "build": {
    "development": {
      "ios": {
        "image": "macos-sequoia-15.5-xcode-16.1"
      }
    }
  }
}
```

## 🧭 Router Issues

### 11. Native Tabs Unstable API

**Issue:** Native tabs API is marked as unstable and may change during the beta period.

**Status:** Expected for beta

**Workaround:**
```typescript
// Use with caution and prepare for API changes
import { unstable_enableNativeTabs } from 'expo-router';

// Wrap in try-catch for safety
try {
  unstable_enableNativeTabs();
} catch (error) {
  console.warn('Native tabs not available:', error);
}
```

### 12. Link Preview Performance

**Issue:** Link previews may cause performance issues on slower devices or with complex content.

**Status:** Performance optimization in progress

**Workaround:**
```typescript
// Implement lazy loading for link previews
const [showPreview, setShowPreview] = useState(false);

<Link href="/some-route" onPress={() => setShowPreview(true)}>
  {showPreview && <LinkPreview />}
</Link>
```

## 🔧 Development Issues

### 13. TypeScript Errors

**Issue:** Some TypeScript errors may appear after upgrading to SDK 54 due to stricter type checking.

**Status:** Expected during migration

**Common Issues:**
- Missing type definitions
- Stricter null checking
- Updated API signatures

**Workaround:**
```json
{
  "compilerOptions": {
    "strict": false,
    "noImplicitAny": false
  }
}
```

**Better Solution:**
```typescript
// Fix type issues properly
const [data, setData] = useState<MyType | null>(null);

// Use proper type guards
if (data && data.property) {
  // Safe to use data.property
}
```

### 14. Metro Cache Issues

**Issue:** Metro cache may become corrupted after upgrading to SDK 54.

**Status:** Cache-related

**Workaround:**
```bash
# Clear all caches
npx expo start --clear
rm -rf node_modules
npm install
npx expo prebuild --clean
```

## 📊 Reporting Issues

### How to Report

1. **Create GitHub issue** with appropriate template
2. **Include SDK 54 beta tag** in the title
3. **Provide minimal reproducible example**
4. **Share error logs** and stack traces
5. **Mention your development environment**

### Issue Template

```markdown
## Issue Description
Brief description of the issue

## Steps to Reproduce
1. Step 1
2. Step 2
3. Step 3

## Expected Behavior
What should happen

## Actual Behavior
What actually happens

## Environment
- Expo SDK: 54.0.0-preview.4
- React Native: 0.81.0
- Platform: iOS/Android
- Device: iPhone 15 Pro / Pixel 8

## Error Logs
Paste error logs here

## Minimal Reproducible Example
Link to minimal example or code snippet
```

## 🔄 Issue Status Updates

### Resolved Issues

- None yet (beta is new)

### In Progress

- iOS 18.4+ simulator hotkeys
- Expo CLI Live Bindings
- Icon Composer validation

### Known Limitations

- Some features require Xcode 26 beta
- Liquid Glass effects limited to iOS 26+
- Native tabs API is unstable

---

*This document will be updated as issues are resolved and new ones are discovered during the beta period.*
