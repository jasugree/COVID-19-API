const baseURL = 'https://api.covid19api.com/summary';

fetch(`${baseURL}`)
    .then(response => response.json())
    .then(json => covidData(json));

    function covidData(data){
        for(j = 0; j < data.Countries.length; j++ ){
        console.log(data.Countries[j].Country)
        }
        let stats = document.querySelectorAll('.stat-value');

        for(i = 0; i < 7; i++){
            let statValue = document.createElement('p');
            
            statValue.innerText = data.Global[Object.keys(data.Global)[i]].toLocaleString("en-US");
            ;
        
            stats[i].appendChild(statValue);
            }

    }


//DEFUALT DATA FOR NATIONAL STATS

    // function nationalData(data){
    //     let Nationalstats = document.querySelectorAll('.national-stat-value');

    //     for(i = 4; i < 10; i++){
    //         let statValue = document.createElement('p');
            
    //         statValue.innerText = data.Countries[183][Object.keys(data.Countries[183])[i]].toLocaleString("en-US");
        
    //         Nationalstats[i - 4].appendChild(statValue);
    //         }
        
    //         let nationalDate = document.querySelector('#date-value');
    //         let dateValue = document.createElement('p');
            
    //         dateValue.innerText = data.Countries[183].Date;
    //         nationalDate.appendChild(dateValue);
    
    // }


const searchForm = document.querySelector('form');
let searchNation = document.querySelector('.search-nation');

searchForm.addEventListener('submit', displaySearchResults);
    
    function displaySearchResults(e) {
        e.preventDefault();
        
        fetch(`${baseURL}`)
        .then(response => response.json())
        .then(json => runSearch(json));

        let searchStats = document.getElementById('new-confirmed');

        function runSearch(data){
            // searchNation.value ='Mexico'
            if( 
                searchNation.value == data.Countries[0].Country ||
                searchNation.value == data.Countries[1].Country ||
                searchNation.value == data.Countries[2].Country ||
                searchNation.value == data.Countries[3].Country ||
                searchNation.value == data.Countries[4].Country ||
                searchNation.value == data.Countries[5].Country ||
                searchNation.value == data.Countries[6].Country ||
                searchNation.value == data.Countries[7].Country ||
                searchNation.value == data.Countries[8].Country ||
                searchNation.value == data.Countries[9].Country ||
                searchNation.value == data.Countries[10].Country ||
                searchNation.value == data.Countries[11].Country ||
                searchNation.value == data.Countries[12].Country ||
                searchNation.value == data.Countries[13].Country ||
                searchNation.value == data.Countries[14].Country ||
                searchNation.value == data.Countries[15].Country ||
                searchNation.value == data.Countries[16].Country ||
                searchNation.value == data.Countries[17].Country ||
                searchNation.value == data.Countries[18].Country ||
                searchNation.value == data.Countries[19].Country ||
                searchNation.value == data.Countries[20].Country ||
                searchNation.value == data.Countries[21].Country ||
                searchNation.value == data.Countries[22].Country ||
                searchNation.value == data.Countries[23].Country ||
                searchNation.value == data.Countries[24].Country ||
                searchNation.value == data.Countries[25].Country ||
                searchNation.value == data.Countries[26].Country ||
                searchNation.value == data.Countries[27].Country ||
                searchNation.value == data.Countries[28].Country ||
                searchNation.value == data.Countries[29].Country ||
                searchNation.value == data.Countries[30].Country ||
                searchNation.value == data.Countries[31].Country ||
                searchNation.value == data.Countries[32].Country ||
                searchNation.value == data.Countries[33].Country ||
                searchNation.value == data.Countries[34].Country ||
                searchNation.value == data.Countries[35].Country ||
                searchNation.value == data.Countries[36].Country ||
                searchNation.value == data.Countries[37].Country ||
                searchNation.value == data.Countries[38].Country ||
                searchNation.value == data.Countries[39].Country ||
                searchNation.value == data.Countries[40].Country ||
                searchNation.value == data.Countries[41].Country ||
                searchNation.value == data.Countries[42].Country ||
                searchNation.value == data.Countries[43].Country ||
                searchNation.value == data.Countries[44].Country ||
                searchNation.value == data.Countries[45].Country ||
                searchNation.value == data.Countries[46].Country ||
                searchNation.value == data.Countries[47].Country ||
                searchNation.value == data.Countries[48].Country ||
                searchNation.value == data.Countries[49].Country ||
                searchNation.value == data.Countries[50].Country ||
                searchNation.value == data.Countries[51].Country ||
                searchNation.value == data.Countries[52].Country ||
                searchNation.value == data.Countries[53].Country ||
                searchNation.value == data.Countries[54].Country ||
                searchNation.value == data.Countries[55].Country ||
                searchNation.value == data.Countries[56].Country ||
                searchNation.value == data.Countries[57].Country ||
                searchNation.value == data.Countries[58].Country ||
                searchNation.value == data.Countries[59].Country ||
                searchNation.value == data.Countries[60].Country ||
                searchNation.value == data.Countries[61].Country ||
                searchNation.value == data.Countries[62].Country ||
                searchNation.value == data.Countries[63].Country ||
                searchNation.value == data.Countries[64].Country ||
                searchNation.value == data.Countries[65].Country ||
                searchNation.value == data.Countries[66].Country ||
                searchNation.value == data.Countries[67].Country ||
                searchNation.value == data.Countries[68].Country ||
                searchNation.value == data.Countries[69].Country ||
                searchNation.value == data.Countries[70].Country ||
                searchNation.value == data.Countries[71].Country ||
                searchNation.value == data.Countries[72].Country ||
                searchNation.value == data.Countries[73].Country ||
                searchNation.value == data.Countries[74].Country ||
                searchNation.value == data.Countries[75].Country ||
                searchNation.value == data.Countries[76].Country ||
                searchNation.value == data.Countries[77].Country ||
                searchNation.value == data.Countries[78].Country ||
                searchNation.value == data.Countries[79].Country ||
                searchNation.value == data.Countries[80].Country ||
                searchNation.value == data.Countries[81].Country ||
                searchNation.value == data.Countries[82].Country ||
                searchNation.value == data.Countries[83].Country ||
                searchNation.value == data.Countries[84].Country ||
                searchNation.value == data.Countries[85].Country ||
                searchNation.value == data.Countries[86].Country ||
                searchNation.value == data.Countries[87].Country ||
                searchNation.value == data.Countries[88].Country ||
                searchNation.value == data.Countries[89].Country ||
                searchNation.value == data.Countries[90].Country ||
                searchNation.value == data.Countries[91].Country ||
                searchNation.value == data.Countries[92].Country ||
                searchNation.value == data.Countries[93].Country ||
                searchNation.value == data.Countries[94].Country ||
                searchNation.value == data.Countries[95].Country ||
                searchNation.value == data.Countries[96].Country ||
                searchNation.value == data.Countries[97].Country ||
                searchNation.value == data.Countries[98].Country ||
                searchNation.value == data.Countries[99].Country ||
                searchNation.value == data.Countries[101].Country ||
                searchNation.value == data.Countries[102].Country ||
                searchNation.value == data.Countries[103].Country ||
                searchNation.value == data.Countries[104].Country ||
                searchNation.value == data.Countries[105].Country ||
                searchNation.value == data.Countries[107].Country ||
                searchNation.value == data.Countries[108].Country ||
                searchNation.value == data.Countries[109].Country ||
                searchNation.value == data.Countries[110].Country ||
                searchNation.value == data.Countries[111].Country ||
                searchNation.value == data.Countries[112].Country ||
                searchNation.value == data.Countries[113].Country ||
                searchNation.value == data.Countries[114].Country ||
                searchNation.value == data.Countries[115].Country ||
                searchNation.value == data.Countries[116].Country ||
                searchNation.value == data.Countries[117].Country ||
                searchNation.value == data.Countries[118].Country ||
                searchNation.value == data.Countries[119].Country ||
                searchNation.value == data.Countries[120].Country ||
                searchNation.value == data.Countries[121].Country ||
                searchNation.value == data.Countries[122].Country ||
                searchNation.value == data.Countries[123].Country ||
                searchNation.value == data.Countries[124].Country ||
                searchNation.value == data.Countries[125].Country ||
                searchNation.value == data.Countries[126].Country ||
                searchNation.value == data.Countries[127].Country ||
                searchNation.value == data.Countries[128].Country ||
                searchNation.value == data.Countries[129].Country ||
                searchNation.value == data.Countries[130].Country ||
                searchNation.value == data.Countries[131].Country ||
                searchNation.value == data.Countries[132].Country ||
                searchNation.value == data.Countries[133].Country ||
                searchNation.value == data.Countries[134].Country ||
                searchNation.value == data.Countries[135].Country ||
                searchNation.value == data.Countries[136].Country ||
                searchNation.value == data.Countries[137].Country ||
                searchNation.value == data.Countries[138].Country ||
                searchNation.value == data.Countries[139].Country ||
                searchNation.value == data.Countries[140].Country ||
                searchNation.value == data.Countries[141].Country ||
                searchNation.value == data.Countries[142].Country ||
                searchNation.value == data.Countries[143].Country ||
                searchNation.value == data.Countries[144].Country ||
                searchNation.value == data.Countries[145].Country ||
                searchNation.value == data.Countries[146].Country ||
                searchNation.value == data.Countries[147].Country ||
                searchNation.value == data.Countries[148].Country ||
                searchNation.value == data.Countries[149].Country ||
                searchNation.value == data.Countries[150].Country ||
                searchNation.value == data.Countries[151].Country ||
                searchNation.value == data.Countries[152].Country ||
                searchNation.value == data.Countries[153].Country ||
                searchNation.value == data.Countries[154].Country 
                ){
                for(i = 0; i < data.Countries.length; i++){
                    if( searchNation.value == data.Countries[i].Country){
                       
                        //Search Nation
                        let searchNation = document.querySelector('.nation');
                        searchNation.innerText = data.Countries[i].Country;
        
                        //New Confirmed Stat
                        
                        searchStats.innerText="";
                        let searchStatValue = document.createElement('p');
                        searchStatValue.innerText = data.Countries[i].NewConfirmed.toLocaleString("en-US");
                        searchStats.appendChild(searchStatValue);
        
                        //Total Confirmed Stat
                        let totalSearchstats = document.getElementById('total-confirmed');
                        totalSearchstats.innerText="";
                        let totalSearchStatValue = document.createElement('p');
                        totalSearchStatValue.innerText = data.Countries[i].TotalConfirmed.toLocaleString("en-US");
                        totalSearchstats.appendChild(totalSearchStatValue);
        
                        //New Deaths Stat
                        let deathSearchstats = document.getElementById('new-deaths');
                        deathSearchstats.innerText="";
                        let deathSearchStatValue = document.createElement('p');
                        deathSearchStatValue.innerText = data.Countries[i].NewDeaths.toLocaleString("en-US");
                        deathSearchstats.appendChild(deathSearchStatValue);
        
                        //Total Deaths Stat
                        let totalDeathSearchstats = document.getElementById('total-deaths');
                        totalDeathSearchstats.innerText="";
                        let totalDeathSearchStatValue = document.createElement('p');
                        totalDeathSearchStatValue.innerText = data.Countries[i].TotalDeaths.toLocaleString("en-US");
                        totalDeathSearchstats.appendChild(totalDeathSearchStatValue);
        
                        //New Recovered Stat
                        let newRecoveredSearchstats = document.getElementById('new-recovered');
                        newRecoveredSearchstats.innerText="";
                        let newRecoveredSearchStatValue = document.createElement('p');
                        newRecoveredSearchStatValue.innerText = data.Countries[i].NewRecovered.toLocaleString("en-US");
                        newRecoveredSearchstats.appendChild(newRecoveredSearchStatValue);
        
                        //Total Recovered Stat
                        let totalRecoveredSearchstats = document.getElementById('total-recovered');
                        totalRecoveredSearchstats.innerText="";
                        let totalRecoveredSearchStatValue = document.createElement('p');
                        totalRecoveredSearchStatValue.innerText = data.Countries[i].TotalRecovered.toLocaleString("en-US");
                        totalRecoveredSearchstats.appendChild(totalRecoveredSearchStatValue);
                        
                        //National Date
                        let nationalDate = document.getElementById('national-date');
                        nationalDate.innerText="";
                        let nationalDateValue = document.createElement('p');
                        nationalDateValue.innerText = data.Countries[i].Date.toLocaleString("en-US");
                        nationalDate.appendChild(nationalDateValue); 
        
                    }
                }
            } else{
                alert('Please enter a valid country name.');
            }
            
        }
    }
    
    