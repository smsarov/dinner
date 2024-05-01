# Deener

_Video_ of working app: 

https://github.com/smsarov/dinner/assets/47943520/321b4077-cadb-4d1a-9dd0-c79da8889e6a


### Description

My friends and I have met many times with the problem that we cannot decide how to spend an evening together, which is why I wanted to write a mini-application that would be accessible from a browser that solves this problem.

To collect information about the preferences of each user, I made a separate page with a convenient chat with a bot that asks all the necessary questions. The behavior of this entire page can be controlled using JSON-like files, which I called ```scripts```.

After filling out the form, the user is redirected to another page where he can create a new room or join an existing one using the code they received from friends.

When everyone join, one of the users clicks on the **Ready** button and the application starts generating a response with reasoned advice on where they can all go so that everyone likes it. 

If users don't like the result, they can click on the **Dislike** button. If there are more than half of the dislikes, the response will be generated anew.


### Stack

Frontend:
- NextJS
- Tailwind
- Framer Motion

Backend:
- Express
- Socket.io
- OpenAI API

Repo with the server code will be published later.
- UPD: repo has been published here: https://github.com/smsarov/dinner_server, I recommend to read it's readme.

### Worth noting

* No 3rd party UI libs
* Animations are everywhere where I managed to come up with beautiful ones (of course no designer took part).
* It was my first time using server as a state holder if that it is even a thing. Kinda weird experience, but I liked it.
* Using sockets instead of normal REST was a neccessity, because users interact constantly and I wanted to achieve a streaming effect like in chatgpt. 
* The code on the server side is quite terrible and could be written in a much better way, but I did't want to deal with constantly connecting and disconnecting (with no reason) sockets, so i overused the ```room``` and ```socket.data``` feautures of socket.io.
* Tested in Chromium-based browsers and Safari.
* Utilizes session storage
* No database
* *unfortunately*, no error handling yet :(
* Probably need to work more on prompt generating for chatgpt api, because sometimes the results are just horrible
* I plan to make this all available as a web app on the Internet because I really like what i've done


## **FLAME**

I **absolutely** hate deployment. I knew that vercel can host Express apps, but not with no long-lived connection. So the only way to work around was to deploy my server on VPS. I did it for the first time in my life, of cource, so the idea of working remotely with Ubunty with no GUI was scary as hell. When I cloned the repo there, I couldn't start the server the same way I did on my computer. After an enormous attemts to solve the problem by installing infinite number of npm packages I still received a buch of error with TS modules. My lasy hope was to update the NodeJS version and suddenly that hepled. Node14 couldn't start, but Node20 actually could. *Fantasic*. 
Now I could work with locally hosted frontend and remotly hosted backend. It's time to deploy NextJS to vercel. Wow, it all worked!! No. Application, which was deployed on vercel could not connect to `http` server, because the app itself was using `https`. I spend a night figuring out how to get SSL sertificates, because all tutorial online were outdated and didn't work anymore. It turned out that I needed my own domain for that... When it all was set and done, I still could not connect to my own server on the web. I then made a discovery that unlike http which utilizes 80 port as default, https' port must be set to 443. That was it. It all finally worked all together online. 
I'm happy that I was able to solve all of that, but I will never say that it was a good experience. Thank you for reading my complains.

