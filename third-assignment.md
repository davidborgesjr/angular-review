Imagine that we have two components - ComponentA and ComponentB. Both components have to interact with each other in some way:
- Send some data from ComponentA to ComponentB and vice versa.
- Call some methods from ComponentA to ComponentB and vice versa.
Given this information, please answer the following questions:
1) What options do we have to establish such communication?
- The most common ways I've personally used to interecting between components are: (1) Using @Input and @Output decorators; (2) Using service providers.
2) For each option describe what are the pros and cons of this solution.
The first approach using the @Input and @Output decorators, brings the ideia of binding data, which shares the data in a simple way among the child and the father components, with a easy, clean and maintaible approach. However, if not used correctly, it may leads to the so-called Prop drilling, meaning that the data have to pass by several compents (which doenst' need the data) until it reachs the target one.
On the other hand, services are a way of provide the data sharing among different components in Angular. It uses the dependency injection, meaning the service is available first-hand to all Angular components. I believe the main drawback is maintanibility - the complexity to mantain and change the code can grow. Besides, services are single instances, meaning you would probably have to manage the data state.
3) For each option describe what are the cases the solution fits best.
For the first approach, the best cases are when you have directly coupled components. Let's say the ComponentA provides data that's going to be manipuleted by the user on ComponentB. In this case, ComponentB would create an @Input to receive the data and a @Output to emit the changes back to ComponentB. 
On the second approach, you would need to create a external service and inject it on the constructor from the two components. Let's say the application provides different permissions to manipulate the data on ComponentA & ComponentB, according to the user's role. To check it, you need to access the user roles through a service sharing the permissions' data among the two components.