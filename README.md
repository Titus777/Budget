# Budget

Budget App

Titus Mahendran 

14592592

[https://budget-app-a4e07.web.app/](https://budget-app-a4e07.web.app/)

[https://github.com/Titus777/Budget](https://github.com/Titus777/Budget)

 
# Introduction

In the first part of this project, the problem statement that I spoke about is students managing their money in university. Many students have problems managing money, I was able to prove this through research and interviews in the first assessment. When researching about student’s problems in university, budgeting was one of the few that were mentioned the most. The reasons why were that students spend money on unnecessary things and another reason was being pressured by friends to go out; movies, eating out, drinking etc. The methods which I was using to prove why budgeting is a problem were interviews and surveys, majority of the students have said they have budgeting problems in the survey and all three students in interview had budgeting problems as well. These students have said they have budgeting problems because they don’t have an app that organises their expenses and they find it difficult to save money up. Through this method I came across a solution which was to make a budget app. A prototype was done, and interview was done for that as well, and it had positive feedback. I have added an additional feature in the final product which was to have an edit button so students can add money for expenses, this additional feature was added by myself as it would be helpful for students. 

The link above is the final concept of my budget app. This part of the project was implementing the web application. This app was made to allow students to budget their money appropriately. The budget app has different features such as upcoming bills-which the users will have to add by themselves, a pie chart has been implemented the user will be able to see their expenses- how much they spent and how much they have saved. Furthermore, a sign in/login system was added for the student’s privacy. This single web application was made using react and firebase.

# Methodology 

In the first part of the project, I been using design thinking, because it’s one of the most used methodologies in the business industry. It has helped me gather all the information I needed to progress through each stage, especially during the interviews and therefore making my prototype. Also helping me create some ideas for the final product which was the budget app. In this part of the project, I will be using a different methodology to the first part. 

So, the methodology I have planned to use throughout the implementation of the budget app is [rapid application deployment methodology](https://devrix.com/tutorial/what-is-rapid-application-development-4-phases-of-rad-methodology/
). Rapid application deployment methodology or known as RAD is type of agile software development but the difference is that RAD is a fast product development meaning that a product can be made faster. The main goal of this methodology is what i have mentioned before that is to release a product even faster than the usual time it takes to release a product. the reason why this methodology has faster development process is because they get constant feedback, this allows any business to improve methods faster.This methodology has 4 phases, these include requirements planning, user design, rapid construction, and cutover.

Stage 1 requirements planning – In this stage is searching for the problem, the problem which I have decided in this project was managing money for students. The requirements of this project making it easy for students to budget their money as one of the problems students face in university is budgeting, I will be doing this by making a budget app. Timeline- first assessment finding the problem, interviews & surveys, prototype, second assessment implementation and test. 


Stage 2 User design – 2 stage is the making of the prototypes, which has been done in the first assessment after the surveys and interviews, it was made through a tool called Figma. These two methods have helped make a prototype, such as adding features the students wanted for example login/sign up, expenses, upcoming bills, and monthly report etc. 

Stage 3 testing and gathering feedback- In this stage after the prototype was completed, is getting feedback through testing. Feedback was needed so that I can be satisfied before moving to the final product. The feedback given by students was that they liked the features of the app and what it included. As the feedback was positive, I procced to go with the prototype as my final product. There wasn’t any negative feedback given by the students which made me more confident in going to the next stage.

Stage 4 releasing the product- The final stage is to make the actual budget app using react and firebase. After the product is finished this will be given to students to test whether they are satisfied with the final product. The single web application was deployed using firebase, the link to the budget app is at the top of this report, it will direct you straight to the app. Furthermore, additional testing was done so that the application was working properly before the testing. 

This methodology has helped in this part of the project, it was easy to follow and understand. It had all the stages I needed to complete this project. From getting feedback on the prototypes, which helped alot in the first assessment as i was able to see if it was the right choice to move forward with, and if it was worthy of becoming the final product. The feedback for the final product will mentioned in the next part of this report. This methodology is reliant on feedback.

# How to use the App

In order for you to save your data you would have to insert data into the "balance, monthly Limit, savings" and press the button to "Set your balance". for the applicaiton to send it to firebase for storage. Additionally, in the section "Expenses", you can click the "Edit expenses" and a new form will appear. Complete the form (make sure that to use "0" if you don't spend anything on that specific expense) and press "Save". Then refresh the page.

# Conclusion/Results 

My single web application was given to two university students so that I can get feedback. When they observed the home page the first thing, they said was that it was straightforward and understandable. They mentioned that the expenses feature was useful as they as can add their own expenses and see how much they spent on each category e.g., groceries & bills. On the other hand, they did mention that they had to refresh the website so that the expenses are displayed. Furthermore, they were impressed by the pie chart how it calculates the expenses automatically and they stated that the upcoming bills page they found useful, as they won’t forget to pay bills. 

Some bugs that are still in the app are that you'll have refresh the page when you set a balance and edit the expenses, other than that the app works properly. 

Some challenges i came across this project is that the balance and the expenses didn't work properly. It didn't display the money but i was able to fix by setting an "useState" to rerender each time my useRef hook would gain a new value. This way, the problem where my useRef value would update but my page wouldn't was fixed as "useState" would rerender my components with the new value from the useRef. 



To sum up this project I believe that this single web application solves the problems of students who have budgeting problems, as I have provided the features what has been asked for such as a monthly report and expenses category. With the help of react and firebase I was able to create the app. As explained before the rapid application deployment methodology was the best suited methodology for my project as it had the steps I was looking for when implementing the budget app, it wasn’t time consuming and became easy to complete the project. I learned many new skills in this project such as using react and firebase for the time. This was my first time creating a single page web application, it turned out pretty well, but I think if I had more time, I would have added more features such as notifications and reward system. The notification feature was made but unfortunately I wasn't able to get it work, but i was happy the way the app turned and I got positive feedback from the students.

# Appendix 

Appendix A

this shows the authentication in firebase

<img width="1433" alt="image" src="https://user-images.githubusercontent.com/72074715/212199521-fb905ddf-402f-4445-afeb-59b32c9783c1.png">

Appendix B

you can see that below the budget app has been deployed through firebase

<img width="1440" alt="image" src="https://user-images.githubusercontent.com/72074715/212200931-f54a02c6-03f8-468f-8696-82edad577267.png">


