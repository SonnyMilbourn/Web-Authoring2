var components = ["","","","","","","",""];
var compList= ["","","","","","","",""];

function selectFrame(component)
{
	components[0] = component
}
function selectHandlebars(component)
{
	components[1] = component
}
function selectGrips(component)
{
	components[2] = component
}
function selectSeat(component)
{
	components[3] = component
}
function selectWheels(component)
{
	components[4] = component
}
function selectTyres(component)
{
	components[5] = component
}
function selectPedals(component)
{
	components[6] = component
}
function selectBreaks(component)
{
	components[7] = component
}


function checkout()
{
	var totalPrice = 0;
	switch(components[0]){
		case "frame1":
		totalPrice += 150
		compList[0] = 'Brand-X RD-01 - Road Frame and Carbon Fork - £150'
		break;
		
		case "frame2":
		totalPrice += 115
		compList[0] = 'DK Professional V2 BMX Frame 2015 - £115'
		break;
		
		case "frame3":
		totalPrice += 290
		compList[0] = 'BeOne Mistral Sport Frame - Ex Display - £290'
		break;
	}
	
	switch(components[1]){
		case "bars1":
		totalPrice += 45
		compList[1] = 'Easton EA70 Ergo Road Handlebars - £45'
		break;
		
		case "bars2":
		totalPrice += 50
		compList[1] = 'Colony Exon Flatland BMX Bars - £50'
		break;
		
		case "bars3":
		totalPrice += 55
		compList[1] = 'Race Face Turbine Flat Wide Bar - £55'
		break;
	}
	
	switch(components[2]){
		case "grips1":
		totalPrice += 16
		compList[2] = 'Race Face Half Nelson Lock On Grips - £16'
		break;
		
		case "grips2":
		totalPrice += 25
		compList[2] = 'ODI Troy Lee Lock-On Bonus Pack Grips - £25'
		break;
		
		case "grips3":
		totalPrice += 50
		compList[2] = 'Brooks England Cambium Slender Grips - £50'
		break;
	}
	
	switch(components[3]){
		case "seat1":
		totalPrice += 20
		compList[3] = 'Cube RFR MTB Comfort Saddle - £20'
		break;
		
		case "seat2":
		totalPrice += 34
		compList[3] = 'SDG Patriot RL Cro-Mo Saddle - £34'
		break;
		
		case "seat3":
		totalPrice += 160
		compList[3] = 'WTB High Tail Carbon Saddle - £160'
		break;
	}
	
	switch(components[4]){
		case "wheels1":
		totalPrice += 100
		compList[4] = 'DT Swiss R24 Spline Road Wheelset - £100'
		break;
		
		case "wheels2":
		totalPrice += 200
		compList[4] = 'Vision Team 30 Road Wheelset 2016 - £200'
		break;
		
		case "wheels3":
		totalPrice += 55
		compList[4] = 'Fulcrum Racing 7 Road Wheelset - Ex Display - £55'
		break;
	}
	
	switch(components[5]){
		case "tyres1":
		totalPrice += 30
		compList[5] = 'Michelin Pro 3 Race Tyres Red - £30'
		break;
		
		case "tyres2":
		totalPrice += 40
		compList[5] = 'Schwalbe Magic Mary & Hans Dampf MTB Tyre Combo - £40'
		break;
		
		case "tyres3":
		totalPrice += 80
		compList[5] = 'Michelin Pro4 Tubular Road Tyres 25c - £80'
		break;
	}
	
	switch(components[6]){
		case "pedals1":
		totalPrice += 40
		compList[6] = 'Shimano Saint MX80 Flat Pedals - £40'
		break;
		
		case "pedals2":
		totalPrice += 90
		compList[6] = 'Shimano XTR M9000 Race SPD Clipless MTB Pedals - £90'
		break;
		
		case "pedals3":
		totalPrice += 7
		compList[6] = 'Brand-X Trekking Pedals - £7'
		break;
	}
	
	switch(components[7]){
		case "breaks1":
		totalPrice += 103
		compList[7] = 'Shimano Zee M640 Disc Brake - £103'
		break;
		
		case "breaks2":
		totalPrice += 188
		compList[7] = 'Hope Tech 3 V4 Disc Brake - £188'
		break;
		
		case "breaks3":
		totalPrice += 25
		compList[7] = 'Shimano Acera M396 Disc Brake - £25'
		break;
		
	}
	for (i = 0; i < compList.length; i++)
	{
		localStorage.setItem("compList" + i, compList[i]);
	}
	localStorage.setItem("totalPrice", totalPrice);

}

 function showOrder()
{
	for (i = 0; i < compList.length; i++)
	{
		compList[i] = localStorage.getItem("compList" + i);
		document.getElementById("orderBox").innerHTML += compList[i] + "<br>";
	}
	totalPrice = localStorage.getItem("totalPrice")
	document.getElementById("orderBox").innerHTML += "<br>" + "<br>" + "£" + totalPrice;
	
}