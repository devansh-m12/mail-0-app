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
        icon: 'data:image/png;base64,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',
        color: '#DC2626',
      },
      {
        name: 'designdocs.docx',
        type: 'docx',
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKMAAACUCAMAAADIzWmnAAAAk1BMVEX///8qVZnu7u7t7e3v7+/x8fHs7Oz19fX5+fny8vLr6+v29vb6+vohUJcAK4YnU5hSb6YAQZDi5OipuNAAPY7N1uaYpsMzW5rT2eUQR5KKnL6grse0v9Rygazs7/UjSZGElbzEzN57jLVVdKdCZ6MANophfK3d4ezJ0dlwibDX2+G9xNNrg7FGYZ11jLpHap8AJYWSQT26AAATo0lEQVR4nL1ci2KrNhLFSIh3sR0nBNvrR4Lj25uk2f//utXMSCAJYYPbrrpNeoIXjiXN6EgzTMBYmARBLsI0CIIsJMAiCUTIesAQJB3IOxAyAEXGoiIIuAkixmIHBBnjEqSMpQMQAog1CHsQRFGaFEUcRXFRFBLkRZHfBPLTqQYpgkiCxA9iP4iHoBgHQDMNQ/i+UShcEIfQvRIwCxRDEHUgJ5A6AIaEh7wDCQ9DfBwOiQYhAm6ACK/A54BWGGY94JwAMuHhAChaEgBHrjgKIsw7IDnCIyQAjswACcMvHhFHhl2iQMhNQByjLANaIstckGYZ0GJeALRCBLEQODMzJJxlvAN5lsEjuAaMAHDMMkGPI6CeTbPZAEBECLIMfIpgBmBM9CBkAs1EwPy3AMcxKQhETOA3FHwMKDMRZDOhC2KBZiI4GK/87mgzHJEcBmCSmUCYgHFGA4SEOdk1glRx5EiY42wmEIUK8A4EBGjayMcNQBxGKXoOsmu8IvsRUC6UM1DuJu06VbsbApnoATiVbt4ocN/3YHenwnREwnJE4aBTgyRJ4jSNkySXvyyQTwBpfPtjeapvmptPuANimwjaNU2VEKdqSl+ea5D6gXSvZNesBxFDy2AMbKYDIQGcNgxNmZFd2wANiMZHORic9JIVG/oeZjmicd+jOAqaNxYwfA+CoAM+35OYvodAZvse6FVYPeSwRNE8UCRJB2B0YJG5BfJ7IE7hpuoJafe4gAnDw2TkbjLliERvJhZgNAwZDmqogOBoMzhtMsPdqPkfCdPd+ICwHBGuX8QqCEPlYUxNEZqaIjQ1RWhqCnJEZNcSoLMkUw7J9wyAUg6WjNCmnEZDTREqTRElnXLgGqS4riPgGuQOSDwAhk7eNM8TcBkpKgduaIrCA5RySNOoB0TE0BQx5zGs3riU96DQoOgA2ExKIDSBuhLhyKz3W2qna5BHPKKPwZCYQD4BBQbneQ8iBULnyoim0GBcU6S9pmD4Vda/f523782mOVK7PNumLAUGG9q1IOtFzcUVcOzakBHC0BRMkHIQqQtCQTKC9UBa2fN+d3pfHFdNWS102zyD+aGmEKQpBNISJCOE6IFiLzLSAaamkB/jHEdejhZMA9m/MOuGIDIBLNEoUXEF/rX7c/lTl83RoIdtdU5xPuIT5NDB3AqHQCq7uJv+ikhosrqpKQwZYWkKnFfB4ff5afex2Gxk31ULhx9y/EznaAoyZX3FtGvGLE0R3tYUtO3J16/7l9NHWzaN23cejlP3MwjijoihKeI4z+UqDr/opwliE4Ajynn2KieeHNrjEXrvZts8J7HvbrkFAKu/0edil4hHU4iBpohAexyun0/br596s6ra0je0Q46vhqYohjKCdTJCDlYvI5KQjWsKvYUxAPqogD8/bd8+vnFo27Zq6ykMya4Z573vYTw0lAM3NQUf3c/IG6CZctxJynlqAHC3Qrq83dd3Iz1eqWde27aTGCJHaZkR2KxcY9ErKJB3QLkIyYSejUuWSQR2jNL/0HYI7ZoERia/QX6VHu+rXkmrLa0nT+7GxepXgsOU5rgwpj0oYhsU6EMZ7dgUkR70miLqNQXLXj6W32gWE7vM28o/t9sX3bYjTV6RV3e73S+kGrNwqCnk1hi35xw+Aa4TwHrZ2EZbdT9mkWw87Qj/Ho/wozE/cKlfO7kg3TEQUQDmozrZkCu6AsFh6YwvzMLJYzyp1XBD+xu111SdxCgiBKKhpgBf63Cs6mVdt8vl3J4sx1vdIstj/5fFonlJDU2R2ppCoEtk5JYA2ByBYlWVQHJWa04vY22363+q1izKj4zOFuicQijA4Nwsp50E7CHU7nNt9+OP9Dbyey+X80Z7AxNscvtDcjwUtGNNotRg5do1bg/CAcdSduViuWzncXyeQbFAjn679mkKZnGUBvMjbWbR/n84ejSF7NvucCFRIHb7cQlmvZRjPYfiIxwdIgSQ5kBTODYj6f0AxZ95dj2b4/uaGZpCkKZAue7RFK5/hGFul3Md5Px+XIdeTREodyO1hxjxPbLVcrjnDfTf6Eehdjroe5gEWWZqCjxVzcXa5VhB+/c5HjpNkZmagofD/Uznezy8ZjCd5R81R+bZz4Qhp60vHZ9ypSmIYz0c3xkjXpXHQasqC66eXI5EhE5mFLA0RaQBzcdKrqju8lct5hiO89FKqvif1hicqtybHJdrjPsYRBDAZe17XE1RSdf9PRTdj8sf+aVrWz4dHY7M0BR6c4P7GXVuzWyOFWwL6vb7nxNkVS1X1dr60m4/qmANagriCFsz37Y1h/kI3xhG5m+QalZG26xgbGXXmX+8WPNxefDtn2M4PqSjakdT1D/15M3VGMXTk9F2T3v5j9N2rzbH/vyRFfqcHTVF4tEU1I2jj59k3Y/5Ho+mwIBqEkewelN0NcmlfpS76J/xfpxm3Q/48AKIFElCYV4F0K6dI0dpM+/SQ3ic47yenMfxAjZDcVc6jGQUkR07pzi8y3G+ufhN6cmZ/VhXS60pzDNS0hTDuOvhvbwvcu5+YO5YL97XeEZqB2ElkKt34mqKbP1VT5AQDsnK0SFgM0VBZ+7yR+FtJsdxTTE8I034+n2S4WqSm8vlsjrWrkwvv7YnaHBGcaL/dNvbs8uxOyNN5uxn3FbCScNq1Sy04RzPr9fr+npIjk7f0zFE1TZNvcDziUEbagozCKtzPvoIJwRICBRyPnYjiItF0z++2e325+fX6+sFL0sm3+ox2crf27DzHXFj7nptx2qJlSfuSnatOVaLl71s573u2bLVd12p4S4/1B/2Rw+LVrVpHNnYGWnE3PiMwbFUi8VJEWhe9F2/8TN1/5etO0GkflzU5aKFo5Kj70Tl2NjrNfqewoq7QoAHFnDo1TzHQwpcxxNjPq7UN31pCG/O+q6a9epTPeXL4Vh+vL2d3uS/8GOknW2OsSKSmKxUwKBLjRKuzTRbNZCKY3PVd92vaDLUqqfXrkZaPbKfEeNxVzMdxOJYLukeZxLVoE1UeyXWVatYnwcxpEc43szlwtBWSnFXg2O1wjU9+E291Lx1blf1W/mRE941NsVuKs/g2Mdd3VwuTHiRWgNzI7hzBnBZ4z0OS2R03HV3PXzgh8qTwm+uWTdzOS7XFGrF4KE/l4sLDUyO2s2iRVSLc39bMpqjMutisHrO1o9aU/jOSIeawuCoXQt5lnrd33ZH/agMP7os/j5H3MJkVtxVsiIdHocMzuwZGRA318LynW7yCdOt+jZue8ae04b+uXE5Ni/u1mDYrL0Crtes3+gr4I27Wmek1Tee7QdX4FD+hf9NVnJAQz6qh2wbl6O95/K2y8gZgBN3Ffc0hfJ/OYzlBgc2UcMLZ33d2jj7RB+avRaamsLcz+TmxlWBxOKoJxz02gW9Y/xGfwFLbk7034d6zjGLnyOsMxYR+gWX75yRaqORa3hVobNaK0f+tOrXSjk5Bxzvd6z3DGBa3NXmeCK3DdEJsp/zkewE5NlFOaOdJ158fz5uPJpiuJ8pdLZNHuFRUNqfSenvqnrtvFmsqEu3F1rl4qZarOhiMfDgD/meKLeJIIC4a5++peKuzhnpkXzi72bRUKctLzREyUdZtcTRUMU9x7nr9fKgZUQm7uVyOfEZJcfWdUkmnndiaNuUf9FyfnX3CY9y9MZdeZ+xpUFkc1SMDu/NB36t187h7I/aoD4Hq8yDZ808MrNqSFPgaaSRBwDAObMvf/AuyV8N+Zx9Wa3IjM4LLaRfhh78gX5cU6gVzSTFjKLxXC4nPrNSPJTJSD4XModDWymzbq3A2MM2M64pVNxVZBo4sQ9lu7sVEkqkAlJiqPio1WrtGWq5gzzfbWubozByuUSXy0WpgXFkZhA683HR0I7l85hS55WLUq00p2/8U3D1cVQhk1vN2XMdbCIKSDPhtzWFbEcymleyFNgjVC2Z817tJNzpSCcYdylWw/V6ai6Xe05RftHsI6qwAlZKR67pSuBsCat64sH+NE3hLuD40+FY0UpzIBs4QT9qWyHa8dKNcuDh5f1+bGyO62Sgb+QvuHwv7trJM2p4Pqb9IlnT82CtBoEhid5ri/uaQkzRFMDI2MUE/8W/nArjT/uhd5QEV0+vd9vB5jh6Rpoy3BdSzjyCAcd+Nxg8457A2GcHXg0uO3/2/lrtCzGptFCsQJvZcVfhj7uWX32vKT6lsfmKPYJi8eAZgO+M1JfL5foeOXBJdzNlwptf/f0Pfit+aL0mdyOcuGtkxF27XC6nY/6IOj4qYUFLH2jn0kvyIY4hpm+FEeZyYYK3P5erGOQBXLpee1V0lNDAtvW7w4c1RRqZrFTc9U4ul3nquNdXmv7+I6fnD3BUpozvxam467RcrkW30gTGqtd0RnNoRhYV2M80Nzc1TkwTORaDuCucjOZ4+Cx/KeCuM8b5RNKtev0Scb5xwA/O/May6K6FuM7QKXjHKu/irjqXq/DZtXzU6eXp/HzNrt3M687LhmfM00kO12t7r9DFXafEPqpjs8IwTPe8anmG8MJhfb4VKIF242ygnKQpUuNFMZW3l7t5e2OPbuplu2wH8a2u6ak4Piet+VgN8/aMXC73NbOBzfgoQh5oW9/IZG8wbHK7XQ2O7descwr/4ma2FhJBb0cVZ+5n2lqv19Pirh93OGKGiSR5U8nO849N235QP5px10Rg3DUb5HJl6/c7vVi2QPNObHYWx2AlnfD0uCv4nuEhmNmLFYS363vpufM4NmAzRi6XFXelPRfFZ1RiF+SljJOE/Kn2VrrFIxyL1U/7ZfhHbuieJCnw1cOCXj0kgDYzShIDqfX9RL6Z/VhT3JVyuVTC8CCXi1maYjTnAyfi7YQQauX7f+62Pl54qX37mdu5XGNpHdKif26uwQZJtw3+5Iu7drlcfdzVelVI/VI5cb7hxrS2+Tml1AaW6KzX69z3OpQdd1W5XOxG/iM6nccY4h1vcpyUyxXamsIz7XABnEjIl0JhvwuyGcRnrLirmcvl1NDoNcVg2lWL5eRUuePb2EszfbPyUpaHGTU0bmqKySnYD5w/8rzf6KuCGk7c1XtG+ngC5Oz9zI/vnCIc0xRDjfsA2Qf2XGKQyzWsoSHYiA5/xN88GPugl9rZWA0N4T8jlfIB3qmY63Ie4ug7IxV3464LeIFGrs7tzFdTHuxHz37GW0PD1uHwbqZ0vvPfQ5o/H2NfMQ+47NcURpMcv6VY/Nff8ZkQdx2Jz+j3kOr/A0dTUzg1NAZ5e04/du8h/cvvnK11qp7BCmpomCV7VA0Nx2a695Dmvru33Y21Lj+8b3I/85bczOWy4q4uRyA5vxtvvQOpUg6/bW25G3nf1VtDY+DD23/4XVLaEtkOt1z8Dm7kcqmyGZTLhXHXo7VbqVDuzn8nV78m03S/GgUayIeE17rpf82xuTT7nHtqaIQjcdf4JBcVTzWHmRT/GiYJu6nDb5Qfud3u1oYpT6qhEYS/P/e7t2V1WTmlE2YMONg1pb4ksa6PYALzCnpqfTTh1tCAd6WwjgWVruCYFBBCYlcaZYfDer/9qZqmf9V+RhbP6hfW0LDLZkQKmJUywtvAqyk0gH14kSfx4bw7fS0XzQoGf8quVXE8+2poRKN1uR6ooUEgwSopQZr9fj4/nZaLzWqkqscoR6eGRlTo00RfXa7RGhrmbjHWIFf1LXQYNEmKPC/49XP70YLJlncNalhDg+46LM/h2z/3AO3aW0NDvR/i1uUK4iQvDq9Ppz+XdeMalMPRqaGRs4gqdo3V5ZpbQ0NvwJCjXSAQrshpv76en7ZtuQGi3rMft4ZGkoaqaNsDNTS4WUODQEpFLcwrVKmmBzAGeRKtzy8f6E0Hgw8cVaUM5S8iBYwaGhpwD4hV7oy3hgaB0KzLpQsDQbcwShkhEMkJUxxkl35BHRozXWp1jqh8HVXfyiygdi0umF5DI6XDSKNI1726XEHEs8P6dfdVbRpdq+kPZdd4lhhh8rQuxRUap4yp58hxmMvl1tCAxDnnCgE5O1J8XpT7ARx5PGNRDyjt8ZrSPMcVgUcm4ASivrBWaJbNCEdqaDilK7gnIpt6QJ8BTyCX0hQWuRwerPMEVR6bShrkuQOSLp1wWg0NsmtfXS5mgK7EHtXlUrU+FeAd0HW5uKr1OVaXS9fbm1ZDI2JUiksHYQege1s/6kAsqEAgVt+SAKvaUSkuofwj5VUyoy6XYMIEVtkME4iuhgYW4EswhaoLzE0r5Kdq9/kAlcCAuBqlhSb0cqPxuEnAsWt650y/p23W5TLtui+xF2CJvUG9PUGmTCX2mKfenmXXoR1qvVdDIzKAty6XBnh25NQZDry1PgMR8Rl1ue7X0IgHBTXy+0C9KNb/Xx0Qj14ZA/dqaJBlaBlhgJhAJIxany4oBrU+Q09druy2pmB2LpddQ4MZvseSETZQVZIjAkVfC1kBrEFIIA951LmbkbpcHhnhyeUSZkkzwcxOZakLpGorDHczBiLSAdipABLtiCxgVumxymbcqKERZu7LrwkBoQFqCv26rCp6TEAVPY47IAcVzSTDWp8ZKYcMZYQXGDLiRi4XM4Ews0E8vsdf65NKC4dGnWGlKcJRTWHVGfZpCiuXyyqooQAzgHSWKDBCnncgCtWLixaIXKDmuQkCC1hlM4R6x+dGDY0hSIYg9YPcD6g4BoBYg6hTDj6QenO5rDrDlowYrTNMTsVTZ7hwfI+pKZipKZipKZihKaIu7vo/vjUt//0AnMYAAAAASUVORK5CYII=',
        color: '#2563EB',
      },
      {
        name: 'designmetrics.xlsx',
        type: 'xlsx',
        icon: 'data:image/png;base64,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',
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
