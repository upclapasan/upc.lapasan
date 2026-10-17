UPCPI SUNDAY SERMON MANAGER — DEMO

Files:
- index.html
- style.css
- admin.js

Shortcuts:
- Ctrl + Shift + Z: open admin login
- Ctrl + Shift + X: return to public view

Demo login:
- Username: upc
- Password: upc123

Admin workflow:
1. Fill in the sermon title/topic, Bible verse, message, speaker, date, and optional PDF.
2. Click “Publish as Active Sermon” to show it in the featured Sunday Sermon section.
3. Click “Move Active Sermon to Previous Sermons” to move it into the public archive.
4. Archived sermons display their details and provide “Read PDF” and “Download PDF” actions.

IMPORTANT LIMITATIONS:
This demo stores sermon details and PDF files in IndexedDB in the current browser only.
It does NOT synchronize between visitors, computers, or phones. If you want every viewer
to see the same active sermon and archive, connect a shared backend such as Firebase
Authentication + Firestore + Firebase Storage or another server.
The demo username/password check is visible in admin.js and is NOT secure for a public
website. Replace it with real server-side authentication before deploying.

Keep your existing image assets and any other scripts used by the rest of your website.
The HTML still includes the existing script.js reference if your project has that file.
