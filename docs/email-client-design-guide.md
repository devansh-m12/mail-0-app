# Email Client Design Guide

## Overview
This document provides detailed guidance for implementing an email client interface similar to the reference design. The interface is divided into distinct sections that work together to create a cohesive user experience.

## Design Sections

### 1. Header Section
**Purpose**: Contains user account information, app branding, and primary navigation.

**Components**:
- **Status Bar**: Time (9:41), cellular signal, WiFi, battery
- **Account Info**: 
  - App icon (pixelated square with forward slash)
  - Profile picture (circular with sunglasses icon)
  - Username "Rico" with "PRO" badge
  - Hamburger menu icon
- **Tab Navigation**: 
  - Inbox (14,171) - selected state
  - Sent items
  - Drafts
  - Favorites

**Implementation Notes**:
- Use `StatusBar` component for system status
- Profile picture should be circular with border radius
- PRO badge should be light blue pill-shaped
- Tab navigation should have active state indicator (black underline)
- Email count should be displayed next to "Inbox"

### 2. Search Section with AI Upgrade Banner
**Purpose**: Provides search functionality and promotes AI features.

**Components**:
- **Search Bar**:
  - Magnifying glass icon on left
  - Placeholder text "Search mail0...."
  - Filter/sort icon on right (three lines with circle)
- **AI Upgrade Banner**:
  - Background: Futuristic building illustration with green foliage
  - Text: "Upgrade with AI" and "more powerful Inbox"
  - CTA Button: "Try AI" (light gray, rounded)

**Implementation Notes**:
- Search bar should have subtle border and rounded corners
- Banner should be prominent but not intrusive
- Background illustration should be responsive
- CTA button should have hover/press states

### 3. Mail Section (Scrollable)
**Purpose**: Displays email list with preview cards.

**Components**:
Each email card contains:
- **Profile Picture**: Circular with colored background and icon/letter
- **Sender Info**: Name with verification checkmark (blue)
- **Timestamp**: Right-aligned (e.g., "15:16", "09:22")
- **Subject/Preview**: Truncated text with ellipsis
- **Attachments**: Pill-shaped buttons with file type icons

**Email Examples**:
1. **Rico Oktananda** (15:16)
   - Blue profile picture with sunglasses
   - Subject: "We're refining our product and need your insights..."
   - Attachments: designpr.pptx, designdocs.word, design.xlsx

2. **Alicia from Deel** (09:22)
   - Purple profile picture with "deel." text
   - Subject: "Your money is on the way! Your Deel withdrawal..."

3. **Substack Read** (09:22)
   - Orange profile picture with book icon
   - Subject: "Research as a leisure activity, solstice strawberry..."

4. **Jiho from Mobbin** (09:22)
   - Black profile picture with "M" icon
   - Subject: "This is just a reminder that the offer..."

5. **Medium Daily Digest** (09:22)
   - Gray profile picture with vertical lines
   - Subject: "How To Hire Your Inner Critic | Brittany Amara..."

6. **Netflix** (09:22)
   - Partially visible at bottom

**Implementation Notes**:
- Use FlatList or ScrollView for performance
- Implement pull-to-refresh
- Email cards should have subtle shadows
- Profile pictures should be consistent size (40-50px)
- Verification checkmarks should be blue
- Attachment pills should show file type icons and names

### 4. Fixed Compose Button
**Purpose**: Always accessible button for creating new emails.

**Components**:
- **Button**: Large, black, rounded rectangle
- **Icon**: White mail icon with plus sign
- **Text**: "Compose"
- **Position**: Bottom right, fixed overlay

**Implementation Notes**:
- Use `position: 'absolute'` for fixed positioning
- Should overlay content without blocking
- Include proper touch targets (44px minimum)
- Add subtle shadow for depth
- Consider haptic feedback on press

## Color Scheme
- **Primary Background**: White (#FFFFFF)
- **Text**: Black (#000000) and dark gray (#333333)
- **Accent Blue**: Light blue for PRO badge and checkmarks
- **Profile Picture Colors**: Blue, purple, orange, black, gray
- **Button Colors**: Black for compose, light gray for AI try button

## Typography
- **Headers**: System font, 18-28px, various weights
- **Body Text**: System font, 15-16px, regular weight
- **Timestamps**: Smaller, muted color
- **Button Text**: Semi-bold, 16px

## Spacing & Layout
- **Container Padding**: 24px horizontal
- **Card Spacing**: 16px between cards
- **Internal Padding**: 16-24px within cards
- **Profile Picture Size**: 40-50px diameter
- **Button Height**: 44px minimum for touch targets

## Interactive States
- **Press States**: Subtle opacity changes
- **Hover States**: Slight scale or shadow changes
- **Loading States**: Skeleton screens for email list
- **Empty States**: Friendly messaging when no emails

## Accessibility
- **Touch Targets**: Minimum 44px
- **Color Contrast**: WCAG AA compliant
- **Screen Reader**: Proper labels and descriptions
- **Focus States**: Visible focus indicators

## Performance Considerations
- **Virtual Scrolling**: For large email lists
- **Image Optimization**: Profile pictures should be cached
- **Lazy Loading**: Load emails as needed
- **Memory Management**: Clean up unused resources

## Mock Data Structure
```typescript
interface Email {
  id: string;
  sender: {
    name: string;
    email: string;
    profilePicture: string;
    verified: boolean;
  };
  subject: string;
  preview: string;
  timestamp: string;
  attachments?: Array<{
    name: string;
    type: 'pptx' | 'docx' | 'xlsx' | 'pdf';
    icon: string;
  }>;
  read: boolean;
}
```

## Implementation Priority
1. **Header Section** - Foundation for navigation
2. **Mail Section** - Core functionality
3. **Search Section** - Enhanced functionality
4. **Compose Button** - Action completion
5. **AI Banner** - Feature promotion

## Testing Considerations
- **Responsive Design**: Test on various screen sizes
- **Touch Interactions**: Verify all touch targets work
- **Scroll Performance**: Test with large datasets
- **Accessibility**: Screen reader compatibility
- **Cross-platform**: iOS and Android consistency
