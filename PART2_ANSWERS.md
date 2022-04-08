# Part 2: Changes to your application

### 1. You have a new requirement to implement for your application: its logic should stay exactly the same but it will need to have a different user interface (e.g. if you wrote a web app, a different UI may be a REPL).

> Please describe how you would go about implementing this new UI in your application?

If I was converting this to use a webapp UI, say React, the first step would be the boilerplate React setup. After this, I would need to do a few refactors to separate more of the logic around reading input, processing input, and generating output to be less enmeshed with `readline` module from Node.js. Once this has been separated the process of creating a UI for it would be trivial as most of the key functionality 

> Would you need to restructure your solution in any way?

As mentioned above, small parts of the program would need to be refactored to separate the different parts but I started with enough separation that this should be a simple task to achieve.

### 2. You now need to make your application “production ready”, and deploy it so that it can be used by customers. Please describe the steps you’d need to take for this to happen.

At the moment the app uses in-memory state storage, if you were creating a stateless API that was to perform this, you'd want to find a way to keep state out of the running process. This would only really apply if you were using a backend, in-memory works fine for a simple CLI application like this or something in a browser.

Conceptually it is hard to picture extra steps required for a programming toy. But as a generalised question, the main things would be to setup a CI/CD pipeline for automated testing and building. A few extra tests would probably not go astray, but most of the what would be needed would be dictated by where it went to from here. 

### 3. What did you think about this coding test - is there anything you’d suggest in order to improve it?

Using a CLI input/REPL was a great way to approach the problem and not get caught up in the often fiddly nature of a GUI. 

The instruction for point 1 aren't super clear. I had to read it a few times to understand that the first prompt was to kick-off a background process. Initially, the instructions made it sound like the x seconds wait was going to be between the CLI prompting for numbers. 
