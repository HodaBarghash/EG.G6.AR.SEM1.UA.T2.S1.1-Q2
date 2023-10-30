function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5XLgVHGQIWk":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbxl_0O6xelfL-6cV2AZAV-oeAFGeDm7i8-Zc6ARTc_KigKDPsIrk-S6w62Z73uZsdm6GQ/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({v10q2attempts:player.GetVar("v10q2attempts"),v10q2answeredcorrect:player.GetVar("v10q2answeredcorrect")})
	}
	)
}

