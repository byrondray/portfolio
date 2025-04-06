export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  liveLink: string;
  githubLink: string;
  image: string;
  details?: {
    longDescription?: string;
    features?: string[];
    challenges?: string[];
    screenshots?: string[];
    videoUrl?: string;
    techDetails?: {
      name: string;
      description: string;
    }[];
    processSteps?: {
      title: string;
      description: string;
    }[];
  };
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Relay Rideshare',
    description:
      'Relay rideshare app designed is for busy parents to schedule rides for their children who are traveling to the same destination at the same time.',
    technologies: ['React Native', 'Expo', 'GraphQL'],
    liveLink: 'https://relay.arspera.com/',
    githubLink: 'https://github.com/byrondray/relay',
    image: '/images/relay_logo.png',
    details: {
      longDescription:
        'Relay Rideshare is a comprehensive solution designed to address the transportation challenges faced by busy parents. The app enables parents to coordinate and schedule rides for their children who are traveling to the same destinations, such as schools, extracurricular activities, or sports practices. By connecting families in the same community, Relay not only saves time and reduces the number of vehicles on the road but also builds stronger community bonds and provides peace of mind through its real-time tracking and notification system.',
      features: [
        'Secure parent verification and profile creation',
        'Smart matching algorithm for ride coordination',
        'Real-time GPS tracking of rides',
        'In-app messaging between parents',
        'Automated scheduling for recurring rides',
        'Push notifications for ride status updates',
        'Driver verification and background checks',
      ],
      challenges: [
        'Developing a robust matching algorithm that considers location proximity, timing, and parent preferences',
        'Implementing secure user authentication that verifies parents while protecting sensitive information',
        'Creating an intuitive scheduling system that handles recurring rides and exceptions',
        'Building a reliable real-time tracking system with minimal battery impact',
        'Ensuring data privacy compliance, especially for information related to minors',
      ],
      screenshots: [
        '/images/relay_screenshot1.png',
        '/images/relay_screenshot2.png',
        '/images/relay_screenshot3.png',
      ],
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      techDetails: [
        {
          name: 'React Native',
          description:
            'Used for cross-platform mobile development, allowing us to deploy to both iOS and Android with a single codebase.',
        },
        {
          name: 'Expo',
          description:
            'Simplified the development workflow and provided access to native APIs and services without requiring native code.',
        },
        {
          name: 'GraphQL',
          description:
            'Implemented for efficient data fetching, allowing the app to request exactly the data it needs and reduce network load.',
        },
        {
          name: 'Firebase',
          description:
            'Used for authentication, real-time database, and push notifications, providing a scalable backend solution.',
        },
      ],
      processSteps: [
        {
          title: 'Research & Planning',
          description:
            'Conducted user interviews with parents to understand their transportation challenges and needs.',
        },
        {
          title: 'Design & Prototyping',
          description:
            'Created wireframes and interactive prototypes, testing with potential users to refine the UX.',
        },
        {
          title: 'Development',
          description:
            'Built the app using React Native and Expo, implementing core features iteratively.',
        },
        {
          title: 'Testing & Feedback',
          description:
            'Conducted beta testing with a small group of families, collecting feedback to improve functionality.',
        },
      ],
    },
  },
  {
    id: '2',
    title: 'Fairshare',
    description:
      'FairShare is an innovative app designed to simplify group expense management and ensure financial fairness.',
    technologies: ['TypeScript', 'Bun', 'HTMX', 'Drizzle ORM'],
    liveLink: 'https://idsp.onrender.com/',
    githubLink: 'https://github.com/JustArmaan/FairShare',
    image: '/images/fs_logo.png',
    details: {
      longDescription:
        'FairShare revolutionizes how groups handle shared expenses, from roommates splitting bills to friends on vacation. The app eliminates the complexity of tracking who paid what and calculating who owes whom. With an intuitive interface, multiple currency support, and customizable expense splitting, FairShare makes financial management in groups transparent and stress-free. The platform offers real-time updates, allowing all members to stay informed about their financial status within the group.',
      features: [
        'Create multiple groups for different expense contexts',
        'Add expenses with customizable splitting options',
        'Multi-currency support with automatic conversion',
        'Expense categorization and analytics',
        'Simplified debt settlement suggestions',
        'Receipt scanning and storage',
        'Export expense reports in multiple formats',
      ],
      challenges: [
        'Building a flexible algorithm that handles complex expense splitting scenarios accurately',
        'Implementing reliable currency conversion with up-to-date exchange rates',
        'Creating an intuitive user interface that simplifies complex financial calculations',
        'Ensuring data consistency across multiple users updating expenses simultaneously',
        'Optimizing database performance for large expense histories and user groups',
      ],
      screenshots: [
        '/images/fairshare_screenshot1.png',
        '/images/fairshare_screenshot2.png',
        '/images/fairshare_screenshot3.png',
      ],
      techDetails: [
        {
          name: 'TypeScript',
          description:
            'Provided type safety and improved developer experience, reducing bugs in complex financial calculations.',
        },
        {
          name: 'Bun',
          description:
            "Used as a fast JavaScript runtime, significantly improving the app's performance and development workflow.",
        },
        {
          name: 'HTMX',
          description:
            'Implemented for dynamic content updates without full page reloads, creating a faster and more responsive user experience.',
        },
        {
          name: 'Drizzle ORM',
          description:
            'Chosen for its type-safe database queries and migrations, ensuring data integrity for financial records.',
        },
      ],
    },
  },
  {
    id: '3',
    title: 'Flash Learn',
    description:
      'Flash Learn is a productivity-focused app designed to transform how users study and retain information.',
    technologies: ['Next.js', 'Tailwind CSS', 'OpenAI API', 'Sqlite'],
    liveLink: 'https://flash-learn-f9pl.onrender.com/',
    githubLink: 'https://github.com/byrondray/flash-learn',
    image: '',
    details: {
      longDescription:
        "Flash Learn is an intelligent flashcard application designed to optimize the learning process using proven cognitive science techniques. The app leverages spaced repetition and active recall to help users efficiently memorize and retain information for the long term. With AI-powered card generation and personalized study schedules, Flash Learn adapts to each user's learning patterns, focusing more time on difficult concepts and less on material they've already mastered, making study time significantly more productive.",
      features: [
        'AI-powered flashcard generation from notes, textbooks, or topics',
        'Adaptive spaced repetition algorithm that personalizes review schedules',
        'Rich content support including text, images, code snippets, and math equations',
        'Custom study decks organization with tags and categories',
        'Performance analytics with learning insights and progress tracking',
        'Offline study mode for learning anywhere',
        'Cross-platform synchronization across devices',
      ],
      challenges: [
        'Developing a sophisticated spaced repetition algorithm that effectively adapts to user performance',
        'Integrating AI to generate accurate and meaningful flashcards from varied source materials',
        'Creating a flexible content rendering system that handles different types of learning materials',
        'Building an intuitive interface that encourages consistent study habits',
        'Optimizing for both online and offline usage while maintaining data consistency',
      ],
      screenshots: [
        '/images/flashlearn_screenshot1.png',
        '/images/flashlearn_screenshot2.png',
        '/images/flashlearn_screenshot3.png',
      ],
      techDetails: [
        {
          name: 'Next.js',
          description:
            'Provided a robust React framework with server-side rendering capabilities for better performance and SEO.',
        },
        {
          name: 'Tailwind CSS',
          description:
            'Used for creating a responsive, consistent design system that works across devices and screen sizes.',
        },
        {
          name: 'OpenAI API',
          description:
            'Integrated to power the intelligent flashcard generation feature, creating high-quality study materials from user input.',
        },
        {
          name: 'SQLite',
          description:
            'Implemented as a lightweight database solution that supports both online synchronization and offline functionality.',
        },
      ],
    },
  },
  {
    id: '4',
    title: 'Recipe App',
    description:
      'This app allows users to post their favorite recipes and browse recipes shared by others.',
    technologies: ['Next.js', 'Tailwind CSS', 'Amazon S3'],
    liveLink: 'https://recipe-tracker-pcw2.vercel.app/',
    githubLink: 'https://github.com/byrondray/recipe-tracker',
    image: '',
    details: {
      longDescription:
        'Recipe App is a community-driven platform for culinary enthusiasts to discover, share, and organize recipes. Beyond a simple recipe repository, the application offers interactive features like favoriting, rating, and commenting to foster a vibrant cooking community. Users can upload high-quality images of their creations, organize recipes into collections, and even generate shopping lists based on selected recipes. The platform emphasizes ease of use and beautiful presentation to make cooking more accessible and enjoyable for everyone.',
      features: [
        'User recipe uploads with image support',
        'Advanced search with filtering by ingredients, cuisine, and dietary restrictions',
        'Recipe rating and review system',
        'Personal recipe collections and favorites',
        'Automatic measurement conversion between metric and imperial units',
        'Shopping list generation from selected recipes',
        'Social sharing capabilities',
      ],
      challenges: [
        'Building an efficient image storage and delivery system for recipe photos',
        'Creating a comprehensive search system that understands cooking-related queries',
        'Implementing a reliable measurement conversion system that handles various cooking units',
        'Designing a database schema that efficiently organizes recipes, ingredients, and user interactions',
        'Optimizing performance for image-heavy content loading',
      ],
      screenshots: [
        '/images/recipe_screenshot1.png',
        '/images/recipe_screenshot2.png',
        '/images/recipe_screenshot3.png',
      ],
      techDetails: [
        {
          name: 'Next.js',
          description:
            'Used to create a fast, SEO-friendly application with server-side rendering capabilities.',
        },
        {
          name: 'Tailwind CSS',
          description:
            'Implemented for developing a consistent and responsive design system with minimal CSS overhead.',
        },
        {
          name: 'Amazon S3',
          description:
            'Integrated for scalable, secure storage of user-uploaded recipe images and other media content.',
        },
        {
          name: 'Prisma',
          description:
            'Used as the ORM for type-safe database queries and elegant handling of complex recipe-ingredient relationships.',
        },
      ],
    },
  },
];

export function getProjectById(id: string) {
  return projects.find((project) => project.id === id);
}
