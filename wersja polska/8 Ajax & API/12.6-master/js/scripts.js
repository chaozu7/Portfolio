var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');

$.ajaxSetup({ cache: false });

$('#search').click(function() {
  searchCountries();
});

function searchCountries() {
  	var countryName = $('#country-name').val();

    if(!countryName.length) {
        countryName = 'Poland';
    }

    $.ajax({
  		url: url + countryName,
  		method: 'GET',
        success: showCountriesList,
        error: function() {
            console.log('Wystąpił błąd');
        }
  	});
}

function showCountriesList(resp) {
    var result = "";
    countriesList.empty();

    resp.forEach(function(item) {
       	//$('<li>').text(item.name + ' - ' + item.capital).appendTo(countriesList);
        result += '\
            <li>\
                <p> Name: '+ item.name + '</p> \
                <span> Capital City:  '+ item.capital + '</span> \
                <span> Language:  '+ item.languages + '</span> \
                <span> Region:   '+ item.region + '</span> \
                <span> Native:  '+ item.nativeName + '</span> \
                <span> Borders: ' + item.borders + '</span> \
            </li>'

    });

    countriesList.append(result);
}
