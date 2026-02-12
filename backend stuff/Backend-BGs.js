//==============================================
//
//
//
//
//
//
//==============================================

function getContentPages(req) {
    const memory = GetVersionInfo(req);

    const contentpages = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "responses", "contentpages.json")).toString());

    let Language = "en";

    try {
        if (req.headers["accept-language"]) {
            if (req.headers["accept-language"].includes("-") && req.headers["accept-language"] != "es-419") {
                Language = req.headers["accept-language"].split("-")[0];
            } else {
                Language = req.headers["accept-language"];
            }
        }
    } catch {}

    const modes = ["saveTheWorldUnowned", "battleRoyale", "creative", "saveTheWorld"];
    const news = ["savetheworldnews", "battleroyalenews"];

    try {
        modes.forEach(mode => {
            contentpages.subgameselectdata[mode].message.title = contentpages.subgameselectdata[mode].message.title[Language]
            contentpages.subgameselectdata[mode].message.body = contentpages.subgameselectdata[mode].message.body[Language]
        })
    } catch {}

    try {
        if (memory.build < 5.30) { 
            news.forEach(mode => {
                contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "defaultnotris";
                contentpages[mode].news.messages[0].image = "https://cdn.discordapp.com/attachments/927739901540188200/930879507496308736/discord.png";
                contentpages[mode].news.messages[1].image = "https://i.imgur.com/ImIwpRm.png";
            });
        }
    } catch {}

    try {
        contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].stage = `season${memory.season}`;
        contentpages.dynamicbackgrounds.backgrounds.backgrounds[1].stage = `season${memory.season}`;



        if (memory.season == 10) {
            contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "defaultnotris";
           /* contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "seasonx"; // default but its not used by ducki :))
            contentpages.dynamicbackgrounds.backgrounds.backgrounds[1].stage = "seasonx";*/
            contentpages.dynamicbackgrounds.backgrounds.backgrounds[1].stage = "blackmonday";
            
        }

    //Chapter 2 Season 1
    if (memory.season == 11) {

         if (memory.build == 11.10 ) {
            contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "defaultnotris";
            contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "fortnitemares";
            contentpages.dynamicbackgrounds.backgrounds.backgrounds[1].stage = "fortnitemares";
            
            }

         if (memory.build == 11.30 ) {
            contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "defaultnotris";
            contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "Galileo";
            contentpages.dynamicbackgrounds.backgrounds.backgrounds[1].stage = "Galileo";
            
            }

        if (memory.build == 11.31 || memory.build == 11.40) {
            contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "defaultnotris";
            contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "Winter19";
            contentpages.dynamicbackgrounds.backgrounds.backgrounds[1].stage = "Winter19";

            }

            if (memory.build == 11.50 /*|| memory.build == 11.40*/) {
            contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "defaultnotris";
            contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "LoveAndWar";
            contentpages.dynamicbackgrounds.backgrounds.backgrounds[1].stage = "LoveAndWar";

            }
            // fall back for version OR if commented out
            else {
                contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "defaultnotris";
                contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "season11";
                contentpages.dynamicbackgrounds.backgrounds.backgrounds[1].stage = "season11";

            }
        }

    // Chapter 2 Season 4
     if (memory.season == 14) {

            // normal BG
        if (memory.build == 14.00 || memory.build == 14.10 ||  memory.build == 14.20 || memory.build == 14.30 ) {
                contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "defaultnotris";
                contentpages.dynamicbackgrounds.backgrounds.backgrounds[1].stage = "season14";
            }

           // Fortnitemares
        if (memory.build == 14.40 || memory.build == 14.60) {
            contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "defaultnotris";
            contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "halloween2020";
            contentpages.dynamicbackgrounds.backgrounds.backgrounds[1].stage = "halloween2020";

            }
        }

        // Chapter 3 Season 1
        if (memory.build == 19.01) {
            contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "defaultnotris";
            contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "winter2021";
            contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].backgroundimage = "https://cdn.discordapp.com/attachments/927739901540188200/930880158167085116/t-bp19-lobby-xmas-2048x1024-f85d2684b4af.png";
            contentpages.subgameinfo.battleroyale.image = "https://cdn.discordapp.com/attachments/927739901540188200/930880421514846268/19br-wf-subgame-select-512x1024-16d8bb0f218f.jpg";
            contentpages.specialoffervideo.bSpecialOfferEnabled = "true";
        }

        // Chapter 3 Season 2
        if (memory.season == 20) {
            if (memory.build == 20.40) {
                contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "defaultnotris";
                contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].backgroundimage = "https://cdn2.unrealengine.com/t-bp20-40-armadillo-glowup-lobby-2048x2048-2048x2048-3b83b887cc7f.jpg"
            } else {
                contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "defaultnotris";
                contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].backgroundimage = "https://cdn2.unrealengine.com/t-bp20-lobby-2048x1024-d89eb522746c.png";
            }
        }

        // Chapter 3 Season 3
        if (memory.season == 21) {
            contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "defaultnotris";
           
             
             if (memory.build == 21.00) {
                contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "defaultnotris";
                 contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].backgroundimage = "https://cdn2.unrealengine.com/s21-lobby-background-2048x1024-2e7112b25dc3.jpg"
            }

            if (memory.build == 21.10) {
                contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "defaultnotris";
                contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "season2110";
            }
            if (memory.build == 21.30) {
                contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "defaultnotris";
                contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].backgroundimage = "https://cdn2.unrealengine.com/nss-lobbybackground-2048x1024-f74a14565061.jpg"
                contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "season2130";
            }
        }

        // Chapter 3 Season 4
        if (memory.season == 22) {
            contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "defaultnotris";
            contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].backgroundimage = "https://cdn2.unrealengine.com/t-bp22-lobby-square-2048x2048-2048x2048-e4e90c6e8018.jpg"
        }

        // Chapter 4 Season 1
        if (memory.season == 23) {
            if (memory.build == 23.10) {
                contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "defaultnotris";
                contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].backgroundimage = "https://cdn2.unrealengine.com/t-bp23-winterfest-lobby-square-2048x2048-2048x2048-277a476e5ca6.png"
                contentpages.specialoffervideo.bSpecialOfferEnabled = "true";
            } else {
                contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "defaultnotris";
                contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].backgroundimage = "https://cdn2.unrealengine.com/t-bp23-lobby-2048x1024-2048x1024-26f2c1b27f63.png";
            }
        }

        // Chapter 4 Season 2
        if (memory.season == 24) {
                if (memory.build == 24.00)
                {
                contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "defaultnotris";
                contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].backgroundimage = "https://cdn2.unrealengine.com/t-ch4s2-bp-lobby-4096x2048-edde08d15f7e.jpg"
                contentpages.specialoffervideo.bSpecialOfferEnabled = "true";
                }
                if (memory.build == 24.01)
                {
                contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "defaultnotris";
                contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].backgroundimage = "https://cdn2.unrealengine.com/t-ch4s2-bp-lobby-4096x2048-edde08d15f7e.jpg"
                ///contentpages.specialoffervideo.bSpecialOfferEnabled = "true";
                }
                if (memory.build == 24.20)
                {
                contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "defaultnotris"; ///https://i.imgur.com/EBwPMEd.png | https://i.imgur.com/o6zQNSZ.jpeg | https://cdn2.unrealengine.com/t-ch4s2-bp-lobby-4096x2048-edde08d15f7e.jpg
                contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].backgroundimage = "https://cdn2.unrealengine.com/t-ch4s2-bp-lobby-4096x2048-edde08d15f7e.jpg"
                contentpages.specialoffervideo.bSpecialOfferEnabled = "true";
                }
                if (memory.build == 24.30)
                {
                backgrounds[1].stage = "defaultnotris"
                backgrounds[1].backgroundimage = "https://cdn2.unrealengine.com/ch4s2-lobbyupdate-4-20-2022-lifted-copy-3840x2160-d3a138f5f9e7.jpg"
                }
                if (memory.build == 24.40)
                {
                backgrounds[1].stage = "defaultnotris"
                backgrounds[1].backgroundimage = "https://cdn2.unrealengine.com/ch4s2-lobbyupdate-4-20-2022-lifted-copy-3840x2160-d3a138f5f9e7.jpg"
                }
        }

        // Chapter 4 Season 3
        if (memory.season == 25) {
            if (memory.build==25.00)
            {
            contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "defaultnotris";
            contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].backgroundimage = "https://cdn2.unrealengine.com/s25-lobby-4k-4096x2048-4a832928e11f.jpg"
            }
            
           if (memory.build == 25.10)
            {
                contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "defaultnotris";
                contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].backgroundimage = "https://cdn2.unrealengine.com/fn-shop-ch4s3-04-1920x1080-785ce1d90213.png"
            }

            if (memory.build == 25.11) {
                contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "defaultnotris";
                contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].backgroundimage = "https://cdn2.unrealengine.com/t-s25-14dos-lobby-4096x2048-2be24969eee3.jpg"
            }

            if (memory.build == 25.20) 
            {
                contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "defaultnotris";
                contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].backgroundimage = "https://cdn2.unrealengine.com/t-s25-14dos-lobby-4096x2048-2be24969eee3.jpg"
            }
            if (memory.build == 25.30) 
            {
                contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "defaultnotris";
                contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].backgroundimage = "https://cdn2.unrealengine.com/t-s25-14dos-lobby-4096x2048-2be24969eee3.jpg"
            }

        }

        // Chapter 4 Season 4
        /*
        Lobby1
        Season: 26
        Build: 26.3
        CL: 28688692
        Lobby: LobbySeason26

        Lobb2 -
        */
        if (memory.season == 26) {
            if (memory.build==26.00)
            {
            contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "defaultnotris";
            contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].backgroundimage = "https://cdn2.unrealengine.com/0814-ch4s4-lobby-2048x1024-2048x1024-e3c2cf8d342d.png"
            }
            
           if (memory.build == 26.30)
            {
                contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "defaultnotris";
                contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].backgroundimage = "https://cdn2.unrealengine.com/s26-lobby-timemachine-final-2560x1440-a3ce0018e3fa.jpg"
            }

        }

        // Chapter 4 Season OG / Ch4 S5
        if (memory.season == 27) {
            contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "defaultnotris";
            contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "rufus";
        }

         // Capter 4 Season 4
        if (memory.season == 26) {

            if (memory.build == 26.00) {
            contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "defaultnotris";
            contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "season26";
            }
            if (memory.build == 26.10) {
                contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "defaultnotris";
                contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "season26";
            }
            if (memory.build == 26.20) {
                contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "defaultnotris";
                contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "season26";
            }

            // 26.30-CL-28509302:
            if (memory.build == 26.30 && memory.CL == 28509302) {
                contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "defaultnotris";
                contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].backgroundimage = "https://cdn2.unrealengine.com/s26-lobby-timemachine-final-2560x1440-a3ce0018e3fa.jpg"
                contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "season2630";

            }

            // 26.30-CL-28688692:
            if (memory.build == 26.30 && memory.CL == 28688692) {
                contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "defaultnotris";
                contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].backgroundimage = "https://cdn2.unrealengine.com/s26-lobby-timemachine-final-2560x1440-a3ce0018e3fa.jpg"
                contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "season2630";
                
            }
        }
        
        // Chapter 4 Season OG / Ch4 S5
        if (memory.season == 27) {

            /*  // maybe need to add more builds here like since s27 has 3 versions and all the same shit kinda :)
            if (memory.season == 27.00){
            
            }
            if (memory.season == 27.10){
            
            }
            if (memory.season == 27.11){
        
            }
            */

            contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "defaultnotris";
            contentpages.dynamicbackgrounds.backgrounds.backgrounds[0].stage = "rufus";
        }

         /*TODO  Season28 + S29 */
         if (memory.season == 28) {
        

            if (memory.build == 28.00) {
        
            }

            if (memory.build == 28.01) {
        
            }

            if (memory.build == 28.10) {
        
            }
        
            if (memory.build == 28.20) {
        
            }

            if (memory.build == 28.30) {
        
            }
        
        }


    } catch {}

    return contentpages;
}
