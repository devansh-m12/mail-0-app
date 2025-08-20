# iOS 26 & Liquid Glass Features

*Expo SDK 54 Beta - iOS 26 Support*

## 🎨 Liquid Glass Overview

Liquid Glass is iOS 26's new design system that introduces glass-like visual effects throughout the operating system. Expo SDK 54 provides comprehensive support for these features, allowing you to create modern, visually appealing apps that integrate seamlessly with iOS 26.

## 📱 Liquid Glass Icons

### Icon Composer App

The Icon Composer is a macOS-only application that allows you to create sophisticated app icons with Liquid Glass effects.

#### Requirements
- **macOS only** - The Icon Composer app is not available on other platforms
- **Xcode 26 beta** - Required for full iOS 26 feature support
- **EAS Build**: Use `macos-sequoia-15.5-xcode-26.0` image

#### Creating Liquid Glass Icons

1. **Download Icon Composer** from Apple Developer portal
2. **Design your icon** using the visual editor
3. **Export as .icon file** - This contains the icon data
4. **Place in your project** (e.g., `./assets/app.icon`)

#### Configuration

```json
{
  "expo": {
    "ios": {
      "icon": "./assets/app.icon"
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      }
    }
  }
}
```

#### Fallback Behavior

- **iOS 26+**: Uses Liquid Glass icon
- **iOS ≤ 19**: Automatic fallback to traditional icon format
- **Android**: Uses adaptive icon configuration

### Icon File Format

The `.icon` file contains JSON data that describes the Liquid Glass icon:

```json
{
  "images": [
    {
      "filename": "icon-20@2x.png",
      "idiom": "iphone",
      "scale": "2x",
      "size": "20x20"
    }
    // ... more sizes
  ],
  "info": {
    "author": "xcode",
    "version": 1
  }
}
```

## 🪟 Liquid Glass Effects

### Glass Effect Modifiers

Expo UI provides Swift UI modifiers for creating Liquid Glass effects in your app.

#### Basic Glass Effect

```typescript
import { Host, HStack, Text } from "@expo/ui/swift-ui";
import { glassEffect, padding } from '@expo/ui/build/swift-ui/modifiers';

export default function GlassExample() {
  return (
    <Host matchContents>
      <HStack
        alignment='center'
        modifiers={[
          padding({ all: 16 }),
          glassEffect({
            glass: {
              variant: 'regular',
            },
          }),
        ]}>
        <Text>Regular glass effect</Text>
      </HStack>
    </Host>
  );
}
```

#### Glass Effect Variants

```typescript
// Regular glass effect
glassEffect({
  glass: { variant: 'regular' }
})

// Prominent glass effect
glassEffect({
  glass: { variant: 'prominent' }
})

// Ultra-thin glass effect
glassEffect({
  glass: { variant: 'ultraThin' }
})
```

### Button Variants

Liquid Glass buttons provide beautiful, native-looking interactive elements.

#### Glass Prominent Button

```typescript
import { Button, Host, VStack } from "@expo/ui/swift-ui";

export default function GlassButtons() {
  return (
    <Host matchContents>
      <VStack spacing={8}>
        <Button
          variant="glassProminent"
          color="orange"
          systemImage="questionmark.circle"
          onPress={() => console.log('Help pressed')}
        >
          Help & support
        </Button>
      </VStack>
    </Host>
  );
}
```

#### Glass Button

```typescript
<Button 
  variant="glass" 
  systemImage="person"
  onPress={() => console.log('Profile pressed')}
>
  View profile
</Button>
```

#### Button Properties

| Property | Type | Description |
|----------|------|-------------|
| `variant` | `"glassProminent" \| "glass"` | Button style variant |
| `color` | `string` | Button color (optional) |
| `systemImage` | `string` | SF Symbol name |
| `onPress` | `() => void` | Press handler |

### Glass Container Effects

*Coming soon during the beta period*

Glass container effects will allow you to create entire containers with Liquid Glass styling.

```typescript
// Future API (subject to change)
import { GlassContainerEffect } from '@expo/ui/swift-ui';

<GlassContainerEffect
  variant="regular"
  blurRadius={20}
  opacity={0.8}
>
  {/* Your content */}
</GlassContainerEffect>
```

## 🧭 Native Tabs with Liquid Glass

Expo Router v6 introduces native tabs that support Liquid Glass effects.

### Enabling Native Tabs

```typescript
// app/(tabs)/_layout.tsx
import { Tabs } from 'expo-router';
import { unstable_enableNativeTabs } from 'expo-router';

// Enable native tabs (unstable API)
unstable_enableNativeTabs();

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        // Native tabs will automatically use Liquid Glass on iOS 26
        tabBarStyle: {
          // Custom styling if needed
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />
        }}
      />
      {/* More tabs */}
    </Tabs>
  );
}
```

### Tab Features

- **Liquid Glass styling** on iOS 26
- **Automatic scrolling** on tab press
- **Native animations** and transitions
- **System integration** with iOS design language

## 🎯 Best Practices

### Design Guidelines

1. **Use sparingly** - Liquid Glass effects work best when used strategically
2. **Consider contrast** - Ensure text remains readable over glass effects
3. **Test on different backgrounds** - Glass effects vary based on content behind them
4. **Follow iOS guidelines** - Match Apple's design patterns

### Performance Considerations

1. **Glass effects are GPU-accelerated** - Generally performant
2. **Avoid excessive use** - Too many glass elements can impact performance
3. **Test on older devices** - Effects may behave differently on older hardware

### Accessibility

1. **Provide alternatives** - Some users may prefer reduced motion
2. **Test with VoiceOver** - Ensure glass elements are properly labeled
3. **Consider contrast ratios** - Glass effects may affect readability

## 🔧 Development Setup

### Required Tools

```bash
# Install Xcode 26 beta (if available)
# Or use EAS Build with Xcode 26
```

### EAS Build Configuration

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

### Testing

1. **iOS Simulator** - Test with iOS 26 simulator
2. **Physical Device** - Test on iOS 26 device for best results
3. **Fallback Testing** - Verify behavior on older iOS versions

## 🐛 Known Issues

### Icon Composer Validation

- **Expo CLI warnings** for .icon files
- **Non-blocking** - functionality works correctly
- **Resolution**: Coming shortly

### Xcode 26 Beta Requirements

- **Required for full feature support**
- **EAS Build**: Use specified image
- **Local development**: Install Xcode 26 beta if available

## 📚 Additional Resources

- [Apple Icon Composer Documentation](https://developer.apple.com/documentation/xcode/icon-composer)
- [iOS 26 Design Guidelines](https://developer.apple.com/design/human-interface-guidelines/ios)
- [Expo UI Documentation](https://docs.expo.dev/ui/)
- [Swift UI Modifiers Reference](https://developer.apple.com/documentation/swiftui/viewmodifier)

---

*This documentation covers iOS 26 and Liquid Glass features available in Expo SDK 54 Beta. Features may evolve during the beta period.*
