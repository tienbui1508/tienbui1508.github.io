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
          description: "A growing collection of your cool projects.",
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
        },{id: "nav-cv",
          title: "cv",
          description: "View my Resume here, or download the PDF file.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "projects-customer-churn-analysis-10-2023",
          title: 'Customer churn analysis - 10/2023',
          description: "Utilised Power Query, DAX, and visualisation tools within Power BI to analyse a fictional telecom company&#39;s dataset, examining customer churn patterns and facilitating data-driven insights for retention strategies.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/da_uni/DA1_CustomerChurnAnalysis/";
            },},{id: "projects-customer-targeting-visualisations-kpmg-data-analytics-consulting-virtual-internship-11-2023",
          title: 'Customer targeting visualisations (KPMG Data Analytics Consulting virtual internship) - 11/2023',
          description: "Utilised Power Query, DAX, and visualisation tools within Power BI to create a dashboard for the client that specifies who they should be targeting in their customer list as well as the broader market segment.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/da_uni/DA2_KPMG/";
            },},{id: "projects-dashboards-for-call-center-manager-pwc-power-bi-virtual-case-experience-part-1-12-2023",
          title: 'Dashboards for Call Center Manager (PWC Power BI virtual case experience Part 1)...',
          description: "Utilised Power Query, DAX, and visualisation tools within Power BI to create dashboards for the Call Center Manager to understand todays trends, reflect customer demographics and insights regarding customer retention.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/da_uni/DA3_PWC1/";
            },},{id: "projects-dashboards-for-hr-manager-pwc-power-bi-virtual-case-experience-part-2-12-2023",
          title: 'Dashboards for HR Manager (PWC Power BI virtual case experience Part 2) -...',
          description: "Utilised Power Query, DAX, and visualisation tools within Power BI to create visualizations to represent HR data, particularly focusing on gender-related KPIs.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/da_uni/DA3_PWC2/";
            },},{id: "projects-twitter-data-collection-and-analysis-data-engineering-5-2022",
          title: 'Twitter data collection and analysis (Data Engineering) - 5/2022',
          description: "Use the power of Twitter API to collect, analyse and visualise one week of data related to Elon Musk to gain insights into the social media behavior of Twitter users.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/da_uni/U_DataEngineering/";
            },},{id: "projects-database-system-for-a-car-rental-firm-data-modelling-10-2021",
          title: 'Database system for a Car Rental Firm (Data Modelling) - 10/2021',
          description: "Create a database for a &quot;real-life&quot; case-study - a car rental company. Includes written conceptual model, written and code for logical and physical models.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/da_uni/U_DataModelling/";
            },},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dev/10_project/";
            },},{id: "projects-e-commerce-app-with-net-core-and-angular-9-2024",
          title: 'E-commerce App with .NET Core and Angular - 9/2024',
          description: "Developing a full-stack e-commerce application using .NET Core 8 and Angular 18. The project involves setting up a multi-project architecture, building a client-side UI with Angular CLI, and using ASP.NET Identity for secure user authentication. Key features include a multi-step form, order creation from a shopping basket, and payment processing via Stripe. Additionally, implementing Repository and Unit of Work patterns, and deploying the application to Azure.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dev/ArtStore/";
            },},{id: "projects-454-illustrator-e-commerce-website-5-2024",
          title: '454 illustrator E-commerce website - 5/2024',
          description: "Using .NET, ASP.NET Core MVC, and Razor to create and deploy an e-commerce site for showcasing and selling illustrations. Employing Visual Studio 2022 and SQL Server Management Studio for CRUD operations, Identity Framework for user authentication, and Stripe for payments. Gaining skills in large-scale project architecture, custom tag helpers, and Azure deployment. Mastering the latest ASP.NET Core MVC advancements for scalable web apps.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dev_uni/454Web/";
            },},{id: "projects-resell-track-ios-app-9-2023",
          title: 'Resell Track (iOS app) - 9/2023',
          description: "An iOS app written by SwiftUI that works on iPhones, iPads and Macs. Resell Track helps users organise purchased items, track their value, and record sales.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dev_uni/ResellTrack/";
            },},{id: "projects-scuba-diving-calculation-assistant-app-java-5-2022",
          title: 'Scuba Diving Calculation Assistant App (Java) - 5/2022',
          description: "A Java application designed to automate some simple and complex calculations that are common in the dive industry. The GUI was created from a text-based prototype using Apache NetBeans. Junit was used for unit testing.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dev_uni/U_AppDev/";
            },},{id: "projects-inventory-management-system-cloud-computing-project-10-2022",
          title: 'Inventory Management System (Cloud Computing Project) - 10/2022',
          description: "Use Node-RED and other cloud services and tools to develop a cloud-hosted application to assist with Inventory Management.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dev_uni/U_CloudComputing/";
            },},{id: "projects-online-voting-system-devops-project-10-2022",
          title: 'Online Voting System (DevOps Project) - 10/2022',
          description: "Develop an Online Voting System and apply DevOps principles and tools for the project&#39;s development processes.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dev_uni/U_DevOps/";
            },},{id: "projects-kitchenware-content-management-system-no-framework-web-dev-10-2021",
          title: 'Kitchenware Content Management System (No Framework Web Dev) - 10/2021',
          description: "Without using any web frameworks, develop a XAMPP enabled website with a backend database for an e-commerce business, providing mechanisms for a web administrator to add, edit and remove content from their website.",
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
