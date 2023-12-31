const { createApp } = Vue;

createApp({
  data() {
    return {
        contacts: [
            {   id: 0,
                name: 'Michele',
                avatar: './img/avatar_1.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {   id: 1,
                name: 'Fabio',
                avatar: './img/avatar_2.jpg',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {   id: 2,
                name: 'Samuele',
                avatar: './img/avatar_3.jpg',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {   id: 3,
                name: 'Alessandro B.',
                avatar: './img/avatar_4.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {   id: 4,
                name: 'Alessandro L.',
                avatar: './img/avatar_5.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                    }
                ],
            },
            {   id: 5,
                name: 'Claudia',
                avatar: './img/avatar_6.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                    }
                ],
            },
            {   id: 6,
                name: 'Federico',
                avatar: './img/avatar_7.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                    }
                ],
            },
            {   id: 7,
                name: 'Davide',
                avatar: './img/avatar_8.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                    }
                ],
            },
        ],
        isBackgroundBellsActive: false,
        selectedContact: {},  
        messageSent: '',     
        messagesReceivedRandom: ['ok', 'va bene', 'perchè no', 'certo certosino'],   
        messageReceived : '',
        searchesContacts : '',

    }
},
methods: {
    bellsChangeBackground(){
        this.isBackgroundBellsActive = !this.isBackgroundBellsActive;
    },
    selectContact(contact) {
        this.selectedContact = contact;
        this.toogleCurrentImage()
    },
    toogleCurrentImage(){
        const changeClassImg =  document.querySelector('.current-img');
        changeClassImg.classList.add('current-img-selected')
    },
    sendMessage(eventMessages) {
        if (eventMessages.key === 'Enter') {
            const newMessage = {
                date: new Date().toLocaleString(),
                message: this.messageSent,
                status: 'sent',
            };
            this.selectedContact.messages.push(newMessage);
            setTimeout(() => {
                this.receivedMessage(newMessage);
                console.log('timeout');
            }, 1000);
            this.messageSent = '';
        }
    },
    getRandomMessage() {
        const randomMessage = Math.floor(Math.random() * this.messagesReceivedRandom.length);
        this.messageReceived = this.messagesReceivedRandom[randomMessage];
    },    
    receivedMessage(newMessage) {
    
        if (newMessage.status === 'sent') {
            this.getRandomMessage(); 
            const newReceivedMessage = {
                date: new Date().toLocaleString(),
                message: this.messageReceived,
                status: 'received',
            };
            this.selectedContact.messages.push(newReceivedMessage);
        }
    },
    searchContacts() {
        const nameSearch = this.searchesContacts.trim().toLowerCase();
    
        if (nameSearch !== '') {
            this.contacts.forEach(contact => {
                const contactName = contact.name.toLowerCase();
                contact.visible = contactName.includes(nameSearch);
            });
        } else {
            this.contacts.forEach(contact => {
                contact.visible = true;
            });
        }
    }   
}
}).mount('#app');