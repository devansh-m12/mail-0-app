# Styling Guide

## Overview
This document defines the design system for the email client interface, including colors, typography, spacing, and component-specific styles.

## Design Tokens

### Colors

#### Primary Colors
```typescript
export const COLORS = {
  // Background Colors
  background: '#FFFFFF',
  surface: '#F8F9FA',
  
  // Text Colors
  textPrimary: '#000000',
  textSecondary: '#333333',
  textTertiary: '#6B7280',
  textMuted: '#9CA3AF',
  
  // Accent Colors
  accentBlue: '#3B82F6',
  accentPurple: '#8B5CF6',
  accentOrange: '#F97316',
  accentGreen: '#059669',
  accentRed: '#DC2626',
  
  // Status Colors
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#3B82F6',
  
  // Border Colors
  borderLight: '#E5E7EB',
  borderMedium: '#D1D5DB',
  borderDark: '#9CA3AF',
  
  // Shadow Colors
  shadowLight: 'rgba(0, 0, 0, 0.05)',
  shadowMedium: 'rgba(0, 0, 0, 0.1)',
  shadowDark: 'rgba(0, 0, 0, 0.15)',
} as const;
```

#### Profile Picture Colors
```typescript
export const PROFILE_COLORS = {
  blue: '#3B82F6',
  purple: '#8B5CF6',
  orange: '#F97316',
  black: '#000000',
  gray: '#6B7280',
  red: '#DC2626',
  green: '#059669',
  yellow: '#EAB308',
} as const;
```

#### File Type Colors
```typescript
export const FILE_TYPE_COLORS = {
  pptx: '#DC2626', // Red
  docx: '#2563EB', // Blue
  xlsx: '#059669', // Green
  pdf: '#DC2626',  // Red
  jpg: '#8B5CF6',  // Purple
  png: '#8B5CF6',  // Purple
  txt: '#6B7280',  // Gray
  zip: '#F59E0B',  // Amber
} as const;
```

### Typography

#### Font Sizes
```typescript
export const FONT_SIZES = {
  xs: 12,
  sm: 14,
  base: 16,
  lg: 18,
  xl: 20,
  '2xl': 24,
  '3xl': 28,
  '4xl': 32,
} as const;
```

#### Font Weights
```typescript
export const FONT_WEIGHTS = {
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
} as const;
```

#### Line Heights
```typescript
export const LINE_HEIGHTS = {
  tight: 1.2,
  normal: 1.4,
  relaxed: 1.6,
  loose: 1.8,
} as const;
```

### Spacing

#### Spacing Scale
```typescript
export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  '2xl': 48,
  '3xl': 64,
} as const;
```

#### Component Spacing
```typescript
export const COMPONENT_SPACING = {
  // Container padding
  containerHorizontal: SPACING.lg, // 24px
  containerVertical: SPACING.md,   // 16px
  
  // Card spacing
  cardPadding: SPACING.lg,         // 24px
  cardMargin: SPACING.md,          // 16px
  
  // Button spacing
  buttonPaddingHorizontal: SPACING.lg, // 24px
  buttonPaddingVertical: SPACING.md,   // 16px
  
  // Profile picture sizes
  profilePictureSmall: 32,
  profilePictureMedium: 40,
  profilePictureLarge: 48,
  
  // Icon sizes
  iconSmall: 16,
  iconMedium: 20,
  iconLarge: 24,
} as const;
```

### Border Radius

```typescript
export const BORDER_RADIUS = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  full: 9999,
} as const;
```

### Shadows

```typescript
export const SHADOWS = {
  sm: {
    shadowColor: COLORS.shadowLight,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  md: {
    shadowColor: COLORS.shadowMedium,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  lg: {
    shadowColor: COLORS.shadowDark,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
  },
} as const;
```

## Component-Specific Styles

### Header Styles

#### Status Bar
```typescript
export const statusBarStyles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
  },
});
```

#### Account Info
```typescript
export const accountInfoStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: COMPONENT_SPACING.containerHorizontal,
    paddingVertical: SPACING.md,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
  },
  appIcon: {
    width: 24,
    height: 24,
    borderRadius: BORDER_RADIUS.sm,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
  },
  profilePicture: {
    width: COMPONENT_SPACING.profilePictureMedium,
    height: COMPONENT_SPACING.profilePictureMedium,
    borderRadius: BORDER_RADIUS.full,
  },
  username: {
    fontSize: FONT_SIZES.base,
    fontWeight: FONT_WEIGHTS.semibold,
    color: COLORS.textPrimary,
  },
  proBadge: {
    backgroundColor: COLORS.accentBlue,
    paddingHorizontal: SPACING.sm,
    paddingVertical: SPACING.xs,
    borderRadius: BORDER_RADIUS.full,
  },
  proBadgeText: {
    color: COLORS.background,
    fontSize: FONT_SIZES.xs,
    fontWeight: FONT_WEIGHTS.semibold,
  },
  menuButton: {
    padding: SPACING.sm,
  },
});
```

#### Tab Navigation
```typescript
export const tabNavigationStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: COMPONENT_SPACING.containerHorizontal,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderLight,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: SPACING.md,
    position: 'relative',
  },
  tabActive: {
    borderBottomWidth: 2,
    borderBottomColor: COLORS.textPrimary,
  },
  tabContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.xs,
  },
  tabLabel: {
    fontSize: FONT_SIZES.sm,
    fontWeight: FONT_WEIGHTS.medium,
    color: COLORS.textSecondary,
  },
  tabLabelActive: {
    color: COLORS.textPrimary,
    fontWeight: FONT_WEIGHTS.semibold,
  },
  tabCount: {
    fontSize: FONT_SIZES.xs,
    color: COLORS.textTertiary,
  },
  tabIcon: {
    fontSize: FONT_SIZES.base,
  },
});
```

### Search Styles

#### Search Bar
```typescript
export const searchBarStyles = StyleSheet.create({
  container: {
    marginHorizontal: COMPONENT_SPACING.containerHorizontal,
    marginVertical: SPACING.md,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.surface,
    borderRadius: BORDER_RADIUS.lg,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    borderWidth: 1,
    borderColor: COLORS.borderLight,
  },
  searchIcon: {
    marginRight: SPACING.sm,
    color: COLORS.textTertiary,
  },
  searchInput: {
    flex: 1,
    fontSize: FONT_SIZES.base,
    color: COLORS.textPrimary,
  },
  filterButton: {
    marginLeft: SPACING.sm,
    padding: SPACING.xs,
  },
});
```

#### AI Upgrade Banner
```typescript
export const aiBannerStyles = StyleSheet.create({
  container: {
    marginHorizontal: COMPONENT_SPACING.containerHorizontal,
    marginBottom: SPACING.md,
    borderRadius: BORDER_RADIUS.lg,
    overflow: 'hidden',
    ...SHADOWS.md,
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  content: {
    padding: COMPONENT_SPACING.cardPadding,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textSection: {
    flex: 1,
  },
  title: {
    fontSize: FONT_SIZES.lg,
    fontWeight: FONT_WEIGHTS.semibold,
    color: COLORS.textPrimary,
    marginBottom: SPACING.xs,
  },
  subtitle: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.textSecondary,
  },
  ctaButton: {
    backgroundColor: COLORS.surface,
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.md,
    borderRadius: BORDER_RADIUS.md,
    borderWidth: 1,
    borderColor: COLORS.borderLight,
  },
  ctaButtonText: {
    fontSize: FONT_SIZES.sm,
    fontWeight: FONT_WEIGHTS.semibold,
    color: COLORS.textPrimary,
  },
});
```

### Email Styles

#### Email Card
```typescript
export const emailCardStyles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    marginHorizontal: COMPONENT_SPACING.containerHorizontal,
    marginBottom: SPACING.sm,
    padding: COMPONENT_SPACING.cardPadding,
    borderRadius: BORDER_RADIUS.lg,
    borderWidth: 1,
    borderColor: COLORS.borderLight,
    ...SHADOWS.sm,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: SPACING.sm,
  },
  profilePicture: {
    width: COMPONENT_SPACING.profilePictureMedium,
    height: COMPONENT_SPACING.profilePictureMedium,
    borderRadius: BORDER_RADIUS.full,
    marginRight: SPACING.md,
  },
  senderInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.xs,
  },
  senderName: {
    fontSize: FONT_SIZES.base,
    fontWeight: FONT_WEIGHTS.semibold,
    color: COLORS.textPrimary,
  },
  verifiedBadge: {
    width: 16,
    height: 16,
  },
  timestamp: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.textTertiary,
    marginLeft: 'auto',
  },
  subject: {
    fontSize: FONT_SIZES.base,
    fontWeight: FONT_WEIGHTS.medium,
    color: COLORS.textPrimary,
    marginBottom: SPACING.xs,
    lineHeight: FONT_SIZES.base * LINE_HEIGHTS.normal,
  },
  preview: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.textSecondary,
    lineHeight: FONT_SIZES.sm * LINE_HEIGHTS.normal,
    marginBottom: SPACING.sm,
  },
  attachments: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: SPACING.xs,
  },
});
```

#### Attachment Pill
```typescript
export const attachmentPillStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SPACING.sm,
    paddingVertical: SPACING.xs,
    borderRadius: BORDER_RADIUS.full,
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.borderLight,
  },
  icon: {
    marginRight: SPACING.xs,
    fontSize: FONT_SIZES.sm,
  },
  name: {
    fontSize: FONT_SIZES.xs,
    color: COLORS.textSecondary,
    fontWeight: FONT_WEIGHTS.medium,
  },
});
```

### Compose Button Styles

```typescript
export const composeButtonStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: SPACING.xl,
    right: COMPONENT_SPACING.containerHorizontal,
    backgroundColor: COLORS.textPrimary,
    borderRadius: BORDER_RADIUS.lg,
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.md,
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
    ...SHADOWS.lg,
  },
  icon: {
    fontSize: FONT_SIZES.base,
    color: COLORS.background,
  },
  text: {
    fontSize: FONT_SIZES.base,
    fontWeight: FONT_WEIGHTS.semibold,
    color: COLORS.background,
  },
});
```

## Responsive Design

### Breakpoints
```typescript
export const BREAKPOINTS = {
  mobile: 480,
  tablet: 768,
  desktop: 1024,
} as const;
```

### Responsive Spacing
```typescript
export const getResponsiveSpacing = (baseSpacing: number) => ({
  mobile: baseSpacing,
  tablet: baseSpacing * 1.2,
  desktop: baseSpacing * 1.5,
});
```

## Dark Mode Support

```typescript
export const DARK_COLORS = {
  background: '#000000',
  surface: '#1F2937',
  textPrimary: '#FFFFFF',
  textSecondary: '#D1D5DB',
  textTertiary: '#9CA3AF',
  borderLight: '#374151',
  borderMedium: '#4B5563',
  shadowLight: 'rgba(255, 255, 255, 0.05)',
  shadowMedium: 'rgba(255, 255, 255, 0.1)',
  shadowDark: 'rgba(255, 255, 255, 0.15)',
} as const;
```

## Usage Examples

### Basic Component Styling
```typescript
import { StyleSheet } from 'react-native';
import { COLORS, SPACING, FONT_SIZES, FONT_WEIGHTS } from '@/constants/theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    padding: SPACING.md,
  },
  title: {
    fontSize: FONT_SIZES.lg,
    fontWeight: FONT_WEIGHTS.semibold,
    color: COLORS.textPrimary,
    marginBottom: SPACING.sm,
  },
});
```

### Dynamic Styling
```typescript
const getProfilePictureStyle = (backgroundColor: string, size: number) => ({
  width: size,
  height: size,
  borderRadius: size / 2,
  backgroundColor,
});

const getAttachmentStyle = (type: string) => ({
  backgroundColor: FILE_TYPE_COLORS[type] || COLORS.surface,
});
```

## Best Practices

1. **Consistency**: Always use design tokens instead of hardcoded values
2. **Performance**: Use StyleSheet.create for all styles
3. **Maintainability**: Group related styles together
4. **Accessibility**: Ensure sufficient color contrast
5. **Responsiveness**: Use responsive spacing and sizing
6. **Dark Mode**: Support both light and dark themes
7. **Reusability**: Create reusable style components
