// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of my cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "My GitHub profile and repositories.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-contact",
          title: "contact",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/contact/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "View my Resume here, or download the PDF file.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-clean-code",
          title: 'Clean Code',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/clean_code/";
            },},{id: "news-new-site-live-for-jacqaranda-books-amp-amp-vintage-your-books-amp-amp-vintage-wares-store-at-53-goodwood-road-wayville-5034-explore-it-here",
          title: 'New site live for Jacqaranda Books &amp;amp;amp; Vintage — your books &amp;amp;amp; vintage...',
          description: "",
          section: "News",},{id: "projects-customer-churn-analysis",
          title: 'Customer churn analysis',
          description: "Data Analysis Project Oct 2023  Utilised Power Query, DAX, and visualisation tools within Power BI to analyse a fictional telecom company&#39;s dataset, examining customer churn patterns and facilitating data-driven insights for retention strategies.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/da/DA1_CustomerChurnAnalysis/";
            },},{id: "projects-customer-targeting-visualisations",
          title: 'Customer targeting visualisations',
          description: "KPMG Data Analytics Consulting virtual internship Nov 2023  Utilised Power Query, DAX, and visualisation tools within Power BI to create a dashboard for the client that specifies who they should be targeting in their customer list as well as the broader market segment.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/da/DA2_KPMG/";
            },},{id: "projects-dashboards-for-call-center-manager",
          title: 'Dashboards for Call Center Manager',
          description: "PWC Power BI virtual case experience Part 1 Dec 2023  Utilised Power Query, DAX, and visualisation tools within Power BI to create dashboards for the Call Center Manager to understand todays trends, reflect customer demographics and insights regarding customer retention.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/da/DA3_PWC1/";
            },},{id: "projects-dashboards-for-hr-manager",
          title: 'Dashboards for HR Manager',
          description: "PWC Power BI virtual case experience Part 2 Dec 2023  Utilised Power Query, DAX, and visualisation tools within Power BI to create visualizations to represent HR data, particularly focusing on gender-related KPIs.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/da/DA3_PWC2/";
            },},{id: "projects-twitter-data-collection-and-analysis",
          title: 'Twitter data collection and analysis',
          description: "Data Engineering Project May 2022  Use the power of Twitter API to collect, analyse and visualise one week of data related to Elon Musk to gain insights into the social media behavior of Twitter users.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/da/U_DataEngineering/";
            },},{id: "projects-database-system-for-a-car-rental-firm",
          title: 'Database system for a Car Rental Firm',
          description: "Data Modelling Project Oct 2021  Create a database for a &quot;real-life&quot; case-study - a car rental company. Includes written conceptual model, written and code for logical and physical models.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/da/U_DataModelling/";
            },},{id: "projects-454-illustrator",
          title: '454 Illustrator',
          description: "E-commerce website May 2024  Illustrations storefront built with ASP.NET Core MVC &amp; Razor, featuring SQL Server CRUD operations, Identity Framework authentication and Stripe payments. Uses custom tag helpers and scalable project architecture, all deployed to Azure.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dev/454Web/";
            },},{id: "projects-artstore",
          title: 'ArtStore',
          description: "E-commerce App with .NET Core and Angular Sep 2024  Full-stack e-commerce app built with .NET Core 8 and Angular 18 using a multi-project architecture. It features secure ASP.NET Identity authentication, a multi-step checkout form with basket-to-order flow, Stripe payment integration, and follows Repository &amp; Unit of Work patterns. Deployed to Azure for scalable hosting.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dev/ArtStore/";
            },},{id: "projects-jacqaranda-books-amp-vintage",
          title: 'Jacqaranda Books &amp;amp; Vintage',
          description: "Wix website &amp; IT support Jul 2025  Responsive Wix site for a local bookstore and vintage goods store at 53 Goodwood Street—complete with SEO optimisation, custom templates and owner training materials.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dev/JacqarandaBooksandVintage/";
            },},{id: "projects-resell-track",
          title: 'Resell Track',
          description: "iOS app Sep 2023  Cross-platform SwiftUI app for iPhone, iPad and Mac that lets you organise purchases, monitor item values over time and log sales in a clean, intuitive interface.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dev/ResellTrack/";
            },},{id: "projects-scuba-diving-calculation-assistant",
          title: 'Scuba Diving Calculation Assistant',
          description: "Application Development Project May 2022  Java Swing desktop tool (built in NetBeans) that automates both basic and advanced dive-industry calculations, with JUnit tests ensuring accuracy and reliability.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dev_uni/U_AppDev/";
            },},{id: "projects-inventory-management-system",
          title: 'Inventory Management System',
          description: "Cloud Computing Project Oct 2022  Built a cloud-hosted inventory app using Node-RED on NeCTAR/IBM Cloud. Designed data flows for real-time stock tracking, automated low-inventory alerts, and integrated with cloud databases for seamless management.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dev_uni/U_CloudComputing/";
            },},{id: "projects-",
          title: '',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dev_uni/U_DevOps/";
            },},{id: "projects-kitchenware-content-management-system",
          title: 'Kitchenware Content Management System',
          description: "No Framework Web Development Project Oct 2021  Built a PHP/MySQL e-commerce CMS on XAMPP—no external frameworks. Features a custom admin interface for adding, editing and removing products and content.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dev_uni/U_WebDev/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%74%69%65%6E%62%75%69%31%35%30%38@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/tienbui1508", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/tienanbich", "_blank");
        },
      },{
        id: 'social-leetcode',
        title: 'LeetCode',
        section: 'Socials',
        handler: () => {
          window.open("https://leetcode.com/u/tienbui1508/", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/tienbui1508", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
