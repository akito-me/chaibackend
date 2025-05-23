require('dotenv').config()

const express = require('express')

const app = express()
const port = 3000

const gitdata={
    "login": "akito-me",
    "id": 190189236,
    "node_id": "U_kgDOC1YOtA",
    "avatar_url": "https://avatars.githubusercontent.com/u/190189236?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/akito-me",
    "html_url": "https://github.com/akito-me",
    "followers_url": "https://api.github.com/users/akito-me/followers",
    "following_url": "https://api.github.com/users/akito-me/following{/other_user}",
    "gists_url": "https://api.github.com/users/akito-me/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/akito-me/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/akito-me/subscriptions",
    "organizations_url": "https://api.github.com/users/akito-me/orgs",
    "repos_url": "https://api.github.com/users/akito-me/repos",
    "events_url": "https://api.github.com/users/akito-me/events{/privacy}",
    "received_events_url": "https://api.github.com/users/akito-me/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Tadvab Pradhan",
    "company": null,
    "blog": "",
    "location": "odisha,india",
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 6,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2024-11-30T13:09:31Z",
    "updated_at": "2025-05-22T04:32:21Z"
  }



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req, res) => {
    res.send('tadvabdotcom')
})

app.get('/login',(req,res) => {
    res.send('<h1>please login here </h1>')
})

app.get('/youtube',(req, res)=>{
    res.send('<h2>tadvab coding</h2>')
})

app.get('/github',(req,res) =>{
    res.json(gitdata)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
