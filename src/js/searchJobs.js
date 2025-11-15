const jobsListingSection = document.querySelector('.jobs-listings')

jobsListingSection.addEventListener('click', function(event) {
  const element = event.target

  if (element.classList.contains('button-apply-job')) {
    element.textContent = '¡Aplicado!'
    element.classList.add('is-applied')
    element.disabled = true
  }
})


//Función que filtra las ofertas de trabajo por tecnología
const filterTechnology = document.querySelector('#technology');

filterTechnology.addEventListener('change', function (event) {
    const selectedTechnology = event.target.value;
    console.log('Selected technology:', selectedTechnology);
    // Aquí puedes agregar la lógica para filtrar las ofertas de trabajo según la tecnología seleccionada
});

//Función que filtra las ofertas de trabajo por ubicación
const filterLocation = document.querySelector('#location');

filterLocation.addEventListener('change', function (event) {
    const selectedLocation = event.target.value;
    console.log('Selected location:', selectedLocation);
    // Aquí puedes agregar la lógica para filtrar las ofertas de trabajo según la tecnología seleccionada
});

//Función que filtra las ofertas de trabajo por nivel de experiencia
const experienceLevel = document.querySelector('#experience-level');

experienceLevel.addEventListener('change', function (event) {
    const selectedExperienceLevel = event.target.value;
    console.log('Selected expewrience level:', selectedExperienceLevel);
    // Aquí puedes agregar la lógica para filtrar las ofertas de trabajo según la tecnología seleccionada
});