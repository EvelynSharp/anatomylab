AnatomyLab Overview:
This is a side project for the University of Utah department of Biology. The department was looking for a way to administer weekly quizzes to students of the Anatomy classes.  The previous quizzes were built using flash and we updated the web application to new JavaScript technologies that are fast, responsive and scalable. 

Content Change Instructions for Professor:
Overview - This is a fully templated web application, meaning the quiz always looks and feels the same but the only thing changing is the content in 2 external data files (/images and /quizcontent.js).  Images from /images folder are imported into /quizcontent.js, and then /quizcontent.js has the quiz Q&A data and is what actually updates and modifies content for new quizzes.  

1) Importing a picture:
  - Save the picture you'd like to use for the quiz that week in the /images folder of the application. Path =       'anatomylab/client/src/images'.  jpg, jpeg, png files will work best. 
  - After saving the chosen image, the image will need to imported into the /quizcontent.js file.  To import it, at the top of /quizcontent.js use the following format:
    import title-of-image from './images/title-of-image.jpg';
 Now your image is imported correctly into the /quizcontent.js file and it is ready to be used for a quiz. 
 
 2) Changing the Content:
 - As you can see from looking as the /quizcontent.js file, it contains numerous JSON objects with data needed for each week's quiz, such as General Q&A, Intermediate Q&A, Advanced Q&A and the image. Example of a JSON object below. 
   {
    key: 1,
    imagesrc: title-of-image,
    genKnowledge: "What side of the body is this bone from?",
    genAnswer: "Left Side",
    intKnowledge: "This bone forms from the fusion of which 3 bones?",
    intAnswer: "radius, ulna, humerous",
    advKnowledge: "Fusion of these 3 bones generally occurs between what ages?",
    advAnswer: "12-15",
    enable: true
  },
 - To use the image youve just imported, simply pair it with the imagesrc key and refer to it by the title you chose for the image. title-of-image. See example above for exact usage. 
 - To change the quiz questions and answers, simply edit the specific JSON object pairs accordingly. 
