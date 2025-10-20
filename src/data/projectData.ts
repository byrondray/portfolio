// Utility function to create URL-friendly slugs
export function createSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "") // Remove special characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with single
    .trim(); // Remove leading/trailing whitespace
}

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
    videos?: {
      url: string;
      title?: string;
      description?: string;
      thumbnail?: string;
    }[];
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
    id: "10",
    title: "Arkhet",
    description:
      "Worked on an advanced AI-powered design and prototyping platform that enables product managers to create interactive user interfaces and rapidly ideate and iterate on product concepts",
    technologies: [
      "React",
      "TypeScript",
      "PostgreSQL",
      "Drizzle ORM",
      "Tailwind CSS",
      "Bun",
      "Zustand",
    ],
    liveLink: "https://arkhet.com",
    githubLink: "",
    image: "/images/arkhet-logo.svg",
    details: {
      longDescription:
        "Contributed to developing a sophisticated prototyping platform that enables product managers to rapidly transform ideas into interactive user interfaces. Focused on building core canvas functionality that accelerates the design process, implementing drag-and-drop tools that allow quick iteration. Created essential features including copy/paste functionality, alt-drag operations, and annotation tools that streamline the feedback loop from concept to prototype. Helped build the style guide system enabling users to maintain design consistency while rapidly experimenting with different visual approaches. Delivered numerous workflow optimizations and added new canvas components like tables that reduce time from idea to testable prototype. Collaborated with the team on code reviews and AI feature integration that further accelerates the prototyping process. The project strengthened expertise in modern React patterns, TypeScript development, and building complex interactive applications focused on developer and designer productivity.",

      features: [
        "Built interactive annotation tools for design feedback",
        "Implemented copy/paste and alt-drag functionality for improved workflow",
        "Developed backend usage tracking and management systems",
        "Created style customization system for colors and typography",
        "Added new canvas components including tables and other UI elements",
        "Collaborated on AI feature development",
        "Delivered quality of life improvements across the platform",
      ],

      challenges: [
        "Building complex canvas interactions with smooth copy/paste and drag operations",
        "Implementing scalable backend systems for resource management",
        "Creating intuitive annotation and feedback systems",
        "Developing a flexible style guide that integrates with the generation system",
        "Optimizing canvas performance with multiple interactive components",
        "Ensuring seamless user experience across complex design workflows",
      ],

      screenshots: [
        "/images/arkhet-web-summit.jpg",
        "/images/arkhet-hangout.PNG",
      ],

      processSteps: [
        {
          title: "Canvas Functionality Enhancement",
          description:
            "Improved core canvas features by implementing copy/paste operations, alt-drag functionality, and adding new interactive components like tables. Participated in a major canvas refactor that significantly improved performance, ensuring smooth interactions even with complex designs. Focused on creating intuitive interactions that speed up the design process.",
        },
        {
          title: "Annotation Tool Development",
          description:
            "Helped build a sophisticated system allowing users to add feedback and annotations. This feature bridges the gap between visual design and requirements, enhancing collaboration and iteration.",
        },
        {
          title: "Backend System Implementation",
          description:
            "Developed the complete backend infrastructure for resource management and usage tracking to enable sustainable platform operations.",
        },
        {
          title: "Style Guide System Creation",
          description:
            "Contributed to a comprehensive style guide feature allowing users to define custom colors and typography that integrate with their designs, ensuring brand consistency.",
        },
        {
          title: "Quality of Life Improvements",
          description:
            "Identified and implemented numerous UX enhancements based on user feedback and testing, improving overall platform usability and reducing friction in common workflows.",
        },
        {
          title: "Code Review & Integration Support",
          description:
            "Participated in code reviews for AI-related features and successfully integrated new functionality into existing tools, ensuring smooth collaboration with the AI development team.",
        },
      ],

      techDetails: [
        {
          name: "React & TypeScript",
          description:
            "Built complex, type-safe interactive components for the canvas system including copy/paste handlers, drag operations, and dynamic UI elements. Developed custom hooks for state management and canvas interactions.",
        },
        {
          name: "Canvas Development",
          description:
            "Implemented sophisticated canvas features including component manipulation, copy/paste functionality, alt-drag operations, and interactive overlays for annotations.",
        },
        {
          name: "Backend Development",
          description:
            "Developed backend systems for resource management using PostgreSQL and Drizzle ORM, implementing efficient tracking and data management.",
        },
        {
          name: "Zustand State Management",
          description:
            "Utilized Zustand for managing complex application state across canvas interactions, and style guides",
        },
        {
          name: "Component Architecture",
          description:
            "Built reusable canvas components including tables and other UI elements, focusing on performance optimization and smooth user interactions within the design environment.",
        },
        {
          name: "Style Guide Implementation",
          description:
            "Contributed to the creation of a flexible style system allowing users to define and apply custom colors and typography, integrating seamlessly with the existing design workflows.",
        },
      ],
    },
  },
  {
    id: "7",
    title: "Rezen Gaming",
    description:
      "A competitive gaming wager platform that enables players to create and accept monetary wagers across multiple gaming platforms, with integrated team management, dispute resolution, and secure payment processing.",
    technologies: [
      "Next.js 15",
      "TypeScript",
      "Drizzle ORM",
      "SQLite",
      "Kinde Auth",
      "Stripe",
      "AWS Lambda",
      "WebSocket",
      "Framer Motion",
      "Tailwind CSS",
    ],
    liveLink: "https://rezengaming.com",
    githubLink: "",
    image: "/images/icon-256.svg",
    details: {
      longDescription:
        "Rezen Gaming is a comprehensive competitive gaming platform that transforms casual gaming into organized, monetized competitions. The platform enables players to create wagers for popular games, challenge opponents individually or as teams, and compete for real money prizes. Built with enterprise-grade security and financial handling, the platform supports cross-platform gaming (PlayStation, Xbox, PC), automated dispute resolution, real-time notifications, and integrated payment processing through Stripe. Players can form teams, track their gaming performance, manage their gaming accounts across platforms, and participate in a trusted ecosystem where fair play is enforced through comprehensive verification systems.",
      features: [
        "Multi-platform wager creation supporting individual and team competitions",
        "Secure payment processing with Stripe integration and automated escrow system",
        "Real-time WebSocket notifications for wager updates and team communications",
        "Comprehensive dispute resolution system with evidence submission and admin review",
        "Cross-platform gaming account integration (PlayStation Network, Xbox Live, Steam)",
        "Team management system with invitation handling and member coordination",
        "Advanced wager filtering and discovery with game-specific categorization",
        "Automated balance management and transaction history tracking",
        "Push notification system for mobile engagement and real-time updates",
        "Responsive design optimized for desktop and mobile gaming experiences",
      ],
      challenges: [
        "Implementing secure financial transactions with proper escrow handling to protect all parties in wager agreements",
        "Designing complex database relationships to handle multi-participant wagers, team dynamics, and dispute workflows",
        "Building a fair dispute resolution system that can handle score disagreements and evidence verification",
        "Creating a scalable WebSocket architecture for real-time notifications across thousands of concurrent users",
        "Integrating with multiple gaming platform APIs while maintaining data consistency and user privacy",
        "Implementing comprehensive validation systems to prevent fraud and ensure fair play",
        "Optimizing database performance for complex queries involving wagers, participants, and financial calculations",
      ],
      processSteps: [
        {
          title: "Market Research & Competitive Analysis",
          description:
            "Conducted extensive research into the competitive gaming and esports betting markets, analyzing existing platforms to identify gaps in user experience, security, and feature sets that could be addressed by a new platform.",
        },
        {
          title: "Architecture Design & Technology Selection",
          description:
            "Designed a scalable architecture using Next.js 15 with TypeScript for type safety, Drizzle ORM for database management, and AWS services for cloud infrastructure. Selected technologies prioritizing security, performance, and developer experience.",
        },
        {
          title: "Financial System Development",
          description:
            "Implemented secure payment processing with Stripe, including escrow functionality, automated payouts, dispute handling, and comprehensive financial audit trails to ensure transparent and secure monetary transactions.",
        },
        {
          title: "Gaming Platform Integration",
          description:
            "Developed secure OAuth integrations with major gaming platforms (PlayStation Network, Xbox Live, Steam) to verify player identities and gaming accounts while maintaining user privacy and platform compliance.",
        },
        {
          title: "Real-time Communication System",
          description:
            "Built a WebSocket-based notification system using AWS Lambda for real-time updates on wager status, team invitations, dispute notifications, and other critical platform events to ensure users stay informed.",
        },
        {
          title: "Team Collaboration & Testing",
          description:
            "Coordinated development across a 3-person team, implementing comprehensive testing strategies, code reviews, and deployment pipelines to ensure platform stability and security for the September 2024 launch.",
        },
      ],
      techDetails: [
        {
          name: "Next.js 15",
          description:
            "Leveraged the latest Next.js features including App Router, Server Components, and Turbopack for optimal performance and developer experience. The framework provides excellent SEO capabilities and hybrid rendering for the gaming platform.",
        },
        {
          name: "TypeScript",
          description:
            "Implemented throughout the entire codebase to ensure type safety in financial calculations, gaming data handling, and API interactions. Critical for preventing bugs in monetary transactions and maintaining code quality across the team.",
        },
        {
          name: "Drizzle ORM",
          description:
            "Used for type-safe database operations with a complex schema handling users, wagers, teams, disputes, and financial transactions. Provides excellent TypeScript integration and migration management for evolving data requirements.",
        },
        {
          name: "Stripe Integration",
          description:
            "Implemented for secure payment processing, including account creation, payment methods, escrow handling, automated payouts, and comprehensive webhook handling for real-time payment status updates.",
        },
        {
          name: "AWS Lambda & WebSocket",
          description:
            "Built a serverless notification system using AWS Lambda functions and WebSocket connections for real-time communication, ensuring scalable message delivery for wager updates, team communications, and platform notifications.",
        },
        {
          name: "Kinde Auth",
          description:
            "Integrated for secure user authentication with multi-factor authentication support, social login options, and comprehensive user management features essential for a financial gaming platform.",
        },
      ],
      screenshots: [],
    },
  },
  {
    id: "1",
    title: "Relay Rideshare",
    description:
      "A collaborative ridesharing platform that connects parents to coordinate safe, reliable transportation for their children to schools, activities, and events.",
    technologies: ["React Native", "Expo", "GraphQL", "Firebase", "OpenAI API"],
    liveLink: "https://relay.arspera.com/",
    githubLink: "https://github.com/byrondray/relay",
    image: "/images/relay_logo.png",
    details: {
      longDescription:
        "Relay Rideshare is an innovative transportation solution designed specifically for families with busy schedules. The app enables parents within the same neighborhood or community to coordinate rides for their children who are attending the same schools, sports practices, music lessons, or other extracurricular activities. By allowing parents to create trusted connections with other parents, the platform reduces the transportation burden on individual families while ensuring children always have a safe, vetted ride. Parents can track rides in real-time, receive AI powered ride notifications when their children are picked up and dropped off, and manage recurring transportation needs through an intuitive scheduling system. Relay not only saves time and reduces traffic congestion but also fosters stronger community connections and provides peace of mind through its comprehensive safety features.",
      features: [
        "Secure parent verification with multi-step identity confirmation",
        "Smart matching algorithm that suggests potential ride shares based on routes and schedules",
        "Real-time GPS tracking with detailed ETA updates",
        "AI powered notifications for ride confirmations and changes",
        "In-app messaging and notifications for seamless communication",
        "Flexible scheduling for one-time, recurring, and exception handling",
        "Digital check-in/check-out system for ride confirmation",
        "Driver safety verification including background checks and driving record review",
        "Emergency contact system with direct connection to ride drivers",
      ],
      challenges: [
        "Building a trustworthy platform that addresses parents' safety concerns while maintaining user privacy",
        "Creating dynamic scheduling that adapts to changing family needs and last-minute adjustments",
        "Designing an intuitive interface that simplifies complex coordination tasks",
      ],
      screenshots: [
        "/images/relay-screenshot2.jpg",
        "/images/relay-screenshot.png",
        "/images/relay-booth.JPG",
      ],
      videos: [
        {
          url: "/videos/relay-showcase.mp4",
          title: "Relay Showcase Day",
          description:
            "Judges announcement of Relay Rideshare as the winner of the Showcase Day",
          thumbnail: "/images/relay-booth.JPG",
        },
        {
          url: "/videos/RelayFinalDemo.mp4",
          title: "Full App Demo",
          description:
            "Complete overview of Relay Rideshare features and user experience",
          thumbnail: "/images/relay-screenshot2.jpg",
        },
      ],
      techDetails: [
        {
          name: "React Native",
          description:
            "Powers our cross-platform mobile experience, allowing one codebase to deliver native performance on both iOS and Android devices.",
        },
        {
          name: "Expo",
          description:
            "Accelerates development with pre-built native components and simplified access to device features like GPS, notifications, and camera functionality.",
        },
        {
          name: "GraphQL",
          description:
            "Handles complex data queries efficiently, enabling the app to request precisely the information needed for each screen and reducing data usage.",
        },
        {
          name: "Firebase",
          description:
            "Provides secure authentication, real-time database synchronization, cloud messaging for notifications, and scalable backend infrastructure.",
        },
        {
          name: "Google Maps API",
          description:
            "Enables accurate route planning, ETA calculations, and real-time location tracking throughout the ridesharing process.",
        },
      ],
      processSteps: [
        {
          title: "User Research & Problem Definition",
          description:
            "Conducted extensive interviews with over 50 parents to understand transportation pain points, safety concerns, and scheduling challenges facing busy families.",
        },
        {
          title: "Concept Development & Validation",
          description:
            "Created multiple solution concepts and validated them through parent focus groups, refining the core proposition based on feedback about trust, safety, and usability.",
        },
        {
          title: "UX/UI Design & Prototyping",
          description:
            "Designed a streamlined user experience focused on quick scheduling, clear communication, and peace of mind through visibility. Tested interactive prototypes with potential users to optimize workflows.",
        },
        {
          title: "Development & Feature Implementation",
          description:
            "Built the app iteratively using React Native and Expo, prioritizing core safety features, scheduling capabilities, and real-time tracking functionality.",
        },
        {
          title: "Beta Testing & Community Feedback",
          description:
            "Launched a closed beta with selected family networks, gathering real-world usage data and refining features based on actual transportation coordination scenarios.",
        },
      ],
    },
  },
  {
    id: "3",
    title: "Flash Learn",
    description:
      "An intelligent study companion that automatically transforms lecture notes and study materials into interactive flashcards and quizzes for effective learning.",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "OpenAI API",
      "SQLite",
      "Socket.io",
      "Kinde Auth",
    ],
    liveLink: "https://flash-learn-production.up.railway.app/",
    githubLink: "https://github.com/byrondray/flash-learn",
    image: "",
    details: {
      longDescription:
        "Flash Learn bridges the gap between note-taking and effective studying by automatically converting user notes into powerful learning tools. The app uses natural language processing and AI to analyze notes, identify key concepts, and generate targeted flashcards and quiz questions that reinforce understanding. Instead of passively reviewing notes, users actively engage with the material through spaced repetition and active recall - two techniques proven by cognitive science to significantly enhance long-term retention.",
      features: [
        "One-click transformation of notes into comprehensive flashcard sets and quizzes",
        "AI-powered question generation",
        "Realtime collaborative note-taking and study sessions with live cursor tracking",
        "Performance analytics showing mastery levels across different subject areas",
        "Shared study spaces for group learning and collaborative flashcard creation",
      ],
      challenges: [
        "Creating natural-sounding quiz questions that effectively test understanding rather than rote memorization",
        "Designing an intuitive note-taking interface that preserves user workflow while enabling powerful conversion features",
        "Implementing realtime synchronization across multiple users while maintaining data consistency and handling conflicts",
        "Optimizing AI processing to generate study materials quickly without excessive API costs",
        "Building scalable WebSocket infrastructure to support live collaboration without performance degradation",
        "Implementing effective content parsing for various note formats and structures from different academic disciplines",
        "Creating meaningful analytics that help users identify knowledge gaps and learning trends",
      ],
      processSteps: [
        {
          title: "Learning Science Research",
          description:
            "Researched cognitive science principles behind effective learning, focusing on spaced repetition, active recall, and knowledge reinforcement techniques used in educational psychology.",
        },
        {
          title: "AI Integration Development",
          description:
            "Implemented OpenAI API integration with custom prompts and constraints designed to generate educationally valuable questions and ensure accurate content extraction from diverse study materials.",
        },
        {
          title: "User Interface Design",
          description:
            "Designed a distraction-free note-taking environment that seamlessly transitions to study mode, with careful attention to typography, reading comfort, and interaction design.",
        },
        {
          title: "Realtime Collaboration Implementation",
          description:
            "Built Socket.io infrastructure for live document editing, user presence indicators, and synchronized flashcard sessions.",
        },
        {
          title: "Testing & Educational Validation",
          description:
            "Conducted testing with students across different academic disciplines to validate the effectiveness of automatically generated study materials and collaborative features, refining both AI algorithms and realtime sync performance.",
        },
      ],
      techDetails: [
        {
          name: "Next.js",
          description:
            "Leveraged for its hybrid rendering capabilities, allowing fast initial page loads with server-side rendering while maintaining dynamic client-side interactions for the note editor and flashcard review system.",
        },
        {
          name: "Tailwind CSS",
          description:
            "Implemented for creating a clean, accessible interface with consistent design language across the application. The utility-first approach enabled rapid UI development and easy dark/light mode theming.",
        },
        {
          name: "OpenAI API",
          description:
            "Integrated with custom prompt engineering to power the note analysis and question generation features. Fine-tuned API parameters ensure generated content is educationally valuable and accurately reflects the original notes.",
        },
        {
          name: "SQLite",
          description:
            "Used as the primary database for storing notes, flashcards, and study progress with a schema optimized for quick retrieval of scheduled review items and efficient spaced repetition algorithms.",
        },
        {
          name: "Socket.io",
          description:
            "Powers the realtime collaboration features including live document editing, user presence indicators, and synchronized study sessions. Handles WebSocket connections with automatic fallback to long polling for reliability.",
        },
        {
          name: "Kinde Auth",
          description:
            "Implemented for secure user authentication, allowing students to access their study materials across multiple devices while protecting their academic content and managing collaborative permissions.",
        },
      ],
      screenshots: [
        "/images/fl-home.png",
        "/images/fl-rich-text.png",
        "/images/fl-generate-note.png",
      ],
    },
  },
  {
    id: "2",
    title: "Fairshare",
    description:
      "A modern expense tracking and bill-splitting platform that integrates with users' bank accounts to automatically categorize and divide shared expenses.",
    technologies: ["TypeScript", "Bun", "HTMX", "Drizzle ORM", "Plaid API"],
    liveLink: "https://idsp.onrender.com/",
    githubLink: "https://github.com/JustArmaan/FairShare",
    image: "/images/fs_logo.png",
    details: {
      longDescription:
        "Fairshare transforms group expense management by seamlessly connecting to users' banking data through Plaid API integration. This secure connection allows automatic transaction importing, intelligent expense categorization, and simplified bill splitting. Whether you're sharing an apartment with roommates, planning a group vacation, or managing household expenses with family, Fairshare eliminates tedious manual expense tracking and complex calculations. Users can create multiple expense groups, customize splitting rules based on percentages or fixed amounts, and visualize their spending patterns with interactive charts. The platform generates optimized settlement plans that minimize the number of transactions needed to settle debts, making financial reconciliation faster and more efficient.",
      features: [
        "Secure bank account integration through Plaid API for automatic transaction importing",
        "Multiple splitting methods: equal, percentage-based, itemized, or custom amounts",
        "Interactive spending analytics with category breakdown",
        "Real-time balance tracking and notifications",
        "In-app payment reminders and settlement tracking",
        "Expense history with searchable transactions and receipt storage",
      ],
      challenges: [
        "Implementing secure OAuth flow and token management for Plaid API integration",
        "Designing complex database relationships to track multi-party financial obligations",
        "Creating an intuitive expense allocation interface that handles various splitting scenarios",
        "Optimizing database queries for real-time financial calculations and reporting",
        "Building responsive data visualizations that work across device sizes",
      ],
      processSteps: [
        {
          title: "Research & Financial Analysis",
          description:
            "Conducted market research on expense sharing needs and analyzed existing solutions to identify gaps in bill-splitting applications. Studied financial behaviors of roommates, travelers, and families to understand unique requirements.",
        },
        {
          title: "Plaid API Integration Planning",
          description:
            "Evaluated banking API options and selected Plaid for its comprehensive coverage and security features. Designed secure authentication flows and data handling processes compliant with financial regulations.",
        },
        {
          title: "Data Modeling & Architecture",
          description:
            "Created a flexible data model capable of representing complex financial relationships, transaction histories, and customizable expense allocations. Established schema using Drizzle ORM for type safety.",
        },
        {
          title: "Frontend Development & HTMX Implementation",
          description:
            "Built a responsive interface using HTMX to achieve dynamic content updates without the complexity of a full SPA framework. Focused on creating an intuitive UX for financial operations.",
        },

        {
          title: "Data Visualization & Reporting",
          description:
            "Designed interactive charts and reports using Chart.js to provide users with meaningful insights into spending patterns, category breakdowns, and financial trends over time.",
        },
      ],
      techDetails: [
        {
          name: "TypeScript",
          description:
            "Used throughout the application to ensure type safety in financial calculations and data handling, significantly reducing potential for calculation errors in sensitive financial operations.",
        },
        {
          name: "Bun",
          description:
            "Leveraged as our JavaScript runtime for its exceptional speed and built-in tooling, resulting in faster API responses and more efficient transaction processing.",
        },
        {
          name: "HTMX",
          description:
            "Implemented to create a responsive, modern UI while maintaining simplicity. This approach allowed us to deliver dynamic content updates and interactive features without the overhead of a heavy JavaScript framework.",
        },
        {
          name: "Drizzle ORM",
          description:
            "Employed for database operations, providing type-safe queries and migrations that ensure data integrity for financial records and complex expense relationships.",
        },
        {
          name: "Plaid API",
          description:
            "Integrated to securely connect with users' financial institutions, enabling automatic transaction importing, account balance monitoring, and streamlined expense tracking with bank-level security.",
        },
      ],
      screenshots: [
        "/images/fs-homepage.png",
        "/images/fs-home-page.png",
        "/images/fs-group-page.png",
      ],
    },
  },

  {
    id: "9",
    title: "AI Stock Tracker",
    description:
      "A comprehensive AI-powered stock analysis platform featuring advanced LSTM neural networks, multi-model sentiment analysis, and real-time prediction capabilities with a full-stack FastAPI backend and React Native mobile application.",
    technologies: [
      "Python",
      "FastAPI",
      "TensorFlow",
      "PyTorch",
      "Transformers",
      "LSTM",
      "React Native",
      "Expo",
      "PostgreSQL",
      "Redis",
      "WebSocket",
      "Scikit-learn",
      "NLTK",
      "Celery",
    ],
    liveLink: "",
    githubLink: "https://github.com/byrondray/ai-stock-tracker",
    image: "",
    details: {
      longDescription:
        "AI Stock Tracker represents a cutting-edge fusion of financial analysis and artificial intelligence, delivering sophisticated stock prediction capabilities through advanced machine learning architectures. The platform combines multiple AI models including LSTM neural networks for time series forecasting, transformer-based sentiment analysis for news impact assessment, and comprehensive technical analysis engines. Built with a robust FastAPI backend and an intuitive React Native mobile interface, the system provides real-time predictions, sentiment-driven market insights, and advanced portfolio analytics. The ML pipeline features a custom feature store for consistent data processing, multi-horizon prediction capabilities, and production-ready model management with automated retraining workflows.",

      features: [
        "Advanced LSTM neural networks with 60-day sequence learning for multi-horizon stock price prediction",
        "Multi-model sentiment analysis using Hugging Face transformers, VADER, and TextBlob for financial news processing",
        "Comprehensive technical indicator engine with 20+ advanced indicators (RSI, MACD, Bollinger Bands, ATR, ADX)",
        "Custom feature store ensuring consistent data preprocessing between training and inference pipelines",
        "Real-time WebSocket integration for live market data and prediction updates",
        "Intelligent portfolio analytics with risk assessment and performance tracking",
        "Advanced data validation and preprocessing pipeline with outlier detection and normalization",
        "Production-ready model versioning and metadata management system",
        "Asynchronous task processing with Celery for computationally intensive ML operations",
        "Robust caching layer with Redis for optimized prediction retrieval and data management",
        "Cross-platform mobile application with offline capability and push notifications",
        "Comprehensive API documentation with interactive testing interface",
      ],

      challenges: [
        "Designing a scalable LSTM architecture capable of handling multi-dimensional time series data with varying prediction horizons while maintaining temporal consistency",
        "Implementing production-grade feature engineering pipeline that ensures consistent data preprocessing between model training and real-time inference",
        "Building a multi-model sentiment analysis system that effectively combines transformer models, lexicon-based approaches, and domain-specific financial sentiment scoring",
        "Creating an efficient data validation framework that handles missing values, outliers, and market anomalies without compromising prediction accuracy",
        "Developing a robust model management system with automated retraining, version control, and A/B testing capabilities for continuous model improvement",
        "Optimizing memory usage and computational efficiency for real-time predictions while handling multiple concurrent users and large datasets",
        "Implementing sophisticated technical indicator calculations that maintain mathematical accuracy while handling edge cases in financial data",
        "Designing a scalable WebSocket architecture for real-time data streaming without overwhelming the ML inference pipeline",
      ],

      screenshots: [
        "/images/stock-tracker4.PNG",
        "/images/stock-tracker2.PNG",
        "/images/stock-tracker3.PNG",
      ],

      videos: [
        {
          url: "/images/stock-tracker1.mp4",
          title: "AI Stock Tracker Demo",
          description:
            "Complete demonstration of the AI Stock Tracker platform featuring LSTM predictions and sentiment analysis",
          thumbnail: "/images/stock-tracker2.PNG",
        },
      ],

      techDetails: [
        {
          name: "TensorFlow & LSTM Networks",
          description:
            "Implemented advanced LSTM architecture with custom layers for sequential pattern recognition in stock price movements. Features include dropout regularization, batch normalization, and adaptive learning rates with early stopping to prevent overfitting while maintaining predictive accuracy.",
        },
        {
          name: "Hugging Face Transformers",
          description:
            "Integrated pre-trained financial sentiment models including FinBERT and custom fine-tuned transformers for analyzing market news, social media sentiment, and earnings reports. Implements attention mechanisms to weight sentiment impact on price predictions.",
        },
        {
          name: "Custom Feature Store",
          description:
            "Built a production-ready feature engineering pipeline that calculates 18+ technical indicators, handles missing data imputation, and ensures consistency between training and inference. Includes automated feature validation and drift detection.",
        },
        {
          name: "FastAPI & Async Architecture",
          description:
            "Leveraged FastAPI for high-performance async API endpoints with automatic OpenAPI documentation. Implements connection pooling, request queuing, and efficient database operations for handling concurrent ML inference requests.",
        },
        {
          name: "PyTorch Integration",
          description:
            "Utilized PyTorch for experimental model architectures and research prototyping, enabling rapid iteration on new neural network designs and ensemble methods for improved prediction accuracy.",
        },
        {
          name: "Redis & Caching Strategy",
          description:
            "Implemented intelligent caching system for prediction results, model artifacts, and preprocessed features. Reduces API response times by 80% and enables efficient batch processing of multiple stock predictions.",
        },
        {
          name: "Scikit-learn Pipeline",
          description:
            "Integrated comprehensive preprocessing pipeline with RobustScaler, MinMaxScaler, and custom feature transformers. Includes automated hyperparameter tuning and cross-validation for optimal model performance.",
        },
        {
          name: "React Native & Real-time Updates",
          description:
            "Built cross-platform mobile application with Redux state management, real-time WebSocket connections, and optimized chart rendering using react-native-chart-kit for displaying prediction visualizations and portfolio analytics.",
        },
      ],

      processSteps: [
        {
          title: "Financial Data Research & ML Architecture Design",
          description:
            "Conducted extensive research on financial time series analysis, studying market microstructure, technical analysis principles, and deep learning approaches for stock prediction. Designed a modular ML architecture supporting multiple prediction models and real-time inference.",
        },
        {
          title: "Advanced Feature Engineering & Data Pipeline",
          description:
            "Developed a comprehensive feature store calculating 18+ technical indicators, price-based features, and volume analysis metrics. Implemented robust data validation, outlier detection, and normalization strategies to ensure high-quality training data.",
        },
        {
          title: "LSTM Neural Network Development",
          description:
            "Built and optimized LSTM networks with custom architectures for multi-horizon predictions. Implemented advanced techniques including attention mechanisms, residual connections, and ensemble methods to improve forecasting accuracy and handle market volatility.",
        },
        {
          title: "Sentiment Analysis Integration",
          description:
            "Integrated multiple NLP models including transformer-based financial sentiment analysis, VADER sentiment scoring, and custom news processing pipelines. Developed correlation analysis between sentiment scores and price movements for enhanced prediction accuracy.",
        },
        {
          title: "Production ML Infrastructure",
          description:
            "Implemented production-ready ML infrastructure with model versioning, automated retraining workflows, A/B testing capabilities, and comprehensive monitoring. Built efficient caching and batch processing systems for scalable real-time predictions.",
        },
        {
          title: "Mobile Application & Real-time Integration",
          description:
            "Developed React Native mobile application with real-time WebSocket connections, interactive charting capabilities, and offline functionality. Implemented Redux for state management and optimized data synchronization between backend predictions and mobile interface.",
        },
        {
          title: "Performance Optimization & Validation",
          description:
            "Conducted extensive backtesting across multiple market conditions, optimized model performance using cross-validation techniques, and implemented comprehensive error analysis. Fine-tuned API performance and established monitoring systems for production deployment.",
        },
      ],
    },
  },
  {
    id: "11",
    title: "Los Hermanos",
    description:
      "A modern e-commerce platform for industrial clothing and work uniforms, featuring an admin dashboard for inventory management, shopping cart functionality, and a customer-focused browsing experience.",
    technologies: [
      "SvelteKit",
      "TypeScript",
      "SQLite",
      "Drizzle ORM",
      "Tailwind CSS 4",
      "Vite",
    ],
    liveLink: "loshermanos.app",
    githubLink: "",
    image: "",
    details: {
      longDescription:
        "Los Hermanos is a comprehensive e-commerce solution built for a Colombian industrial clothing business operating since 1985. The platform provides a seamless shopping experience for customers seeking work uniforms and industrial apparel, while offering powerful administrative tools for inventory management. Built with modern web technologies including SvelteKit 5 and Tailwind CSS 4, the application features a complete shopping cart system, product categorization, image management, and secure admin authentication. Developed collaboratively by a two-person team, the project emphasizes performance, user experience, and maintainability with TypeScript and Drizzle ORM ensuring type safety throughout the stack.",

      features: [
        "Complete e-commerce shopping experience with product browsing and categorization",
        "Shopping cart functionality with real-time updates and persistent storage",
        "Admin dashboard for managing products, categories, and inventory",
        "Secure authentication system for admin users with password hashing",
        "Image upload and management system with blob storage for product photos",
        "Product catalog with filtering by categories and in-stock status",
        "Responsive design optimized for desktop and mobile shopping experiences",
        "SEO-optimized pages with proper meta tags and structured data",
        "Toast notification system for user feedback",
        "Contact page for customer inquiries",
      ],

      challenges: [
        "Building a performant image handling system using SQLite blob storage for product photos",
        "Implementing a type-safe shopping cart with persistent state management across sessions",
        "Creating an intuitive admin interface for non-technical users to manage inventory",
        "Designing a scalable database schema with proper relationships between products and categories",
        "Ensuring responsive design works seamlessly across devices for shopping experience",
        "Implementing secure authentication without over-engineering for a small business use case",
        "Optimizing database queries for product listing and filtering operations",
      ],

      screenshots: [],

      processSteps: [
        {
          title: "Requirements Gathering & Business Analysis",
          description:
            "Collaborated with the business owner to understand their needs for managing an industrial clothing catalog, identifying key requirements for inventory management, customer browsing, and order handling.",
        },
        {
          title: "Technology Stack Selection",
          description:
            "Selected SvelteKit 5 for its excellent performance and developer experience, Drizzle ORM for type-safe database operations, and SQLite for a lightweight yet powerful database solution suitable for small to medium e-commerce.",
        },
        {
          title: "Database Schema Design",
          description:
            "Designed a normalized database schema with tables for products, categories, and admin users, implementing proper relationships and constraints to ensure data integrity across the inventory system.",
        },
        {
          title: "Admin Dashboard Development",
          description:
            "Built a comprehensive admin interface for managing products and categories, including image upload functionality, inventory status updates, and CRUD operations with proper authentication guards.",
        },
        {
          title: "E-commerce Frontend Implementation",
          description:
            "Developed the customer-facing website with product browsing, category filtering, detailed product pages, and a shopping cart system with persistent state management using Svelte stores.",
        },
        {
          title: "Image Management System",
          description:
            "Implemented a blob storage system within SQLite for product images with API endpoints for serving images, ensuring efficient loading and proper content-type handling.",
        },
        {
          title: "Team Collaboration & Code Review",
          description:
            "Worked collaboratively with another developer, conducting code reviews, coordinating feature development, and ensuring consistent code quality throughout the project lifecycle.",
        },
      ],

      techDetails: [
        {
          name: "SvelteKit 5",
          description:
            "Leveraged SvelteKit's latest features including runes ($state, $derived, $props) for reactive state management, server-side rendering for SEO optimization, and file-based routing for intuitive project structure. The framework provides excellent performance with minimal JavaScript shipped to the client.",
        },
        {
          name: "TypeScript",
          description:
            "Implemented throughout the entire codebase to ensure type safety in database operations, API routes, and component props. Critical for maintaining code quality and preventing bugs in e-commerce transactions and inventory management.",
        },
        {
          name: "Drizzle ORM",
          description:
            "Used for type-safe database operations with a schema defining products, categories, and admin users. Provides excellent TypeScript integration, migration management, and query building with minimal overhead compared to heavier ORMs.",
        },
        {
          name: "SQLite",
          description:
            "Selected for its simplicity, zero-configuration setup, and excellent performance for read-heavy e-commerce operations. The database includes blob storage for product images, eliminating the need for separate file storage infrastructure.",
        },
        {
          name: "Tailwind CSS 4",
          description:
            "Utilized the latest Tailwind CSS version with its new oxide engine for styling, creating a modern, responsive design system. Implemented custom utility classes for consistent spacing, typography, and layout patterns across the application.",
        },
        {
          name: "Svelte Stores",
          description:
            "Implemented custom stores for shopping cart state management with persistent storage, toast notifications, and global UI state, leveraging Svelte's reactive paradigm for automatic UI updates.",
        },
      ],
    },
  },
  {
    id: "6",
    title: "CytoNET",
    description:
      "A comprehensive bioinformatics data management platform for protein interaction analysis, modification tracking, and tissue distribution visualization with automated CSV data seeding capabilities.",
    technologies: [
      "ASP.NET Core",
      "Entity Framework Core",
      "SQLite",
      "Razor Pages",
      "Bootstrap",
      "C#",
    ],
    liveLink: "",
    githubLink: "",
    image: "",
    details: {
      longDescription:
        "CytoNET is a sophisticated bioinformatics platform designed to manage and analyze complex protein data for research purposes. Built for a client with extensive biological datasets, the system handles over 21,000 database entries across multiple interconnected biological domains including protein interactions, modifications, small molecules, and tissue distributions. The platform features an intelligent data seeding system that allows researchers to dynamically import new datasets, automatically processing and integrating the data into the appropriate database contexts while maintaining data integrity and relationships.",
      features: [
        "Maps showing protein interactions and modifications across different tissues",
        "Multi-database architecture supporting proteins, interactions, modifications, small molecules, and tissue distributions",
        "Automated CSV data seeding with intelligent file processing and validation",
        "Automatic data cleaning and preprocessing pipeline for imported CSV files",
        "Production-ready deployment with environment-specific database configurations",
      ],
      challenges: [
        "Designing a scalable database schema to handle complex biological relationships across 21,000+ entries",
        "Implementing robust CSV parsing and validation to handle diverse biological data formats",
        "Creating an efficient background seeding system that processes large datasets without impacting application performance",
        "Ensuring data integrity across multiple related database contexts during bulk import operations",
        "Optimizing database queries for complex biological data relationships and large-scale analytics",
      ],
      processSteps: [
        {
          title: "Client Requirements Analysis",
          description:
            "Analyzed client needs for managing 21,000 biological database entries, understanding the complex relationships between proteins, interactions, modifications, and tissue distributions.",
        },
        {
          title: "Database Architecture Design",
          description:
            "Designed a multi-context Entity Framework architecture with separate databases for each biological domain while maintaining referential integrity and optimized query performance.",
        },
        {
          title: "CSV Processing Pipeline Development",
          description:
            "Built a robust data import system with automatic CSV cleaning, validation, and transformation capabilities to handle diverse biological data formats from research sources.",
        },
        {
          title: "Background Processing Implementation",
          description:
            "Implemented asynchronous seeding processes to handle large dataset imports without blocking the main application, including comprehensive error handling and progress monitoring.",
        },
        {
          title: "Debugging and Monitoring System",
          description:
            "Created comprehensive debugging endpoints and monitoring tools to track seeding progress, database status, and data integrity across all biological contexts.",
        },
        {
          title: "Production Deployment and Optimization",
          description:
            "Deployed the system with environment-specific configurations, database migration automation, and performance optimizations for handling large-scale biological datasets.",
        },
      ],
      techDetails: [
        {
          name: "ASP.NET Core",
          description:
            "Leveraged for building a high-performance web application with robust dependency injection, middleware pipeline, and hosting capabilities optimized for data-intensive bioinformatics operations.",
        },
        {
          name: "Entity Framework Core",
          description:
            "Implemented with multiple DbContexts (Protein, ProteinModification, ProteinInteraction, SmallMolecule, TissueDistribution) using Code First approach with optimized migrations and relationship mapping.",
        },
        {
          name: "SQLite",
          description:
            "Selected for its lightweight nature and excellent performance with read-heavy biological data operations, with separate database files for each biological domain to optimize query performance.",
        },
        {
          name: "Background Task Processing",
          description:
            "Implemented asynchronous data seeding using Task.Run with comprehensive error handling to process large CSV datasets without impacting user experience or causing application timeouts.",
        },
        {
          name: "CSV Processing Engine",
          description:
            "Built a custom CsvCleaner class with intelligent data validation, formatting, and error correction specifically designed for biological data standards and research dataset requirements.",
        },
        {
          name: "Debugging API",
          description:
            "Created comprehensive RESTful debugging endpoints for real-time monitoring of database status, seeding progress, and data integrity validation across all biological contexts.",
        },
      ],
      screenshots: ["/images/kinexus-crew.jpeg"],
    },
  },
  {
    id: "8",
    title: "Travel Planner",
    description:
      "An intelligent travel planning platform that leverages AI to create personalized itineraries, discover local attractions, and manage trip details with seamless user authentication and responsive design.",
    technologies: [
      "Laravel 10",
      "PHP 8.2",
      "MySQL",
      "Tailwind CSS",
      "Vite",
      "OpenAI API",
      "Laravel Breeze",
      "Railway",
    ],
    liveLink: "https://travel-planner-php-production.up.railway.app",
    githubLink: "https://github.com/byrondray/travel-planner-php",
    image: "",
    details: {
      longDescription:
        "Travel Planner is a comprehensive travel management platform that combines the power of artificial intelligence with intuitive design to revolutionize trip planning. The application enables users to create detailed travel itineraries, discover local attractions and activities, and manage all aspects of their trips in one centralized location. Built with Laravel 10 and powered by OpenAI's API, the platform provides intelligent recommendations based on user preferences, travel dates, and destination characteristics. The responsive design ensures a seamless experience across all devices, while secure authentication through Laravel Breeze protects user data and travel plans.",

      features: [
        "AI-powered itinerary generation using OpenAI API for personalized travel recommendations",
        "Comprehensive travel plan management with destinations, activities, and scheduling",
        "Secure user authentication and registration system with Laravel Breeze",
        "Responsive design optimized for desktop, tablet, and mobile devices",
        "Real-time travel plan creation",
        "Intelligent activity suggestions based on location and user preferences",
        "Clean, modern interface built with Tailwind CSS for optimal user experience",
        "Scalable cloud deployment on Railway with MySQL database integration",
      ],

      challenges: [
        "Implementing secure OpenAI API integration while managing costs and rate limiting",
        "Designing a flexible database schema to handle complex travel itineraries with multiple destinations and activities",
        "Creating a responsive UI that works seamlessly across devices for on-the-go travel planning",
        "Optimizing Laravel application performance for Railway cloud deployment",
        "Building an intuitive interface that balances feature richness with ease of use",
      ],

      screenshots: [
        "/images/ta-form.png",
        "/images/ta-loading.png",
        "/images/ta-generated.png",
      ],

      videoUrl: "",

      techDetails: [
        {
          name: "Laravel 10",
          description:
            "Leveraged as the primary PHP framework providing robust MVC architecture, elegant ORM with Eloquent, and comprehensive authentication features for secure travel plan management.",
        },
        {
          name: "OpenAI API",
          description:
            "Integrated to power intelligent travel recommendations and itinerary generation, with custom prompt engineering to create relevant and practical travel suggestions based on user input.",
        },
        {
          name: "MySQL",
          description:
            "Implemented as the primary database solution hosted on Railway, with optimized schema design for handling complex relationships between users, travel plans, destinations, and activities.",
        },
        {
          name: "Tailwind CSS",
          description:
            "Utilized for creating a modern, responsive design system with consistent styling across all components, enabling rapid UI development and excellent mobile optimization.",
        },
        {
          name: "Vite",
          description:
            "Employed as the build tool for fast asset compilation and hot module replacement during development, with optimized production builds for enhanced performance.",
        },
        {
          name: "Laravel Breeze",
          description:
            "Integrated for streamlined authentication and registration workflows, providing secure user management with password reset capabilities and session handling.",
        },
        {
          name: "Railway",
          description:
            "Selected as the cloud deployment platform for its seamless Laravel support, automatic deployments from GitHub, and integrated MySQL database hosting with environment variable management.",
        },
      ],

      processSteps: [
        {
          title: "Requirements Analysis & Travel Planning Research",
          description:
            "Researched travel planning pain points and user workflows to understand the challenges travelers face when organizing trips, identifying opportunities for AI-powered assistance and streamlined planning tools.",
        },
        {
          title: "Laravel Application Architecture",
          description:
            "Designed and implemented the core Laravel application structure with MVC patterns, database migrations for travel-specific entities, and authentication system using Laravel Breeze.",
        },
        {
          title: "Database Schema Design",
          description:
            "Created a comprehensive database structure to handle users, travel plans, destinations, itineraries, and activities with proper relationships and foreign key constraints for data integrity.",
        },
        {
          title: "OpenAI API Integration",
          description:
            "Developed secure API integration with OpenAI for intelligent travel recommendations, implementing proper error handling, rate limiting, and cost optimization strategies.",
        },
        {
          title: "Frontend Development & Responsive Design",
          description:
            "Built a responsive user interface using Tailwind CSS and Blade templates, ensuring optimal user experience across all device sizes with intuitive navigation and modern design principles.",
        },
        {
          title: "Production Deployment & Optimization",
          description:
            "Deployed to Railway cloud platform with proper environment configuration, database migrations, HTTPS enforcement, and asset optimization for production performance and security.",
        },
        {
          title: "Testing & Performance Optimization",
          description:
            "Conducted comprehensive testing of travel planning workflows, API integrations, and responsive design, optimizing database queries and implementing caching strategies for enhanced performance.",
        },
      ],
    },
  },
  {
    id: "5",
    title: "Warehouse CMS",
    description:
      "A comprehensive inventory management system designed for warehouses to track stock levels, monitor product movement, and optimize supply chain operations.",
    technologies: [
      "ASP.NET Core",
      "Entity Framework Core",
      "PostgreSQL",
      "Razor Pages",
      "Bootstrap",
      "Azure",
    ],
    liveLink: "https://warehouse-cms-production.up.railway.app/",
    githubLink: "https://github.com/byrondray/Warehouse-CMS",
    image: "",
    details: {
      longDescription:
        "Warehouse CMS is an enterprise-grade inventory management solution built to streamline warehouse operations and provide real-time visibility into stock levels. The application enables businesses to track products across multiple warehouse locations, manage incoming and outgoing shipments, and generate comprehensive inventory reports. The platform includes role-based access control to ensure data security while allowing different stakeholders from warehouse staff to management to access the information relevant to their responsibilities.",
      features: [
        "Real-time inventory tracking",
        "Comprehensive reporting dashboard",
        "Supplier management with performance tracking and order history",
        "Role-based access control with detailed audit logging",
        "Integration capabilities with shipping carriers and accounting systems",
      ],
      challenges: [
        "Implementing a flexible database schema that accommodates diverse product attributes while maintaining query performance",
        "Designing an architecture that supports real-time inventory updates even during high-volume operations",
        "Building a secure role-based access system that enforces data compartmentalization while enabling necessary workflows",
        "Implementing a reliable and consistent transaction system for inventory movements to maintain data integrity",
      ],
      processSteps: [
        {
          title: "Requirements Analysis & Warehouse Operations Study",
          description:
            "Conducted on-site warehouse visits and stakeholder interviews to understand inventory workflows, pain points, and operational requirements across different types of warehouse environments.",
        },
        {
          title: "Database Schema Design",
          description:
            "Developed a comprehensive data model using Entity Framework Core with Code First approach, creating a flexible schema that handles various product types, warehouse configurations, and inventory movement patterns.",
        },
        {
          title: "Security Architecture Planning",
          description:
            "Designed a multi-layered security system with role-based access control, data encryption, and comprehensive audit logging to ensure data protection and regulatory compliance.",
        },
        {
          title: "Core Inventory Logic Implementation",
          description:
            "Built the central inventory management system with transaction-based stock movements, ensuring data consistency through proper unit of work patterns and concurrency handling.",
        },
        {
          title: "Reporting & Analytics Engine Development",
          description:
            "Created a flexible reporting system using optimized database queries and materialized views to generate real-time inventory insights without impacting operational performance.",
        },
        {
          title: "User Interface Development",
          description:
            "Implemented a responsive, accessible interface using Razor Pages and Bootstrap that works efficiently on both desktop workstations and mobile warehouse devices.",
        },
        {
          title: "Performance Optimization & Scalability Testing",
          description:
            "Conducted extensive load testing to identify and resolve performance bottlenecks, implementing caching strategies and query optimizations to ensure the system handles growing inventory volumes.",
        },
      ],
      techDetails: [
        {
          name: "ASP.NET Core",
          description:
            "Utilized as the primary framework for building a high-performance, cross-platform web application with robust security features and excellent scalability for warehouse operations.",
        },
        {
          name: "Entity Framework Core",
          description:
            "Implemented as the ORM with a code-first approach, enabling type-safe database access and complex relationship modeling for inventory items, warehouses, and transactions.",
        },
        {
          name: "MySQL",
          description:
            "Selected as the database system for its reliability, performance, and cost-effectiveness, with optimized indexing strategies for inventory-specific query patterns.",
        },
        {
          name: "Razor Pages",
          description:
            "Used for creating a clean, maintainable UI architecture with page-focused development that aligns well with the distinct functional areas of warehouse management.",
        },
        {
          name: "Bootstrap",
          description:
            "Implemented for developing a responsive interface that works seamlessly across warehouse workstations, handheld scanners, and management dashboards.",
        },
        {
          name: "Azure",
          description:
            "Deployed to Azure App Service with database backups, scheduled tasks, and monitoring to ensure high availability and disaster recovery capabilities essential for business-critical inventory systems.",
        },
      ],
    },
  },
  {
    id: "4",
    title: "Cookbook+",
    description:
      "A culinary social platform where food enthusiasts can discover, share, and organize recipes with intelligent meal planning and shopping list features.",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Amazon S3",
      "Drizzle ORM",
      "PostgreSQL",
      "NextAuth.js",
    ],
    liveLink: "https://recipe-tracker-pcw2.vercel.app/",
    githubLink: "https://github.com/byrondray/recipe-tracker",
    image: "",
    details: {
      longDescription:
        "Cookbook+ transforms the cooking experience by combining a beautiful recipe repository with practical meal planning tools. Users can discover dishes through a visually rich interface, upload their own creations with step-by-step instructions, and build personalized collections.",
      features: [
        "Intuitive recipe creation with structured ingredients, instructions, and cooking times",
        "Photo galleries for each recipe with step-by-step cooking visuals",
      ],
      challenges: [
        "Implementing efficient image processing and storage for multiple photos per recipe",
        "Optimizing database queries for complex recipe filtering and search operations",
        "Creating a responsive design that works well for both cooking mode (kitchen use) and browsing mode",
      ],
      processSteps: [
        {
          title: "User Research & Cooking Workflow Analysis",
          description:
            "Conducted interviews with home cooks to understand their pain points in recipe management, meal planning, and grocery shopping to identify key opportunity areas.",
        },
        {
          title: "Information Architecture Development",
          description:
            "Created a comprehensive data model for recipes that captures the complexity of ingredients, preparation methods, and variations while remaining flexible for different culinary traditions.",
        },
        {
          title: "User Experience Design",
          description:
            "Designed user flows and interfaces optimized for both recipe discovery and practical cooking use, with special attention to kitchen-friendly viewing modes and intuitive creation tools.",
        },

        {
          title: "Image Management Pipeline",
          description:
            "Implemented an S3-based image processing system that optimizes recipe photos for different viewing contexts while maintaining visual quality and fast loading times.",
        },
      ],
      techDetails: [
        {
          name: "Next.js",
          description:
            "Employed for its hybrid rendering capabilities, delivering fast initial page loads for recipe browsing while enabling dynamic features like real-time recipe scaling and meal planning.",
        },
        {
          name: "Tailwind CSS",
          description:
            "Used to create a visually appealing, responsive design system that adapts to various devices, including kitchen tablets and mobile phones used while shopping.",
        },
        {
          name: "Amazon S3",
          description:
            "Implemented with a custom image processing pipeline for storing and serving optimized recipe images, including thumbnail generation and progressive loading for gallery views.",
        },
        {
          name: "Drizzle ORM",
          description:
            "Leveraged for type-safe database access with a schema designed to efficiently represent complex relationships between recipes, ingredients, users, and meal plans.",
        },
        {
          name: "NextAuth.js",
          description:
            "Integrated for secure user authentication with multiple provider options, enabling personalized features like saved recipes and custom collections.",
        },
      ],
    },
  },
];

export function getProjectById(id: string) {
  return projects.find((project) => project.id === id);
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => createSlug(project.title) === slug);
}

// Get all slugs for static generation
export function getAllProjectSlugs() {
  return projects.map((project) => createSlug(project.title));
}
