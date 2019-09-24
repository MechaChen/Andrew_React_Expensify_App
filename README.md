# Git Commands

git init - Create a new git repo
git status - View the changes to your project code
git add - Add files to staging area
git commit - Creates a new commit with files from stating area
git log - View recent commits


## Deploy to Heroku

> 1. Download Heroku Cli for your Operating System

> 2. Check your installation 
><pre> [CMD] heroku --version </pre>

> 3. Login to Heroku
><pre> [CMD] heroku login </pre>

> 4. Create Heroku App
><pre> [CMD] heroku create your_app_name </pre>

> 5. Use git remote to check heroku exists
><pre> [CMD] git remote </pre>

> 6. Add "heroku-postbuild": "yarn run build:prod" in "scripts" in package.json

> 7. Push to Heroku
><pre> [CMD] git push heroku master </pre>

> 8. Open Heroku App
><pre> [CMD] heroku open </pre>

> 9. Log some Heroku App Info
><pre> [CMD] heroku log </pre>