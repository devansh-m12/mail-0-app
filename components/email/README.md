# Email Components

This directory contains the modular email components that have been extracted from the main email detail screen.

## Component Structure

### Main Components

- **`EmailDetailHeader`** - Navigation header with back button and email navigation
- **`EmailContent`** - Main email content including sender info, subject, body, and attachments
- **`EmailDetailBottom`** - Bottom action bar with various email actions

### Reusable Components

- **`ProfilePicture`** - Displays sender profile picture with fallback to initials/icon
- **`AttachmentCard`** - Individual attachment display with icon and file info
- **`ActionButton`** - Reusable action button for the bottom toolbar

## Usage

```tsx
import { 
  EmailDetailHeader, 
  EmailContent, 
  EmailDetailBottom 
} from '../components/email';

// In your main component
<EmailDetailHeader
  email={email}
  onBackPress={handleBack}
  onPreviousPress={handlePrevious}
  onNextPress={handleNext}
/>

<EmailContent email={email} />

<EmailDetailBottom onActionPress={handleAction} />
```

## Props

### EmailDetailHeader
- `email: Email` - Email object
- `onBackPress?: () => void` - Back navigation handler
- `onPreviousPress?: () => void` - Previous email handler
- `onNextPress?: () => void` - Next email handler

### EmailContent
- `email: Email` - Email object to display

### EmailDetailBottom
- `onActionPress?: (action: string) => void` - Action button handler

### ProfilePicture
- `profilePicture: ProfilePicture` - Profile picture data
- `size?: number` - Size of the picture (default: 48)

### AttachmentCard
- `attachment: Attachment` - Attachment data

### ActionButton
- `icon: string` - Feather icon name
- `onPress: () => void` - Press handler
- `size?: number` - Icon size (default: 20)
- `color?: string` - Icon color (default: '#FFF')

## Mock Data

The components use mock email data from `docs/mock-emails.ts` which includes 15 diverse email examples with various attachment types and sender profiles.

## Benefits of This Structure

1. **Modularity** - Each component has a single responsibility
2. **Reusability** - Components can be used in different contexts
3. **Maintainability** - Easier to update and test individual components
4. **Type Safety** - Full TypeScript support with proper interfaces
5. **Performance** - Smaller components can be optimized individually
