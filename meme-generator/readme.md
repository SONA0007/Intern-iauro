### Sample Image 
![image](https://github.com/user-attachments/assets/211de36a-b514-42a1-b23b-b5d75f808749)

# Meme Generator

## Description
This is a **Meme Generator** built using **React** and **Material UI**. It allows users to input text for the top and bottom sections of a meme and generates a meme using random images fetched from an API.

## **Tech Stack**
- **React** (Functional Components, Hooks)
- **Material UI** (Typography, Buttons, Inputs)
- **CSS** (Styling and positioning elements)

---

## **React Concepts Used**

### **1. Hooks**
#### **useState** (State Management)
- Used to store user input (top text, bottom text) and selected meme image.
- Example:
  ```jsx
  const [memes, setMemes] = React.useState({
    topText: '',
    bottomText: '',
    randomImg: 'http://i.imgflip.com/1bij.jpg'
  });
  ```

#### **useEffect** (Side Effects)
- Used to fetch meme images from an external API when the component mounts.
- Example:
  ```jsx
  React.useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then(response => response.json())
      .then(data => console.log(data.data.memes));
  }, []);
  ```

### **2. Functional Components**
- The entire app is built using functional components like `MemeGenerator`.
- Example:
  ```jsx
  function MemeGenerator() {
    return <h1>Meme Generator</h1>;
  }
  ```

### **3. Handling Side Effects**
- API calls inside `useEffect` to avoid unnecessary re-renders.
- Cleanup functions to remove event listeners when components unmount.

---

## **How to Run the Project**
1. Clone the repository:
   ```sh
   git clone https://github.com/SONA0007/Intern-iauro.git
   ```
2. Navigate to the project folder:
   ```sh
   cd meme_generator
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm start
   ```

---

### **Future Enhancements**
- Add a download option for generated memes.
- Improve UI with animations.
- Allow users to upload custom images.

---
**Repository:** [Intern-iauro](https://github.com/SONA0007/Intern-iauro)

