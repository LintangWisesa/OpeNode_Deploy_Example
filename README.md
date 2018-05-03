![simplinnovation](https://4.bp.blogspot.com/-f7YxPyqHAzY/WJ6VnkvE0SI/AAAAAAAADTQ/0tDQPTrVrtMAFT-q-1-3ktUQT5Il9FGdQCLcB/s350/simpLINnovation1a.png)

# Deploy NodeJS (Express App) to OpeNode.io

### opeNode ([https://www.openode.io/](https://www.openode.io/)) is a reliable and fast Cloud Node.js hosting service to deploy your Node.js app instantly. In this repo, I'll share the example of Node.js app (using Express) that can be deployed to opeNode. Follow my instructions below. Happy hacking!

![simplinnovation_openode](https://2.bp.blogspot.com/-BPHxkXB6KXA/WsmRUh7G9KI/AAAAAAAAD-Y/F6IdZpyTZxwgZQSpuTEekxD9cxVCO7bzACLcBGAs/s320/openode.png)

#### 1. Create an account by sign-up/login to [opeNode](https://www.openode.io/).

#### 2. Install opeNode CLI (Command Line Interface) globally:

```shell
  $ npm install -g openode
```

#### 3. Clone the Node.js boilerplate from my repo:

```shell
  $ git clone https://github.com/LintangWisesa/OpeNode_Deploy_Example.git
```

#### 4. Go to the repo then install all packages needed:

```shell
  $ cd OpeNode_Deploy_Example
  $ npm install
```

#### 5. Edit Express app route on routes/renderer.js! Make sure there is no error on your app by running server.js. Server will be running by default on localhost:3002!

```shell
  $ node server
```

#### or simply type:

```shell
  $ npm start
```

#### Open *localhost:3002* via browser, then try also to open *localhost:3002/something*. If everything's fine, the response will be similar to the picture below:

![simplinnovation_ok](
https://raw.githubusercontent.com/LintangWisesa/OpeNode_Deploy_Example/master/server_is_working.png)

#### 6. So your app is working fine locally. Now, it's time to deploy to opeNode:

```shell
  $ openode deploy
```

#### Answer some questions & follow its process until done.

```shell
    Would you like to [l]ogin or [r]egister a new account?:  (r) l
    email:  lintang@wisesa.com
    password: *****

    [DDD MMM dd yyyy hh:mm:ss GMT+0700 (SE Asia Standard Time)] -  [+] Authentication valid.
  
    Type your subdomain sitename (Example: my-site) OR custom domain (mysite.com): lintang
```

#### On last step, we will get our app's URL on opeNode.

```shell
  [ { location: 'france',
      result: { result: 'success', URL: 'http://my_url.fr.openode.io/' } } ]
```

#### Try to open that URL via browser. Finish! Your app has just been deployed!

![simplinnovation_online](
https://raw.githubusercontent.com/LintangWisesa/OpeNode_Deploy_Example/master/server_is_online.png)

### More information [click here](https://www.openode.io/openode-cli).

#

#### Lintang Wisesa :love_letter: _lintangwisesa@ymail.com_

[Facebook](https://www.facebook.com/lintangbagus) | 
[Twitter](https://twitter.com/Lintang_Wisesa) |
[Google+](https://plus.google.com/u/0/+LintangWisesa1) |
[Youtube](https://www.youtube.com/user/lintangbagus) | 
:octocat: [GitHub](https://github.com/LintangWisesa) |
[Hackster](https://www.hackster.io/lintangwisesa)
