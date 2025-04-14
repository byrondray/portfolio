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
      'A collaborative ridesharing platform that connects parents to coordinate safe, reliable transportation for their children to schools, activities, and events.',
    technologies: ['React Native', 'Expo', 'GraphQL', 'Firebase'],
    liveLink: 'https://relay.arspera.com/',
    githubLink: 'https://github.com/byrondray/relay',
    image: '/images/relay_logo.png',
    details: {
      longDescription:
        'Relay Rideshare is an innovative transportation solution designed specifically for families with busy schedules. The app enables parents within the same neighborhood or community to coordinate rides for their children who are attending the same schools, sports practices, music lessons, or other extracurricular activities. By allowing parents to create trusted connections with other parents, the platform reduces the transportation burden on individual families while ensuring children always have a safe, vetted ride. Parents can track rides in real-time, receive AI powered ride notifications when their children are picked up and dropped off, and manage recurring transportation needs through an intuitive scheduling system. Relay not only saves time and reduces traffic congestion but also fosters stronger community connections and provides peace of mind through its comprehensive safety features.',
      features: [
        'Secure parent verification with multi-step identity confirmation',
        'Smart matching algorithm that suggests potential ride shares based on routes and schedules',
        'Real-time GPS tracking with detailed ETA updates',
        'AI powered notifications for ride confirmations and changes',
        'In-app messaging and notifications for seamless communication',
        'Flexible scheduling for one-time, recurring, and exception handling',
        'Digital check-in/check-out system for ride confirmation',
        'Driver safety verification including background checks and driving record review',
        'Emergency contact system with direct connection to ride drivers',
      ],
      challenges: [
        "Building a trustworthy platform that addresses parents' safety concerns while maintaining user privacy",
        'Creating dynamic scheduling that adapts to changing family needs and last-minute adjustments',
        'Designing an intuitive interface that simplifies complex coordination tasks',
      ],
      screenshots: [
        '/images/relay-screenshot.png',
        '/images/relay-screenshot2.jpg',
      ],
      videoUrl: '/videos/RelayFinalDemo.mp4',
      techDetails: [
        {
          name: 'React Native',
          description:
            'Powers our cross-platform mobile experience, allowing one codebase to deliver native performance on both iOS and Android devices.',
        },
        {
          name: 'Expo',
          description:
            'Accelerates development with pre-built native components and simplified access to device features like GPS, notifications, and camera functionality.',
        },
        {
          name: 'GraphQL',
          description:
            'Handles complex data queries efficiently, enabling the app to request precisely the information needed for each screen and reducing data usage.',
        },
        {
          name: 'Firebase',
          description:
            'Provides secure authentication, real-time database synchronization, cloud messaging for notifications, and scalable backend infrastructure.',
        },
        {
          name: 'Google Maps API',
          description:
            'Enables accurate route planning, ETA calculations, and real-time location tracking throughout the ridesharing process.',
        },
      ],
      processSteps: [
        {
          title: 'User Research & Problem Definition',
          description:
            'Conducted extensive interviews with over 50 parents to understand transportation pain points, safety concerns, and scheduling challenges facing busy families.',
        },
        {
          title: 'Concept Development & Validation',
          description:
            'Created multiple solution concepts and validated them through parent focus groups, refining the core proposition based on feedback about trust, safety, and usability.',
        },
        {
          title: 'UX/UI Design & Prototyping',
          description:
            'Designed a streamlined user experience focused on quick scheduling, clear communication, and peace of mind through visibility. Tested interactive prototypes with potential users to optimize workflows.',
        },
        {
          title: 'Development & Feature Implementation',
          description:
            'Built the app iteratively using React Native and Expo, prioritizing core safety features, scheduling capabilities, and real-time tracking functionality.',
        },
        {
          title: 'Beta Testing & Community Feedback',
          description:
            'Launched a closed beta with selected family networks, gathering real-world usage data and refining features based on actual transportation coordination scenarios.',
        },
      ],
    },
  },
  {
    id: '2',
    title: 'Fairshare',
    description:
      "A modern expense tracking and bill-splitting platform that integrates with users' bank accounts to automatically categorize and divide shared expenses.",
    technologies: [
      'TypeScript',
      'Bun',
      'HTMX',
      'Drizzle ORM',
      'Plaid API',
    ],
    liveLink: 'https://idsp.onrender.com/',
    githubLink: 'https://github.com/JustArmaan/FairShare',
    image: '/images/fs_logo.png',
    details: {
      longDescription:
        "Fairshare transforms group expense management by seamlessly connecting to users' banking data through Plaid API integration. This secure connection allows automatic transaction importing, intelligent expense categorization, and simplified bill splitting. Whether you're sharing an apartment with roommates, planning a group vacation, or managing household expenses with family, Fairshare eliminates tedious manual expense tracking and complex calculations. Users can create multiple expense groups, customize splitting rules based on percentages or fixed amounts, and visualize their spending patterns with interactive charts. The platform generates optimized settlement plans that minimize the number of transactions needed to settle debts, making financial reconciliation faster and more efficient.",
      features: [
        'Secure bank account integration through Plaid API for automatic transaction importing',
        'Multiple splitting methods: equal, percentage-based, itemized, or custom amounts',
        'Interactive spending analytics with category breakdown',
        'Real-time balance tracking and notifications',
        'In-app payment reminders and settlement tracking',
        'Expense history with searchable transactions and receipt storage',
      ],
      challenges: [
        'Implementing secure OAuth flow and token management for Plaid API integration',
        'Designing complex database relationships to track multi-party financial obligations',
        'Creating an intuitive expense allocation interface that handles various splitting scenarios',
        'Optimizing database queries for real-time financial calculations and reporting',
        'Building responsive data visualizations that work across device sizes',
      ],
      processSteps: [
        {
          title: 'Research & Financial Analysis',
          description:
            'Conducted market research on expense sharing needs and analyzed existing solutions to identify gaps in bill-splitting applications. Studied financial behaviors of roommates, travelers, and families to understand unique requirements.',
        },
        {
          title: 'Plaid API Integration Planning',
          description:
            'Evaluated banking API options and selected Plaid for its comprehensive coverage and security features. Designed secure authentication flows and data handling processes compliant with financial regulations.',
        },
        {
          title: 'Data Modeling & Architecture',
          description:
            'Created a flexible data model capable of representing complex financial relationships, transaction histories, and customizable expense allocations. Established schema using Drizzle ORM for type safety.',
        },
        {
          title: 'Frontend Development & HTMX Implementation',
          description:
            'Built a responsive interface using HTMX to achieve dynamic content updates without the complexity of a full SPA framework. Focused on creating an intuitive UX for financial operations.',
        },

        {
          title: 'Data Visualization & Reporting',
          description:
            'Designed interactive charts and reports using Chart.js to provide users with meaningful insights into spending patterns, category breakdowns, and financial trends over time.',
        },
      ],
      techDetails: [
        {
          name: 'TypeScript',
          description:
            'Used throughout the application to ensure type safety in financial calculations and data handling, significantly reducing potential for calculation errors in sensitive financial operations.',
        },
        {
          name: 'Bun',
          description:
            'Leveraged as our JavaScript runtime for its exceptional speed and built-in tooling, resulting in faster API responses and more efficient transaction processing.',
        },
        {
          name: 'HTMX',
          description:
            'Implemented to create a responsive, modern UI while maintaining simplicity. This approach allowed us to deliver dynamic content updates and interactive features without the overhead of a heavy JavaScript framework.',
        },
        {
          name: 'Drizzle ORM',
          description:
            'Employed for database operations, providing type-safe queries and migrations that ensure data integrity for financial records and complex expense relationships.',
        },
        {
          name: 'Plaid API',
          description:
            "Integrated to securely connect with users' financial institutions, enabling automatic transaction importing, account balance monitoring, and streamlined expense tracking with bank-level security.",
        },
      ],
    },
  },
  {
    id: '3',
    title: 'Flash Learn',
    description:
      'An intelligent study companion that automatically transforms lecture notes and study materials into interactive flashcards and quizzes for effective learning.',
    technologies: [
      'Next.js',
      'Tailwind CSS',
      'OpenAI API',
      'SQLite',
      'Kinde Auth',
    ],
    liveLink: 'https://flash-learn-f9pl.onrender.com/',
    githubLink: 'https://github.com/byrondray/flash-learn',
    image: '',
    details: {
      longDescription:
        'Flash Learn bridges the gap between note-taking and effective studying by automatically converting user notes into powerful learning tools. The app uses natural language processing and AI to analyze notes, identify key concepts, and generate targeted flashcards and quiz questions that reinforce understanding. Instead of passively reviewing notes, users actively engage with the material through spaced repetition and active recall - two techniques proven by cognitive science to significantly enhance long-term retention.',
      features: [
        'One-click transformation of notes into comprehensive flashcard sets and quizzes',
        'AI-powered question generation',
        'Performance analytics showing mastery levels across different subject areas',
      ],
      challenges: [
        'Creating natural-sounding quiz questions that effectively test understanding rather than rote memorization',
        'Designing an intuitive note-taking interface that preserves user workflow while enabling powerful conversion features',
        'Optimizing AI processing to generate study materials quickly without excessive API costs',
        'Implementing effective content parsing for various note formats and structures from different academic disciplines',
        'Creating meaningful analytics that help users identify knowledge gaps and learning trends',
      ],
      processSteps: [
        {
          title: 'Learning Science Research',
          description:
            'Researched cognitive science principles behind effective learning, focusing on spaced repetition, active recall, and knowledge reinforcement techniques used in educational psychology.',
        },
        {
          title: 'AI Integration Development',
          description:
            'Implemented OpenAI API integration with custom prompts and constraints designed to generate educationally valuable questions and ensure accurate content extraction from diverse study materials.',
        },
        {
          title: 'User Interface Design',
          description:
            'Designed a distraction-free note-taking environment that seamlessly transitions to study mode, with careful attention to typography, reading comfort, and interaction design.',
        },
        {
          title: 'Testing & Educational Validation',
          description:
            'Conducted testing with students across different academic disciplines to validate the effectiveness of automatically generated study materials and refine the conversion algorithms.',
        },
      ],
      techDetails: [
        {
          name: 'Next.js',
          description:
            'Leveraged for its hybrid rendering capabilities, allowing fast initial page loads with server-side rendering while maintaining dynamic client-side interactions for the note editor and flashcard review system.',
        },
        {
          name: 'Tailwind CSS',
          description:
            'Implemented for creating a clean, accessible interface with consistent design language across the application. The utility-first approach enabled rapid UI development and easy dark/light mode theming.',
        },
        {
          name: 'OpenAI API',
          description:
            'Integrated with custom prompt engineering to power the note analysis and question generation features. Fine-tuned API parameters ensure generated content is educationally valuable and accurately reflects the original notes.',
        },
        {
          name: 'SQLite',
          description:
            'Used as the primary database for storing notes, flashcards, and study progress with a schema optimized for quick retrieval of scheduled review items and efficient spaced repetition algorithms.',
        },
        {
          name: 'Kinde Auth',
          description:
            'Implemented for secure user authentication, allowing students to access their study materials across multiple devices while protecting their academic content.',
        },
      ],
    },
  },
  {
    id: '4',
    title: 'Recipe App',
    description:
      'A culinary social platform where food enthusiasts can discover, share, and organize recipes with intelligent meal planning and shopping list features.',
    technologies: [
      'Next.js',
      'Tailwind CSS',
      'Amazon S3',
      'Drizzle ORM',
      'PostgreSQL',
      'NextAuth.js',
    ],
    liveLink: 'https://recipe-tracker-pcw2.vercel.app/',
    githubLink: 'https://github.com/byrondray/recipe-tracker',
    image: '',
    details: {
      longDescription:
        'Recipe App transforms the cooking experience by combining a beautiful recipe repository with practical meal planning tools. Users can discover dishes through a visually rich interface, upload their own creations with step-by-step instructions, and build personalized collections.',
      features: [
        'Intuitive recipe creation with structured ingredients, instructions, and cooking times',
        'Photo galleries for each recipe with step-by-step cooking visuals',
      ],
      challenges: [
        'Implementing efficient image processing and storage for multiple photos per recipe',
        'Optimizing database queries for complex recipe filtering and search operations',
        'Creating a responsive design that works well for both cooking mode (kitchen use) and browsing mode',
      ],
      processSteps: [
        {
          title: 'User Research & Cooking Workflow Analysis',
          description:
            'Conducted interviews with home cooks to understand their pain points in recipe management, meal planning, and grocery shopping to identify key opportunity areas.',
        },
        {
          title: 'Information Architecture Development',
          description:
            'Created a comprehensive data model for recipes that captures the complexity of ingredients, preparation methods, and variations while remaining flexible for different culinary traditions.',
        },
        {
          title: 'User Experience Design',
          description:
            'Designed user flows and interfaces optimized for both recipe discovery and practical cooking use, with special attention to kitchen-friendly viewing modes and intuitive creation tools.',
        },

        {
          title: 'Image Management Pipeline',
          description:
            'Implemented an S3-based image processing system that optimizes recipe photos for different viewing contexts while maintaining visual quality and fast loading times.',
        },
      ],
      techDetails: [
        {
          name: 'Next.js',
          description:
            'Employed for its hybrid rendering capabilities, delivering fast initial page loads for recipe browsing while enabling dynamic features like real-time recipe scaling and meal planning.',
        },
        {
          name: 'Tailwind CSS',
          description:
            'Used to create a visually appealing, responsive design system that adapts to various devices, including kitchen tablets and mobile phones used while shopping.',
        },
        {
          name: 'Amazon S3',
          description:
            'Implemented with a custom image processing pipeline for storing and serving optimized recipe images, including thumbnail generation and progressive loading for gallery views.',
        },
        {
          name: 'Drizzle ORM',
          description:
            'Leveraged for type-safe database access with a schema designed to efficiently represent complex relationships between recipes, ingredients, users, and meal plans.',
        },
        {
          name: 'NextAuth.js',
          description:
            'Integrated for secure user authentication with multiple provider options, enabling personalized features like saved recipes and custom collections.',
        },
      ],
    },
  },
  {
    id: '5',
    title: 'Warehouse CMS',
    description:
      'A comprehensive inventory management system designed for warehouses to track stock levels, monitor product movement, and optimize supply chain operations.',
    technologies: [
      'ASP.NET Core',
      'Entity Framework Core',
      'MySQL',
      'Razor Pages',
      'Bootstrap',
      'Azure',
    ],
    liveLink:
      'https://warehouse-cms-dubzcvftchbwdhg0.canadacentral-01.azurewebsites.net',
    githubLink: 'https://github.com/byrondray/Warehouse-CMS',
    image: '',
    details: {
      longDescription:
        'Warehouse CMS is an enterprise-grade inventory management solution built to streamline warehouse operations and provide real-time visibility into stock levels. The application enables businesses to track products across multiple warehouse locations, manage incoming and outgoing shipments, and generate comprehensive inventory reports. The platform includes role-based access control to ensure data security while allowing different stakeholders from warehouse staff to management to access the information relevant to their responsibilities.',
      features: [
        'Real-time inventory tracking',
        'Comprehensive reporting dashboard',
        'Supplier management with performance tracking and order history',
        'Role-based access control with detailed audit logging',
        'Integration capabilities with shipping carriers and accounting systems',
      ],
      challenges: [
        'Implementing a flexible database schema that accommodates diverse product attributes while maintaining query performance',
        'Designing an architecture that supports real-time inventory updates even during high-volume operations',
        'Building a secure role-based access system that enforces data compartmentalization while enabling necessary workflows',
        'Implementing a reliable and consistent transaction system for inventory movements to maintain data integrity',
      ],
      processSteps: [
        {
          title: 'Requirements Analysis & Warehouse Operations Study',
          description:
            'Conducted on-site warehouse visits and stakeholder interviews to understand inventory workflows, pain points, and operational requirements across different types of warehouse environments.',
        },
        {
          title: 'Database Schema Design',
          description:
            'Developed a comprehensive data model using Entity Framework Core with Code First approach, creating a flexible schema that handles various product types, warehouse configurations, and inventory movement patterns.',
        },
        {
          title: 'Security Architecture Planning',
          description:
            'Designed a multi-layered security system with role-based access control, data encryption, and comprehensive audit logging to ensure data protection and regulatory compliance.',
        },
        {
          title: 'Core Inventory Logic Implementation',
          description:
            'Built the central inventory management system with transaction-based stock movements, ensuring data consistency through proper unit of work patterns and concurrency handling.',
        },
        {
          title: 'Reporting & Analytics Engine Development',
          description:
            'Created a flexible reporting system using optimized database queries and materialized views to generate real-time inventory insights without impacting operational performance.',
        },
        {
          title: 'User Interface Development',
          description:
            'Implemented a responsive, accessible interface using Razor Pages and Bootstrap that works efficiently on both desktop workstations and mobile warehouse devices.',
        },
        {
          title: 'Performance Optimization & Scalability Testing',
          description:
            'Conducted extensive load testing to identify and resolve performance bottlenecks, implementing caching strategies and query optimizations to ensure the system handles growing inventory volumes.',
        },
      ],
      techDetails: [
        {
          name: 'ASP.NET Core',
          description:
            'Utilized as the primary framework for building a high-performance, cross-platform web application with robust security features and excellent scalability for warehouse operations.',
        },
        {
          name: 'Entity Framework Core',
          description:
            'Implemented as the ORM with a code-first approach, enabling type-safe database access and complex relationship modeling for inventory items, warehouses, and transactions.',
        },
        {
          name: 'MySQL',
          description:
            'Selected as the database system for its reliability, performance, and cost-effectiveness, with optimized indexing strategies for inventory-specific query patterns.',
        },
        {
          name: 'Razor Pages',
          description:
            'Used for creating a clean, maintainable UI architecture with page-focused development that aligns well with the distinct functional areas of warehouse management.',
        },
        {
          name: 'Bootstrap',
          description:
            'Implemented for developing a responsive interface that works seamlessly across warehouse workstations, handheld scanners, and management dashboards.',
        },
        {
          name: 'Azure',
          description:
            'Deployed to Azure App Service with database backups, scheduled tasks, and monitoring to ensure high availability and disaster recovery capabilities essential for business-critical inventory systems.',
        },
      ],
    },
  },
];

export function getProjectById(id: string) {
  return projects.find((project) => project.id === id);
}
