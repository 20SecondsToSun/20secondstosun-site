

var pubArr = [{id:"pub1", long:"80lvl Casa Brutale postmortem [in english]", short:"Casa Brutale /en"},
{id:"pub11", long:"ARt Insights [in english]", short:"ARt Insights /en"},
{id:"pub8", long:"Forma/GAMMA 2017 [in russian]", short:"Forma/GAMMA 2017 /ru"},
{id:"pub9", long:"LeapMotion blog [in english]", short:"LeapMotion blog /en"},
{id:"pub2", long:"Natural User Interfaces — overview, best practies, tips and tricks [in russian]", short:"Natural UI /ru"},
{id:"pub3", long:"Resonate conference report, Beograde, Spring 2016 [in russian]", short:"Resonate, 2016 /ru"},
{id:"pub4", long:"Touch Everything — leap motion experiment [in russian]", short:"Touch Everything /ru"},
{id:"pub5", long:"Family Gift — a new year project 2013 [in russian]", short:"Family Gift /ru"},
{id:"pub10", long:"Interview With The Vampire [in english]", short:"Lestat /en"},
{id:"pub6", long: "Esher Worlds — Unity3D prototype [in russian]", short: "Esher Worlds /ru" },
{id:"pub7", long: "Hyundai RFID Quest [in russian]", short: "RFID Quest /ru" }
]


init();
function init()
{
    window.addEventListener('resize', onWindowResize, false);
   onWindowResize();
}

function onWindowResize()
{
    windowHalfX = window.innerWidth * 0.5;
    windowHalfY = window.innerHeight * 0.5;
    var elem1 = document.getElementById('qx');
    var elem2 = document.getElementById('pub');
    var elem3 = document.getElementById('title');

    if (elem1)
    {
        if (window.innerWidth < 400)
        {
            elem1.innerHTML = "QFLUX";
        }
        else
        {
            elem1.innerHTML = "QUANTUM FLUX";
        }
    }
	
	if (elem2)
    {
        if (window.innerWidth < 400)
        {
            elem2.innerHTML = "Articles";
        }
        else
        {
            elem2.innerHTML = "Publications";
        }
    }
	
	if (elem3)
    {
        if (window.innerWidth < 415)
        {
            elem3.innerHTML = "<span style=\"background-color: rgba(0, 0, 0, 0.64)\"> Game Dev<br style=\"line-height: 120%;\" /> Installations<br style=\"line-height: 120%;\" /> VR </span>";
        }
        else
        {
             elem3.innerHTML = "<span style=\"background-color: rgba(0, 0, 0, 0.64)\"> Virtual Reality <br style=\"line-height: 120%;\" /> Game Development<br style=\"line-height: 120%;\" /> Installations</span>";
       }
    }
	
	var isLong = true;
	if(window.innerWidth < 700)
	{
		isLong = false;
	}
	//console.log(pubArr.length);
	for (i = 0; i < pubArr.length; i++)
		{
			var elem = document.getElementById(pubArr[i].id);
           // console.log(isLong, pubArr[i].short);
			if (elem)
			{
				elem.innerHTML = isLong ? pubArr[i].long :  pubArr[i].short;
			}
	}


	var i = 1;
	while (1)
	{
	   // var par = document.getElementById("portfolioin")
	    var elem = document.getElementById("add_" + i);
	    if (elem == null) {
	        break;
	    }
	    else {
	        document.getElementById('portfolioin').removeChild(elem);
	        i++;
	    }
	}


	var child = document.getElementById("portfolioin").children.length;

	if (window.innerWidth > 768 && window.innerWidth < 1200)
	{
	      addDivs(child % 2);	      	   
	}
	else if (window.innerWidth > 1200)
	{
	    if (child % 3 != 0)
	        addDivs(3 - child % 3);
	}	
}


function addDivs(count)
{
    //console.log("adddd  " + count);
    var j = 1;
    if(count != 0)
    {
        while (j-1 < count) {
            var div = 'div';
            var k = document.createElement(div);

            var img = 'img';
            var _img = document.createElement(img);
            _img.className = "img-responsive"
            _img.src = "img/portfolio/plash"+j+".jpg";

            document.getElementById('portfolioin').appendChild(k);
            k.className = "col-lg-4 col-sm-6";
            var name = "add_";
            k.id = name + String(j);
            
            k.appendChild(_img);
            j++;
        }       
    }
}