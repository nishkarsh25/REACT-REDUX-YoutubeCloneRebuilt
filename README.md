# React-Redux-YoutubeCloneRebuilt Project

A YouTube clone built with React, Redux, and TailwindCSS, allowing users to browse videos, search for videos, and watch videos with a live chat feature.

## Features

- **Video Browsing:** Browse and view a collection of popular YouTube videos.
- **Search Functionality:** Search for specific videos using keywords.
- **Category Filtering:** Filter videos based on various categories such as Music, Programming, News, etc.
- **Video Playback:** Watch videos using an embedded YouTube player.
- **Live Chat Simulation:** Engage in a simulated live chat while watching videos.
- **Dynamic Sidebar:** Toggle the sidebar to access different categories and suggestions.
- **Responsive Design:** Optimized for both desktop and mobile views.

## Live Demo

You can try out the live demo of the app [here](https://glittery-nougat-31ee8a.netlify.app/).

## Folder Structure

```
youtube-clone/
├── public/
├── src/
│   ├── components/
│   ├── utils/
│   ├── constant/
│   ├── store/
│   ├── App.js
│   ├── index.js
├── .env
├── package.json
├── README.md


```


## GIF's

<!-- Include screenshots or GIFs of your app here to give users a visual representation of what your app looks like. -->
<img src="https://github.com/nishkarsh25/React-Redux-YoutubeCloneRebuilt/blob/main/Screenshots/ss1.gif" alt="Screenshot 1" width="1000"> 



## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **Redux:** A state management library for managing and centralizing application state.
- **TailwindCSS:** A utility-first CSS framework for rapid UI development.
- **Axios:** A promise-based HTTP client for making API requests.
- **React Router:** A library for routing in React applications.
- **React Avatar:** A library for generating avatars.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/nishkarsh25/React-Redux-YoutubeCloneRebuilt.git
   ```
2. Navigate to the project branch:

   ```bash
   git checkout <branch-name>
   ```
   Replace `<branch-name>` with the name of the branch you want to checkout.
   
3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

1. **Run the development server**:

   ```bash
   npm start
   ```
2. **Open your browser** and navigate to http://localhost:3000 to view the app.

## How To Use:

1. **Browse Videos:**
    - On the home page, browse through a list of popular YouTube videos.

2. **Search for Videos:**
    - Use the search bar in the navigation bar to search for specific videos.
    - Suggestions will appear as you type in the search bar.

3. **Filter by Category:**
    - Use the horizontal button list to filter videos by different categories such as Music, Programming, News, etc.

4. **Watch Videos:**
    - Click on a video thumbnail to navigate to the watch page and view the video using an embedded YouTube player.

5. **Live Chat Simulation:**
    - Participate in a simulated live chat while watching videos. Messages will be dynamically generated and displayed in real-time.

6. **Toggle Sidebar:**
    - Use the hamburger menu icon in the navigation bar to toggle the sidebar, providing quick access to different categories and suggestions.

### Detailed Features

1. **Video Browsing:**
    - The home page displays a grid of video thumbnails fetched from the YouTube API. Each video card shows the video thumbnail, title, and channel name.

2. **Search Functionality:**
    - The search bar in the navigation bar allows users to type in keywords to search for videos. As the user types, search suggestions are fetched from the YouTube API and displayed in a dropdown list. Clicking on a suggestion or pressing enter will filter the videos based on the search query.

3. **Category Filtering:**
    - A horizontal scrollable list of category buttons is available on the home page. Clicking on a category button filters the displayed videos by that category. The currently selected category is highlighted.

4. **Video Playback:**
    - Clicking on a video thumbnail navigates to the watch page, where the video is played using an embedded YouTube player. The video title, channel information, and additional video actions (like, dislike, share, download) are displayed below the video player.

5. **Live Chat Simulation:**
    - While watching a video, a live chat section is available on the right side. Messages are dynamically generated and displayed in real-time. Users can also type and send their own messages.

6. **Dynamic Sidebar:**
    - The sidebar can be toggled using the hamburger menu icon in the navigation bar. The sidebar provides quick access to different categories and video suggestions.


## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Contributing

Contributions to this project are highly appreciated! Whether you discover bugs, have feature requests, or wish to contribute improvements, your input is valuable. Here's how you can contribute:

- **Report Issues:** If you encounter any bugs or issues while using MyCalculatorApp, please open an issue on the GitHub repository. Be sure to provide detailed information about the problem and steps to reproduce it.

- **Submit Pull Requests:** If you have enhancements or fixes to propose, feel free to submit a pull request. Contributions that improve the functionality, usability, or performance of this app are welcomed and encouraged.

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. **Fork the Repository**.
2. **Create a New Branch** (`git checkout -b feature/your-feature-name`).
3. **Make Your Changes**.
4. **Commit Your Changes** (`git commit -am 'Add some feature'`).
5. **Push to the Branch** (`git push origin feature/your-feature-name`).
6. **Create a New Pull Request**.

## License

This project is licensed under the [The 3-Clause BSD License](LICENSE).Feel free to explore, modify, and contribute to this project as you see fit. Your feedback and contributions are greatly appreciated! 🚀✨


## Acknowledgments

This project is made possible by the contributions and support of various individuals and communities. Special thanks to:

- **Tailwind CSS Team:** For developing Tailwind CSS, a versatile CSS framework that simplifies web development and enhances user interfaces.
  
- **Open Source Community:** For fostering collaboration, innovation, and the sharing of knowledge, which enriches projects like My Form Validation and makes them accessible to all.

## Credits

This project wouldn't be possible without the contributions of the following:

- **React**: A JavaScript library for building user interfaces. Visit [React](https://reactjs.org/) for more information.

- **React Icons**: React Icons provides a comprehensive library of icons for React applications. Visit [React Icons](https://react-icons.github.io/react-icons/) for more information.
  
- **Tailwind CSS**: A utility-first CSS framework for creating custom designs rapidly. Visit [Tailwind CSS](https://tailwindcss.com/) for more information.

- **FontAwesome**: A popular icon library providing a vast collection of icons for web development. Visit [FontAwesome](https://fontawesome.com/) for more information.

- **Netlify**: Netlify provides seamless deployment and hosting solutions, making it easy to deploy web applications and share them with the world. Visit [Netlify](https://www.netlify.com/) for more information.

## Additional Credits

- **Redux**: A predictable state container for JavaScript apps. Visit [Redux](https://redux.js.org/) for more information.
  
- **React Router**: Declarative routing for React applications. Visit [React Router](https://reactrouter.com/) for more information.

- **Axios**: A promise-based HTTP client for the browser and Node.js. Visit [Axios](https://axios-http.com/) for more information.

- **YouTube Data API**: Provides access to YouTube's data, including videos, channels, and playlists. Visit [YouTube Data API](https://developers.google.com/youtube/v3) for more information.


## Author

- **Nishkarsh Gupta**
  - GitHub: [nishkarsh25](https://github.com/nishkash25)
  - Email: bm21btech11016@gmail.com

