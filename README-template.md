# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](C:\Users\Danny\Downloads\intro-section-with-dropdown-navigation-main\intro-section-with-dropdown-navigation-main\images\Intro-section-Capture.jpeg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.






## My process

### Built with

-  HTML5 
- CSS custom properties
- Flexbox
- Javascript
-[TailwindCSS] (https://tailwindcss.com/) - CSS framework
- 




### What I learned

What I learned throughout this Priject is how to work with different fonts and text sizes even though I did struggle with aligning the  images and certain text  which was the main content of the page I also learned the basics of creating a sidebar and what I need to improve on


Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```

```html

   <nav class="flex justify-between items-center py-4 px-8">
    <div class="flex space-x-4  ">
      <h1 class="font-epilogue text-3xl mr-8 font-bold ">Snap</h1>
      <div class="relative inline-block invisible  md:visible">
        <button id="features-button" class="text-gray-600 hover:text-black px-2 mt-2 focus:outline-none">
          Features
          <svg id="features-arrow" class="w-4 h-4 inline-block ml-1 transform transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
        </button>

```

```js
closeButton.addEventListener('click', () => {
  // Closes the sidebar
  document.getElementById('sidebar').classList.toggle('translate-x-full');
});
```



### Continued development
What I want to continue working on is focusing on aligning elements and focusing on the appropriate sizing of the elements as that is what I consider the hardset thing about this project




### Useful resources

- [TailwindCSS docs](https://tailwindcss.com/docs/installation) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://cssreference.io/) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.



## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@LavaCubeL](https://www.frontendmentor.io/profile/LavaCubeL)
- Github - [@yLavaCubeL](https://github.com/LavaCubeL)

