---
layout: about
title: about
permalink: /
subtitle: <p> Adelaide, Australia <br> <i>IT Graduate | Entry-Level Developer</i>  </p>

profile:
  align: right
  image: anime.png
  image_circular: true # crops the image to make it circular
  more_info: >
    <style>
      .devicon-hover:hover {
        transform: scale(1.2);
        transition: transform 0.2s ease;
        filter: brightness(1.2);
        cursor: default;
      }
    </style>

    <div style="text-align: center">
      <p>I turn ☕️ into code &#60;&#8725;&#62;</p>
      <br><br>

      <p><strong>Tech Stack</strong></p><br>
      <p style="font-size: xx-large">
        <i class="devicon-html5-plain-wordmark colored devicon-hover" title="HTML5"></i>
        <i class="devicon-css3-plain-wordmark colored devicon-hover" title="CSS3"></i>
        <i class="devicon-javascript-plain colored devicon-hover" title="JavaScript"></i>
        <i class="devicon-typescript-plain colored devicon-hover" title="TypeScript"></i>
        <i class="devicon-angularjs-plain colored devicon-hover" title="Angular"></i>
        <i class="devicon-react-original colored devicon-hover" title="React"></i>
        <i class="devicon-tailwindcss-original colored devicon-hover" title="Tailwind CSS"></i>
        <i class="devicon-bootstrap-plain-wordmark colored devicon-hover" title="Bootstrap"></i>

        <i class="devicon-csharp-plain colored devicon-hover" title="C#"></i>
        <i class="devicon-dotnetcore-plain colored devicon-hover" title=".NET Core"></i>
        <i class="devicon-python-plain-wordmark colored devicon-hover" title="Python"></i>
        <i class="devicon-java-plain colored devicon-hover" title="Java"></i>
        <i class="devicon-azuresqldatabase-plain colored devicon-hover" title="Azure SQL Database"></i>
      </p>
      <br><br>

      <p><strong>Tools & Platforms</strong></p><br>
      <p style="font-size: xx-large">
        <i class="devicon-vscode-plain-wordmark colored devicon-hover" title="VS Code"></i>
        <i class="devicon-xcode-plain devicon-hover" title="Xcode"></i>
        <i class="devicon-git-plain colored devicon-hover" title="Git"></i>
        <i class="devicon-github-original-wordmark devicon-hover" title="GitHub"></i>
        <i class="devicon-azure-plain colored devicon-hover" title="Azure"></i>
        <i class="devicon-jira-plain-wordmark colored devicon-hover" title="Jira"></i>
        <i class="fa-brands fa-wix devicon-hover" title="Wix"></i>
      </p>
    </div>

selected_papers: false # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts

featured_projects:
  enabled: true
---

I’m a Master of IT graduate from Flinders University with hands-on experience building **full-stack web apps** using .NET Core, Angular, Django and SQL. I recently launched a responsive Wix site for a local bookstore and support 10+ neighbours with troubleshooting across Windows, macOS, iOS and Android.

- 💻 Strong foundation in web dev, databases & cloud deployment
- 🤝 Volunteer web projects with real clients & community impact
- ⚡ Fast learner, passionate about automation & generative AI

<div class="button-container">
  <a class="btn " href="/projects">View Projects</a>
  <a class="btn " href="/contact">Contact</a>
</div>
<br>
{% if page.featured_projects.enabled %}
{% include featured_projects.liquid %}
{% endif %}
