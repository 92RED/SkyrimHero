// The Elder Scrolls Calendar System
// SkyrimHero (c) 2012
// The Elder Scrolls, The Elder Scrolls V, TES, TESV,
// Skyrim (c) Bethesda Softworks
function tesCalendar()
{
	realDate = new Date();
	var	monthNames = ["Morning Star", "Sun's Dawn", "First Seed", "Rain's Hand", "Second Seed", "Midyear", "Sun's Height", "Last Seed", "Hearthfire", "Frostfall", "Sun's Dusk", "Evening Star"];
			dayNames = ["Sundas","Morndas","Tirdas","Middas","Turdas","Fredas","Loredas"];
			realDay = realDate.getUTCDate();
			realYear = realDate.getFullYear() - 1900;
			ordinals = ["st", "nd", "rd", "th"];
	if(realDay >= 10 && realDay < 20)
		ordinalIndicator = "th";
	else
		ordinalIndicator = ordinals[Math.min((realDay-1)%10,3)];
		
	document.write(dayNames[realDate.getDay()] + ", " + monthNames[realDate.getMonth()] + " " +  realDay + ordinalIndicator + " " + "E4" + realYear );
}
tesCalendar();