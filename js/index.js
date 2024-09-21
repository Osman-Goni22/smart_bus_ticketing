const seatContainer = document.getElementById('seatConatiner');

function seathandler(event){

    event.classList.add('bg-green-500');
    

    document.getElementById('text').innerText='';
    const li = document.createElement('li');
    li.innerHTML= `<li class=" flex justify-between text-white font-semibold">
    <span>${event.innerText} </span>
    <span> economy </span>
    <span id="vara">550</span>


    </li>`



    seatContainer.appendChild(li);



    const BDT = document.getElementById('taka').innerText;

    
    const varaBefore = parseFloat(BDT);

  
 
    const addVara = document.getElementById('vara').innerText;

    console.log(addVara , typeof addVara)

    const singleSeatVara = parseFloat(addVara);

   
    const totalVara = varaBefore+singleSeatVara;

  

    document.getElementById('taka').innerText=totalVara;
   
   
   
    SelectedSeat();
}



function SelectedSeat(){
    const seatNumber = document.getElementById('seatNumber').innerText;
    const SeatNumberInt = parseFloat(seatNumber);
    const FinalSeat = SeatNumberInt+1;
    
    if(FinalSeat>=4){
        document.getElementById('applyButton').removeAttribute('disabled');
    }

    document.getElementById('seatNumber').innerText = FinalSeat;

    const available = document.getElementById('availableSeat').innerText;
    console.log(available);

   const availableFloat = parseFloat(available);

   const seatAvailable= availableFloat-1;
 
   document.getElementById('availableSeat').innerText=seatAvailable;

}


document.getElementById('applyButton').addEventListener('click', function(){
   let taka= document.getElementById('taka').innerText;
   taka = parseFloat(taka);
   let bonus = taka*30/100;
   let grandTotal = taka -bonus;

   document.getElementById('grandMoney').innerText=grandTotal;
})