# Deener

_Video_ of working app: https://github.com/smsarov/dinner/assets/47943520/8768ab99-7a95-496d-a100-c02cac488017



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

