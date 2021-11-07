const donaterList = [
    {
        logo: 'donater_nordea.svg', 
        amount: '500.000 DKK'
    },
    {
        logo: 'donater_alka.svg', 
        amount: '250.000 DKK'
    },
    {
        logo: 'donater_if.svg', 
        amount: '110.000 DKK'
    },
    {
        logo: 'donater_tryg.svg', 
        amount: '60.000 DKK'
    },
    {
        logo: 'donater_andershenriksen.svg', 
        amount: '20.000 DKK'
    },
];

const donaterListElement = document.getElementById('donaters__list');

donaterList.forEach(function(donaterItem) {
    
    const donater = document.createElement('div');
    donater.classList.add('donater');

    const donaterLogo = document.createElement('div');
    donaterLogo.classList.add('donater__logo');

    const donaterLogoImage = document.createElement('img');
    donaterLogoImage.setAttribute('src', 'images/' + donaterItem.logo);
    
    donaterLogo.appendChild(donaterLogoImage);

    const donaterAmount = document.createElement('div');
    donaterAmount.classList.add('donater__amount');
    donaterAmount.innerText = donaterItem.amount;

    donater.appendChild(donaterLogo);
    donater.appendChild(donaterAmount);

    donaterListElement.appendChild(donater);
});