
import './App.css';
import $ from "jquery"
function App() {
  return (
    <div className="App">
        <h1 className='test'>Crypto Tracker</h1>
        <div id='data'>
        </div>
    </div>
  );
}

export default App;

window.onload = () => {

function formatNumber(num)
{
    return ("" + num).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, function($1) { return $1 + "," });
}

var API_URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"

$(document).ready(function(){
        init()
        function init(){
            $.get(API_URL, function(data){
                for (var i = 0; i < data.length; i++){
                document.getElementById('data').innerHTML += "<button class='crypto'><img id='" + i +  "' src='" + data[i].image + "'alt='' class='img'><p  class='name'>" + data[i].name + "</p><p class='price'>$ " + formatNumber(data[i].current_price) + " USD</p></button>"
                }
            }) 
}
})
}