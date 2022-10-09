Review following code snippet and answer questions:
1) What are the problems in this code snippet?
- The html elements are not correct;
- The variable _user could be an interface;
- It's not a good practice to subscribe inside the constructor method. 
- It's ideal to unsubscribe to prevent memory leak
2) How can we solve them?
Open and close the tags properly, like <div class="user-panel">{{ getUserName() }}</div>
Create a interface to taka advatange of typescrip's typing. 
Implement the interface ngOnInt from angular/core, and move the subscription this._authService.user to ngOnInit.
Implement the interface ngOnDestroy from angular/core and call method unsubscribe() to avoid possible memory leaks.
3) If there are multiple options to solve them, what benefits and drawbacks of each method?
I think a good approach would be to use the angular async pipe, because this would simplify the points a I listed regarding the unsubscribe issue and make the code cleaner.