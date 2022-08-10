let AllVotes = 0;
let VotesItem = document.getElementsByName("radio");
 for (let i = 0; i < VotesItem.length; i++) {
     if (VotesItem[i].checked) {
         document.getElementById('votes').innerHTML = AllVotes++;
     }
 }


// function Votes() {
       
//     if(VotesItem.checked){
//         VotesResult.innerHTML = i++;
//     } else {
//         VotesResult = VotesResult;
//     }
// }
