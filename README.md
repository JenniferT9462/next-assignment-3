# Three-Page Website with Next.js

## Overview

In this assignment, you will create a three-page website using Next.js. The site will include a splash page, an about page, and a gallery page. The pages will be styled using Bootstrap, and you will manage static images from the public/ directory. For a bonus, you can integrate the cowsay library and create custom styles using CSS files.


# Set Up

- In your system terminal make sure you are in the directory that you want your Next app to go. To see where you are you can run:

        pwd

- If you need to navigate somewhere else, to see the files in your current directory, you can run:

        ls

- You can move into the correct directory by running:

        cd <desired directory>

- Create a New Next.js Application
    * Run - NOTE: if we run w/out a project name, the terminal will ask us to enter a project name. 

            npx create-next-app@latest
    
- You will then be asked a series of questions...

    ![terminal questions](<terminal.png>)

- Navigate to your new project by running:

        cd next-assignment-3

- Then you can open a VScode window by running: 

        code .

- In your editor's terminal(bash) run:

        npm install

    * To install dependencies


- To start development server run:

         npm run dev

- This will start the development server, and your Next.js app will be accessible at http://localhost:3000 in your web browser.


- Create a new repository on Github. NOTE: don't select add README or .gitignore
    * Quick set up will pop up...Run the code that says Add repo to existing repo on the command-line. 

- Add your Next app to your new repository by running this in bash terminal:

        git remote add origin https://github.com/yourusername/your-repository.git
        git branch -M main
        git push -u origin main

# Pages to Create:

* Splash Page (src/pages/index.js):
    - A landing page featuring a large background image.
        This page should display a welcome message.

* About Page (src/pages/about/index.js):
    - A page with information about you (or a fictional person/company), containing text, an image, and a list of facts/achievements.

* Gallery Page (src/pages/gallery/index.js):
    - A page displaying at least 6 images in a grid layout.
    - Images should come from sources such as Pexels.com, AI-generated images, or other royalty-free sources.

# Requirements:

* Set Up a New Next.js Project:
    - Use create-next-app to generate the initial project structure.

* Install and Import Bootstrap:
    - Install Bootstrap in your project and import it into your pages for styling.

* Splash Page (src/pages/index.js):
    - Create a large background image and a welcome message styled with Bootstrap.
    - Use the public/ directory for storing static images.
        - Example: Place your splash image in public/splash-image.jpg.

* About Page (src/about/index.js):
    - Include a heading, text, an image, and a list of facts or achievements.
    - Use Bootstrap for styling.

* Gallery Page (src/pages/gallery/index.js):
    - Display at least 6 images in a grid layout using Bootstrap grid classes.
    - Store gallery images in the public/ folder and reference them using relative paths (e.g., /gallery/img1.jpg).

# Bonus (Optional):

* Cowsay Integration (Optional):
    - Add cowsay to your About Page for fun. Install cowsay with:

        npm install cowsay

    - Import and use it on the About page.

* Custom CSS:
    - Create your own CSS styles and apply them to your pages. Place your styles in the styles directory and import them into your pages.



