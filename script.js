let personDetails = [
    {	
        id: 1, 
        name: "Tuba Rashid",
        number: '123456789' ,
        email: 'tuba@gmail.com',
        imgURL: "1.jpg",
        lastMsgCheck: "sent",
        lastMsg: "blah blah blah blah blah blah blah ---",
        phoneIcon: `<i class="fas fa-phone" ></i>`,
        mailIcon: `<i class="far fa-envelope" id="mail"></i>`
    },
    
    {
        id: 2,
        name: "Saniya Ajaz",
        number: '108427748',
        email: "saniya@gmail.com",
        imgURL: "2.jpg",
        lastMsgCheck: "seen",
        lastMsg: "blah blah blah blah blah blah blah ---",
        phoneIcon: `<i class="fas fa-phone" ></i>`,
        mailIcon: `<i class="far fa-envelope" id="mail"></i>`
    },
    
    {
        id: 3,
        name: "Fabiha Ahmed",
        number: '375628566',
        email: "fabiha@gmail.com",
        imgURL: "3.jpg",
        lastMsgCheck: "not sent",
        lastMsg: "blah blah blah blah blah blah blah ---",
        phoneIcon: `<i class="fas fa-phone" ></i>`,
        mailIcon: `<i class="far fa-envelope" id="mail"></i>`
    },
    
    {	
        id: 4,
        name: "Neha Khan",
        number: '674296035' ,
        email: "neha@gmail.com",
        imgURL: "4.jpg",
        lastMsgCheck: "sent",
        lastMsg: "blah blah blah blah blah blah blah ---",
        phoneIcon: `<i class="fas fa-phone" ></i>`,
        mailIcon: `<i class="far fa-envelope" id="mail"></i>`
    },
    
    {
        id: 5,
        name: "Amna Ilyas",
        number: '173629503',
        email: "amna@gmail.com",
        imgURL: "5.jpg",
        lastMsgCheck: "seen",
        lastMsg: "blah blah blah blah blah blah blah ---",
        phoneIcon: `<i class="fas fa-phone" ></i>`,
        mailIcon: `<i class="far fa-envelope" id="mail"></i>`
    },
    
    {
        id: 6,
        name: "Zainab Ayub",
        number: '108473926',
        email: "zainab@gmail.com",
        imgURL: "6.jpg",
        lastMsgCheck: "not sent",
        lastMsg: "blah blah blah blah blah blah blah ---",
        phoneIcon: `<i class="fas fa-phone" ></i>`,
        mailIcon: `<i class="far fa-envelope" id="mail"></i>`
    },
    
    {
        id: 7,
        name: "Bushra Shafique",
        number: '693720648',
        email: "bushra@gamil.com",
        imgURL: "7.jpg",
        lastMsgCheck: "sent",
        lastMsg: "blah blah blah blah blah blah blah ---",
        phoneIcon: `<i class="fas fa-phone" ></i>`,
        mailIcon: `<i class="far fa-envelope" id="mail"></i>`
    },
    
    {
        id: 8,
        name: "Uzma Ali",
        number: '386497206',
        email: "uzma@gamil.com",
        imgURL: "8.jpg",
        lastMsgCheck: "seen",
        lastMsg: "blah blah blah blah blah blah blah ---",
        phoneIcon: `<i class="fas fa-phone" ></i>`,
        mailIcon: `<i class="far fa-envelope" id="mail"></i>`
    },
    
    {
        id: 9,
        name: "Hifza Aman",
        number: '134792838',
        email: "hifza@gamil.com",
        imgURL: "9.jpg",
        lastMsgCheck: "not seen",
        lastMsg: "blah blah blah blah blah blah blah ---",
        phoneIcon: `<i class="fas fa-phone" ></i>`,
        mailIcon: `<i class="far fa-envelope" id="mail"></i>`
    }
    
    ];
    
    
    
    function initialize() {
        let person = document.querySelector(".name-sec");
        for(let i = 0; i < personDetails.length; i ++){
    
            let icon;
    
            if (personDetails[i].lastMsgCheck === "seen") {
                icon = "check-double";
            } else if(personDetails[i].lastMsgCheck === "sent"){
                icon = "check";
            } else{
                icon = "clock";
            }
            
            person.innerHTML += `
            <section class="person-item" onclick="changePerson(${i})">
                <div class="person-img" style="background-image: url(images/${personDetails[i].imgURL})" ></div>
                <div class="after-person-image">
                        <div class="content-center">
                            <h4 class="name">${personDetails[i].name}</h4>
                            <div class="time">Yesterday</div>
                        </div>
                        <p class="msg"><i class="fas fa-${icon}"></i>${personDetails[i].lastMsg}</p>
                    </div>
                </div>
            </section>
            `
        }
    
    }
    
    function changePerson(index){
        document.querySelector("#name").innerHTML = personDetails[index].name;
        document.querySelector("#number").innerHTML = personDetails[index].phoneIcon + personDetails[index].number;
        document.querySelector("#image").style["background-image"] = `url(images/${personDetails[index].imgURL})`;
        document.querySelector("#e-mail").innerHTML = personDetails[index].mailIcon + personDetails[index].email;
        document.querySelector("#msg").innerHTML = personDetails[index].lastMsg;
        document.querySelector("#disappear").style.display = "none";   
    }
    
    