import React from "react";
import './style.css';
 
const Status=()=>{        
        function getData() {
          var country = 'india';
          var xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var cnf='Confirmed Cases - ' + JSON.parse(this.responseText)['confirmed'].value
                var rec='Recovered - ' + JSON.parse(this.responseText)['recovered'].value
               
                var death='Death(s) - ' + JSON.parse(this.responseText)['deaths'].value
            }
          };
          xhttp.open("GET", "https://covid19.mathdro.id/api/countries/" + country, true);
          xhttp.send();
        }
        getData();
    return(
        <>
        <p>Recoverd = {rec} </p>
        <p>Comfirmed = {cnf} </p>
        <p>Death = {death} </p>
        
        </>
    );
}