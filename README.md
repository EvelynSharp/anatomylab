AnatomyLab Overview:
This is a side project for the University of Utah department of Biology. The department was looking for a way to administer weekly quizzes to students of the Anatomy classes.  The previous quizzes were built using flash and we updated the web application to new JavaScript technologies that are fast, responsive and scalable. 

Content Change Instructions for Professor:
Overview - This is a fully templated web application, meaning the quiz always looks and feels the same but the only thing changing is the content in 2 external data files (/images and /quizcontent.js).  Images from /images folder are imported into /quizcontent.js, and then /quizcontent.js has the quiz Q&A data and is what actually updates and modifies content for new quizzes.  

1) Changing a picture:
  - Save the picture you'd like to use for the quiz that week in the /images folder of the application. Path =       'anatomylab/client/src/images'
