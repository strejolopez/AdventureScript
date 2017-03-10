/* Welcome to the great forrest young travler!  What is your name?
Say, [name] nice to meet you, hope you enjoy your day in the forrest, just remember to watch out for bears. Till next time. Adios!
say, After exploring the forrest you grow tired and hungry. 
say, you notice a house and approch it. you knock but no one is home. 
say, As you knock again, you accidently push the door open. 
prompt, "go inside the house" or "keep walking"
	[keep walking]
		say, you get attacked by some bears and your body is found 2 weeks later. 
		say FIN.
	[go inside the house]
		say, you smell some food and walk into the kitchen.
		say, you find 3 bowls of porridge. 
		ask, which bowl do you eat? the "left bowl", "right bowl", "middle bowl"?
			[left bowl] the left bowl is way too hot. Your jaw begins to belt, and you die due to 10th degree burns.
			say, FIN.
			[middle bowl] the middle bowl is just right. You leave $5 on the table and continue to have a great day.
			[right bowl] the right bowl is too cold, you begin to shiver uncontrollably and die due to hyperthermia. FIN
			*/
var name = prompt("Welcome to The Great Forest young traveler! What is your name?")
var sendOff = alert(name + "! Nice to meet you! Hope you enjoy your day at The Great Forrest, just remember to watch out for bears.")
alert("After exploring the forrest, " + name + " begins to get very hungry")
alert(name + " notices a house and approches it")
alert("As you knock on the door, you accidently push it open")
var house = confirm("Would you like to go inside the house?")
if (house) {
	alert(name + " Walks into the house and smells some food")
	alert(name + " finds 3 bowls of porridge on a table")
	var porridge = prompt ("Which bowl would you like to eat? The one on the left, right, or middle?")
	if (porridge == "left") {
			alert("OOOOOH The left bowl is too hot")
			alert("You keep eating but your jaw begins to melt off and die due to internal 10th degree burns")
			alert("FIN!")
	} else if (porridge == "right") {
			alert("AWWW the right bowl is too cold")
			alert("You keep eating it but begin to shiver uncontrollably and die due to hyperthermia")
			alert("FIN!")
	} else if (porridge == "middle") {
			alert("MMMHMM the middle bowl is just right")
			alert("You finish the bowl and leave a 5$ tip")
			alert("You continue your walk in the forrest.")
			alert("FIN!")
	} else {
		alert("A bear walkins in and mauls you to death")
		alert("FIN!")
	}
} else {
	alert(name + " continues his walk in the forrest and is mauled to death by a bear")
	alert("FIN!")
}


