# Frequently Asked Questions (FAQ) - ProfileScan

Welcome to the comprehensive FAQ for ProfileScan. This document covers everything from basic usage to advanced technical details.

## 📚 Table of Contents
1. [General Information](#1-general-information)
2. [Getting Started & Installation](#2-getting-started--installation)
3. [Features & Functionality](#3-features--functionality)
4. [Search & Accuracy](#4-search--accuracy)
5. [Privacy & Security](#5-privacy--security)
6. [Troubleshooting](#6-troubleshooting)
7. [Customization & Settings](#7-customization--settings)
8. [Data & Export](#8-data--export)
9. [Legal & Licensing](#9-legal--licensing)
10. [Development & Technical](#10-development--technical)

---

## 1. General Information

1. **What is ProfileScan?**
   ProfileScan is a universal social media profile viewer that checks for the existence of a username across 200+ platforms.

2. **Is ProfileScan free to use?**
   Yes, it is completely free for personal use.

3. **Who created ProfileScan?**
   ProfileScan was created by Riyajul Ali (Aliriyaj007).

4. **Do I need to create an account to use it?**
   No, ProfileScan requires no sign-up, login, or account creation.

5. **Is there a mobile app available?**
   There is no native mobile app, but the web version is fully responsive and works like a PWA (Progressive Web App).

6. **Can I use it on a tablet?**
   Yes, the interface adapts perfectly to tablet screens.

7. **Does it work on all browsers?**
   It works on all modern browsers (Chrome, Firefox, Edge, Safari, Brave).

8. **Is an internet connection required?**
   Yes, an active internet connection is needed to check the platforms.

9. **How many platforms does it support?**
   It currently supports over 200 social media platforms and websites.

10. **Is this tool legal?**
    Yes, as long as it is used for personal purposes (like auditing your own footprint) and not for harassment or commercial background checks.

---

## 2. Getting Started & Installation

11. **How do I run ProfileScan?**
    You can use the hosted web version or run it locally on your machine.

12. **Where is the hosted version?**
    It is available at [aliriyaj007.github.io/ProfileScan](https://aliriyaj007.github.io/ProfileScan/).

13. **How do I install it locally?**
    Clone the GitHub repository and open `index.html`.

14. **Do I need to install Node.js?**
    For the most accurate results (bypassing CORS), yes, you need to run the included Node.js server.

15. **How do I install dependencies?**
    Run `npm install` in the project directory using your terminal.

16. **How do I start the local server?**
    Run `npm start` in the terminal.

17. **What port does the server use?**
    It runs on port 3000 by default.

18. **Can I run it without the server?**
    Yes, but results will be simulated or less accurate due to browser security restrictions (CORS).

19. **Does it work on Windows?**
    Yes, fully supported.

20. **Does it work on macOS/Linux?**
    Yes, fully supported.

---

## 3. Features & Functionality

21. **What is the "Compare" feature?**
    It allows you to compare the digital footprint of two different usernames (feature in development).

22. **What are "Themes"?**
    You can change the look of the app. We offer 7 premium themes like Dark, Sunset, and Cyberpunk.

23. **Does it have Dark Mode?**
    Yes, there is a dedicated Dark Mode toggle.

24. **Can I save my platform selection?**
    Yes, you can save your current selection as the default for future searches.

25. **What is "Quick Search"?**
    It populates the username field with a demo name ("john_doe") to test the app instantly.

26. **What does the "Show Icons" toggle do?**
    It shows or hides platform logos in the list to save space.

27. **What is "Privacy Mode"?**
    It blurs the username and results on the screen, useful if you are using the tool in a public place.

28. **Does it save my search history?**
    No, ProfileScan does not keep a persistent history of your searches for privacy reasons.

29. **Can I select all platforms at once?**
    Yes, use the "Select All" button.

30. **Can I select only popular platforms?**
    Yes, the "Top 50" button selects the most popular sites.

---

## 4. Search & Accuracy

31. **Why do I see "Not Found" when I know the profile exists?**
    This can happen due to anti-bot protections or if the local server is not running.

32. **Why do I see "Found" but the profile is empty?**
    Some sites return a "success" code even for empty profile pages (Soft 404). We try to filter these but some slip through.

33. **Does it case-sensitive?**
    Most platforms are case-insensitive, but ProfileScan sends the username exactly as typed.

34. **Can I search for email addresses?**
    No, ProfileScan is strictly for username searches.

35. **Can I search for real names?**
    No, it only works with username handles (e.g., "jdoe" not "John Doe").

36. **How fast is the search?**
    It depends on your internet connection, but usually finishes in under 10 seconds.

37. **Does it search hidden/private profiles?**
    No, it can only find public profiles.

38. **Can it search deleted accounts?**
    No, deleted accounts will return "Not Found".

39. **Does it work with special characters?**
    It encodes special characters, but many platforms do not support them in usernames.

40. **Why are some results yellow/orange?**
    This usually indicates an error or a timeout connecting to that specific platform.

---

## 5. Privacy & Security

41. **Does ProfileScan steal my data?**
    Absolutely not. It is a client-side tool.

42. **Where is my data stored?**
    Settings are stored in your browser's `localStorage`.

43. **Does it use cookies?**
    It does not use tracking cookies.

44. **Is my IP address logged?**
    The app itself does not log IPs. However, the platforms you visit (e.g., Facebook) will see your IP request.

45. **Can anyone else see my searches?**
    No, unless they have physical access to your device.

46. **How do I delete my data?**
    Click the "Reset Data" button in settings or clear your browser cache.

47. **Does it connect to a central database?**
    No, there is no central database of users.

48. **Is the connection encrypted?**
    If you use the HTTPS hosted version, yes. Local version details depend on your setup.

49. **Can I use a VPN with it?**
    Yes, and it is recommended for better privacy.

50. **Will platforms ban my IP?**
    If you search excessively fast, some platforms might temporarily rate-limit your IP.

---

## 6. Troubleshooting

51. **The search is stuck at 0%.**
    Check your internet connection or try restarting the page.

52. **I get "Connection Failed" errors.**
    Ensure the local Node.js server is running (`npm start`).

53. **The "Export" button doesn't work.**
    Ensure you have allowed pop-ups or file downloads in your browser.

54. **I can't open the settings menu.**
    Try refreshing the page (Ctrl+R or F5).

55. **The layout looks broken.**
    Ensure you are using an updated version of a modern browser.

56. **"npm start" fails with an error.**
    Make sure you ran `npm install` first.

57. **I see "Error: Cannot find module express".**
    Run `npm install express cors axios` to fix missing dependencies.

58. **Why does it say "Accuracy Disclaimer"?**
    To remind users that automated tools are never 100% perfect.

59. **Can I run this on a Chromebook?**
    Yes, via the web version.

60. **Does it work behind a corporate firewall?**
    Firewalls may block connections to social media sites, affecting results.

---

## 7. Customization & Settings

61. **How do I change the theme?**
    Go to Settings > Theme Selection.

62. **Can I create my own theme?**
    Not via the UI, but you can edit the CSS variables in `index.html`.

63. **How do I add a custom platform?**
    Use the "Add Custom Platform" feature in Settings (saved locally).

64. **Can I remove specific platforms?**
    You can simply uncheck them in the list.

65. **How do I reorder platforms?**
    Currently, you cannot reorder them; they are sorted by category/popularity.

66. **Can I change the default search settings?**
    Yes, toggle options in Settings and they autosave.

67. **Does it support other languages?**
    Currently, the interface is English-only.

68. **Can I disable animations?**
    No dedicated toggle yet, but "Privacy Mode" reduces some visual clutter.

69. **How do I reset all settings?**
    Click "Reset Data" in the Settings panel.

70. **Can I hide the legal modal?**
    Once accepted, it stays hidden unless you clear your browser data.

---

## 8. Data & Export

71. **What formats can I export to?**
    JSON, CSV, and HTML.

72. **What does the JSON export contain?**
    It contains the full raw data of the search results.

73. **What does the HTML export look like?**
    It generates a clean, printable report table.

74. **Can I import data?**
    You can restore your *settings* via backup, but not past search results.

75. **How do I backup my configuration?**
    Click "Backup Data" to download a config file.

76. **How do I restore my configuration?**
    Click "Restore Data" and upload your backup file.

77. **Is the export file compatible with Excel?**
    Yes, the CSV format opens perfectly in Excel or Google Sheets.

78. **Does export include "Not Found" results?**
    Yes, it includes all checked platforms.

79. **Can I share my results link?**
    No, results are local; you must export a file to share them.

80. **Where is the backup file saved?**
    It saves to your computer's default "Downloads" folder.

---

## 9. Legal & Licensing

81. **Can I use this for my business?**
    No. This tool is for **Personal Use Only**.

82. **Can I sell this tool?**
    No. Selling or re-distributing is strictly prohibited.

83. **Can I use it for background checks on employees?**
    No. This violates the personal use license.

84. **Can I modify the code?**
    Yes, for personal learning and experimentation only.

85. **Who owns the copyright?**
    Riyajul Ali owns the copyright.

86. **Is it Open Source?**
    The source is visible (shared source), but it is not under an open-source license like MIT.

87. **Can I use the code in my own project?**
    Only if your project is personal and private.

88. **Where is the full license text?**
    See the `LICENSE.txt` file in the project folder.

89. **What happens if I violate the license?**
    You risk legal action for copyright infringement.

90. **Can I donate to the developer?**
    Contact the developer via the links in the app if you wish to support.

---

## 10. Development & Technical

91. **What is the tech stack?**
    HTML5, CSS3, Vanilla JavaScript, and Node.js (for the optimal backend).

92. **Does it use any frameworks?**
    No, it is pure Vanilla JS (no React, Vue, etc.).

93. **Why Vanilla JS?**
    To keep it lightweight, fast, and dependency-free.

94. **How do I report a bug?**
    Open an issue on the GitHub repository.

95. **How do I request a new feature?**
    Submit a feature request on GitHub.

96. **How can I add a new platform to the core list?**
    You can submit a Pull Request (PR) with the new platform details.

97. **What is the URL pattern format?**
    It uses `{username}` as a placeholder (e.g., `facebook.com/{username}`).

98. **How does the presence score work?**
    It calculates the percentage of "Found" profiles against total platforms searched.

99. **Can I run this in a Docker container?**
    Yes, standard Node.js Docker setups will work for the server.

100. **Will there be future updates?**
     Yes, we actively maintain the platform database and features.
