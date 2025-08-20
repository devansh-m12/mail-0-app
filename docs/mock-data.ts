// Mock data for email client interface
// This data represents the emails shown in the reference design

export interface Email {
  id: string;
  sender: {
    name: string;
    email: string;
    profilePicture: {
      backgroundColor: string;
      icon?: string;
      text?: string;
      pictureLink?: string;
    };
    verified: boolean;
  };
  subject: string;
  preview: string;
  timestamp: string;
  attachments?: Array<{
    name: string;
    type: 'pptx' | 'docx' | 'xlsx' | 'pdf' | 'jpg' | 'png';
    icon: string;
    color: string;
  }>;
  read: boolean;
}

export const mockEmails: Email[] = [
  {
    id: '2',
    sender: {
      name: 'Alicia from Deel',
      email: 'alicia@deel.com',
      profilePicture: {
        backgroundColor: '#8B5CF6', // Purple
        text: 'deel.',
        pictureLink: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      },
      verified: true,
    },
    subject: 'Your money is on the way!',
    preview: 'Your money is on the way! Your Deel withdrawal is all set, and your money is on its way. Keep up the great work and we look forward to continuing our partnership...',
    timestamp: '09:22',
    read: false,
  },
  {
    id: '3',
    sender: {
      name: 'Substack Read',
      email: 'read@substack.com',
      profilePicture: {
        backgroundColor: '#F97316', // Orange
        icon: '📚', // Book emoji as placeholder
      },
      verified: true,
    },
    subject: 'Research as a leisure activity, solstice strawberry, and things to do besides worry',
    preview: 'Research as a leisure activity, solstice strawberry, and things to do besides worry. This week\'s Substack newsletter brings you the latest insights and discoveries...',
    timestamp: '09:22',
    read: false,
  },
  {
    id: '4',
    sender: {
      name: 'Jiho from Mobbin',
      email: 'jiho@mobbin.com',
      profilePicture: {
        backgroundColor: '#000000', // Black
        text: 'M',
        pictureLink: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      },
      verified: true,
    },
    subject: 'Free 6 month trial of BFM+ with your Mobbin Pro account',
    preview: 'This is just a reminder that the offer to get a free 6 month trial of BFM+ with your Mobbin Pro account is still available. Don\'t miss out on this exclusive opportunity...',
    timestamp: '09:22',
    read: false,
  },
  {
    id: '5',
    sender: {
      name: 'Medium Daily Digest',
      email: 'digest@medium.com',
      profilePicture: {
        backgroundColor: '#6B7280', // Gray
        icon: '📰', // Newspaper emoji as placeholder
      },
      verified: true,
    },
    subject: 'How To Hire Your Inner Critic | Brittany Amara in The Writing Cooperative',
    preview: 'How To Hire Your Inner Critic | Brittany Amara in The Writing Cooperative | | Spent 120 Hours Finding the Perfect Writing Routine. Here\'s What I Learned...',
    timestamp: '09:22',
    read: false,
  },
  {
    id: '6',
    sender: {
      name: 'Netflix',
      email: 'info@netflix.com',
      profilePicture: {
        backgroundColor: '#DC2626', // Red
        icon: '🎬', // Film emoji as placeholder
      },
      verified: true,
    },
    subject: 'New releases this week',
    preview: 'Check out the latest movies and TV shows added to Netflix this week. From blockbuster hits to indie gems, there\'s something for everyone...',
    timestamp: '09:22',
    read: false,
  },
  {
    id: '7',
    sender: {
      name: 'GitHub',
      email: 'noreply@github.com',
      profilePicture: {
        backgroundColor: '#000000', // Black
        icon: '🐙', // Octocat emoji as placeholder
      },
      verified: true,
    },
    subject: 'Security alert for your account',
    preview: 'We detected a new sign-in to your GitHub account from an unrecognized device. If this was you, you can safely ignore this email...',
    timestamp: '08:45',
    read: true,
  },
  {
    id: '8',
    sender: {
      name: 'Stripe',
      email: 'notifications@stripe.com',
      profilePicture: {
        backgroundColor: '#6772E5', // Stripe blue
        icon: '💳', // Credit card emoji as placeholder
      },
      verified: true,
    },
    subject: 'Payment received - $299.00',
    preview: 'Great news! We\'ve received your payment of $299.00. Your subscription has been renewed and you\'ll continue to have access to all premium features...',
    timestamp: '08:30',
    read: true,
  },
];

// User account data
export interface UserAccount {
  name: string;
  email: string;
  profilePicture: {
    backgroundColor: string;
    icon: string;
  };
  isPro: boolean;
  appIcon: string;
}

export const userAccount: UserAccount = {
  name: 'Rico',
  email: 'rico@example.com',
  profilePicture: {
    backgroundColor: '#000000',
    icon: '🕶️', // Sunglasses emoji as placeholder
  },
  isPro: true,
  appIcon: '◼️', // Black square as placeholder for pixelated icon
};

// Tab navigation data
export interface TabItem {
  id: string;
  label: string;
  icon: string;
  count?: number;
  isActive: boolean;
}

export const tabItems: TabItem[] = [
  {
    id: 'inbox',
    label: 'Inbox',
    icon: '📧',
    count: 14171,
    isActive: true,
  },
  {
    id: 'sent',
    label: 'Sent items',
    icon: '📤',
    isActive: false,
  },
  {
    id: 'drafts',
    label: 'Drafts',
    icon: '📝',
    isActive: false,
  },
  {
    id: 'favorites',
    label: 'Fav',
    icon: '⭐',
    isActive: false,
  },
];

// AI Upgrade Banner data
export interface AIBanner {
  title: string;
  subtitle: string;
  ctaText: string;
  backgroundImage: string; // URL or asset reference
}

export const aiBanner: AIBanner = {
  title: 'Upgrade with AI',
  subtitle: 'For more powerful Inbox',
  ctaText: 'Try AI',
  backgroundImage: 'futuristic-building-bg', // Asset reference
};

// File type icons mapping
export const fileTypeIcons: Record<string, string> = {
  pptx: '📊',
  docx: '📄',
  xlsx: '📈',
  pdf: '📕',
  jpg: '🖼️',
  png: '🖼️',
  txt: '📄',
  zip: '📦',
};

// File type colors mapping
export const fileTypeColors: Record<string, string> = {
  pptx: '#DC2626', // Red
  docx: '#2563EB', // Blue
  xlsx: '#059669', // Green
  pdf: '#DC2626', // Red
  jpg: '#8B5CF6', // Purple
  png: '#8B5CF6', // Purple
  txt: '#6B7280', // Gray
  zip: '#F59E0B', // Amber
};
