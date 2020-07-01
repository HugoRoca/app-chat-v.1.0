# Chat app v1.0

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/eeda1401124643dd8e6d6c59ca8958c9)](https://app.codacy.com/manual/HugoRoca/app-chat-v1.0?utm_source=github.com&utm_medium=referral&utm_content=HugoRoca/app-chat-v1.0&utm_campaign=Badge_Grade_Settings)

----

## Steps

1. install `npm i -g create-react-app`
2. create app in react `create-react-app [name or ./ for create in folder] 
3. after install this:

```
$ npm i react-router socket.io-client react-scroll-to-bottom react-emoji query-string
```

4. install this dependencies in other folder "server": 

```
$ npm i cors nodemon express socket.io
```

5. for deploy `server` in heroku

```
$ heroku login

$ cd my-project/
$ git init
$ heroku git:remote -a hr-chatapp-v1

$ git add .
$ git commit -am "make it better"
$ git push heroku master

for existing repositories, simply add the heroku remote

$ heroku git:remote -a hr-chatapp-v1
```

6. for deploy `client` in netlify

```
$ npm i netlify-cli -g

$ netlify login

for pre production
$ netlify deploy // here url domain custom

for production select folder, this case `build`
$ netlify deploy --prod
```
