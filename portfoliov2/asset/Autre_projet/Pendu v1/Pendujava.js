				var motSecret;
				
				var now=new Date();			// Date d'aujourd'hui
				var tableauMot=new Array();	// Le tableau qui contient les lettres du mot à trouver
				var mots=new Array();		// Le tableau qui contient tous les mots possibles
				
				var tailleMot;				// Le nombre de lettres du mot à trouver
				var coupsManques=0;			// Le nombre de lettres fausses essayées
				var lettresTrouvees=0;		// Le nombre de lettres trouvées
				var fini=false;				// true si le jeu est terminé
				
				var sec = 30;				//le nombre de seconde 
				var txt  = document.getElementById('decompte');
				var timer = window.setInterval(tick, 1000);

				mots[0]="TITANESQUE";
				mots[1]="SINGE";
				mots[2]="TAPIS";
				mots[3]="GRAISSE";
				mots[4]="COCCINELLE";
				mots[5]="VENT";
				mots[6]="BRUN";
				mots[7]="KREMLIN";
				mots[8]="TULIPE";
				mots[9]="HEXAGONE";
				mots[10]="MACHINISTE";
				mots[11]="SABOTAGE";
				mots[12]="AVIONS";
				mots[13]="PERRUQUE";
				mots[14]="CERCUEIL";
				mots[15]="ECOLOGIE";
				mots[16]="BOUGIES";
				mots[17]="RESTE";
				mots[18]="AIGLE";

				// On prend un mot au hasard en fonction de la seconde en cours
				motSecret=mots[now.getSeconds() % mots.length];
				tailleMot=motSecret.length;


				// fonction pour le crono
				function tick()
				{
				txt.innerHTML="";
				txt.innerHTML='Il reste '+ sec + ' seconde(s)';
				
				// si tombe a 0 perdu 
				if(sec <= 0)
				{
					txt.innerHTML="Perdu !";
					document.images['pendu'].src="images/Perdu.png";
					for(var i=0; i<tailleMot; i++) tableauMot[i].style.visibility='visible'; 
					fini=true;
				}
				sec--;
				}
	

				//Fonction pour gerer les input

                function controleText(){
				var saisie =document.getElementById("input").value;
				
					// si le mot saisie est le même que le mot secret, la partie ce fini et ca affiche le mot
                    if (saisie==motSecret){
                        document.images['pendu'].src="images/win.png";
						fini=true;
                        for(var i=0; i<tailleMot; i++) tableauMot[i].style.visibility='visible';
						}
						
						// si le mot saisie est incorecte, un coup manqué est ajouter
                    else {
                        coupsManques++;
						document.images['pendu'].src="images/pendu_"+coupsManques+".jpg";   
                    }
                    		if(coupsManques>=9){
							document.images['pendu'].src="images/Perdu.png";
							for(var i=0; i<tailleMot; i++) tableauMot[i].style.visibility='visible';
							fini=true;
							// on affiche le mot, on fini le jeu
						}
                }


				
				
				// Permet de changer la couleur des touches du clavier
				function changeCouleur(element,couleur){
					element.style.backgroundColor=couleur;
				}
				
				// Gère tous les traitements à faire lorsqu'on appuie sur une touche
				function proposer(element){
					
					// Si la couleur de fond est lightgreen, c'est qu'on a déjà essayé - on quitte la fonction
					if(element.style.backgroundColor=="lightGreen" ||fini) return;
					if(element.style.backgroundColor=="Crimson" ||fini) return;
                    
					// On récupère la lettre du clavier et on met la touche en lightgreen (pour signaler qu'elle est cliquée)
					var lettre=element.innerHTML;
                    if (lettre != lettresTrouvees) {
                        changeCouleur(element,"Crimson");
                    }
					
					// On met la variable trouve à false;
					var trouve=false;
					
					// On parcours chaque lettre du mot, on cherche si on trouve la lettre séléectionnée au clavier
					for(var i=0; i<tailleMot; i++) {
						
						// Si c'est le cas :
						if(tableauMot[i].innerHTML==lettre) {
							tableauMot[i].style.visibility='visible';	// On affiche la lettre
							trouve=true;
							lettresTrouvees++;
                            changeCouleur(element,"lightGreen");
                            
						}
						
					}
					
					// Si la lettre n'est pas présente, trouvé vaut toujours false :
					if(!trouve ){
						coupsManques++;
						document.images['pendu'].src="images/pendu_"+coupsManques+".jpg"; // On change l'image du pendu
                        

						// Si on a raté 9 fois :
						if(coupsManques==9){
							document.images['pendu'].src="images/Perdu.png";
							for(var i=0; i<tailleMot; i++) tableauMot[i].style.visibility='visible';
							fini=true;
							// on affiche le mot, on fini le jeu
						}
					}	// si on a trouvé toute les lettre on as gagner 
					if(lettresTrouvees==tailleMot){
						document.images['pendu'].src="images/win.png";
						fini=true;
					}
				}


    
























