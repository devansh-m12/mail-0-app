// Extended mock data for email client interface
// This data represents additional emails for testing the email detail component

export interface Email {
  id: string;
  sender: {
    name: string;
    email: string;
    profilePicture: {
      backgroundColor?: string;
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
  isReply?: boolean; // Indicates if this is a reply in a conversation
  conversationId?: string; // Groups emails in the same conversation
}

export const mockEmails: Email[] = [
  {
    id: '1',
    sender: {
      name: 'Dazzy',
      email: 'dazzy@example.com',
      profilePicture: {
        pictureLink: 'https://pbs.twimg.com/profile_images/1956296656061657090/MvMSs3pP_400x400.jpg',
      },
      verified: true,
    },
    subject: 'We\'re Need your UX Feedback!',
    preview: 'We\'re refining our product and need your insights on our user experience (UX) design. We\'ve attached some design documents and would love to get your feedback on the overall user flow and interface elements...',
    timestamp: '15:16',
    attachments: [
      {
        name: 'designpr.pptx',
        type: 'pptx',
        icon: '📊',
        color: '#DC2626',
      },
      {
        name: 'designdocs.docx',
        type: 'docx',
        icon: '📄',
        color: '#2563EB',
      },
      {
        name: 'designmetrics.xlsx',
        type: 'xlsx',
        icon: '📈',
        color: '#059669',
      },
    ],
    read: false,
    conversationId: 'conv-1',
  },
  {
    id: '1-reply-1',
    sender: {
      name: 'Dazzy',
      email: 'dazzy@example.com',
      profilePicture: {
        pictureLink: 'https://pbs.twimg.com/profile_images/1956296656061657090/MvMSs3pP_400x400.jpg',
      },
      verified: true,
    },
    subject: 'Re: We\'re Need your UX Feedback!',
    preview: 'Thanks for the quick response! I\'ve reviewed the design documents and have some initial thoughts. The user flow looks intuitive, but I noticed a few areas where we could improve the onboarding experience...',
    timestamp: '14:30',
    read: true,
    isReply: true,
    conversationId: 'conv-1',
  },
  {
    id: '1-reply-2',
    sender: {
      name: 'Dazzy',
      email: 'dazzy@example.com',
      profilePicture: {
        pictureLink: 'https://pbs.twimg.com/profile_images/1956296656061657090/MvMSs3pP_400x400.jpg',
      },
      verified: true,
    },
    subject: 'Re: We\'re Need your UX Feedback!',
    preview: 'Also, regarding the attachment feedback - the PowerPoint presentation is very comprehensive. I particularly liked the wireframes section. Could you share more details about the user testing methodology you used?',
    timestamp: '14:25',
    read: true,
    isReply: true,
    conversationId: 'conv-1',
  },
  {
    id: '1-reply-3',
    sender: {
      name: 'Dazzy',
      email: 'dazzy@example.com',
      profilePicture: {
        pictureLink: 'https://pbs.twimg.com/profile_images/1956296656061657090/MvMSs3pP_400x400.jpg',
      },
      verified: true,
    },
    subject: 'Re: We\'re Need your UX Feedback!',
    preview: 'One more thing - I think the color scheme in the design metrics spreadsheet could be more accessible. Have you considered running it through a color contrast checker?',
    timestamp: '14:20',
    read: true,
    isReply: true,
    conversationId: 'conv-1',
  },
  {
    id: '1-reply-4',
    sender: {
      name: 'Dazzy',
      email: 'dazzy@example.com',
      profilePicture: {
        pictureLink: 'https://pbs.twimg.com/profile_images/1956296656061657090/MvMSs3pP_400x400.jpg',
      },
      verified: true,
    },
    subject: 'Re: We\'re Need your UX Feedback!',
    preview: 'Looking forward to hearing your thoughts on these points. Let me know if you need any clarification or have questions about the feedback I\'ve provided.',
    timestamp: '14:15',
    read: true,
    isReply: true,
    conversationId: 'conv-1',
  },
  {
    id: '2',
    sender: {
      name: 'Alicia from Deel',
      email: 'alicia@deel.com',
      profilePicture: {
        backgroundColor: '#8B5CF6',
        text: 'deel.',
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
        backgroundColor: '#F97316',
        icon: '📚',
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
      name: 'GitHub',
      email: 'noreply@github.com',
      profilePicture: {
        backgroundColor: '#24292F',
        icon: '🐙',
      },
      verified: true,
    },
    subject: 'Security alert for your repository',
    preview: 'We detected a potential security vulnerability in your repository. Please review the attached security report and take necessary actions to secure your codebase...',
    timestamp: '08:45',
    attachments: [
      {
        name: 'security-report.pdf',
        type: 'pdf',
        icon: '🔒',
        color: '#DC2626',
      },
    ],
    read: true,
  },
  {
    id: '5',
    sender: {
      name: 'Sarah Chen',
      email: 'sarah.chen@company.com',
      profilePicture: {
        backgroundColor: '#EC4899',
        text: 'SC',
      },
      verified: false,
    },
    subject: 'Project Update: Q4 Goals and Milestones',
    preview: 'Hi team, I wanted to share our Q4 project update. We\'ve made significant progress on our key initiatives and I\'ve attached the detailed progress report...',
    timestamp: 'Yesterday',
    attachments: [
      {
        name: 'q4-progress.pptx',
        type: 'pptx',
        icon: '📊',
        color: '#7C3AED',
      },
      {
        name: 'milestones.xlsx',
        type: 'xlsx',
        icon: '📈',
        color: '#059669',
      },
    ],
    read: true,
  },
  {
    id: '6',
    sender: {
      name: 'Netflix',
      email: 'info@netflix.com',
      profilePicture: {
        backgroundColor: '#E50914',
        icon: '🎬',
      },
      verified: true,
    },
    subject: 'New releases this week',
    preview: 'Check out what\'s new on Netflix this week! We\'ve added exciting new movies and TV shows to our library. Don\'t miss out on the latest entertainment...',
    timestamp: 'Yesterday',
    read: false,
  },
  {
    id: '7',
    sender: {
      name: 'Michael Rodriguez',
      email: 'michael.r@startup.io',
      profilePicture: {
        backgroundColor: '#10B981',
        text: 'MR',
      },
      verified: false,
    },
    subject: 'Partnership Opportunity Discussion',
    preview: 'Hi there! I came across your work and I\'m impressed with what you\'ve built. I think there might be an interesting partnership opportunity between our companies...',
    timestamp: '2 days ago',
    read: false,
  },
  {
    id: '8',
    sender: {
      name: 'LinkedIn',
      email: 'news@linkedin.com',
      profilePicture: {
        backgroundColor: '#0A66C2',
        icon: '💼',
      },
      verified: true,
    },
    subject: 'You have 3 new connection requests',
    preview: 'You have 3 new connection requests from professionals in your network. Expand your professional network and discover new opportunities...',
    timestamp: '3 days ago',
    read: true,
  },
  {
    id: '9',
    sender: {
      name: 'Emma Thompson',
      email: 'emma.thompson@designstudio.com',
      profilePicture: {
        backgroundColor: '#F59E0B',
        text: 'ET',
      },
      verified: false,
    },
    subject: 'Design Review Meeting - Tomorrow at 2 PM',
    preview: 'Hi team, just a reminder about our design review meeting tomorrow at 2 PM. Please review the attached design files and come prepared with your feedback...',
    timestamp: '3 days ago',
    attachments: [
      {
        name: 'design-mockups.fig',
        type: 'png',
        icon: '🎨',
        color: '#8B5CF6',
      },
      {
        name: 'user-flow.pdf',
        type: 'pdf',
        icon: '📋',
        color: '#2563EB',
      },
    ],
    read: true,
  },
  {
    id: '10',
    sender: {
      name: 'Stripe',
      email: 'support@stripe.com',
      profilePicture: {
        backgroundColor: '#635BFF',
        icon: '💳',
      },
      verified: true,
    },
    subject: 'Payment processed successfully',
    preview: 'Your payment of $99.00 has been processed successfully. Thank you for your business! You can view your receipt and transaction details in your dashboard...',
    timestamp: '4 days ago',
    read: true,
  },
  {
    id: '11',
    sender: {
      name: 'David Kim',
      email: 'david.kim@techcorp.com',
      profilePicture: {
        backgroundColor: '#3B82F6',
        text: 'DK',
      },
      verified: false,
    },
    subject: 'Technical Interview Follow-up',
    preview: 'Thank you for taking the time to interview with us yesterday. We were impressed with your technical skills and would like to schedule a follow-up meeting...',
    timestamp: '5 days ago',
    read: false,
  },
  {
    id: '12',
    sender: {
      name: 'Spotify',
      email: 'news@spotify.com',
      profilePicture: {
        backgroundColor: '#1DB954',
        icon: '🎵',
      },
      verified: true,
    },
    subject: 'Your weekly music recap is here',
    preview: 'Here\'s your personalized weekly music recap! Discover what you\'ve been listening to and get recommendations for new artists and songs...',
    timestamp: '1 week ago',
    read: true,
  },
  {
    id: '13',
    sender: {
      name: 'Lisa Wang',
      email: 'lisa.wang@consulting.com',
      profilePicture: {
        backgroundColor: '#EF4444',
        text: 'LW',
      },
      verified: false,
    },
    subject: 'Consultation Proposal',
    preview: 'Thank you for your interest in our consulting services. I\'ve prepared a detailed proposal outlining our approach and recommendations for your project...',
    timestamp: '1 week ago',
    attachments: [
      {
        name: 'consultation-proposal.pdf',
        type: 'pdf',
        icon: '📋',
        color: '#DC2626',
      },
      {
        name: 'project-timeline.xlsx',
        type: 'xlsx',
        icon: '📅',
        color: '#059669',
      },
    ],
    read: false,
  },
  {
    id: '14',
    sender: {
      name: 'Twitter',
      email: 'info@twitter.com',
      profilePicture: {
        backgroundColor: '#1DA1F2',
        icon: '🐦',
      },
      verified: true,
    },
    subject: 'Your account security has been updated',
    preview: 'We\'ve detected some unusual activity on your account and have automatically updated your security settings. Please review the changes and contact us if needed...',
    timestamp: '1 week ago',
    read: true,
  },
  {
    id: '15',
    sender: {
      name: 'Alex Johnson',
      email: 'alex.johnson@freelance.com',
      profilePicture: {
        backgroundColor: '#8B5CF6',
        text: 'AJ',
      },
      verified: false,
    },
    subject: 'Project completion and next steps',
    preview: 'Great news! The project we\'ve been working on is now complete. I\'ve attached the final deliverables and some suggestions for future improvements...',
    timestamp: '2 weeks ago',
    attachments: [
      {
        name: 'final-deliverables.zip',
        type: 'png',
        icon: '📦',
        color: '#7C3AED',
      },
      {
        name: 'project-summary.docx',
        type: 'docx',
        icon: '📄',
        color: '#2563EB',
      },
    ],
    read: true,
  },
];
