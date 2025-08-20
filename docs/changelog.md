# Complete Expo SDK 54 Beta Changelog

*Released: August 19, 2025*

## 🎯 Major Framework Updates

### React Native 0.81
- **React 19.1.0** integration
- **Precompiled React Native for iOS** with XCFrameworks
- **Android 16 (API 36)** targeting
- **Edge-to-edge** always enabled on Android
- **Predictive back gesture** enabled by default in new projects

### React 19.1.0
- Latest React features and improvements
- Enhanced performance and developer experience
- Better TypeScript support

## 📱 iOS 26 & Liquid Glass Support

### Liquid Glass Icons
- **Icon Composer app** support for creating `.icon` files
- **macOS-only** Icon Composer app (required for UI)
- **Automatic fallback** for iOS ≤ 19
- **app.json configuration**:
  ```json
  {
    "ios": {
      "icon": "./assets/app.icon"
    }
  }
  ```

### Liquid Glass Effects
- **Glass effect modifiers** in Expo UI
- **Button variants**: `glassProminent`, `glass`
- **Glass container effects** (coming soon during beta)
- **Swift UI integration** with `@expo/ui/swift-ui`

### Example Liquid Glass Implementation
```typescript
import { Host, HStack, Text } from "@expo/ui/swift-ui";
import { glassEffect, padding } from '@expo/ui/build/swift-ui/modifiers';

<Host matchContents>
  <HStack
    alignment='center'
    modifiers={[
      padding({ all: 16 }),
      glassEffect({
        glass: { variant: 'regular' },
      }),
    ]}>
    <Text>Regular glass effect</Text>
  </HStack>
</Host>
```

### Button Variants
```typescript
import { Button, Host, VStack } from "@expo/ui/swift-ui";

<Host matchContents>
  <VStack spacing={8}>
    <Button
      variant="glassProminent"
      color="orange"
      systemImage="questionmark.circle"
    >
      Help & support
    </Button>
    
    <Button variant="glass" systemImage="person">
      View profile
    </Button>
  </VStack>
</Host>
```

## 🤖 Android 16 (API 36) Support

### Edge-to-Edge Always Enabled
- **Cannot be disabled** in SDK 54
- **react-native-edge-to-edge** no longer a dependency
- **Built into React Native** by Mathieu Acthernoene
- **Manual configuration** still available if needed

### Predictive Back Gesture
- **Enabled by default** in new projects
- **Disabled by default** in existing projects
- **Configuration**: `android.predictiveBackGestureEnabled` in app.json
- **Future plans**: Enable by default in SDK 55

### Navigation Bar Contrast
- **New property**: `androidNavigationBar.enforceContrast`
- **Replaces** `react-native-edge-to-edge` plugin configuration
- **No additional dependencies** required

## ⚡ Performance Improvements

### Precompiled React Native for iOS
- **10x faster build times**: 120s → 10s (M4 Max)
- **XCFrameworks** shipped alongside source
- **Swift Package Manager** compatibility
- **Note**: Release builds can't be submitted to store until 0.81.1 (week of August 25)

### Build Configuration
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

### React Native Owner Stacks
- **Enabled by default**
- **Improved error reporting** in React components
- **Better debugging** for humans and AI agents

### Unhandled Promise Rejections
- **Now logged as errors**
- **Aligns with web browser behavior**
- **Surfaces existing issues** that were previously silent

## 🔄 Expo Updates & EAS Update

### Runtime Header Overrides
- **New method**: `Updates.setUpdateRequestHeadersOverride()`
- **Runtime configuration** without build flags
- **Immediate effect** - no app restart required
- **Safe for production** use

### Download Progress Tracking
- **useUpdates() hook** now includes `downloadProgress`
- **Progress bar support** for asset downloads
- **Creative scenarios** enabled

### Reload Screen Options
- **Updates.reloadAsync()** accepts `reloadScreenOptions`
- **Better UX** than empty content flash
- **Development testing** with `Updates.showReloadScreen()`

### Example Reload Configuration
```typescript
import * as Updates from 'expo-updates';

Updates.reloadAsync({
  reloadScreenOptions: {
    backgroundColor: '#fa0000',
    image: require('./assets/images/reload.jpg'),
    imageResizeMode: 'cover',
    imageFullScreen: true,
    fade: true
  },
});
```

## 🧭 Expo Router v6

### Link Previews & Transitions
- **iOS view controller previews**
- **Context menu items**
- **Quick actions** and information
- **Enhanced transitions**

### Native Tabs (Beta)
- **iOS and Android** native tab implementation
- **Liquid glass tabs** support
- **Automatic scrolling** on tab press
- **Native effects** and animations
- **Unstable API** - subject to breaking changes

### Modal Behavior
- **iPad and iPhone** behavior emulation on web
- **Modal-like attributes** instead of full-screen pages

### Server Middleware (Experimental)
- **Pre-request code execution**
- **Route middleware** support
- **Enhanced server-side capabilities**

### Runtime Enhancements
- **TextDecoderStream** and **TextEncoderStream** added
- **Better fetch streaming** support
- **AI integration** improvements

## 🔧 Expo Autolinking Improvements

### Transitive Dependencies
- **React Native libraries** now autolinked transitively
- **Expo modules** style autolinking
- **Reduced manual configuration**

### Sticky Resolution (Experimental)
- **EXPO_USE_STICKY_RESOLVER=1** to enable
- **Prevents mismatches** between native and JS modules
- **Dependency conflict** resolution
- **Duplicate prevention**

## ⚠️ Deprecations

### expo-build-properties
- `enableProguardInReleaseBuilds` → `enableMinifyInReleaseBuilds`

### React Native SafeAreaView
- **Deprecated**: Use `react-native-safe-area-context` instead
- **More powerful alternative**
- **Widely adopted** in the community

### Notification Configuration
- **app.json notification field** deprecated
- **Use expo-notifications config plugin** instead

## 🚨 Breaking Changes

### First-party JSC Support Removed
- **React Native 0.81** no longer provides built-in JSC
- **Community alternative**: [react-native-community/javascriptcore](https://github.com/react-native-community/javascriptcore)
- **No config plugin** available yet
- **Manual native project modification** required

### Reanimated v4
- **react-native-worklets** integration
- **New Architecture only** support
- **Migration guide** available
- **babel.config.js** configuration handled by babel-preset-expo
- **Legacy Architecture**: Continue using v3
- **Nativewind compatibility**: Requires v3

### Metro Internal Imports
- **metro@0.83** internal import changes
- **metro/src/..** → **metro/private/..**
- **Library updates** may be required
- **Most app developers** unaffected

### expo-file-system API Changes
- **Legacy API**: `expo-file-system/legacy`
- **New API**: `expo-file-system` (formerly `expo-file-system/next`)
- **Migration path**: Update imports to `/legacy` first, then migrate to new API

### expo-notifications
- **Deprecated function exports** removed
- **Updated API** usage required

## 🛠️ Tool Version Requirements

### Xcode
- **Minimum**: 16.1
- **Xcode 26 beta** support on EAS Build
- **Image**: `macos-sequoia-15.5-xcode-26.0`

### Node.js
- **Minimum**: 20.19.x
- **Enhanced performance** and features

## 🐛 Known Issues

### iOS 18.4+ Simulator Hotkeys
- **Reload and dev menu** hotkeys not reliably firing
- **Workaround**: Use Expo CLI interactive prompt
- **Under investigation**

### Expo CLI Live Bindings
- **Require cycles** with default-imports may fail
- **Fix in progress**

### Release Build Store Submission
- **Precompiled XCFrameworks** can't be submitted until 0.81.1
- **Workaround**: Set `ios.buildReactNativeFromSource` to `false`
- **Resolution**: Week of August 25

### Icon Composer Validation
- **Expo CLI warnings** for .icon files
- **Non-blocking** - usage unaffected
- **Resolution**: Coming shortly

## 🔄 React Compiler

### Default Status
- **Enabled by default** in SDK 54
- **Ready for most apps**
- **May change** based on beta feedback

### Benefits
- **Enhanced performance**
- **Better optimization**
- **Improved developer experience**

## 📊 Testing Recommendations

### What to Test
1. **Upgrade existing apps** with `npx expo install expo@next --fix`
2. **Build with EAS Build** for production testing
3. **Prebuild locally**: `npx expo prebuild --clean`
4. **Run on devices**: `npm run ios` and `npm run android`
5. **Test new features**: Liquid Glass, native tabs, updates

### Issue Reporting
- **Create GitHub issues** with appropriate templates
- **Include minimal reproducible examples**
- **Mention SDK 54 beta** for prioritization
- **Helpful testers** will be recognized in final release notes

---

*This changelog is based on the official Expo SDK 54 Beta release notes and will be updated as the beta progresses.*
