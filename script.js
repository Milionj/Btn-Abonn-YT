    // Je selectionne et je stocke
    // Icone contient le premier élément <i> trouvé dans le code

        const icone = document.querySelector('i');
        console.log(icone);
    // btnBouton contient le premier élément avec la classe btn
        const btnBouton = document.querySelector('.btn');
        console.log(btnBouton);
        
        

    // je soumet l'icone a une action au click
        icone.addEventListener('click', function(){
        console.log('icone cliqué !');
        icone.classList.toggle('fa-smile-wink');
        icone.classList.toggle('happy');
        // je soumet l'icone a une action au click
        btnBouton.addEventListener('click', function(){
        console.log('bouton cliqué');
        // A chaque clique on alterne le style
        btnBouton.classList.toggle('abonné');
        // condition
        // On verifie le texte du bouton 
        if(btnBouton.innerHTML === "abonné"){
        // Action a réaliser si condition est vraie
        btnBouton.innerHTML = "abonné-vous";
        }else{
        console.log('else');
        // Action a réaliser si condition est fausse
        btnBouton.innerText = "abonné";
        };
        });  
    });

