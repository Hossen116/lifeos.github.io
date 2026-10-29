LifeOS-PWA : installable version of LifeOS (7 small files, no app store)
=====================================================================

STEP 0  UNZIP FIRST. Do not upload the .zip itself. GitHub does not unpack zips.
        Files app > Downloads > LifeOS-PWA.zip > Extract. You will get these 7 files:
          index.html   sw.js   manifest.webmanifest   icon-192.png   icon-512.png   icon-512-maskable.png   README.txt

STEP 1  Free account: github.com > Sign up.
STEP 2  New repository named exactly:  YOURUSERNAME.github.io   (Public).
STEP 3  In the new repository: "uploading an existing file". Pick ALL the extracted files (not the folder). If the phone
        only lets you pick one or two at a time, upload in several rounds; press "Commit changes" each time.
        index.html must show in the main list of the repository (not inside a folder).
STEP 4  Settings > Pages > Source: Deploy from a branch > main / (root) > Save. Wait 1-2 minutes.
STEP 5  Open https://YOURUSERNAME.github.io/ in Chrome on the phone > menu (3 dots) > Install app.

APK (optional): open pwabuilder.com, paste your https://YOURUSERNAME.github.io/ address, Package for stores > Android > download.
        Open the downloaded .apk on the phone to install (allow "Install unknown apps"). Keep the signing key from the download private.

YOUR DATA: each web address has its own storage, so the installed copy starts empty.
        In your old LifeOS link: Secure tab > passphrase (12+ chars) > Create backup > copy the text.
        In the installed app: Secure tab > paste the text + same passphrase > Restore. Nobody can recover a forgotten passphrase.

UPDATING LATER: upload the new index.html AND sw.js over the old ones (same names) > Commit. Open the installed app:
        a banner "A new version of LifeOS is ready" appears > Update now.

REMINDERS: they work while the app is open or running in the background. A web app cannot wake a fully closed phone.
        For alarms that ring when everything is closed, use "Add to phone calendar" on a plan item or meeting.
