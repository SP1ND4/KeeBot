const Discord = require('discord.js');
const bot = new Discord.Client({autoReconnect: true});

console.log("KeeganBot is working! Hooray!! >//w//<");
const prefix = 'k!'; 
let statuses = ['discord.gg/b5yB2jW', 'memes', 'with frens', 'with Ike', 'things', 'ROBLOX', 'ROAR OF TIME', 'Join Primal Forces!', 'while watching the PFP'];
bot.on('message', (message) => {
    if (message.author.bot) return;       
    var userVar = message.author                                                                                                                                                                                                                     
    msg = message.content.toLowerCase();
    setInterval(function(){
    
    let status = statuses[Math.floor(Math.random()*statuses.length)]
    
    bot.user.setPresence({ game: {name : status }, status: 'online'})

    }, 15000)
    
	if (msg == prefix + 'groodin') {
		message.channel.sendMessage('GROOOOOODINNNNNN');
	}
	if (msg == prefix + 'gwoodin') {
		message.channel.sendMessage('ye, GWOODIN!!!1!');
	}
	if (msg == prefix + 'fuckingnormies') {
		message.channel.sendMessage('***REEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE***');
	}
	if (msg == prefix + 'earthquake') {
		message.channel.sendMessage('EARTHQUAKEEEEEEEEE');
	}
	if (msg == prefix + 'owo') {
		message.channel.sendMessage('>w>');
	}
	if (msg == prefix + 'taste') {
		message.channel.sendMessage('TASTE MY DOUBLE SUNDAY');
	}
	if (msg == prefix + 'gayvin') {
    	var gayvin = ["Gayvin is so gay that the actual LGBT+ people rejected him", "Gayvin is so gay that people think he's a girl", "Gayvin is so gay that he wants to lose his virginity with a trap so people call him heterosexual, even though that's not gonna happen", "Gayvin is so gay that once he found out he was gay, he literally got inside the closet", "Gayvin is so gay that SP1ND4 got tired of writing all of these random messages", "If LGBT were a country, the national athem would be called Gayvin", "", "gAyViN iS sO gAy ThAt He MaKeS mE cApItAlIzE tHiS mEsSaGe WrOnG"];
		message.channel.sendMessage(gayvin[Math.floor(Math.random()*gayvin.length)]);
	}
	if (msg == prefix + 'shipwhite') {
    	var options = ["JM x White", "Chris x White", "Allen x White", "White x MEMES", "White x Anime?", "White x Gayvin???", "White x Dan", "White x Double Sunday", "Arrow x White"];
		message.channel.sendMessage(options[Math.floor(Math.random()*options.length)]);
	}
	if (msg == prefix + 'mine') {
		message.channel.sendMessage('MINING AWAY');
		wait = (5)
		message.channel.sendMessage('IN THIS MINECRAFT DAY...');
		wait = (2)
		message.channel.sendMessage('*inhales*');
		wait = (3)
		message.channel.sendMessage('MIIIIIIIIIIIINE DIAAAAAAAAAAAAAAAAAMONNDDDDDDDDDDDDDDDDDDDDDDDDDDSSSSSSSSSSSSSSSS');
	}
	if (msg == prefix + 'shrek') {
		message.channel.sendMessage('GET SHREKT');
	}
	if (message.content == 'WHO ARE WE?') {
		message.channel.sendMessage('WE ARE THE FORCES!');
	}
	if (msg == 'taste my double sunday') {
		message.channel.sendMessage("<:ice_cream_man:477718307349463041> hey! that's my phrase!");
	}
	if (msg == 'gay') {
		message.channel.sendMessage('no u');
	}
	if (msg == prefix + 'deadmeme') {
		message.channel.sendMessage('do u kno da wae?');
	}
	if (msg == prefix + 'addmeat') {
		message.channel.sendMessage('oh, so you want ADDED MEAT, ADDED MEAT, ADDED MEAT? OK :meat_on_bone: :meat_on_bone: :meat_on_bone:');
	}
	if (msg == prefix + 'roar'){
		message.channel.send('ROAR OF TIME!!!!1!!!1')
	}
	if (msg == 'music racism!'){
		message.channel.sendMessage('UNFAIR!')
	}
	if (msg == prefix + 'idiot'){
	    message.channel.sendMessage("Dumb Dumb Stupid Head. Dumb Dumb Stupid Head. Dumb Dumb Stupid Head.", {tts: true})
    }
    if (msg == prefix + 'tnspam'){
        message.channel.sendMessage("TN.  TN.  TN.  TN.  TN.  TN.  TN.  TN.  TN.  TN.  TN.  TN.  TN.  TN.  TN.  TN.  TN.  TN.  TN.  TN.  TN.  TN.", {tts: true})
    }
    if (msg == prefix + "dick-chan") {
        message.channel.send("Oh yeah, the Primal Enforce-A-Dick-Into-My-Mouth guy, let's not talk about him right now")
    }
    if (msg.includes("Groudon")) {
        message.channel.send("Groodin*")
    }
    if (msg.includes("groudon")) {
        message.channel.send("Groodin*")
    }
    if (msg == prefix + "furret") {
        message.channel.send("<:End_Time:481585186031534080> <:End_Time:481585186031534080> <:End_Time:481585186031534080> <:End_Time:481585186031534080>")
    }
    if (msg == prefix + "furretbarrage") {
        message.channel.send("TIME-ENDING FURIOUS FURRET BARRAGE!")
        message.channel.sendFile("FurretBarrage.gif")
    }
    if (msg == prefix + "cuteness") {
        message.channel.send("Bitch please, we all know what will i send...")
        wait = (7)
        message.channel.sendFile("O-O.jpg")
        message.channel.send(">w>")
    }
    if (msg == prefix + "sponsor") {
        message.channel.send( userVar + " is sponsored by Zoo Med Natural Grassland Tortoise Food! <:sponsor:478369937770151956>")
    }
    if (msg == prefix + "stop") {
        message.channel.send("kinda stop or fully stop? \n `(k!kinda - k!fully)`")
    }
    if (msg == prefix + "kinda") {
        message.channel.send("AN EATHQUAKE HAPPENS AND YOU ACCIDENTALLY CLICK FULLY!")
        wait = (10)
        message.channel.send("Sorry, but you have to pay $1.99 for the full version, $3.99 for the season pass, $5.99 for the annual pass, and $7.99 for shipping and handling. But wait, there's more! You have to pay $1.40 for taxes. But that's only the full version. You need the full full version, which requires 493 payments of $483,384,493.")
    }
    if (msg == prefix + "fully") {
        message.channel.send("Sorry, but you have to pay $1.99 for the full version, $3.99 for the season pass, $5.99 for the annual pass, and $7.99 for shipping and handling. But wait, there's more! You have to pay $1.40 for taxes. But that's only the full version. You need the full full version, which requires 493 payments of $483,384,493.")
    }
    if (msg == prefix + "freedom") {
        message.channel.send("FREEEEDOOOOOM!")
    }
    if (msg == prefix + "seriouslyfully") {
        message.channel.send("then no.")
    }
    if (msg == prefix + "look") {
        message.channel.send("look at dis")
        wait = (8)
        message.channel.send("**DUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUDE**")
    }
    if (msg == prefix + "pat") { 
        message.channel.send("oh my godddddd that's so gaaayyyyyyy")
    }
    if (msg == prefix + "hewwo") {
        message.author.send("hewwo der, " + userVar + " :3")
    }
    if (msg == prefix + "secret") {
        if (message.author == "<@432666207452135446>"){
            message.author.send("As you can tell, Spinda is not ok at all. She feels better knowing that you care more than her own family.")}
        else {
        message.author.send("according to my 9 billion iq u have big homosexual")
        }}
    if (msg == prefix + "ily") {
        if (message.author == "<@432666207452135446>"){
            message.channel.send("Well, of course you love yourself!")}
        else {
            message.channel.send("gay")
    }}
    if (msg == "<@477923368704671755>"){
        message.channel.send("My **Prefix** is `k!`, if you didn't know!")
    }
    if (msg == prefix + "commands"){
        message.author.send("So ur a dum dum stupid head dat doesn't kno da commands? oof \n \n Available Commands: \n `k!hewwo - hewwo!` \n `k!secret - u can't tellz` \n `k!pat - S T O O O P` \n `k!look - look at dis duuude` \n `k!stop - kinda stop or fully stop?` \n `k!freedom - FREEEEDOOOOOM` \n `k!sponsor - your soul has been sponsored` \n `k!ily - .` \n `k!Dick-Chan - power abuse` \n `k!addmeat - do you want ADDED MEAT ADDED MEAT ADDED MEAT?` \n `k!groodin - GROODIN` \n `k!gwoodin - GWOODIN` \n `k!idiot - dumb dumb stupid head` \n `k!furret - wait what` \n `k!furretbarrage - JM wtf` \n `k!roar - ROAR OF TIME!!1!` \n `k!shrek - get shrekt` \n `k!gayvin - so gay` \n `k!fuckingnormies - REEEEEEEEEEEEEEEEEEEEEEEE` \n `k!deadmeme - omg no` \n `k!tnspam - TN. TN. TN. TN.` \n `k!earthquake - this is not animal abuse` \n `k!owo - what's this?` \n `k!mine -` :large_blue_diamond: :pick: \n `k!taste - nom` \n `k!shipwhite - cuz reasons` \n `k!commands - u just used this command u dum dum` \n `k!jk - JK CHILL` \n `k!penisrain - penis rain penis rain penis rain penis rain penis rain` \n `k!slip - MY FINGER SLIPPED!")
    }
    if (msg == prefix + "jk"){
        message.channel.send("CHIIIIIILLLLLL")
    }
    if (msg == prefix + "timeskip"){
        message.channel.send("mY tImE sKiP iS uNbEaTaBlE. \n mY tImE sKiP iS uNbEaTaBlE. \n mY tImE sKiP iS uNbEaTaBlE. \n mY tImE sKiP iS uNbEaTaBlE. \n mY tImE sKiP iS uNbEaTaBlE.", {tts: true})
        }
    if (msg == "who am i?"){
        wait = (8)
        message.channel.send("You're " + userVar + ", mah dud")
    }
    if (msg == "no u"){
        message.channel.send("yes u")
    }
    if (msg == "no double u"){
        message.channel.send("no w")
    }
    if (msg == "no w") {
        message.channel.send("no double u")
    }
    if (msg == "yes u"){
        message.channel.send("no u")
    }
    if (msg == "yes double u"){
        message.channel.send("yes w")
    }
    if (msg == "yes w"){
        message.channel.send("yes double u")
    }
    if (msg == prefix + "penisrain"){
        message.channel.send("Penis Rain Penis Rain Penis Rain Penis Rain Penis Rain Penis Rain Penis Rain Penis Rain Penis Rain Penis Rain Penis Rain Penis Rain Penis Rain Penis Rain Penis Rain Penis Rain Penis Rain Penis Rain Penis Rain Penis Rain Penis Rain Penis Rain Penis Rain Penis Rain Penis Rain Penis Rain Penis Rain Penis Rain Penis Rain Penis Rain Penis Rain Penis Rain", {tts: true})
        }
    if (msg == prefix + "slip"){
        message.channel.send("MY FINGER SLIPPED! MY FINGER SLIPPED! MY FINGER SLIPPED! MY FINGER SLIPPED! MY FINGER SLIPPED! MY FINGER SLIPPED! MY FINGER SLIPPED! MY FINGER SLIPPED! MY FINGER SLIPPED! MY FINGER SLIPPED! MY FINGER SLIPPED! MY FINGER SLIPPED! MY FINGER SLIPPED! MY FINGER SLIPPED! MY FINGER SLIPPED! MY FINGER SLIPPED! MY FINGER SLIPPED! MY FINGER SLIPPED! MY FINGER SLIPPED! MY FINGER SLIPPED! MY FINGER SLIPPED! MY FINGER SLIPPED! MY FINGER SLIPPED! MY FINGER SLIPPED! MY FINGER SLIPPED! MY FINGER SLIPPED! MY FINGER SLIPPED! MY FINGER SLIPPED! MY FINGER SLIPPED! MY FINGER SLIPPED! MY FINGER SLIPPED! MY FINGER SLIPPED! MY FINGER SLIPPED! MY FINGER SLIPPED! MY FINGER SLIPPED! MY FINGER SLIPPED! MY FINGER SLIPPED! MY FINGER SLIPPED! MY FINGER SLIPPED! MY FINGER SLIPPED! MY FINGER SLIPPED! MY FINGER SLIPPED! MY FINGER SLIPPED! MY FINGER SLIPPED!")
        }
});

bot.login('NDc3OTIzMzY4NzA0NjcxNzU1.DlDMwQ.CE7UiUmyr2NRcBoKXdOPPSwJFfU');
