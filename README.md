# Reload-repo
My personal tweaks and settings for Reload backend 



**Content inside of this repository is derived from LawinServerV2  and Reload backends. To use any of the content, you MUST have it downloaded and launched.
This repository is *PRIVATE*, meaning none of the information inside of it should be shared. You will be kicked off the Github if you do. (also no forking)**

### Some credits and help/support <3
- Rlaz (for most of shotgun knock backs fix and movement fixes)


### Sources
Reload backend | ***https://github.com/Project-Reload/Reload-Backend***

Lawin Server V: 1, 2, 3, | [LawinV1](https://github.com/Lawin0129/LawinServer) [LawinV2](https://github.com/Lawin0129/LawinServerV2) [LawinV3](https://github.com/AlienDenis12/LawinServerV3)


## Note

Some these files can be found in other Repositories but i converted them  into `.Js` so you can use them in th backends since they are written in Javascript.


**How to setup multiple gameservers**
<details>

1. - Go to Config/config.json in the directory you extracted Reload Backend into.
2. - Open it, you should see a "gameServerIP" section in the file.
3. - To add more gameservers you will have to do it like this

>***Example here:*** 
>
>- `"gameServerIP": ["127.0.0.1:7777:playlist_defaultsolo","127.0.0.1:7777:playlist_defaultduo"],` 
>
>  **OR** (for other backends) 
>- `"gameServerIP": ["Your-IP:MM-Port:Your-FN-Playlist-Id-here","Your-IP:MM-Port:Your-FN-Playlist-Id-here"],`


4. - You have now added solos and duos to your matchmaking.

</details>

**How to enable / Show arena playlist on 24.30+**
<details>
  
1. **Code Arena to your backend**

- You need to have EventListActive and the Lobby Scorring UI
- Also need to have the ability to SAVE,RECALL/LOAD Points and get Discovery working for the playlist.
- [Here's a shitty but Lobby Scorring UI working for Reload backend](https://github.com/Ducki67/Reload-repo/tree/main/arena%20stuffs%20for%20reload%20backend%20(s24)) **(This doesnt have Saving Or Recalling points for DBs btw i will Not give u that for free / figure it out on ur own)**

2. **The playlist and Discovery setup**

Later skiddas cuz i have a life to deal with :)

</details>
