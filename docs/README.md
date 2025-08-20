# Expo SDK 54 Beta Documentation

## Overview

This documentation covers the comprehensive changelog and features of **Expo SDK 54 Beta**, which was released on August 19, 2025. This is a major release that includes React Native 0.81 and React 19.1.0.

## Quick Navigation

- [📋 Complete Changelog](./changelog.md) - Full detailed changelog
- [🚀 Major Features](./features/) - Detailed feature documentation
- [⚠️ Breaking Changes](./breaking-changes.md) - All breaking changes and migration guides
- [🔧 Migration Guide](./migration-guide.md) - Step-by-step upgrade instructions
- [🐛 Known Issues](./known-issues.md) - Current known issues and workarounds
- [📱 iOS 26 & Liquid Glass](./features/ios-26-liquid-glass.md) - iOS 26 specific features
- [🤖 Android 16](./features/android-16.md) - Android 16 specific features
- [🔄 Expo Updates](./features/expo-updates.md) - Updates and EAS Update features
- [🧭 Expo Router](./features/expo-router.md) - Router v6 features
- [⚡ Performance](./features/performance.md) - Performance improvements

## Key Highlights

### 🎯 Major Updates
- **React Native 0.81** with React 19.1.0
- **iOS 26 support** with Liquid Glass icons and effects
- **Android 16 (API 36)** targeting with edge-to-edge enabled by default
- **Precompiled React Native for iOS** - 10x faster build times
- **Expo Router v6** with native tabs and link previews

### 🚀 Performance Improvements
- Precompiled XCFrameworks reduce iOS build times from ~120s to ~10s
- React Native owner stacks enabled by default
- Better error handling and promise rejection logging

### 🎨 New UI Features
- Liquid Glass effects and button variants
- iOS 26 Icon Composer support
- Native tabs on iOS and Android
- Enhanced link previews and transitions

### 🔧 Developer Experience
- Expo Autolinking improvements
- React Compiler enabled by default
- Better TypeScript support
- Enhanced debugging capabilities

## Beta Period

**Duration**: Approximately 2 weeks from August 19, 2025
**Status**: Currently in beta testing phase

During the beta period, the Expo team will:
- Continuously release fixes and improvements
- Address breaking changes as needed
- Host office hours on Discord for testing support

## Getting Started

### For New Projects
```bash
# npm
npx create-expo-app@latest --template default@next

# bun
bun create expo-app --template default@next

# pnpm
pnpm create expo-app --template default@next

# yarn
yarn create expo-app --template default@next
```

### For Existing Projects
```bash
npx expo install expo@next --fix
```

## Testing the Beta

1. **Upgrade your app** with the beta version
2. **Test on physical devices** and simulators
3. **Build with EAS Build** to test production builds
4. **Report issues** on GitHub with the SDK 54 beta tag

## Support

- [GitHub Issues](https://github.com/expo/expo/issues) - Report bugs and regressions
- [Discord](https://discord.gg/expo) - Join beta testing discussions
- [Documentation](https://docs.expo.dev) - Official Expo documentation

---

*Last updated: August 19, 2025*
*Source: [Expo SDK 54 Beta Changelog](https://expo.dev/changelog/sdk-54-beta)*
