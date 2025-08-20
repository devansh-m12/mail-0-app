# Component Structure Guide

## Overview
This document outlines the recommended component structure for implementing the email client interface. Components are organized by functionality and reusability.

## Component Hierarchy

```
EmailClient/
├── components/
│   ├── header/
│   │   ├── StatusBar.tsx
│   │   ├── AccountInfo.tsx
│   │   ├── TabNavigation.tsx
│   │   └── index.ts
│   ├── search/
│   │   ├── SearchBar.tsx
│   │   ├── AIUpgradeBanner.tsx
│   │   └── index.ts
│   ├── email/
│   │   ├── EmailCard.tsx
│   │   ├── EmailList.tsx
│   │   ├── ProfilePicture.tsx
│   │   ├── AttachmentPill.tsx
│   │   └── index.ts
│   ├── compose/
│   │   ├── ComposeButton.tsx
│   │   └── index.ts
│   └── common/
│       ├── VerifiedBadge.tsx
│       ├── FileTypeIcon.tsx
│       └── index.ts
├── hooks/
│   ├── useEmails.ts
│   ├── useSearch.ts
│   └── useCompose.ts
├── types/
│   └── email.ts
└── EmailClient.tsx
```

## Component Details

### Header Components

#### StatusBar.tsx
- **Purpose**: Displays system status (time, battery, signal)
- **Props**: None (uses system APIs)
- **Dependencies**: `expo-status-bar`

#### AccountInfo.tsx
- **Purpose**: Shows user account information and app branding
- **Props**:
  ```typescript
  interface AccountInfoProps {
    user: UserAccount;
    onMenuPress: () => void;
  }
  ```
- **Features**: Profile picture, username, PRO badge, menu button

#### TabNavigation.tsx
- **Purpose**: Horizontal tab navigation for different email folders
- **Props**:
  ```typescript
  interface TabNavigationProps {
    tabs: TabItem[];
    onTabPress: (tabId: string) => void;
  }
  ```
- **Features**: Active state indicator, email counts, icons

### Search Components

#### SearchBar.tsx
- **Purpose**: Email search functionality
- **Props**:
  ```typescript
  interface SearchBarProps {
    placeholder?: string;
    onSearch: (query: string) => void;
    onFilterPress: () => void;
  }
  ```
- **Features**: Search icon, placeholder text, filter button

#### AIUpgradeBanner.tsx
- **Purpose**: Promotes AI features
- **Props**:
  ```typescript
  interface AIUpgradeBannerProps {
    banner: AIBanner;
    onTryAIPress: () => void;
  }
  ```
- **Features**: Background illustration, CTA button

### Email Components

#### EmailCard.tsx
- **Purpose**: Individual email preview card
- **Props**:
  ```typescript
  interface EmailCardProps {
    email: Email;
    onPress: (emailId: string) => void;
  }
  ```
- **Features**: Profile picture, sender info, subject, preview, timestamp, attachments

#### EmailList.tsx
- **Purpose**: Scrollable list of email cards
- **Props**:
  ```typescript
  interface EmailListProps {
    emails: Email[];
    onEmailPress: (emailId: string) => void;
    onRefresh?: () => void;
    refreshing?: boolean;
  }
  ```
- **Features**: FlatList, pull-to-refresh, performance optimization

#### ProfilePicture.tsx
- **Purpose**: Reusable profile picture component
- **Props**:
  ```typescript
  interface ProfilePictureProps {
    backgroundColor: string;
    icon?: string;
    text?: string;
    size?: number;
  }
  ```
- **Features**: Circular design, icon/text support, customizable size

#### AttachmentPill.tsx
- **Purpose**: File attachment display
- **Props**:
  ```typescript
  interface AttachmentPillProps {
    attachment: {
      name: string;
      type: string;
      icon: string;
      color: string;
    };
    onPress?: () => void;
  }
  ```
- **Features**: File type icon, name truncation, color coding

### Compose Components

#### ComposeButton.tsx
- **Purpose**: Fixed compose button overlay
- **Props**:
  ```typescript
  interface ComposeButtonProps {
    onPress: () => void;
  }
  ```
- **Features**: Fixed positioning, mail icon, haptic feedback

### Common Components

#### VerifiedBadge.tsx
- **Purpose**: Blue verification checkmark
- **Props**:
  ```typescript
  interface VerifiedBadgeProps {
    size?: number;
  }
  ```
- **Features**: Consistent styling, customizable size

#### FileTypeIcon.tsx
- **Purpose**: File type icon mapping
- **Props**:
  ```typescript
  interface FileTypeIconProps {
    type: string;
    size?: number;
  }
  ```
- **Features**: Icon mapping, color coding

## Hooks

### useEmails.ts
- **Purpose**: Email data management
- **Returns**:
  ```typescript
  {
    emails: Email[];
    loading: boolean;
    error: string | null;
    refreshEmails: () => void;
  }
  ```

### useSearch.ts
- **Purpose**: Search functionality
- **Returns**:
  ```typescript
  {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    searchResults: Email[];
    isSearching: boolean;
  }
  ```

### useCompose.ts
- **Purpose**: Compose email functionality
- **Returns**:
  ```typescript
  {
    isComposing: boolean;
    startCompose: () => void;
    cancelCompose: () => void;
  }
  ```

## Implementation Guidelines

### 1. Component Organization
- Group related components in folders
- Use index.ts files for clean imports
- Keep components focused and single-purpose

### 2. Props Interface
- Define clear, typed interfaces for all props
- Use optional props with sensible defaults
- Document complex props with comments

### 3. Styling
- Use StyleSheet for performance
- Create reusable style constants
- Follow design system color palette

### 4. Performance
- Use React.memo for expensive components
- Implement proper key props for lists
- Optimize re-renders with useCallback/useMemo

### 5. Accessibility
- Add accessibility labels
- Support screen readers
- Ensure proper touch targets

### 6. Testing
- Write unit tests for components
- Test user interactions
- Mock external dependencies

## File Naming Conventions
- Components: PascalCase (e.g., `EmailCard.tsx`)
- Hooks: camelCase with 'use' prefix (e.g., `useEmails.ts`)
- Types: PascalCase (e.g., `email.ts`)
- Constants: UPPER_SNAKE_CASE (e.g., `COLORS.ts`)

## Import Structure
```typescript
// Component imports
import { EmailCard } from '@/components/email/EmailCard';
import { SearchBar } from '@/components/search/SearchBar';

// Hook imports
import { useEmails } from '@/hooks/useEmails';

// Type imports
import type { Email } from '@/types/email';

// Mock data imports
import { mockEmails } from '@/docs/mock-data';
```

## Next Steps
1. Create component folders and files
2. Implement basic component structure
3. Add styling and interactions
4. Integrate with mock data
5. Add accessibility features
6. Write tests
7. Optimize performance
